# Project Handoff

## Current status

**Stage: Milestone 2G — Publications research-topic filtering approved and incorporated into `main`**

Milestone 2G has passed review and is incorporated into `main`. It adds
progressive, client-side research-topic filtering to the
Publications page while retaining the five disciplinary sections as its primary
organization. The default All state shows all 49 records; the six approved
topic filters show 17 / 4 / 17 / 6 / 4 / 8 records without duplicating or
reordering entries. The no-topic record appears only under All, multi-topic
records appear under each applicable selection, and no Research-program
membership, publication metadata, homepage selection, or Research-page content
changed. Filtering remains a local vanilla-JavaScript progressive enhancement:
native buttons retain keyboard focus and `aria-pressed` state, a polite live
region reports the result count, and the full bibliography remains available
without JavaScript. The feature branch remains retained locally and on origin.

Milestone 2F has passed final source, visual, metadata, and link review and
promotes all 56 approved topic assignments into
`data/publications.yml` and populates all six Research-program pages from that
shared production metadata. The public heading remains “Selected Scholarship”
on every program page, but the lists are complete topic corpora rather than
capped selections: Licensing 17, Organ Allocation 4, Torts & Liability 17,
Drug Policy 6, Reproductive Health 4, and Payments & Accountability 8. Eight
publications appear in two programs, and `lr-socially-distant-healthcare`
remains the sole no-current-topic record. The homepage selection is unchanged,
and public filtering remains deferred. This work is incorporated into `main`;
the feature branch remains retained locally and on origin.

Milestone 2E has passed editorial and source review and is incorporated into
`main`. All 49 publications completed editorial topic review, yielding 56
approved assignments across the six Research programs; eight publications
belong to two programs, and `lr-socially-distant-healthcare` is the sole
approved no-current-topic publication. Substantive relevance controls program
membership, and the compact 4–6-item Selected Scholarship architecture has been
superseded. Milestone 2F later retained “Selected Scholarship” as the public
heading while implementing the complete set assigned to each topic. Homepage selection
remains a separate editorial decision. Milestone 2F has now promoted the
approved topic assignments into production metadata and `main`. Public
filtering remains unimplemented. Deployment and domain configuration remain
deferred.

Milestone 2D has passed source, content, and visual review and is incorporated
into `main`. The Publications page now renders all 49
selected publications from `data/publications.yml` through a page-local Lua
filter. The sixth Research program, Health Care Payments & Financial
Accountability, is implemented with exactly five approved Selected Scholarship
records rendered from that same source. Broader topic coding and public
filtering remain deferred, and the other five Research-program Selected
Scholarship sections remain unpopulated.

Milestone 2C remains approved and incorporated into `main`.

Milestone 2C Publications planning and metadata verification have passed review and are incorporated into `main`. The 49-record source inventory and 49-record reviewed inventory remain planning and metadata sources; they are not rendered as public pages. Both `content/publications-planning-current` and the older `content/publications-planning` branch remain retained.

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

## Milestone 2D implementation completed

- Added `data/publications.yml` as the single production source for 49 selected publications, preserving stable IDs, source sections, publication types, deterministic CV order, reviewed citation fields, canonical links, identifiers, topic metadata, curated placements, and explicit homepage-selection state.
- Added a page-local Quarto/Pandoc Lua filter that renders either the complete five-section bibliography or an approved Research-program selection without duplicating citations in `.qmd` pages.
- Replaced the Publications placeholder with a restrained, responsive bibliography containing all 49 records under the five approved disciplinary headings.
- Added program 06, Health Care Payments & Financial Accountability, to the Research index and created its durable landing page at `research/payments/index.qmd`.
- Rendered exactly the five approved Payments Selected Scholarship records from the shared production source in their approved order while retaining them in the Publications bibliography.
- Kept the other five Research-program Selected Scholarship sections unpopulated and added no public topic controls or filtering JavaScript.
- Preserved narrow unresolved bibliographic fields as omissions rather than guesses, including the disputed page range and unsettled full author order identified during Milestone 2C.
- Completed a page-scoped visual refinement that reduces the Publications introduction and Payments title/overview scale without changing publication data, ordering, links, substantive copy, or the approved bibliography treatment.

## Milestone 2D files added or modified

- `data/publications.yml`
- `filters/publications.lua`
- `publications.qmd`
- `research/index.qmd`
- `research/payments/index.qmd`
- `styles.css`
- `WEBSITE_SPEC.md`
- `docs/DEVELOPMENT.md`
- `docs/HANDOFF.md`

## Milestone 2E topic policy finalized

