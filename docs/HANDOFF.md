# Project Handoff

## Current status

**Stage: Milestone 2B — approved and incorporated into `main`**

Milestone 2B has passed review and is incorporated into `main`. Its feature branch, `content/research-programs`, remains retained.

The site is not deployed. GitHub Pages, GitHub Actions, and custom-domain configuration remain intentionally deferred.

Milestone 2A has passed review and is incorporated into `main`. Its feature branch remains retained.

Milestone 1 remains approved. Its typography, palette, two-column hero, professional-information treatment, Selected Research treatment, and responsive architecture remain the foundation for later milestones.

## Milestone 1 work completed

- Created a Quarto website with eight top-level pages: Home, Research, Publications, Data & Code, Teaching, CV, About, and Contact.
- Added consistent navigation across all pages, with Quarto's accessible collapsed navigation at tablet and mobile widths.
- Built a research-forward homepage containing the authorized professional identity, research descriptor, CV and Research actions, an abstract no-data research-figure field, and three approved Selected Research entries.
- Added intentionally incomplete editorial structures for later publications, public data and code, teaching materials, CV, biography, and contact information.
- Added a central custom visual system in `styles.css`.
- Added `.gitignore` rules for generated Quarto output and common operating-system artifacts.
- Limited project rendering to root-level `.qmd` pages so governing Markdown documentation is not emitted as part of the public website build.
- Completed a limited homepage refinement pass without adding substantive content, research data, pages, or deployment configuration.

## Milestone 2A work completed

- Added the supplied September 2026 curriculum vitae unchanged at `assets/files/McMichael_CV.pdf`; the repository copy is byte-for-byte identical to the supplied PDF.
- Replaced the CV placeholder with a finished landing page, an update date, and a prominent link to the authoritative PDF.
- Added a concise CV-derived biography, education entries, current voluntary nursing appointment, and federal appellate clerkship to the About page.
- Added the authorized University of Alabama courses, teaching recognition, and prior Vanderbilt teaching to the Teaching page without course descriptions or the hooding-team history.
- Added the University of Alabama School of Law and `bmcmichael@law.ua.edu` to the Contact page with a functional `mailto:` link. Street address, telephone, personal email, and unverified profile links remain absent from the HTML page.
- Added only the layout styles needed for the new editorial content while preserving the approved Milestone 1 visual system and responsive architecture.
- Left the homepage, Publications, Research, Data & Code, Selected Research entries, and featured-research placeholder substantively unchanged.

## Milestone 2A files added or modified

- `assets/files/McMichael_CV.pdf`
- `cv.qmd`
- `about.qmd`
- `teaching.qmd`
- `contact.qmd`
- `styles.css`
- `docs/DEVELOPMENT.md`
- `docs/HANDOFF.md`

## Milestone 2B work completed

- Replaced the Research-page placeholder projects with a restrained vertical editorial index of five approved research programs.
- Added a numbered entry, approved description, and working Explore link for each program while preserving the existing typography, palette, whitespace, and focus treatment.
- Completed a page-specific wide-layout refinement so the Research introduction and program rows use the broad desktop canvas more effectively while retaining the established stacked mobile layout.
- Removed the “Empirical legal scholarship” eyebrow from the homepage hero and allowed the vacated space to collapse naturally without rebalancing the approved composition.
- Created five nested Research-program landing pages with program identification, an Overview, an intentionally unpopulated Selected Scholarship section, a structural Data, Code & Interactive Research section, and return navigation to the main Research page.
- Expanded Quarto's explicit render list to include nested `research/**/*.qmd` pages while continuing to exclude governing Markdown documents from the public build.
- Recorded the approved future relationship between disciplinary publication groupings and many-to-many research topics without creating publication metadata, topic assignments, filters, or tags.
- Kept the homepage and Publications page substantively unchanged; the only homepage change was the approved removal of the “Empirical legal scholarship” eyebrow.
- Intentionally excluded Physician Payment, AMA RUC, Medicare payment, and related payment research from the public Research-program architecture.

The five approved programs, in order, are:

