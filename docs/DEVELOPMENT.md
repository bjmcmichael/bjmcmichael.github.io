# Development and Portability

## 1. Objective

The website must be easy to continue from another computer or another Codex session using the GitHub repository as the durable source of truth.

A developer or coding agent should not need prior chat history to understand how to work on the project.

## 2. Expected local tools

Initial expected tools:

- Git
- Quarto
- a modern web browser
- optional: GitHub Desktop
- optional: VS Code
- Codex or another capable coding environment

Do not require a specific IDE.

Milestone 1 was built and verified with **Quarto 1.10.18**. No Node.js runtime, package manager, JavaScript framework, or other project dependency is required.

## 3. Repository layout

Current site layout:

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── .gitignore
├── _quarto.yml
├── AGENTS.md
├── README.md
├── WEBSITE_SPEC.md
├── index.qmd
├── research/
│   ├── index.qmd
│   ├── licensing/
│   │   └── index.qmd
│   ├── organ-allocation/
│   │   └── index.qmd
│   ├── torts-liability/
│   │   └── index.qmd
│   ├── drug-policy/
│   │   └── index.qmd
│   ├── reproductive-health/
│   │   └── index.qmd
│   └── payments/
│       └── index.qmd
├── publications.qmd
├── data/
│   └── publications.yml
├── filters/
│   └── publications.lua
├── scripts/
│   └── fix-navbar-toggle-role.ts
├── data-code.qmd
├── teaching.qmd
├── cv.qmd
├── about.qmd
├── contact.qmd
├── styles.css
├── theme.scss
├── assets/
│   ├── files/
│   │   └── McMichael_CV.pdf
│   ├── js/
│   │   └── publications-filter.js
│   └── fonts/
│       ├── GUST-FONT-LICENSE.txt
│       └── texgyreschola-regular.otf
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── DEVELOPMENT.md
    ├── HANDOFF.md
    ├── PREDEPLOYMENT_AUDIT.md
    ├── PUBLICATIONS_PLAN.md
    └── publications/
        ├── inventory.yml
        ├── reviewed_inventory.yml
        ├── VERIFICATION_REPORT.md
        ├── TOPIC_CODING_REVIEW.yml
        ├── TOPIC_CODING_REPORT.md
        └── SELECTED_SCHOLARSHIP_REVIEW.md
```

The generated `_site/` directory and Quarto's `.quarto/` working directory are ignored by Git. Add research, asset, or data directories only when approved materials require them.

## 4. Branching and commits

`main` is the stable branch.

For substantive implementation:
- create a descriptive branch;
- make focused commits;
- push the branch;
- prefer a pull request for review before merging.

Small documentation-only corrections may be committed directly when appropriate.

## 5. Portable paths

Never rely on:
- Windows drive letters;
- user-specific home directories;
- OneDrive/Dropbox/Proton Drive paths;
- local absolute paths;
- environment-specific hard-coded URLs.

Use repository-relative paths.

## 6. Build commands

From the repository root, start the local development server with:

```bash
quarto preview
```

Create a production render with:

```bash
quarto render
```

The project-level post-render script `scripts/fix-navbar-toggle-role.ts` uses
Quarto's bundled Deno runtime to remove Quarto 1.10.18's erroneous explicit
`role="menu"` from the generated native navbar toggle button. It is a narrowly
scoped build-time correction: when Quarto supplies
`QUARTO_PROJECT_OUTPUT_FILES`, the script strictly checks only HTML files from
the current render pass and requires exactly one affected toggle per page. Its
fallback directory scan is idempotent so already-corrected output is accepted,
while duplicated or otherwise unexpected toggle markup still fails. It adds no
browser-time mutation or external dependency.

The rendered site is written to `_site/`. The current render processes seven root-level `.qmd` pages, the Research landing page at `research/index.qmd`, and six nested Research-program pages, for fourteen pages total. It creates `_site/index.html` and the durable directory route `_site/research/index.html`.

The `project.render` list in `_quarto.yml` includes both `*.qmd` and `research/**/*.qmd`. The first pattern renders only root-level site pages; the second renders the Research landing page and six nested program pages. Governing Markdown files under `docs/` remain excluded from the public site.

The Research landing page intentionally lives at `research/index.qmd`, not beside the `research/` directory as a root-level `research.qmd`. This avoids a static-host routing collision between `research.html` and `/research/`. Navigation, homepage actions, Explore links, and program-page return links should continue to target the directory-based `/research/` route.

The production website origin is `https://benjaminmcmichael.com`. Quarto's
`website.site-url` and HTML `canonical-url` settings generate canonical links,
and the site render generates `_site/sitemap.xml`. Governing Markdown under
`docs/` is outside the render list and must not appear in the sitemap or Pages
artifact.

