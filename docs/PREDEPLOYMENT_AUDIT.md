# Pre-Deployment Audit

## Audit status

- Audit date: September 15, 2026
- Audited branch: `audit/predeployment-readiness`
- Baseline `main`: `72158ee4f2ec83586ba4606f1476ee1f305bdaf5`
- Public pages audited: 14
- Audit scope: rendered site, source configuration, navigation and links, responsive behavior, accessibility basics, publication data integrity, privacy, performance, search/SEO readiness, and deployment architecture
- Scope boundary: this milestone changed documentation only; it did not change any public page, stylesheet, script, metadata source, Quarto configuration, or deployment setting

The audit used a fresh `quarto render`, source and rendered-output inspection, browser automation at desktop and mobile widths, keyboard and accessibility-tree checks, local HTTP link resolution, external canonical-link validation, and a visual inspection of the downloadable CV PDF.

## Executive summary

The site is stable, coherent, and substantively ready for launch. All 14 public pages render successfully. Internal routes and assets resolve, the 49-publication corpus and six Research-program memberships remain internally consistent, and external canonical-link validation found zero genuine failures. No credentials, machine-specific paths, private correspondence, restricted data, or workflow commentary appear in public output.

Two small items should be resolved before public deployment:

1. Remove the incorrect explicit `role="menu"` from the mobile navigation toggle so its native button semantics are exposed to assistive technology.
2. Once the launch hostname is chosen, set Quarto's production `site-url` and verify canonical URLs, sitemap behavior, and social metadata against that hostname.

The deployment itself remains deliberately unconfigured. The recommended launch architecture is a GitHub Pages custom workflow that renders from `main` and deploys the `_site` artifact without committing generated output.

## Build, output, and repository hygiene

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| All 14 public pages | A clean production render completed without warnings or Quarto database/file-locking errors. | None | Keep `quarto render` as a deployment gate. | None. |
| `.gitignore`, `_site/`, `.quarto/` | Generated Quarto state is ignored; neither `_site/` nor `.quarto/` is tracked. | None | Continue deploying generated output as an artifact rather than source-controlled files. | None. |
| `_quarto.yml` render set | The output contains exactly the expected 14 public HTML pages: homepage; About; Teaching; CV; Research index; six Research programs; Publications; Data & Code; and Contact. | None | Retain an exact-page-count smoke test in deployment validation. | None. |
| `_site/` | The rendered site contains 33 files totaling approximately 1.64 MB. No unexpectedly large generated artifact was found. | None | No action required. | None. |
| `assets/`, `styles.css`, `scripts/publications-filter.js` | The CV, TeX Gyre Schola font and license, stylesheet, and local Publications script are present in `_site` and byte-identical to their source assets. | None | Keep asset-copy checks in deployment verification. | None. |

### FIX BEFORE DEPLOYMENT

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Deployment configuration | No deployment workflow is present, as intended at this stage. This is an operational prerequisite rather than a site defect. | Operational prerequisite | In a separately authorized deployment milestone, add the recommended GitHub Pages workflow and protect it with a successful render/link check. | No page-content or design change; it makes the existing build publicly available. |

## Page metadata, semantic structure, search, and SEO

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| All 14 public HTML pages | Every page has a unique nonempty title, a nonempty meta description, `lang="en"`, a mobile viewport declaration, one `<main>`, one navigation landmark, and exactly one H1. No heading-level jumps were found. | None | Retain these checks in the deployment smoke test. | None. |
| `_quarto.yml` and all pages | Search is intentionally disabled and no search input or search interface is exposed. | None | Keep disabled unless a later editorial decision authorizes search. | None. |
| All public pages | No accidental placeholder text appears in page titles, descriptions, or other public metadata. | None | No action required. | None. |
| All public pages | No duplicate titles were found. | None | No action required. | None. |

### FIX BEFORE DEPLOYMENT

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| `_quarto.yml`; all 14 public pages | `website.site-url` is not set. Rendered pages therefore have no canonical-link elements; no sitemap is emitted; Open Graph metadata is also absent. | Medium launch-readiness item | After selecting the launch hostname, set `site-url` to that exact HTTPS origin. Re-render and verify canonical URLs and sitemap output. Enable and verify Open Graph metadata if approved for launch. | Metadata-only; no visual or factual-copy change. Social sharing previews may improve if Open Graph is enabled. |

