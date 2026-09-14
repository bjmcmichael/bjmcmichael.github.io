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
│   └── fonts/
│       ├── GUST-FONT-LICENSE.txt
│       └── texgyreschola-regular.otf
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── DEVELOPMENT.md
    ├── HANDOFF.md
    ├── PUBLICATIONS_PLAN.md
    └── publications/
        ├── inventory.yml
        ├── reviewed_inventory.yml
        └── VERIFICATION_REPORT.md
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

The rendered site is written to `_site/`. The current render processes seven root-level `.qmd` pages, the Research landing page at `research/index.qmd`, and six nested Research-program pages, for fourteen pages total. It creates `_site/index.html` and the durable directory route `_site/research/index.html`.

The `project.render` list in `_quarto.yml` includes both `*.qmd` and `research/**/*.qmd`. The first pattern renders only root-level site pages; the second renders the Research landing page and six nested program pages. Governing Markdown files under `docs/` remain excluded from the public site.

The Research landing page intentionally lives at `research/index.qmd`, not beside the `research/` directory as a root-level `research.qmd`. This avoids a static-host routing collision between `research.html` and `/research/`. Navigation, homepage actions, Explore links, and program-page return links should continue to target the directory-based `/research/` route.

### Fresh-machine setup

1. Install Git.
2. Install Quarto 1.10.18 or a compatible later release.
3. Clone the repository and check out the intended branch.
4. Run `quarto render` from the repository root.

No additional install command is required for the current static site.

### Publication data and rendering

`data/publications.yml` is the single production source used by the public
Publications page and curated Research-program scholarship lists. It contains 49
stable records derived from the immutable CV transcription in
`docs/publications/inventory.yml` and the reviewed metadata overlay in
`docs/publications/reviewed_inventory.yml`. Source section, publication type,
and source order come from the CV inventory; reviewed bibliographic fields
supersede the snapshot where externally checked metadata is available.

`filters/publications.lua` renders the production records during Quarto's normal
Pandoc pass. The filter supports a complete five-section bibliography and a
curated Research-program mode. It is registered only in the front matter of
`publications.qmd` and `research/payments/index.qmd` through page-local
`metadata-files` and `filters` settings. Quarto remains the only site runtime;
there is no Node, Python, database, CMS, client-side filter, or external
rendering dependency.

To add or correct a publication:

1. Verify the metadata against an authoritative public source.
2. Update the reviewed or planning source as appropriate while preserving the immutable role of `docs/publications/inventory.yml`.
3. Update `data/publications.yml`, keeping it reconciled with the approved source records.
4. Preserve the stable record ID.
5. Assign topics or curated placements only after explicit editorial approval.
6. Run `quarto render` and validate record counts, ordering, links, and every rendered surface that uses the shared source.

Do not copy citation text into individual `.qmd` files. Optional unresolved
fields should remain omitted until verified rather than being guessed.

### Fonts and theme

The HTML output uses Quarto's bundled `cosmo` theme as a structural base and applies the project identity through `styles.css`. The small `theme.scss` override disables Cosmo's default Google Fonts import and keeps Bootstrap's base sans-serif family aligned with the local `Segoe UI`/system stack.

Display headings and selected editorial text use [TeX Gyre Schola](https://ctan.org/pkg/tex-gyre-schola), an open Century Schoolbook-style family, while body and interface type continue to use `Segoe UI` with platform sans-serif fallbacks.

The regular OpenType face is self-hosted at `assets/fonts/texgyreschola-regular.otf`, loaded through a local `@font-face` declaration, and distributed under the GUST Font License included at `assets/fonts/GUST-FONT-LICENSE.txt`. No font installation, package install, CDN, or external font request is required at build time or in the browser. If the local asset cannot load, the CSS falls back to Georgia, `Times New Roman`, Times, and the generic serif family.

The actual deployment configuration must be documented after it is implemented.

### Curriculum vitae asset

The authoritative public CV PDF is stored at `assets/files/McMichael_CV.pdf` and linked from `cv.qmd`. Keep this repository-relative path and stable filename when an approved replacement CV is supplied so existing links do not change. After replacing the file, run `quarto render` and verify that `_site/assets/files/McMichael_CV.pdf` exists and the CV-page link resolves.

## 7. GitHub Pages

Target hosting: GitHub Pages.

Initial preference is to use a deployment approach that:
- is transparent;
- is reproducible from GitHub;
- does not depend on one computer;
- supports custom-domain deployment;
- allows build failures to be diagnosed from GitHub Actions.

The implementation agent should choose the simplest robust Quarto-to-GitHub-Pages workflow and document it before enabling deployment.

## 8. Custom domain

The custom domain is intentionally deferred until the first working site exists.

When the domain is known and the site is ready:
- verify domain ownership where appropriate;
- configure DNS deliberately;
- configure both apex and `www` behavior;
- enable HTTPS;
- document the DNS records and GitHub Pages settings in this file without recording any private registrar credentials.

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
