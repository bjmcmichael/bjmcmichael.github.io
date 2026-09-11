# Project Handoff

## Current status

**Stage: Milestone 2C — Publications metadata verification awaiting review**

Milestone 2C planning and metadata verification have been transplanted from `content/publications-planning` onto `content/publications-planning-current` and await review. The unrendered artifacts do not change the public website and have not been merged into `main`.

Milestone 2B has passed review and is incorporated into `main`. Its feature branch, `content/research-programs`, remains retained.

A subsequent routing and homepage-layout regression was repaired on `fix/research-routing-layout` and incorporated into `main`. The corrective branch remains retained.

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
- At the time of Milestone 2B, intentionally excluded Physician Payment, AMA RUC, Medicare payment, and related payment research from the public Research-program architecture. The later Milestone 2C amendment below supersedes that blanket exclusion for the approved forward architecture.

The five approved programs, in order, are:

1. Professional Licensing & Scope of Practice
2. Organ Allocation & Transplant Policy
3. Tort Law & Medical Liability
4. Opioids, Drug Policy & Harm Reduction
5. Reproductive Health & Family Formation

## Post-merge routing and layout repair

After Milestone 2B was merged, visual review identified a routing collision between root `research.html` output and the `research/` program directory, along with a homepage regression caused by Quarto inferring the hero heading as a document title after the eyebrow was removed.

- Moved the main Research landing page from `research.qmd` to `research/index.qmd`, establishing `/research/` as the durable directory route.
- Updated the navbar, homepage Research links, five Explore links, and five program-page return links to use the durable directory route.
- Replaced page-level `body-classes` styling with an explicit `.research-index-shell` and scoped all Research-index layout rules beneath that wrapper.
- Restored the approved homepage composition while keeping the eyebrow absent and the hero name as the semantic page heading.

## Milestone 2B files added or modified

- `_quarto.yml`
- `index.qmd`
- `research/index.qmd`
- `research/licensing/index.qmd`
- `research/organ-allocation/index.qmd`
- `research/torts-liability/index.qmd`
- `research/drug-policy/index.qmd`
- `research/reproductive-health/index.qmd`
- `styles.css`
- `WEBSITE_SPEC.md`
- `docs/DEVELOPMENT.md`
- `docs/HANDOFF.md`

## Milestone 2C planning completed

- Transcribed and reconciled all 49 entries under the September 2026 CV's “Selected Publications” heading into a machine-readable draft inventory.
- Preserved the five original CV publication sections, original entries, PDF source locations, supported citation fields, coauthor parentheticals, missing data, ambiguities, and verification status.
- Classified four records as forthcoming only where the CV says so; the remaining 45 published classifications are assessments from completed dated CV citations and remain unverified externally.
- Confirmed that the CV contains no Working Papers or Books / Book Projects section and excluded non-publication material.
- Retained and flagged a possible related or revised-version pair rather than collapsing it.
- At the initial planning stage, flagged three payment-adjacent entries for review under the then-standing public Research exclusion without making a public-inclusion decision. The later approved amendment below resolves that question.
- Proposed one editorial Publications structure, a future many-to-many topic-discovery model, and a single-source Quarto/YAML rendering approach without implementing any of them.
- Left all public `.qmd` pages, styles, theme files, the CV PDF, and build/deployment configuration unchanged.

## Milestone 2C files added or modified

- `docs/publications/inventory.yml`
- `docs/publications/reviewed_inventory.yml`
- `docs/publications/VERIFICATION_REPORT.md`
- `docs/PUBLICATIONS_PLAN.md`
- `WEBSITE_SPEC.md`
- `docs/HANDOFF.md`

## Milestone 2C metadata verification completed