- Milestone 2E passed editorial and source review and was incorporated into `main` without changing the public site or production publication metadata.
- Reviewed all 49 records in `data/publications.yml` against the six approved Research-program definitions, using verified metadata and canonical public descriptions where titles alone were insufficient.
- Finalized 56 high-confidence topic assignments across the six programs, including eight legitimate multi-topic records, without changing production metadata.
- Preserved the five approved `payments` memberships as `previously_approved` and left their existing Payments Selected Scholarship order unchanged.
- Approved three additional `payments` memberships: `mh-maximizing-nursing-workforce`, `bc-economic-context-nursing-practice-united-states`, and `sw-np-entrepreneurs-primary-care-lifeline`.
- Approved `lr-socially-distant-healthcare` as the sole no-current-topic record because telehealth and access barriers do not cleanly fit the six-program taxonomy.
- Superseded the compact 4–6-item Selected Scholarship proposal with a complete-corpus rule: every relevant publication remains associated with its Research program regardless of age, overlap, or resulting page length.
- Kept Research-program membership distinct from homepage selection and preserved legitimate many-to-many assignments.
- Recorded a production recommendation to generate all six Research-page publication sections from topic membership. Milestone 2F supersedes the associated rename recommendation and retains “Selected Scholarship” as the approved public heading.
- Left public filtering, production topic updates, and public Research-page population deferred pending separate implementation authorization.

## Milestone 2E files added or modified

- `docs/publications/TOPIC_CODING_REVIEW.yml`
- `docs/publications/TOPIC_CODING_REPORT.md`
- `docs/publications/SELECTED_SCHOLARSHIP_REVIEW.md`
- `docs/HANDOFF.md`

## Milestone 2F approved and incorporated into main

- Passed final source, visual, metadata, and link review and was incorporated into `main` through a fast-forward merge that preserved all three Milestone 2F commits.
- Promoted the 56 approved topic assignments into `data/publications.yml` without changing bibliographic metadata, canonical links, authorship, disciplinary sections, status, year, or source order.
- Added topic-driven Research-program rendering to `filters/publications.lua` while preserving the Publications page's full-bibliography behavior.
- Populated all six Research-program “Selected Scholarship” sections from `research_topics`, with deterministic status/year/source-order/ID ordering and no hand-maintained citations.
- Preserved the historical five Payments curated placements for provenance; no public Research page depends on them.
- Retained “Selected Scholarship” as an editorial public heading for each complete topic corpus, not as a label for a capped subset.
- Kept Research-program topic membership distinct from homepage selection; `lr-socially-distant-healthcare` remains the sole no-current-topic publication.
- Kept the homepage and Publications presentation unchanged and added no topic-filter UI or JavaScript.
- Verified a 14-page production render, exact topic and rendered-entry counts, canonical publication links, and internal links. The six program pages and homepage were checked at 1440 and 390 pixels without horizontal overflow; no additional spacing or style adjustment was needed.
- Completed a final page-scoped typography refinement that modestly reduces Research-program titles and overview prose while preserving publication-entry typography, the two-column section architecture, and the approved two-line Payments title.
- Corrected the MACRA incident-to-billing record to the current official Health Affairs Forefront URL and DOI in reviewed and production metadata, and documented a three-class external-link validation policy that distinguishes genuine failures from automated-access restrictions.
- Kept Publications-page topic filtering, deployment, GitHub Pages, and custom-domain configuration deferred pending separate authorization.

## Milestone 2F files modified

- `data/publications.yml`
- `filters/publications.lua`
- `research/licensing/index.qmd`
- `research/organ-allocation/index.qmd`
- `research/torts-liability/index.qmd`
- `research/drug-policy/index.qmd`
- `research/reproductive-health/index.qmd`
- `research/payments/index.qmd`
- `styles.css`
- `docs/publications/SELECTED_SCHOLARSHIP_REVIEW.md`
- `WEBSITE_SPEC.md`
- `docs/DEVELOPMENT.md`
- `docs/HANDOFF.md`

## Milestone 2G approved and incorporated into main

- Approved and incorporated Milestone 2G into `main` through a fast-forward merge that preserved the feature commit.
- Added seven native Publications filter buttons under the page introduction: All publications and the six approved short Research-area labels.
- Kept the existing five disciplinary sections as the primary bibliography structure and filtered entries in place without duplication or reordering.
- Added `data-topics` only to bibliography-mode entries; the six Research-program pages retain byte-identical rendered HTML and continue to use `research_topics` independently.
- Added a small page-local vanilla JavaScript enhancement that toggles native `hidden` state, hides empty sections, updates one active `aria-pressed` state, and reports the DOM-derived count in a polite live region.
- Preserved the complete no-JavaScript bibliography: all 49 linked entries and all five headings remain visible while the nonfunctional controls remain hidden.
- Verified All / Licensing / Organ Allocation / Torts / Drug Policy / Reproductive Health / Payments counts of 49 / 17 / 4 / 17 / 6 / 4 / 8, including all eight multi-topic records and the sole no-topic record.
- Added restrained, page-scoped control styling using the existing ink, muted, crimson, rule, and sans-serif variables without changing bibliography typography.
- Checked the Publications page at 1600, 1440, 1024, 768, and 390 pixels, including representative desktop and mobile filter states, with natural control wrapping and no horizontal overflow.
- Kept query-string, hash, history-state, and shareable-filter URL support deferred, along with deployment and domain configuration.

