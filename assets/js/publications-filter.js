"use strict";

(function () {
  function initializePublicationsFilter() {
    const filterRoot = document.querySelector("[data-publications-filter]");
    const bibliography = document.querySelector(".publication-bibliography");

    if (!filterRoot || !bibliography) {
      return;
    }

    const buttons = Array.from(
      filterRoot.querySelectorAll("button[data-topic]")
    );
    const entries = Array.from(
      bibliography.querySelectorAll(".publication-entry[data-topics]")
    );
    const sections = Array.from(
      bibliography.querySelectorAll(":scope > section.level2")
    );
    const status = filterRoot.querySelector(
      "[data-publications-filter-status]"
    );

    if (!buttons.length || !entries.length || !sections.length || !status) {
      return;
    }

    function applyFilter(topic, label) {
      let visibleCount = 0;

      entries.forEach(function (entry) {
        const topics = (entry.dataset.topics || "")
          .split(/\s+/)
          .filter(Boolean);
        const isVisible = topic === "all" || topics.includes(topic);

        entry.hidden = !isVisible;
        if (isVisible) {
          visibleCount += 1;
        }
      });

      sections.forEach(function (section) {
        section.hidden = !section.querySelector(
          ".publication-entry:not([hidden])"
        );
      });

      buttons.forEach(function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.topic === topic)
        );
      });

      status.textContent =
        topic === "all"
          ? `Showing all ${visibleCount} publications.`
          : `Showing ${visibleCount} publications in ${label}.`;
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button.dataset.topic, button.textContent.trim());
      });
    });

    applyFilter("all", "All publications");
    filterRoot.hidden = false;
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializePublicationsFilter,
      { once: true }
    );
  } else {
    initializePublicationsFilter();
  }
})();
