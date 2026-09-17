# Website Specification

## 1. Product goal

Build a polished personal academic website for Benjamin J. McMichael that serves four audiences well:

1. scholars looking for papers, working papers, data, and replication code;
2. lawyers, policymakers, journalists, and other professionals looking for his research and expertise;
3. students looking for teaching-related information;
4. visitors looking for biography, CV, affiliation, and contact information.

The site should initially function as an elegant academic website. Over time, selected research projects may become richer public research interfaces with interactive maps, figures, timelines, and downloadable public data.

The site must remain maintainable and inexpensive.

## 2. Professional identity to communicate

The first impression should be:

**law professor + empirical researcher + producer of serious health-law scholarship and reusable research resources**

The site should communicate expertise in areas including:

- health care regulation;
- professional licensing and scope of practice;
- health care labor markets;
- medical markets and payment;
- empirical legal studies;
- health policy.

The site should not make the user look primarily like:

- a consultant;
- a data scientist;
- a think-tank director;
- a technology founder;
- a blogger.

Those activities may appear where relevant, but the scholarly identity comes first.

## 3. Selected design direction

The selected design is the **hybrid concept** previously approved.

It combines:

- the project-centered information architecture of a Research Observatory;
- the typography and editorial seriousness of a Scholar's Journal;
- selective interactive research features from a Data Studio.

Target balance:

- **70% Research Observatory**
- **20% Scholar's Journal**
- **10% Data Studio**

The site should look distinctive because of the scholarship itself—not because of visual effects.

## 4. Homepage: desired first impression

The homepage should be clean, editorial, spacious, and research-forward.

### Header

Left:
- Benjamin J. McMichael

Right navigation, initially:
- Research
- Publications
- Data & Code
- Teaching
- CV
- About
- Contact

The exact order may be tuned during implementation, but the hierarchy should remain simple.

### Hero

Primary text:

**Benjamin J. McMichael**

**Jere L. Beasley Professor of Law**  
**Director of Interdisciplinary Legal Studies**  
**University of Alabama School of Law**

Working research descriptor:

> Empirical research on health care regulation, professional licensing, medical markets, and health policy.

Primary actions:
- View CV
- Research

The final short bio text will be supplied or approved separately. Do not invent biographical claims merely to fill space. Use clearly marked placeholder text when final copy is unavailable.

### Research Observatory

The homepage Research Observatory uses the approved seven-item rotation of four
original research-figure crops and three clearly labeled adapted tables. The
rotation advances at approximately ten-second intervals, provides previous,
next, and pause/resume controls, pauses during pointer or keyboard interaction,
and disables automatic cycling for reduced-motion preferences. Each item offers
a keyboard-accessible enlarged view; adapted tables also expose their contents
as semantic HTML tables sourced from the reviewed CSV extracts.

The component retains complete axes, intervals, labels, legends, units, and
source context and uses containment rather than cropping. Slide order and
supporting paths are maintained in a local JSON manifest. Do not substitute
decorative or reconstructed findings for these verified assets.

### Selected Research

The homepage displays three approved publication entries, in this order:

1. **A Constitutional False Claims Act**
2. **Sharing Is Caring: Eliminating Geographic Boundaries in Organ Allocation**
3. **The Impact of Nurse Practitioner Scope-of-Practice Laws on Preventable Hospitalizations**

These entries render from `data/publications.yml` through the shared publication
renderer so their titles, authors, status, venue, citation details, and
canonical links remain identical to the Publications page. Any later homepage
selection or change in order requires separate approval.

Links on research cards may include, as applicable:
- Paper
- Journal
- Abstract
- Interactive maps/figures
- Data & code
- Replication
- Documentation

Do not display a link type that has no actual destination.

## 5. Information architecture

Initial top-level pages:

### Home
Research-forward landing page.

### Research
Project-centered view of major lines of scholarship.

A major research project can have its own page with:
- overview;
- related papers;
- key figures;
- public datasets;
- code;
- interactive research;
- documentation.

### Publications
A conventional scholarly publication list.

Likely categories:
- Books / book projects
- Published & forthcoming articles
- Working papers
- Other writing

