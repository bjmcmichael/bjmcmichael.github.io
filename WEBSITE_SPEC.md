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

### Featured research visual

The hybrid mockup used a research panel containing a U.S. policy map and an empirical figure preview.

This is a design direction, not a requirement to invent a real interactive figure for version 1.

Until approved public data/figures are supplied, use either:
- a restrained placeholder module;
- an approved static research figure;
- or omit the visualization rather than fabricating research results.

Never invent numerical empirical findings for decorative purposes.

### Selected Research

The homepage should support three prominent project entries.

Initial candidate projects:

1. **The Law of Doctors**  
   Professional boundaries and the regulation of health care labor

2. **Scope of Practice and Severe Maternal Morbidity**  
   Professional regulation and maternal health outcomes

3. **Organ Allocation**  
   Geographic allocation reform and patient outcomes

A later fourth project may include work on physician payment / the AMA RUC.

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
- custom domain added after initial site validation
- public static assets stored in the repository
- browser-side interactivity only at first

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

- final custom domain;
- final homepage prose;
- headshot/photo choice;
- final publication metadata;
- final project descriptions;
- which papers/data/code are public;
- which interactive figure launches first;
- analytics;
- newsletter/contact forms;
- server-side hosting;
- paid services.

Use placeholders or omit sections rather than inventing factual content.