### Fresh-machine setup

1. Install Git.
2. Install Quarto 1.10.18 or a compatible later release.
3. Clone the repository and check out the intended branch.
4. Run `quarto render` from the repository root.

No additional install command is required for the current static site.

### Publication data and rendering

`data/publications.yml` is the single production source used by the public
Publications page and all six Research-program scholarship lists. It contains 49
stable records derived from the immutable CV transcription in
`docs/publications/inventory.yml` and the reviewed metadata overlay in
`docs/publications/reviewed_inventory.yml`. Source section, publication type,
and source order come from the CV inventory; reviewed bibliographic fields
supersede the snapshot where externally checked metadata is available.

`filters/publications.lua` renders the production records during Quarto's normal
Pandoc pass. The filter supports a complete five-section bibliography and a
topic-driven Research-program mode. It is registered in `publications.qmd` and
all six Research-program pages through page-local `metadata-files` and `filters`
settings. Each program page supplies its stable ID through
`publication-render-program`; the renderer includes every record whose
`research_topics` contains that ID. Program lists place forthcoming or accepted
work first, then published work in reverse chronological order, with
`source_order` and stable ID providing deterministic ties. Historical Payments
`curated_placements` remain in the source for provenance but do not control any
Research-program list. Quarto remains the only build runtime; there is no Node,
Python, database, CMS, framework, or external rendering dependency. The
Publications page uses one small local vanilla JavaScript file as an optional
browser-side progressive enhancement.

To add or correct a publication:

1. Verify the metadata against an authoritative public source.
2. Update the reviewed or planning source as appropriate while preserving the immutable role of `docs/publications/inventory.yml`.
3. Update `data/publications.yml`, keeping it reconciled with the approved source records.
4. Preserve the stable record ID.
5. Assign topics or curated placements only after explicit editorial approval; Research-program lists are generated from `research_topics`.
6. Run `quarto render` and validate record counts, ordering, links, and every rendered surface that uses the shared source.

Do not copy citation text into individual `.qmd` files. Optional unresolved
fields should remain omitted until verified rather than being guessed.

### Publications topic filtering

The Publications page remains a server-rendered five-section bibliography. In
bibliography mode only, `filters/publications.lua` adds a space-separated
`data-topics` attribute to each existing publication entry while retaining its
stable `data-publication-id`. Research-program output does not receive this
attribute and remains unchanged.

`publications.qmd` contains a semantic, initially hidden group of seven native
buttons: All publications plus the six approved short topic labels. The
page-local `assets/js/publications-filter.js` script initializes only when both
the controls and bibliography are present, reveals the controls, and filters by
toggling the native `hidden` state on existing entries and empty disciplinary
sections. It does not duplicate, reorder, reconstruct, or modify citation
content. Counts are computed from the rendered DOM, the active button exposes
`aria-pressed`, and a polite live region reports the current result count.

If JavaScript is unavailable or initialization fails, the controls remain
hidden and all 49 publications, all five disciplinary headings, and all title
links remain available. No network request, external library, package install,
Node build step, analytics, or tracking is involved. Query-string, hash,
history-state, and shareable-filter URL support remain deferred.

When changing the filter implementation, verify the All / Licensing / Organ
Allocation / Torts / Drug Policy / Reproductive Health / Payments counts remain
`49 / 17 / 4 / 17 / 6 / 4 / 8`, confirm empty sections use `hidden`, test
keyboard operation and the live status, and repeat the no-JavaScript fallback
check.

### External-link validation

Classify automated checks of canonical publication links as follows:

- HTTP `200`–`399`: automated resolution succeeds.
- HTTP `404` or `410`, DNS failure, malformed URL, or a browser-visible
  not-found page: genuine failure requiring investigation.
- HTTP `401`, `403`, `429`, or an equivalent anti-bot/access-control response:
  automated access restricted and indeterminate, not evidence of a broken link
  by itself.

An access-restricted URL may pass validation when it exactly matches the
verified canonical URL in production metadata and there is no contradictory
evidence that the page is gone or malformed. Report automated successes,
genuine failures, and access-restricted results separately. The merge gate
requires zero genuine failures, not zero access-restricted responses; do not
rewrite a valid publisher URL merely to make an automated checker return
HTTP `200`.

### Fonts and theme

The HTML output uses Quarto's bundled `cosmo` theme as a structural base and applies the project identity through `styles.css`. The small `theme.scss` override disables Cosmo's default Google Fonts import and keeps Bootstrap's base sans-serif family aligned with the local `Segoe UI`/system stack.