Final categories will be determined from the CV/publication record rather than invented.

### Data & Code
A public index of:
- replication repositories;
- public datasets;
- code;
- data documentation;
- interactive research tools.

This is not a dumping ground. Each item should be clearly tied to scholarship.

### Teaching
Courses and teaching materials selected for public display.

Potential content includes:
- Torts
- Health Care Law
- Products Liability
- casebook information

Only public-facing materials should be included.

### CV
A clean page with a prominent PDF download/view link.

The PDF should remain the authoritative CV unless a later decision is made to generate an HTML CV.

### About
Short professional biography, affiliations, research interests, and selected professional roles.

### Contact
Institutional/professional contact information and external profiles.

Potential links may include:
- University faculty page
- SSRN
- Google Scholar
- GitHub

Do not invent profile URLs.

## 6. Research project model

Where feasible, structure research metadata so that common information is not duplicated manually across many pages.

A research project may contain fields such as:

- title;
- short title;
- status;
- one-sentence description;
- abstract/overview;
- authors/coauthors;
- publication venue;
- publication year;
- paper URL;
- journal URL;
- SSRN URL;
- code repository URL;
- data repository URL;
- interactive page URL;
- featured image/figure;
- keywords/tags.

The implementation may use Quarto listings, YAML, BibTeX, CSL JSON, or another maintainable structured source. Do not choose a complex data model prematurely.

### 6.1 Approved research-program taxonomy

Milestone 2B implemented the first five programs below. The approved forward
architecture now uses six programs, in this order:

1. **Professional Licensing & Scope of Practice**
2. **Organ Allocation & Transplant Policy**
3. **Tort Law & Medical Liability**
4. **Opioids, Drug Policy & Harm Reduction**
5. **Reproductive Health & Family Formation**
6. **Health Care Payments & Financial Accountability**

The sixth program has the stable ID `payments`, the short filter label
“Payments & Accountability,” and the implemented path `research/payments/index.qmd`.
Its scope encompasses health care payment and billing rules, industry financial
relationships, and legal accountability for public spending, including False
Claims Act scholarship. False Claims Act work is not necessarily limited to
health care; future descriptions must follow verified sources and must not imply
otherwise.

This approval supersedes the earlier blanket exclusion of payment research from
the public Research architecture. It does not authorize unfinished AMA RUC / RVU
project details, preliminary findings, private materials, datasets, or manuscripts.

### 6.2 Publications and research-topic architecture

Publications preserve visible disciplinary groupings. Research topics exist as a separate metadata dimension, and a publication may belong to multiple research topics. Milestone 2G adds topic filters that allow visitors to find related scholarship across disciplines without replacing the disciplinary organization of the Publications page.

Public-facing filter labels are shorter than the full Research-program names. The approved mapping is:

| Research program | Public filter label |
|---|---|
| Professional Licensing & Scope of Practice | Licensing & Scope of Practice |
| Organ Allocation & Transplant Policy | Organ Allocation |
| Tort Law & Medical Liability | Torts & Liability |
| Opioids, Drug Policy & Harm Reduction | Drug Policy |
| Reproductive Health & Family Formation | Reproductive Health |
| Health Care Payments & Financial Accountability | Payments & Accountability |

The following five publication records were the first records approved both for
membership in the `payments` topic and for the Payments program page's initial
Selected Scholarship list:

- `mh-state-legislation-industry-compensation-orthopaedic-residents`
- `mh-open-payments-orthopedic-residents`
- `sw-macra-incident-to-billing`
- `lr-constitutional-false-claims-act`
- `lr-constitutional-accounting-false-claims-act`

These approvals do not grant homepage placement. Historical curated-placement
metadata remains separate from topic membership, but Research-program rendering
no longer depends on curated placements.

Milestone 2E approved 56 topic assignments across all 49 publication records:
17 Licensing, 4 Organ Allocation, 17 Torts & Liability, 6 Drug Policy,
4 Reproductive Health, and 8 Payments & Accountability. Eight publications
belong to two programs, and `lr-socially-distant-healthcare` is the sole approved
no-current-topic record. Milestone 2F promotes those approvals into
`data/publications.yml` and renders every topic member on its Research-program
page under the public heading **Selected Scholarship**. That heading is an
editorial label, not a capped subset. Research-program membership remains
separate from the approved homepage selection described above.