## Milestone 2G files added or modified

- `assets/js/publications-filter.js`
- `filters/publications.lua`
- `publications.qmd`
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
- `quarto render` succeeds for all fourteen pages—seven root-level pages, the directory-based Research landing page, and six nested Research-program pages—and writes output to `_site/`.
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
- The Milestone 2B final production render completed successfully for all thirteen pages then in scope.
- All five Research-page Explore links and all five return-to-Research links resolve to rendered pages.
- The Research page was checked at approximately 1600, 1440, 1024, 768, and 390 pixels after its wide-layout refinement; a representative program page was checked at desktop and mobile widths. The editorial index and program-page structures remain readable without horizontal overflow.
- The routing repair was verified from a static production render: `/research/`, all three homepage/navbar Research links, all five Explore links, all five return links, and the CV PDF return HTTP 200 responses.
- The repaired homepage was checked at 1440 and 390 pixels, the Research landing page at 1600, 1440, 1024, 768, and 390 pixels, and a representative program page at 1440 and 390 pixels. Each page has one primary heading, and no horizontal overflow was detected.
- Milestone 2C inventory validation confirms 49 unique IDs, exact section/page/status count reconciliation, and valid YAML syntax.
- The final standard Milestone 2C render in the repository completes all thirteen pages, and the unrendered planning and verification documents are not emitted into `_site/`. Earlier attempts encountered transient Windows file locks on ignored generated directories; a later unchanged retry succeeded without any source or build-configuration workaround.
- Milestone 2C reviewed-inventory validation confirms that all 49 source IDs appear exactly once, all five approved `payments` records have both topic and curated-placement metadata, no other record has either assignment, and the original CV inventory is unchanged.
- Milestone 2D production validation confirms 49 unique records, exact reconciliation with both approved inventories, section counts of 17 / 11 / 12 / 2 / 7, exactly five `payments` topic and curated-placement assignments, zero homepage selections, and two distinct False Claims Act records.
- All 49 publication-title links match the reviewed canonical sources, all rendered internal links resolve, the CV PDF remains available, and no empty title link is emitted.
- The Publications page was checked at approximately 1600, 1440, 1024, 768, and 390 pixels; the Research index at 1440, 768, and 390 pixels; the Payments page at 1440 and 390 pixels; and the homepage at 1440 and 390 pixels. No horizontal overflow was detected, and the homepage composition remains unchanged.
- The final Milestone 2D render completed all fourteen pages without a Dropbox, OneDrive, Quarto locking, or database warning. Planning documents, production YAML, filter source, and generated Quarto state are not emitted as public pages or tracked as generated output.

## Content intentionally deferred

Do not invent or add these items without approved source materials:

- any future homepage copy beyond the approved existing professional identity and research descriptor;
- data, code, and replication links;
- headshot or other imagery;
- external profile and contact details;
- public teaching materials and casebook information;
- shareable topic-filter URL state and any new homepage selection;
- real research figures or interactive components;
- final custom domain.

## Unresolved issues

- Research-program publication lists are populated, but findings, datasets, replication repositories, code links, figures, and interactive tools remain pending approved materials and later architecture work.
- Data & Code remains intentionally unpopulated because no approved public datasets, replication repositories, code links, or interactive components have been supplied.
- No verified external profile links, public research-resource links, headshot, or public teaching materials have been supplied.
- Six externally checked records retain narrow citation cautions documented in `docs/publications/reviewed_inventory.yml`: final forthcoming details, one published-version author-order conflict, one page-range discrepancy, and two optional pagination fields.
- Milestone 2F topic assignments are incorporated into `data/publications.yml` on `main`. The five historical Payments curated placements remain for provenance, and no new homepage publication selection is approved.
- Unfinished AMA RUC / RVU project details, preliminary findings, private materials, datasets, and manuscripts remain outside the approved public scope.
- The CV labels its bibliography “Selected Publications” and contains no Working Papers or Books / Book Projects section, so completeness and any additional authorized categories remain unresolved.
- The abstract homepage research field is an approved temporary placeholder. Do not redesign it further; replace or remove it only when approved research material is available.
- Deployment architecture and domain settings have not been selected or enabled.

## Future Publications requirement

Milestone 2G implements the separate topic-based discovery mechanism while
preserving disciplinary groupings and many-to-many topic membership. Future
work may consider shareable filter URLs only with separate authorization.

Milestone 2C created an immutable CV-derived inventory plus a separate externally checked reviewed inventory. Milestone 2D promoted the approved public fields into `data/publications.yml` and implemented the shared renderer, sixth Research entry, and Payments landing page. Milestone 2E finalized the complete many-to-many topic corpus and superseded compact Selected Scholarship curation. Milestone 2F promotes those decisions into production metadata and generates each complete program corpus while retaining “Selected Scholarship” as the approved public heading.

## Next recommended task

Next task: await separate authorization before beginning any subsequent implementation milestone. Shareable filter URL state, deployment, GitHub Pages, and domain configuration remain deferred.