### OPTIONAL LATER

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| `_site/search.json` | Quarto emits a small search index even though no search interface is enabled. It is unused and approximately 37 KB. | Low | Leave it alone unless a later build-cleanup task identifies a supported way to suppress it. | None. |
| Site chrome | No favicon is configured. | Low | Add an approved institutional or personal mark only when a suitable asset exists. | Changes browser-tab/bookmark presentation, not page content. |
| Site root | No explicit `robots.txt` is present. The absence does not block ordinary indexing. | Low | Decide on an explicit robots policy after the production hostname and launch date are known; include the sitemap location if one is generated. | No visible page change; affects crawler instructions. |
| Open Graph metadata | Social-card metadata is absent. | Low | Consider enabling Quarto Open Graph metadata after the production hostname and any approved share image are available. | Affects link previews outside the site; page content is unchanged. |

## Navigation, routes, links, and assets

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| All rendered pages | 417 rendered link/resource occurrences were inspected: 311 local references, 105 external publication-link occurrences, and one approved institutional email link. All 29 unique local destinations resolved. | None | Keep a local rendered-link crawl in deployment validation. | None. |
| Research navigation | The durable Research route is `/research/`; all six Explore links and all six return-to-Research links resolve. Homepage and navbar Research links resolve to the same route. | None | No action required. | None. |
| CV navigation | The public CV page and downloadable PDF link both resolve. | None | No action required. | None. |
| 49 external canonical destinations | External validation found 25 automated successes (`200–399`), 24 access-control responses (`401`, `403`, or `429`; all observed responses were `403`), and zero genuine failures. Access-control responses were treated as indeterminate rather than broken. | None | Preserve the documented three-class external-link policy; investigate only genuine not-found, DNS, malformed-URL, or visible error-page evidence. | None. |
| `sw-macra-incident-to-billing` | The rendered link uses the direct Health Affairs Forefront URL and production/reviewed metadata use DOI `10.1377/forefront.20180103.135358`. The stale `hblog` DOI remains only in the deliberate historical correction note. | None | No action required. | None. |
| Runtime resources | Browser runs across the homepage, Publications, and Research loaded only local scripts, styles, and fonts. No third-party runtime request or embed was observed. | None | Keep the privacy-conscious local-asset approach. | None. |

## Accessibility basics

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| All 14 public pages | Semantic landmarks, one-H1 structure, logical heading order, labeled links/buttons, and visible keyboard focus were confirmed. No images are currently used, so meaningful-image alt text is not applicable. | None | Continue these checks whenever page structure changes. | None. |
| Publications filter | The controls are native buttons with `aria-pressed`; keyboard activation by Enter and Space works; focus is retained; a polite atomic live region announces result counts; active state is not conveyed by color alone. | None | Keep the progressive-enhancement implementation unchanged. | None. |
| Publications without JavaScript | The controls remain hidden while all 49 publications and all five disciplinary headings remain available. | None | Preserve this no-JavaScript fallback. | None. |
| Filtered Publications view | Hidden publications and empty disciplinary sections are removed from the accessibility tree as well as the visual layout. | None | No action required. | None. |
| Text contrast | Automated sampling at 1440 px and 390 px found no text combination below a 4.5:1 contrast ratio; the lowest sampled result was approximately 5.07:1. | None | Retain manual and automated contrast checks when colors change. This audit is not a formal WCAG certification. | None. |

### FIX BEFORE DEPLOYMENT

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Shared mobile navigation toggle on all pages | The rendered element is a native `<button>` but also carries `role="menu"`. The explicit role overrides native button semantics, and the accessibility tree exposes a menu rather than a button named “Toggle navigation.” It remains labeled, focus-visible, and keyboard-operable. | Medium | Through an approved Quarto include/template-level adjustment, remove the incorrect role while preserving the native button, accessible name, expanded state, and current behavior. Recheck the accessibility tree at 768 px and 390 px. | No intended visual, copy, or interaction change; assistive-technology semantics improve. |

### OPTIONAL LATER

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Shared navigation landmark | The single navigation landmark does not have an explicit accessible name. With only one navigation landmark this is not an ambiguity or failure. | Low | Add a concise label only if additional navigation landmarks are introduced later. | No visual change. |