The Publications page continues to preserve its five disciplinary sections as
the primary visible organization. Its default “All publications” state shows
all 49 records, including the sole no-current-topic publication. Six client-side
filters use the approved short labels and show topic members within their
existing disciplinary sections and ordering; empty sections are hidden, while
multi-topic publications may appear under multiple filter selections without
duplication in any single view.

Filtering is progressive enhancement implemented with a small local vanilla
JavaScript file. Without JavaScript, all publications and disciplinary sections
remain visible and the nonfunctional controls remain hidden. Query-string,
hash, history-state, and shareable-filter URL support remain deferred.

## 7. Interactive research philosophy

Interactivity should be added when it improves understanding of the scholarship.

Good examples:
- hoverable state policy maps;
- profession/year selectors for regulatory maps;
- event-study/coefficient explorers;
- policy timelines;
- filters for public research data;
- figure controls that reveal heterogeneity without overwhelming the reader.

Bad examples:
- animation for decoration;
- generic dashboards;
- gratuitous charts unrelated to a specific paper/project;
- server-side tools when a static/browser-side solution is sufficient.

Interactive components should:
- work without requiring an account;
- avoid trackers by default;
- degrade gracefully on mobile;
- include a static or textual fallback when reasonable;
- keep the scholarly interpretation near the figure.

## 8. Technical architecture

Initial preferred architecture:

- Quarto website
- GitHub repository: `bjmcmichael/bjmcmichael.github.io`
- GitHub Pages hosting
- production hostname: `https://benjaminmcmichael.com`
- GitHub Actions renders the Quarto source on `main` and uploads only the generated `_site` directory as the Pages artifact
- public static assets stored in the repository
- browser-side interactivity only at first

`main` is the production source branch, while generated `_site` output remains
untracked. GitHub Pages serves the site through the approved GitHub Actions
workflow, the repository custom domain is `benjaminmcmichael.com`, and GitHub
Pages Enforce HTTPS is enabled. Cloudflare is authoritative for the domain, but
DNS remains separate from site-content deployment and ordinary site updates
require no Cloudflare changes.

The architecture should make it straightforward for Codex on one machine to hand the project to Codex on another machine through GitHub alone.

## 9. Cost constraint

Default infrastructure target:

- Quarto: free
- GitHub: free
- GitHub Pages: free
- HTTPS: free
- custom domain: annual registration cost
- browser-side interactive figures: free

Do not introduce recurring paid infrastructure without explicit approval and a concrete reason.

## 10. Search-engine and metadata baseline

When implementation begins, include a professional baseline for:

- page titles;
- meta descriptions;
- canonical URLs once the custom domain is known;
- Open Graph/social preview metadata where feasible;
- favicon/site icon;
- sitemap/robots handling consistent with Quarto/GitHub Pages;
- semantic headings.

Milestone 2I establishes the production `site-url`, canonical links, and sitemap
generation for `https://benjaminmcmichael.com` without deploying the site.

Do not optimize for marketing-style SEO. Optimize for accurate discovery of the scholar and scholarship.

## 11. Version 1 scope

Version 1 should aim to be a finished, credible academic site even if interactive research is not yet ready.

Minimum viable public site:

- Home
- Research
- Publications
- Data & Code
- Teaching
- CV
- About
- Contact
- responsive design
- custom visual system
- functioning GitHub Pages deployment
- custom domain once available and approved

Version 1 should not be delayed merely because interactive tools are unfinished.

## 12. Deferred decisions

Do not make these decisions without explicit approval or adequate source materials:

- changes to the production GitHub Pages, custom-domain, HTTPS, or Cloudflare DNS configuration;
- final homepage prose;
- headshot/photo choice;
- final publication metadata;
- final project descriptions;
- which papers/data/code are public;
- future carousel replacements or additional interactive figures;
- analytics;
- newsletter/contact forms;
- server-side hosting;
- paid services.

Use placeholders or omit sections rather than inventing factual content.
