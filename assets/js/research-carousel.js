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
  const dialogImage = root.querySelector("[data-carousel-dialog-image]");
  const dialogSource = root.querySelector("[data-carousel-dialog-source]");
  const dialogTreatment = root.querySelector("[data-carousel-dialog-treatment]");
  const dialogTable = root.querySelector("[data-carousel-dialog-table]");
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
    !dialogImage ||
    !dialogSource ||
    !dialogTreatment ||
    !dialogTable
  ) {
    return;
  }

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

  const buildTable = async (item) => {
    dialogTable.replaceChildren();
    dialogTable.hidden = true;
    if (!item.table?.csv) return;

    try {
      const response = await fetch(new URL(item.table.csv, document.baseURI));
      if (!response.ok) throw new Error(`Table request failed with ${response.status}`);
      const rows = parseCsv(await response.text());
      const headers = rows.shift();
      if (!headers || !rows.length) throw new Error("Table data is empty");

      const table = document.createElement("table");
      const caption = document.createElement("caption");
      caption.textContent = item.table.caption || item.title;
      caption.className = "visually-hidden";
      table.append(caption);

      const visibleHeading = document.createElement("h3");
      visibleHeading.textContent = item.table.caption || item.title;
      dialogTable.append(visibleHeading);

      const head = document.createElement("thead");
      const headRow = document.createElement("tr");
      headers.forEach((header) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = header;
        headRow.append(cell);
      });
      head.append(headRow);
      table.append(head);

      const body = document.createElement("tbody");
      rows.forEach((values) => {
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

      const tableScroll = document.createElement("div");
      tableScroll.className = "carousel-table-scroll";
      tableScroll.append(table);
      dialogTable.append(tableScroll);

      if (item.table.note) {
        const note = document.createElement("p");
        note.className = "carousel-table-note";
        note.textContent = item.table.note;
        dialogTable.append(note);
      }
      dialogTable.hidden = false;
    } catch (error) {
      const fallback = document.createElement("p");
      fallback.className = "carousel-table-note";
      fallback.textContent = item.alt_text;
      dialogTable.append(fallback);
      dialogTable.hidden = false;
      console.warn("Research carousel table could not be loaded.", error);
    }
  };

  const openDialog = async (item, invoker) => {
    dialogInvoker = invoker;
    dialogPaused = true;
    clearTimer();
    updateLiveRegion();
    dialogTitle.textContent = item.title;
    dialogImage.src = new URL(item.asset, document.baseURI).href;
    dialogImage.alt = item.type === "adapted_table" ? "" : item.alt_text;
    dialogSource.textContent = item.source;
    dialogTreatment.textContent = item.treatment;
    await buildTable(item);

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

  const buildSlides = () => {
    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = "research-carousel-slide";
      figure.dataset.carouselSlide = "";
      figure.setAttribute("role", "group");
      figure.setAttribute("aria-roledescription", "slide");
      figure.setAttribute("aria-label", `${index + 1} of ${items.length}`);
      figure.hidden = index !== 0;
      figure.setAttribute("aria-hidden", String(index !== 0));

      const button = document.createElement("button");
      button.className = "carousel-image-button";
      button.type = "button";

      const image = document.createElement("img");
      image.src = new URL(item.asset, document.baseURI).href;
      image.alt = item.alt_text;
      image.decoding = "async";
      image.loading = index < 2 ? "eager" : "lazy";
      button.append(image);

      const instruction = document.createElement("span");
      instruction.className = "visually-hidden";
      instruction.textContent = "Open enlarged view";
      button.append(instruction);
      button.addEventListener("click", () => openDialog(item, button));

      figure.append(button);
      fragment.append(figure);
    });

    viewport.replaceChildren(fragment);
    slides = Array.from(viewport.querySelectorAll("[data-carousel-slide]"));
  };

  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  pauseButton.addEventListener("click", () => {
    userPaused = !userPaused;
    updatePauseControl();
    scheduleAdvance();
  });
  dialogClose.addEventListener("click", closeDialog);
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
    .then((config) => {
      if (!Array.isArray(config.items) || config.items.length === 0) {
        throw new Error("Carousel configuration has no items");
      }
      items = config.items;
      intervalMs = Number(config.interval_ms) || intervalMs;
      buildSlides();
      controls.hidden = false;
      updatePauseControl();
      showSlide(0);
    })
    .catch((error) => {
      console.warn("Research carousel could not be initialized; the first figure remains available.", error);
    });
})();