## Responsive layout and visual regression

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Homepage | Checked at 1600, 1440, 1024, 768, and 390 px. The approved two-line hero composition, professional roles, research field, and Selected Research remain intact with no horizontal overflow. | None | No action required. | None. |
| Research index | Checked at 1600, 1440, 1024, 768, and 390 px. The wide editorial layout, program rows, Explore links, and mobile stacking remain coherent with no overflow. | None | No action required. | None. |
| Licensing, Torts, Payments | Checked across the same five widths. Long titles wrap naturally, Payments retains the approved desktop treatment, Scholarship lists remain readable, and no overflow was found. | None | No action required. | None. |
| Publications, Data & Code, Teaching, CV, About, Contact | Checked across the same five widths. Narrow-column text remains readable, controls wrap without overlap, and no clipping or off-screen content was found. | None | No action required. | None. |
| Shared navigation | At 1024 px the full navigation remains available. At 768 px and 390 px the toggle is visible, opens by keyboard, exposes all seven links, and participates in a logical focus order. | None except for the role issue reported above | Preserve responsive behavior while correcting the toggle role. | No intended visual change. |

## Publications and Research data integrity

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| `data/publications.yml` | The production source contains exactly 49 records and 56 approved topic assignments. Topic counts are Licensing 17, Organ Allocation 4, Torts & Liability 17, Drug Policy 6, Reproductive Health 4, and Payments 8. | None | Keep the production source as the shared authority. | None. |
| `data/publications.yml` | Eight publications have two topic assignments. `lr-socially-distant-healthcare` is the sole no-current-topic publication. | None | No action required. | None. |
| Publications filters | Counts are exactly `49 / 17 / 4 / 17 / 6 / 4 / 8`; visible disciplinary-section counts are `5 / 4 / 3 / 5 / 3 / 2 / 4`. Each multi-topic paper appears once in each applicable view and no more than once per view. The no-topic paper appears only under All. | None | Preserve exact-membership regression tests. | None. |
| Six Research-program pages | Each page renders the exact production topic corpus under one `Selected Scholarship` heading: `17 / 4 / 17 / 6 / 4 / 8`. No approved member is missing and no unapproved member is present. | None | Preserve exact set-comparison checks. | None. |
| `filters/publications.lua`; six program `.qmd` files | Research-program rendering is driven by `research_topics`, not historical `curated_placements`. | None | No action required. | None. |
| Citation and link output | This documentation-only audit did not change citation text, ordering, topic metadata, or canonical title links. | None | No action required. | None. |

## Privacy, provenance, and public-safety review

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Public source and all 14 HTML pages | No machine-specific Windows paths, Dropbox/OneDrive paths, API keys, tokens, private keys, credentials, Codex/ChatGPT commentary, private correspondence, restricted-data labels, phone numbers, or private-address patterns were found. | None | Keep a scoped secret/path scan in pre-deployment validation. | None. |
| Contact and CV | The only public email is the approved institutional address `bmcmichael@law.ua.edu`. | None | No action required. | None. |
| `assets/McMichael_CV.pdf` | The five-page PDF is legible, matches the rendered download byte-for-byte, and contains an institutional email and institutional campus address but no phone number or private-contact indicator. | None | Treat it as the author-approved public CV; replace only if the author later supplies a revised public version. | The current public PDF remains unchanged. |
| `docs/` planning and handoff files | Governance, verification, and workflow documentation is not emitted into `_site`. | None | Keep documentation outside the public render set. | None. |

## Assets and performance

### PASS

| Affected page/file | Issue or result | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| `assets/fonts/texgyreschola-regular.otf` | The approved local display font loads successfully and reports TeX Gyre Schola as the computed heading face. The redistributed license file is present. | None | Keep the font and license paired. | None. |
| `scripts/publications-filter.js` | The only custom site JavaScript is approximately 2.3 KB and loads locally. | None | No action required. | None. |
| Rendered CSS/JS | Rendered output contains five CSS files totaling approximately 628 KB and nine JavaScript files totaling approximately 180 KB. Most payload is Quarto/Bootstrap framework output; no excessive custom dependency was introduced. | None | No optimization is required before launch. | None. |
| External runtime dependencies | No external font, script, stylesheet, analytics, tracker, advertisement, third-party embed, or cookie-dependent runtime was observed. | None | Preserve this baseline unless explicitly authorized. | None. |

### OPTIONAL LATER

| Affected page/file | Issue | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Quarto/Bootstrap framework assets | Framework CSS is the largest rendered asset. It is acceptable for this static scholarly site and did not cause visible or interaction regressions. | Low | Revisit only if real-world performance monitoring identifies a problem; avoid custom build complexity solely to reduce theoretical bytes. | None unless a future optimization alters framework behavior. |

## Intentional placeholders and editorial decisions

### INTENTIONAL PLACEHOLDER / EDITORIAL DECISION