- Kept `docs/publications/inventory.yml` unchanged as the original CV-transcription snapshot.
- Checked all 49 stable records against publisher, journal, DOI, PubMed, SSRN, or institutional-repository sources and recorded the reviewed metadata separately in `docs/publications/reviewed_inventory.yml`.
- Retained all 49 records and recorded six narrow unresolved citation fields rather than guessing. No optional missing field was treated as an editorial exclusion.
- Independently verified that “A Constitutional False Claims Act” is published in the Washington University Law Review and “A Constitutional Accounting of the False Claims Act” is a separate Vanderbilt Law Review forthcoming article; both remain distinct records.
- Approved a sixth forward-looking Research program, **Health Care Payments & Financial Accountability**, with stable ID `payments`, short filter label “Payments & Accountability,” and future path `research/payments/index.qmd`.
- Recorded five specified existing records separately for both `payments` topic membership and the future payments page's initial Selected Scholarship list. No homepage placement or other topic/curation decision was made.
- Replaced the current blanket payment-research exclusion while preserving the Milestone 2B five-program implementation as historical state. Unfinished AMA RUC / RVU work, preliminary findings, private materials, datasets, and manuscripts remain excluded.
- Defined the next implementation requirements without changing public pages: a sixth Research-index entry and Explore link, the new shared-design landing page, a source-grounded overview, the five approved selections with genuine links, and one shared publication source.

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
- `quarto render` succeeds for all thirteen pages—seven root-level pages, the directory-based Research landing page, and five nested Research-program pages—and writes output to `_site/`.
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
- The routing repair was verified from a static production render: `/research/`, all three homepage/navbar Research links, all five Explore links, all five return links, and the CV PDF return HTTP 200 responses.
- The repaired homepage was checked at 1440 and 390 pixels, the Research landing page at 1600, 1440, 1024, 768, and 390 pixels, and a representative program page at 1440 and 390 pixels. Each page has one primary heading, and no horizontal overflow was detected.
- Milestone 2C inventory validation confirms 49 unique IDs, exact section/page/status count reconciliation, and valid YAML syntax.
- The final standard Milestone 2C render in the repository completes all thirteen pages, and the unrendered planning and verification documents are not emitted into `_site/`. Earlier attempts encountered transient Windows file locks on ignored generated directories; a later unchanged retry succeeded without any source or build-configuration workaround.
- Milestone 2C reviewed-inventory validation confirms that all 49 source IDs appear exactly once, all five approved `payments` records have both topic and curated-placement metadata, no other record has either assignment, and the original CV inventory is unchanged.

## Content intentionally deferred

Do not invent or add these items without approved source materials:

- any future homepage copy beyond the approved existing professional identity and research descriptor;
- public use of verified publication metadata and citation links;
- data, code, and replication links;
- headshot or other imagery;
- external profile and contact details;
- public teaching materials and casebook information;
- publication-to-topic assignments other than the five approved `payments` assignments, publication filters, and public topic controls;
- real research figures or interactive components;
- final custom domain.

## Unresolved issues

- Publications remains intentionally unpopulated. The Milestone 2C source inventory, reviewed inventory, verification report, and architecture plan await review and separate public implementation authorization.
- The five Research-program pages intentionally contain no individual publications, findings, datasets, replication repositories, code links, figures, or interactive tools pending approved materials and later architecture work.
- Data & Code remains intentionally unpopulated because no approved public datasets, replication repositories, code links, or interactive components have been supplied.
- No verified external profile links, public research-resource links, headshot, or public teaching materials have been supplied.
- The public site still implements the five Milestone 2B program pages. The approved sixth payments program and its Research-index entry have not yet been implemented.
- Six externally checked records retain narrow citation cautions documented in `docs/publications/reviewed_inventory.yml`: final forthcoming details, one published-version author-order conflict, one page-range discrepancy, and two optional pagination fields.
- Topic assignments and curated placements other than the five approved `payments` records remain subject to review. No homepage publication selection is approved.
- Unfinished AMA RUC / RVU project details, preliminary findings, private materials, datasets, and manuscripts remain outside the approved public scope.
- The CV labels its bibliography “Selected Publications” and contains no Working Papers or Books / Book Projects section, so completeness and any additional authorized categories remain unresolved.
- The abstract homepage research field is an approved temporary placeholder. Do not redesign it further; replace or remove it only when approved research material is available.
- Deployment architecture and domain settings have not been selected or enabled.

## Future Publications requirement

Preserve disciplinary groupings while adding a separate topic-based discovery mechanism so visitors can identify related scholarship across disciplines without reviewing the entire publication list. A publication may ultimately belong to multiple topics, with concise public filter labels mapped to the six approved Research programs as documented in `WEBSITE_SPEC.md`.

Milestone 2C created an immutable CV-derived inventory plus a separate externally checked reviewed inventory. Do not promote either into production metadata or implement the Publications page, filter mechanism, sixth Research entry, or payments landing page until separately authorized. The five approved `payments` topic memberships and Selected Scholarship placements are resolved inputs for that later implementation; all other assignments remain subject to review.

## Next recommended task

Review the Milestone 2C verified inventory and architecture. Next proposed implementation: add the sixth Research entry and payments landing page and build the shared-source Publications architecture from approved records. Await separate authorization before public implementation.
