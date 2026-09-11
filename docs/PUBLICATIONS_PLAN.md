# Publications Inventory and Architecture Plan

## Status and scope

This is the Milestone 2C planning deliverable. It proposes a concrete Publications architecture from the September 2026 CV without changing the public website or authorizing any record for public display. The companion draft inventory is `docs/publications/inventory.yml`.

The inventory is **CV-checked, not externally verified**. The CV's heading is “Selected Publications,” so its 49 entries must not be treated as a complete bibliography. No broad web verification was conducted, no manuscript was downloaded, and no publication was assigned to a Research topic. These unrendered planning files remain part of a public repository and therefore contain only public-safe CV citation information.

## Inventory reconciliation

| Original CV section | PDF pages | Records |
|---|---:|---:|
| Law Reviews | 1–2 | 17 |
| Peer-Reviewed Economic and Law Journals | 2 | 11 |
| Peer-Reviewed Medical and Health Policy Journals | 2–3 | 12 |
| Book Chapters | 3 | 2 |
| Short Academic Works | 3–4 | 7 |
| **Total** | **1–4** | **49** |

Four entries explicitly say “forthcoming”; 45 have completed dated citations and are provisionally classified as published. That published classification is an assessment from the CV citation, not external verification.

The CV has no Working Papers or Books / Book Projects section. Presentations, appointments, teaching, reviewer service, and other non-publication material are excluded. No entries were collapsed. The inventory flags one possible related or revised-version pair involving the two False Claims Act articles and retains both pending verification.

## Recommended public structure

The Publications page should use a restrained vertical bibliography, not cards, in this order:

1. **Law Reviews**
2. **Peer-Reviewed Economics & Empirical Legal Studies**
3. **Peer-Reviewed Medical & Health Policy**
4. **Book Chapters**
5. **Short Academic Works**

The second public label is a concise editorial label for the CV's “Peer-Reviewed Economic and Law Journals” grouping; the source grouping remains preserved in the data. The other labels closely follow the CV. The existing placeholder headings are not final.

Forthcoming work should remain in its disciplinary section and carry a visible, text-based “Forthcoming” label. If verified working papers are authorized later, add a distinct **Working Papers** section before published articles. If books or book projects are later verified and authorized, add **Books & Book Projects** before the article sections. Book chapters and short academic works should remain distinct rather than being folded into an undifferentiated “Other” category.

Within each section, order forthcoming records first, then all records in reverse chronological order. For records with the same status and year, preserve the CV order; use the stable record ID only as a final deterministic tie-breaker. A later verified full publication date may refine ordering without changing the section structure.

Discipline, publication type/status, and research topic must remain separate concepts. Visual treatment should follow the existing editorial system: section headings, typographic citations, quiet metadata, modest rules and spacing, and no dashboard-like card grid.

## Future topic discovery

The default Publications view should show every authorized publication, grouped by discipline. A later topic control may filter across those groupings using the approved programs and tentative public labels:

| Research program | Public filter label |
|---|---|
| Professional Licensing & Scope of Practice | Licensing & Scope of Practice |
| Organ Allocation & Transplant Policy | Organ Allocation |
| Tort Law & Medical Liability | Torts & Liability |
| Opioids, Drug Policy & Harm Reduction | Drug Policy |
| Reproductive Health & Family Formation | Reproductive Health |

A publication may have several topics or none. Filtering should preserve the disciplinary order and headings for sections containing matches rather than flattening results into a topic list; empty sections may be omitted while a filter is active. An “All publications” default restores the complete disciplinary bibliography. Topic controls must use text, expose their selected state accessibly, work by keyboard, and remain understandable without color.

This milestone makes no final publication-to-topic assignments. Those assignments require separate content review.

## Recommended single source and rendering approach

After editorial and external verification, promote approved records into one production YAML source, proposed as `data/publications.yml`. Each record should have a stable ID and separate fields for citation data, disciplinary section, publication type, status, zero or more topic IDs, verified links/identifiers, and explicit curation flags. Preserve a source note and verification state during the review workflow; do not publish unresolved notes automatically.

Use a small Quarto/Pandoc Lua filter or shortcode, proposed as `filters/publications.lua`, to read that source and generate semantic HTML at designated page insertion points. Register it only where needed rather than creating a new application pipeline. This approach keeps Quarto as the only runtime and adds no database, CMS, Node build, framework, external service, or client dependency.

The same approved record can then support three deliberately different uses:

- **Publications page:** the exhaustive authorized bibliography, grouped by discipline.
- **Research-program pages:** an exhaustive list of authorized records whose topic metadata includes that program.
- **Homepage Selected Research:** only records with a separately reviewed homepage-selection flag and approved presentation copy.

“Selected Scholarship” is curated. It must not be populated automatically with every paper related to a Research program, and topic membership must never imply homepage selection.

Client-side filtering, if later authorized, should progressively enhance the server-rendered complete bibliography. The unenhanced page must retain every publication and its disciplinary grouping. Any JavaScript should be small, local, and purpose-specific.

## Later implementation files

A separately authorized implementation would be expected to:

- add `data/publications.yml` from reviewed inventory records;
- add `filters/publications.lua` (and a small local filtering script only if approved);
- replace the placeholder content in `publications.qmd`;
- add publication references to selected `research/*/index.qmd` pages after topic assignments are approved;
- modify `index.qmd` only if specific homepage selections are separately approved;
- modify `styles.css` only for the bibliography and accessible filter treatment;
- update `docs/DEVELOPMENT.md` and `docs/HANDOFF.md` with implementation and verification details;
- avoid changing `_quarto.yml` unless a narrowly scoped Quarto registration is genuinely required.

## Required review before implementation

Before any public implementation is merged:

1. Verify the bibliography against authoritative journal, publisher, repository, or DOI records, including full ordered authorship, exact titles, status, dates, volumes, issues, pages/article numbers, and canonical links.
2. Confirm whether the CV's “Selected Publications” list is complete enough for the intended public page and obtain any omitted records from an approved source.
3. Resolve the possible relationship between the two False Claims Act records without silently discarding either.
4. Decide whether the three payment-adjacent records flagged in the inventory fall within the standing public Research exclusion.
5. Approve final topic assignments separately from disciplinary classification and approve any curated program-page or homepage selections.
6. Validate production YAML syntax, required fields, stable and unique IDs, permitted enumerations, topic references, ordering, and count reconciliation.
7. Render all pages; check internal and external links; verify citation semantics, keyboard behavior, focus visibility, color contrast, reduced-motion behavior, mobile layout, and no horizontal overflow.
8. Confirm that no restricted manuscripts, private information, credentials, machine-specific paths, or unapproved content enter the repository or rendered site.

## Decisions still required

- Whether the 49 selected CV entries form the desired public bibliography or need supplementation.
- Full author lists and author order where the CV provides only a parenthetical coauthor note or “et al.”
- External verification and canonical links/identifiers for every record.
- Whether the two False Claims Act entries are distinct publications, related versions, or require a public cross-reference.
- Public treatment of the two CMS Open Payments articles and the MACRA / “Incident To Billing” short work under the payment-research exclusion.
- Whether verified Working Papers or Books / Book Projects exist and, if so, whether their details are approved for public display.
- Final topic memberships and separately curated Selected Scholarship or homepage placements.
