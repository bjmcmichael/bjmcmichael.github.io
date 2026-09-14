local function string_value(value)
  if value == nil then
    return nil
  end
  local rendered = pandoc.utils.stringify(value)
  if rendered == "" then
    return nil
  end
  return rendered
end

local function number_value(value)
  local rendered = string_value(value)
  if rendered == nil then
    return nil
  end
  return tonumber(rendered)
end

local function text_inlines(value)
  local inlines = pandoc.Inlines({})
  local first = true
  for word in value:gmatch("%S+") do
    if not first then
      inlines:insert(pandoc.Space())
    end
    inlines:insert(pandoc.Str(word))
    first = false
  end
  return inlines
end

local function has_class(div, class_name)
  for _, class in ipairs(div.classes) do
    if class == class_name then
      return true
    end
  end
  return false
end

local function status_rank(record)
  local status = string_value(record.status)
  if status == "forthcoming" or status == "accepted" then
    return 0
  end
  return 1
end

local function bibliography_sort(left, right)
  local left_status = status_rank(left)
  local right_status = status_rank(right)
  if left_status ~= right_status then
    return left_status < right_status
  end

  local left_year = number_value(left.year) or 0
  local right_year = number_value(right.year) or 0
  if left_year ~= right_year then
    return left_year > right_year
  end

  local left_order = number_value(left.source_order) or math.huge
  local right_order = number_value(right.source_order) or math.huge
  if left_order ~= right_order then
    return left_order < right_order
  end

  return (string_value(left.id) or "") < (string_value(right.id) or "")
end

local function program_sort(left, right)
  local status_order = {
    forthcoming = 0,
    accepted = 1,
    published = 2
  }
  local left_status_name = string_value(left.status) or ""
  local right_status_name = string_value(right.status) or ""
  local left_status = status_order[left_status_name] or 3
  local right_status = status_order[right_status_name] or 3
  if left_status ~= right_status then
    return left_status < right_status
  end

  local left_year = number_value(left.year) or 0
  local right_year = number_value(right.year) or 0
  if left_year ~= right_year then
    return left_year > right_year
  end

  local left_order = number_value(left.source_order) or math.huge
  local right_order = number_value(right.source_order) or math.huge
  if left_order ~= right_order then
    return left_order < right_order
  end

  return (string_value(left.id) or "") < (string_value(right.id) or "")
end

local function has_topic(record, program_id)
  for _, topic in ipairs(record.research_topics or {}) do
    if string_value(topic) == program_id then
      return true
    end
  end
  return false
end

local function citation_inlines(record)
  local citation = pandoc.Inlines({})
  local venue = string_value(record.venue)
  local volume = string_value(record.volume)
  local issue = string_value(record.issue)
  local pages = string_value(record.pages_or_article_number)
  local year = string_value(record.year)

  if venue ~= nil then
    citation:insert(pandoc.Emph(text_inlines(venue)))
  end
  if volume ~= nil then
    citation:insert(pandoc.Str(","))
    citation:insert(pandoc.Space())
    citation:extend(text_inlines(volume))
    if issue ~= nil then
      citation:insert(pandoc.Str("(" .. issue .. ")"))
    end
  end
  if pages ~= nil then
    citation:insert(pandoc.Str(":"))
    citation:insert(pandoc.Space())
    citation:extend(text_inlines(pages))
  end
  if year ~= nil then
    citation:insert(pandoc.Space())
    citation:insert(pandoc.Str("(" .. year .. ")."))
  elseif #citation > 0 then
    citation:insert(pandoc.Str("."))
  end

  return citation
end

local function publication_entry(record)
  local title = text_inlines(string_value(record.title) or "Untitled publication")
  local canonical_url = string_value(record.canonical_url)
  local title_content
  if canonical_url ~= nil then
    title_content = pandoc.Inlines({
      pandoc.Link(title, canonical_url, "Open publication")
    })
  else
    title_content = title
  end

  local blocks = pandoc.Blocks({
    pandoc.Header(3, title_content, pandoc.Attr("", {"publication-title"})),
    pandoc.Para(text_inlines(string_value(record.authors_display) or ""))
  })

  local citation = citation_inlines(record)
  if status_rank(record) == 0 then
    local status = pandoc.Span(
      text_inlines("Forthcoming"),
      pandoc.Attr("", {"publication-status"})
    )
    citation:insert(1, pandoc.Space())
    citation:insert(1, status)
  end
  blocks:insert(pandoc.Para(citation))

  return pandoc.Div(
    blocks,
    pandoc.Attr(
      "",
      {"publication-entry"},
      {{"data-publication-id", string_value(record.id) or ""}}
    )
  )
end

local function render_full_bibliography(meta)
  local blocks = pandoc.Blocks({})
  local sections = {}
  for _, section in ipairs(meta.publication_sections or {}) do
    table.insert(sections, section)
  end
  table.sort(sections, function(left, right)
    return (number_value(left.order) or math.huge) < (number_value(right.order) or math.huge)
  end)

  for _, section in ipairs(sections) do
    local section_id = string_value(section.id)
    local records = {}
    for _, record in ipairs(meta.publications or {}) do
      if string_value(record.public_section) == section_id then
        table.insert(records, record)
      end
    end
    table.sort(records, bibliography_sort)

    blocks:insert(pandoc.Header(
      2,
      text_inlines(string_value(section.label) or "Publications"),
      pandoc.Attr(section_id or "")
    ))
    local entries = pandoc.Blocks({})
    for _, record in ipairs(records) do
      entries:insert(publication_entry(record))
    end
    blocks:insert(pandoc.Div(entries, pandoc.Attr("", {"publication-section-entries"})))
  end

  return pandoc.Div(blocks, pandoc.Attr("", {"publication-bibliography"}))
end

local function render_topic_program(meta, program_id)
  local records = {}
  for _, record in ipairs(meta.publications or {}) do
    if has_topic(record, program_id) then
      table.insert(records, record)
    end
  end
  table.sort(records, program_sort)

  local blocks = pandoc.Blocks({})
  for _, record in ipairs(records) do
    blocks:insert(publication_entry(record))
  end
  return pandoc.Div(blocks, pandoc.Attr("", {"publication-program-entries"}))
end

function Pandoc(document)
  local mode = string_value(document.meta["publication-render-mode"])
  local program_id = string_value(document.meta["publication-render-program"])

  if document.meta.publications == nil or document.meta.publication_sections == nil then
    error("Publication metadata is missing. Check the page-local metadata-files setting.")
  end

  return document:walk({
    Div = function(div)
      if not has_class(div, "publication-render") then
        return nil
      end
      if mode == "bibliography" then
        return render_full_bibliography(document.meta)
      end
      if mode == "topic-program" and program_id ~= nil then
        return render_topic_program(document.meta, program_id)
      end
      error("Unknown publication rendering mode: " .. (mode or "missing"))
    end
  })
end
