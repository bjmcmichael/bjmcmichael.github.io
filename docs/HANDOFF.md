# Project Handoff

## Current status

**Stage: Milestone 1 — initial Quarto site skeleton and homepage refinement complete**

The minimal multi-page website has been implemented on the feature branch:

`build/initial-quarto-skeleton`

The site is not deployed. GitHub Pages, GitHub Actions, and custom-domain configuration remain intentionally deferred.

## Milestone 1 work completed

- Created a Quarto website with eight top-level pages: Home, Research, Publications, Data & Code, Teaching, CV, About, and Contact.
- Added consistent navigation across all pages, with Quarto's accessible collapsed navigation at tablet and mobile widths.
- Built a research-forward homepage containing the authorized professional identity, research descriptor, CV and Research actions, an abstract no-data research-figure field, and three approved Selected Research entries.
- Added intentionally incomplete editorial structures for later publications, public data and code, teaching materials, CV, biography, and contact information.
- Added a central custom visual system in `styles.css`.
- Added `.gitignore` rules for generated Quarto output and common operating-system artifacts.
- Limited project rendering to root-level `.qmd` pages so governing Markdown documentation is not emitted as part of the public website build.
- Completed a limited homepage refinement pass without adding substantive content, research data, pages, or deployment configuration.

## Files created

- `.gitignore`
- `_quarto.yml`
- `index.qmd`
- `research.qmd`
- `publications.qmd`
- `data-code.qmd`
- `teaching.qmd`
- `cv.qmd`
- `about.qmd`
- `contact.qmd`
- `styles.css`
- `theme.scss`
- `assets/fonts/texgyreschola-regular.otf`
- `assets/fonts/GUST-FONT-LICENSE.txt`

## Design and architecture choices

- Quarto remains the only project runtime; there is no Node build, JavaScript framework, database, CMS, server, analytics, tracking, or external embed.
- Quarto's bundled `cosmo` theme provides the structural base, with a small `theme.scss` override that disables Cosmo's external Google Fonts import and a full custom treatment supplied by `styles.css`.
- The palette uses a near-white paper background, charcoal text, light gray rules, and a restrained deep-crimson accent.
- TeX Gyre Schola is the self-hosted display serif for headings and selected editorial text; it is an open Century Schoolbook-style family distributed under the included GUST Font License. Segoe UI remains the primary system body/interface sans-serif, and the browser makes no external font request.
- The homepage uses an editorial two-column research-observatory composition on wide screens and a single-column reading order on smaller screens.
- The featured-research module is explicitly a design placeholder and now uses an empty inset figure frame rather than chart-like lines or points. It contains no map, coefficients, numerical results, or fabricated research data.
- The hero display type and vertical rhythm were reduced so the name retains its deliberate two-line composition without dominating the page and Selected Research enters the desktop viewport sooner.
- Motion is minimal, visible focus treatment is provided, and reduced-motion preferences are respected.

## Build and verification status

- Tested with Quarto 1.10.18.
- `quarto render` succeeds for all eight pages and writes output to `_site/`.
- All top-level pages load with the expected page title, one primary heading, and seven navigation destinations.
- Internal navigation and homepage action links resolve successfully.
- Browser layout was checked at approximately 1440, 1024, 768, and 390 pixels wide.
- The local TeX Gyre Schola asset loads successfully, and the rendered site makes no external font requests.
- The mobile navigation opens and closes successfully.
- No horizontal overflow was detected at the checked widths.
- Generated `_site/` and `.quarto/` content is excluded from version control.

## Content intentionally deferred

Do not invent or add these items without approved source materials:

- final homepage and biography copy;
- CV PDF;
- full publication metadata;
- paper, journal, data, code, and replication links;
- headshot or other imagery;
- external profile and contact details;
- real research figures or interactive components;
- final custom domain.

## Unresolved issues

- All substantive page content remains intentionally incomplete pending source review.
- The abstract homepage research field must eventually be replaced or removed when an approved figure is available.
- Deployment architecture and domain settings have not been selected or enabled.

## Next recommended task

### Task: Review the refined homepage and identify approved source materials

This task should begin only when explicitly authorized.

The next review should:

1. Approve or request narrowly scoped changes to the refined homepage hierarchy, typography, spacing, and reserved research field.
2. Confirm whether the current professional identity and research descriptor should remain as written.
3. Approve, revise, or remove the reserved featured-research field before a real figure is supplied.
4. Confirm the navigation order and the presentation of the three Selected Research entries.
5. Identify the first approved source materials for the following content milestone.
6. Record accepted refinements in the governing documents and this handoff.

Do not make deployment the next automatic step. Substantive review and refinement should precede GitHub Pages configuration.
