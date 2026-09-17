(() => {
  "use strict";

  const root = document.querySelector("[data-research-carousel]");
  if (!root) return;

  const configPath = root.dataset.carouselConfig;
  const viewport = root.querySelector("[data-carousel-viewport]");
  const status = root.querySelector("[data-carousel-status]");
  const controls = root.querySelector("[data-carousel-controls]");
  const previousButton = root.querySelector("[data-carousel-previous]");
  const nextButton = root.querySelector("[data-carousel-next]");
  const pauseButton = root.querySelector("[data-carousel-pause]");
  const pauseLabel = root.querySelector("[data-carousel-pause-label]");
  const dialog = root.querySelector("[data-carousel-dialog]");
  const dialogClose = root.querySelector("[data-carousel-dialog-close]");
  const dialogTitle = root.querySelector("[data-carousel-dialog-title]");
  const dialogFigure = root.querySelector("[data-carousel-dialog-figure]");
  const dialogImage = root.querySelector("[data-carousel-dialog-image]");
  const dialogSource = root.querySelector("[data-carousel-dialog-source]");
  const dialogTreatment = root.querySelector("[data-carousel-dialog-treatment]");
  const dialogTable = root.querySelector("[data-carousel-dialog-table]");
  const zoomViewport = root.querySelector("[data-carousel-zoom-viewport]");
  const zoomOutButton = root.querySelector("[data-carousel-zoom-out]");
  const zoomInButton = root.querySelector("[data-carousel-zoom-in]");
  const zoomResetButton = root.querySelector("[data-carousel-zoom-reset]");
  const zoomStatus = root.querySelector("[data-carousel-zoom-status]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (
    !configPath ||
    !viewport ||
    !status ||
    !controls ||
    !previousButton ||
    !nextButton ||
    !pauseButton ||
    !pauseLabel ||
    !dialog ||
    !dialogClose ||
    !dialogTitle ||
    !dialogFigure ||
    !dialogImage ||
    !dialogSource ||
    !dialogTreatment ||
    !dialogTable ||
    !zoomViewport ||
    !zoomOutButton ||
    !zoomInButton ||
    !zoomResetButton ||
    !zoomStatus
  ) {
    return;
  }

  const tableData = new Map();
  let items = [];
  let slides = [];
  let currentIndex = 0;
  let intervalMs = 10000;
  let timerId = null;
  let userPaused = false;
  let hoverPaused = false;
  let focusPaused = false;
  let dialogPaused = false;
  let dialogInvoker = null;
  let zoomLevel = 1;

  const minimumZoom = 1;
  const maximumZoom = 4;
  const zoomStep = 0.5;

  const clearTimer = () => {
    if (timerId !== null) {
      window.clearTimeout(timerId);
      timerId = null;
    }
  };

  const autoAdvanceAllowed = () =>
    !reducedMotion.matches &&
    !userPaused &&
    !hoverPaused &&
    !focusPaused &&
    !dialogPaused &&
    items.length > 1;

  const updateLiveRegion = () => {
    status.setAttribute("aria-live", autoAdvanceAllowed() ? "off" : "polite");
  };

  const scheduleAdvance = () => {
    clearTimer();
    updateLiveRegion();
    if (!autoAdvanceAllowed()) return;
    timerId = window.setTimeout(() => {
      showSlide(currentIndex + 1);
    }, intervalMs);
  };

  const updatePauseControl = () => {
    if (reducedMotion.matches) {
      pauseButton.disabled = true;
      pauseButton.setAttribute("aria-pressed", "true");
      pauseLabel.textContent = "Auto-advance off";
      pauseButton.title = "Automatic rotation is disabled by your reduced-motion preference.";
      return;
    }

    pauseButton.disabled = false;
    pauseButton.setAttribute("aria-pressed", String(userPaused));
    pauseLabel.textContent = userPaused ? "Resume" : "Pause";
    pauseButton.removeAttribute("title");
  };

  const preloadFollowingSlide = () => {
    if (items.length < 2) return;
    const nextIndex = (currentIndex + 1) % items.length;
    const image = slides[nextIndex]?.querySelector("img");
    if (image) image.loading = "eager";
  };

  function showSlide(index) {
    if (!items.length) return;
    currentIndex = (index + items.length) % items.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.hidden = !active;
      slide.setAttribute("aria-hidden", String(!active));
    });
    status.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    preloadFollowingSlide();
    scheduleAdvance();
  }

  const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      const next = text[index + 1];

      if (character === '"') {
        if (quoted && next === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === "," && !quoted) {
        row.push(field);
        field = "";
      } else if ((character === "\n" || character === "\r") && !quoted) {
        if (character === "\r" && next === "\n") index += 1;
        row.push(field);
        if (row.some((value) => value.length > 0)) rows.push(row);
        row = [];
        field = "";
      } else {
        field += character;
      }
    }

    row.push(field);
    if (row.some((value) => value.length > 0)) rows.push(row);
    return rows;
  };

  const loadTableData = async (item) => {
    if (!item.table?.csv || tableData.has(item.id)) return;
    const response = await fetch(new URL(item.table.csv, document.baseURI));
    if (!response.ok) throw new Error(`Table request failed with ${response.status}`);
    const rows = parseCsv(await response.text());
    const headers = rows.shift();
    if (!headers || !rows.length) throw new Error("Table data is empty");
    tableData.set(item.id, { headers, rows });
  };

  const createSemanticTable = (item, modifier) => {
    const block = document.createElement("div");
    block.className = `carousel-table-block carousel-table-block--${modifier}`;
    const data = tableData.get(item.id);

    if (!data) {
      const fallback = document.createElement("p");
      fallback.className = "carousel-table-note";
      fallback.textContent = item.alt_text;
      block.append(fallback);
      return block;
    }

    const table = document.createElement("table");
    table.className = "carousel-data-table";
    const caption = document.createElement("caption");
    caption.textContent = item.table.caption || item.title;
    caption.className = "visually-hidden";
    table.append(caption);

    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    data.headers.forEach((header) => {
      const cell = document.createElement("th");
      cell.scope = "col";
      cell.textContent = header;
      headRow.append(cell);
    });
    head.append(headRow);
    table.append(head);

    const body = document.createElement("tbody");
    data.rows.forEach((values) => {
      const tableRow = document.createElement("tr");
      values.forEach((value, valueIndex) => {
        const cell = document.createElement(valueIndex === 0 ? "th" : "td");
        if (valueIndex === 0) cell.scope = "row";
        cell.textContent = value;
        tableRow.append(cell);
      });
      body.append(tableRow);
    });
    table.append(body);
    block.append(table);

    if (item.table.note) {
      const note = document.createElement("p");
      note.className = "carousel-table-note";
      note.textContent = item.table.note;
      block.append(note);
    }

    return block;
  };

  const createSlideHeader = (item) => {
    const header = document.createElement("header");
    header.className = "carousel-slide-header";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const subtitle = document.createElement("p");
    subtitle.textContent = item.subtitle;
    header.append(title, subtitle);
    return header;
  };

  const createEnlargeButton = (item) => {
    const button = document.createElement("button");
    button.className = "carousel-enlarge-button";
    button.type = "button";
    button.textContent = item.type === "figure" ? "Enlarge figure" : "Enlarge table";
    button.setAttribute("aria-label", `${button.textContent}: ${item.title}`);
    button.addEventListener("click", () => openDialog(item, button));
    return button;
  };

  const createFigureSlideContent = (item, index) => {
    const media = document.createElement("div");
    media.className = "carousel-figure-frame";
    const image = document.createElement("img");
    image.src = new URL(item.asset, document.baseURI).href;
    image.alt = item.alt_text;
    image.decoding = "async";
    image.loading = index < 2 ? "eager" : "lazy";
    media.append(image);

    const context = document.createElement("p");
    context.className = "carousel-slide-context";
    context.textContent = item.context;

    return [media, context];
  };

  const createSlide = (item, index) => {
    const slide = document.createElement("article");
    slide.className = `research-carousel-slide research-carousel-slide--${item.type === "figure" ? "figure" : "table"}`;
    slide.dataset.carouselSlide = "";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${index + 1} of ${items.length}`);
    slide.hidden = index !== 0;
    slide.setAttribute("aria-hidden", String(index !== 0));
    slide.append(createSlideHeader(item));

    if (item.type === "figure") {
      slide.append(...createFigureSlideContent(item, index));
    } else {
      slide.append(createSemanticTable(item, "slide"));
    }

    const footer = document.createElement("footer");
    footer.className = "carousel-slide-footer";
    const source = document.createElement("p");
    source.className = "carousel-slide-source";
    source.textContent = item.source;
    footer.append(source, createEnlargeButton(item));
    slide.append(footer);
    return slide;
  };

  const buildSlides = () => {
    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => fragment.append(createSlide(item, index)));
    viewport.replaceChildren(fragment);
    slides = Array.from(viewport.querySelectorAll("[data-carousel-slide]"));
  };

  const updateZoomControl = () => {
    dialogImage.style.width = `${zoomLevel * 100}%`;
    zoomStatus.textContent = `${Math.round(zoomLevel * 100)}%`;
    zoomOutButton.disabled = zoomLevel <= minimumZoom;
    zoomInButton.disabled = zoomLevel >= maximumZoom;
    zoomResetButton.disabled = zoomLevel === minimumZoom;
  };

  const setZoom = (nextLevel, preserveCenter = true) => {
    const oldScrollWidth = zoomViewport.scrollWidth || 1;
    const oldScrollHeight = zoomViewport.scrollHeight || 1;
    const centerX = (zoomViewport.scrollLeft + zoomViewport.clientWidth / 2) / oldScrollWidth;
    const centerY = (zoomViewport.scrollTop + zoomViewport.clientHeight / 2) / oldScrollHeight;
    zoomLevel = Math.min(maximumZoom, Math.max(minimumZoom, nextLevel));
    updateZoomControl();

    window.requestAnimationFrame(() => {
      if (preserveCenter && zoomLevel > minimumZoom) {
        zoomViewport.scrollLeft = centerX * zoomViewport.scrollWidth - zoomViewport.clientWidth / 2;
        zoomViewport.scrollTop = centerY * zoomViewport.scrollHeight - zoomViewport.clientHeight / 2;
      } else {
        zoomViewport.scrollTo({ left: 0, top: 0 });
      }
    });
  };

  const buildDialogTable = (item) => {
    dialogTable.replaceChildren(createSemanticTable(item, "dialog"));
    dialogTable.hidden = false;
  };

  const openDialog = (item, invoker) => {
    dialogInvoker = invoker;
    dialogPaused = true;
    clearTimer();
    updateLiveRegion();
    dialogTitle.textContent = item.title;
    dialogSource.textContent = item.source;
    dialogTreatment.textContent = item.treatment;

    if (item.type === "figure") {
      dialogTable.hidden = true;
      dialogTable.replaceChildren();
      dialogFigure.hidden = false;
      dialogImage.src = new URL(item.asset, document.baseURI).href;
      dialogImage.alt = item.alt_text;
      setZoom(minimumZoom, false);
    } else {
      dialogFigure.hidden = true;
      dialogImage.removeAttribute("src");
      dialogImage.alt = "";
      buildDialogTable(item);
    }

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    dialogClose.focus();
  };

  const closeDialog = () => {
    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      dialog.dispatchEvent(new Event("close"));
    }
  };

  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  pauseButton.addEventListener("click", () => {
    userPaused = !userPaused;
    updatePauseControl();
    scheduleAdvance();
  });
  dialogClose.addEventListener("click", closeDialog);
  zoomOutButton.addEventListener("click", () => setZoom(zoomLevel - zoomStep));
  zoomInButton.addEventListener("click", () => setZoom(zoomLevel + zoomStep));
  zoomResetButton.addEventListener("click", () => setZoom(minimumZoom, false));
  dialog.addEventListener("close", () => {
    dialogPaused = false;
    dialogImage.removeAttribute("src");
    dialogInvoker?.focus();
    dialogInvoker = null;
    scheduleAdvance();
  });

  root.addEventListener("pointerenter", () => {
    hoverPaused = true;
    clearTimer();
    updateLiveRegion();
  });
  root.addEventListener("pointerleave", () => {
    hoverPaused = false;
    scheduleAdvance();
  });
  root.addEventListener("focusin", () => {
    focusPaused = true;
    clearTimer();
    updateLiveRegion();
  });
  root.addEventListener("focusout", () => {
    window.setTimeout(() => {
      focusPaused = root.contains(document.activeElement);
      scheduleAdvance();
    }, 0);
  });
  root.addEventListener("keydown", (event) => {
    if (dialog.open || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
  });

  const handleMotionPreference = () => {
    updatePauseControl();
    scheduleAdvance();
  };
  reducedMotion.addEventListener?.("change", handleMotionPreference);

  fetch(new URL(configPath, document.baseURI))
    .then((response) => {
      if (!response.ok) throw new Error(`Carousel request failed with ${response.status}`);
      return response.json();
    })
    .then(async (config) => {
      if (!Array.isArray(config.items) || config.items.length === 0) {
        throw new Error("Carousel configuration has no items");
      }
      items = config.items;
      intervalMs = Number(config.interval_ms) || intervalMs;
      await Promise.all(
        items
          .filter((item) => item.type === "adapted_table")
          .map((item) =>
            loadTableData(item).catch((error) => {
              console.warn(`Research carousel table ${item.id} could not be loaded.`, error);
            }),
          ),
      );
      buildSlides();
      controls.hidden = false;
      updatePauseControl();
      showSlide(0);
    })
    .catch((error) => {
      console.warn("Research carousel could not be initialized; the first figure remains available.", error);
    });
})();