Display headings and selected editorial text use [TeX Gyre Schola](https://ctan.org/pkg/tex-gyre-schola), an open Century Schoolbook-style family, while body and interface type continue to use `Segoe UI` with platform sans-serif fallbacks.

The regular OpenType face is self-hosted at `assets/fonts/texgyreschola-regular.otf`, loaded through a local `@font-face` declaration, and distributed under the GUST Font License included at `assets/fonts/GUST-FONT-LICENSE.txt`. No font installation, package install, CDN, or external font request is required at build time or in the browser. If the local asset cannot load, the CSS falls back to Georgia, `Times New Roman`, Times, and the generic serif family.

Deployment configuration is documented below and remains disabled pending final
launch approval.

### Curriculum vitae asset

The authoritative public CV PDF is stored at `assets/files/McMichael_CV.pdf` and linked from `cv.qmd`. Keep this repository-relative path and stable filename when an approved replacement CV is supplied so existing links do not change. After replacing the file, run `quarto render` and verify that `_site/assets/files/McMichael_CV.pdf` exists and the CV-page link resolves.

## 7. GitHub Pages

Target hosting is GitHub Pages at `https://benjaminmcmichael.com`.

The source-controlled workflow at `.github/workflows/deploy-pages.yml` defines
the approved production path:

1. a push to `main` (or a manual dispatch) starts the workflow;
2. GitHub Actions checks out the repository and installs Quarto 1.10.18;
3. `quarto render` builds the site;
4. a validation step requires `_site/index.html` and rejects rendered copies of
   `docs/PREDEPLOYMENT_AUDIT.html` or `docs/HANDOFF.html`;
5. only `_site` is uploaded as the GitHub Pages artifact;
6. a dependent deploy job publishes that artifact to the `github-pages`
   environment.

The workflow uses the documented Pages artifact architecture rather than a
`gh-pages` branch, `quarto publish`, or repository-root deployment. Generated
`_site` remains ignored and untracked. The workflow requires no Cloudflare
token or repository secret. GitHub Pages is currently unpublished and its
publishing source remains disabled, so the workflow must not be enabled or run
until the separately authorized launch sequence.

## 8. Custom domain

The approved production hostname is `https://benjaminmcmichael.com`. Cloudflare
is authoritative for the zone, and GitHub account-level domain verification is
in place, but the repository custom domain is not attached and web-hosting DNS
cutover has not occurred.

At final launch, configure the GitHub Pages custom domain and then add the
approved apex and `www` records in Cloudflare, verify routing and certificates,
and enable HTTPS. Cloudflare DNS is separate from site-content deployment;
ordinary source updates and workflow runs require no Cloudflare changes.

Never commit registrar credentials or API tokens.

## 9. Dependencies

Prefer few dependencies.

If JavaScript packages are later introduced:
- explain why;
- pin versions where sensible;
- document the build/runtime requirement;
- avoid adding a Node build pipeline solely for a small visual effect.

Static/browser-side solutions are preferred.

## 10. Interactive components

Before adding an interactive research component, decide:

1. Can it run entirely in the browser?
2. Can the data safely be public?
3. Does it need a static fallback?
4. Does it work on mobile?
5. Can it be reproduced from public code/data?
6. Will it still work if an external service disappears?

Prefer locally served assets and public stable repositories over fragile third-party embeds.

## 11. Testing checklist

Before merging substantial changes:

- `quarto render` succeeds;
- no obvious broken internal links;
- homepage renders correctly;
- desktop layout checked;
- mobile layout checked;
- navigation checked;
- CV/PDF links checked if present;
- external project links checked if modified;
- no restricted/private files added;
- no secrets added;
- accessibility basics checked;
- `docs/HANDOFF.md` updated.

## 12. Cross-machine handoff checklist

Before switching machines:

1. Commit all intended work.
2. Push all branches that contain work worth preserving.
3. Confirm the remote repository contains the latest changes.
4. Update `docs/HANDOFF.md`.
5. Record any required local software/version changes here.
6. Do not rely on unsaved Codex/local chat context.

On the new machine:

1. Clone or pull the repository.
2. Read `AGENTS.md`.
3. Read `WEBSITE_SPEC.md`.
4. Read `docs/DESIGN_SYSTEM.md`.
5. Read this file.
6. Read `docs/HANDOFF.md`.
7. Install documented dependencies.
8. Run the documented build/preview command.
9. Continue from the next task in `docs/HANDOFF.md`.

## 13. Secrets

If a future feature requires secrets, use an appropriate secret store such as GitHub Actions secrets or another approved service.

Never place secrets in:
- source code;
- Markdown;
- Quarto configuration committed to the repository;
- public JavaScript;
- issue text;
- handoff documents.

## 14. Maintenance principle

Prefer architecture that a competent future maintainer can understand by reading this repository.

Avoid cleverness that is not necessary for the scholarly function of the site.