1. Professional Licensing & Scope of Practice
2. Organ Allocation & Transplant Policy
3. Tort Law & Medical Liability
4. Opioids, Drug Policy & Harm Reduction
5. Reproductive Health & Family Formation

## Milestone 2B files added or modified

- `_quarto.yml`
- `index.qmd`
- `research.qmd`
- `research/licensing/index.qmd`
- `research/organ-allocation/index.qmd`
- `research/torts-liability/index.qmd`
- `research/drug-policy/index.qmd`
- `research/reproductive-health/index.qmd`
- `styles.css`
- `WEBSITE_SPEC.md`
- `docs/DEVELOPMENT.md`
- `docs/HANDOFF.md`

## Milestone 1 files created

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
- The CV PDF has a stable public path at `assets/files/McMichael_CV.pdf`; the PDF, rather than the landing page, remains the authoritative curriculum vitae.
- The Research page uses a journal-like vertical program index rather than cards, and each program has a durable directory-based landing page under `research/`.

## Build and verification status

- Tested with Quarto 1.10.18.
- `quarto render` succeeds for all thirteen pages—eight top-level pages and five nested Research-program pages—and writes output to `_site/`.
- All top-level pages load with the expected page title, one primary heading, and seven navigation destinations.
- Internal navigation and homepage action links resolve successfully.
- Browser layout was checked at approximately 1440, 1024, 768, and 390 pixels wide.
- The local TeX Gyre Schola asset loads successfully, and the rendered site makes no external font requests.
- The mobile navigation opens and closes successfully.
- No horizontal overflow was detected at the checked widths.
- Generated `_site/` and `.quarto/` content is excluded from version control.
- The CV PDF is present in `_site/assets/files/`, matches the supplied source file, and resolves from the rendered CV page.
- The institutional email is rendered as `mailto:bmcmichael@law.ua.edu`; prohibited contact details are absent from the Contact HTML.
- CV, About, Teaching, and Contact were checked at approximately 1440 × 900 and 390 × 844 pixels. Their layouts remain readable without horizontal overflow, and the mobile navigation expands to expose all seven destinations.
- The final production render completed successfully for all thirteen pages.
- All five Research-page Explore links and all five return-to-Research links resolve to rendered pages.
- The Research page was checked at approximately 1600, 1440, 1024, 768, and 390 pixels after its wide-layout refinement; a representative program page was checked at desktop and mobile widths. The editorial index and program-page structures remain readable without horizontal overflow.

## Content intentionally deferred

Do not invent or add these items without approved source materials:

- any future homepage copy beyond the approved existing professional identity and research descriptor;
- full publication metadata;
- paper, journal, data, code, and replication links;
- headshot or other imagery;
- external profile and contact details;
- public teaching materials and casebook information;
- individual publication-to-topic assignments, publication filters, and topic metadata;
- real research figures or interactive components;
- final custom domain.

## Unresolved issues

- Publications remains intentionally unpopulated pending a separately authorized architecture and verified publication metadata.
- The five Research-program pages intentionally contain no individual publications, findings, datasets, replication repositories, code links, figures, or interactive tools pending approved materials and later architecture work.
- Data & Code remains intentionally unpopulated because no approved public datasets, replication repositories, code links, or interactive components have been supplied.
- No verified external profile links, public research-resource links, headshot, or public teaching materials have been supplied.
- Physician Payment, AMA RUC, Medicare payment, and related payment research remain intentionally excluded from the public Research architecture for now.
- The abstract homepage research field is an approved temporary placeholder. Do not redesign it further; replace or remove it only when approved research material is available.
- Deployment architecture and domain settings have not been selected or enabled.

## Future Publications requirement

Preserve disciplinary groupings while adding a separate topic-based discovery mechanism so visitors can identify related scholarship across disciplines without reviewing the entire publication list. A publication may ultimately belong to multiple topics, with concise public filter labels mapped to the five approved Research programs as documented in `WEBSITE_SPEC.md`.

Do not create publication metadata, assign papers to topics, or implement that mechanism until a future Publications milestone is explicitly authorized.

## Next recommended task

Next proposed milestone: Publications architecture and verified publication-metadata planning. Await separate authorization before beginning.