| Affected page/file | Issue or status | Severity | Recommended action | Public appearance/content impact |
|---|---|---:|---|---|
| Homepage research-observatory field | The field explicitly identifies itself as a design placeholder, carries a no-data/no-findings accessible label, and does not simulate an empirical result. | Informational | It is technically safe and editorially honest to launch. Replace it only with separately approved research material. | A future replacement would visibly change the homepage. |
| `data-code.qmd` | Public Data, Replication & Code, and Interactive Research are restrained future-facing modules. They do not claim that unlinked resources already exist. | Informational | It is technically harmless and editorially acceptable to remain public if the author approves the candid “will be added” framing. Populate only with verified public resources. | Future links/resources would add substantive public content. |
| Six Research-program resource sections | Each page uses restrained future-facing Data, Code & Interactive Research language without inventing datasets, code, or results. | Informational | Safe to launch; populate program by program when public materials are verified. | Future resources would add substantive content. |
| Headshot, external profiles, teaching materials | These approved future-content categories are absent rather than represented by fake or unverified material. | Informational | Leave absent until verified and separately authorized. | Adding them later would change public content. |
| Website search | Search is intentionally disabled. The current 14-page navigation and Publications filters provide adequate discovery for launch. | Informational | Keep disabled unless content scale or user evidence justifies it. | Enabling search would add a visible interface. |
| Publications URL state | Filter state is not shareable in the URL, as previously deferred. | Low | Optional later enhancement; not a launch blocker. | Would change browser URLs and filter interaction, not publication content. |

## Deployment architecture recommendation

The launch should preserve the repository's source-first, static-build model and keep generated output out of Git history.

| Option | Assessment | Repository fit |
|---|---|---|
| GitHub Pages custom workflow rendering from `main` | **Recommended.** A workflow installs a pinned or reviewed Quarto version, renders the site, uploads `_site` as a Pages artifact, and deploys it through GitHub's Pages actions. Generated output remains untracked and every launch is reproducible from source. | Best fit for the current `.gitignore`, stable-`main` policy, and preference for minimal maintenance. |
| Quarto publish to a generated `gh-pages` branch | Supported and viable, but introduces a second branch containing generated state and a separate publication history. | Acceptable fallback, but adds repository state without a current need. |
| Commit rendered output to `main` (root or `docs/`) | Simple conceptually but mixes generated files with source, enlarges diffs, and creates avoidable synchronization mistakes. | Not recommended. |

Implementation guidance for the separately authorized deployment milestone:

1. Configure GitHub Pages to use GitHub Actions.
2. Trigger production deployment from protected `main` after a successful render and validation job.
3. Use official GitHub Pages artifact/deploy actions and a supported Quarto setup action; pin action major versions and record the Quarto version policy.
4. Upload `_site` as the Pages artifact. Do not commit `_site` and do not create a generated branch unless the selected architecture changes.
5. Grant the workflow only the permissions GitHub Pages requires and use the protected `github-pages` environment.

This recommendation is consistent with [Quarto's GitHub Pages publication guidance](https://quarto.org/docs/publishing/github-pages.html) and [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Custom-domain and HTTPS readiness

These steps depend on the final domain choice and must remain deferred until separately authorized:

1. Decide whether initial launch uses the default `bjmcmichael.github.io` hostname or an approved custom domain.
2. Set `website.site-url` to the exact final HTTPS origin and re-render before publication.
3. If using a custom domain, configure it in the repository's Pages settings, verify domain ownership where appropriate, and add the required DNS records with the DNS provider.
4. With the recommended custom-workflow architecture, manage the custom domain through Pages settings; do not assume a committed `CNAME` file is required.
5. After DNS propagation, confirm that both the preferred hostname and any redirecting variant behave correctly and then enforce HTTPS.
6. Recheck canonical URLs, sitemap output, asset URLs, publication filters, downloads, and all internal navigation on the live HTTPS origin.

Use [GitHub's custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [HTTPS guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) at implementation time.

## Minimum actions before deployment

1. Correct the shared mobile navigation toggle's explicit ARIA role and revalidate its accessibility-tree role and keyboard behavior.
2. Select the production hostname, configure `website.site-url`, and verify canonical URL and sitemap output; decide whether to enable Open Graph metadata.
3. In a separately authorized deployment milestone, add the recommended GitHub Pages workflow, deploy from `main`, and run live-origin smoke tests.

## Overall readiness classification

**READY AFTER MINOR FIXES**
