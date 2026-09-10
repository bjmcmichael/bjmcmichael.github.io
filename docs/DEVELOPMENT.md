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

When the first Quarto site is created, document the tested Quarto version here.

## 3. Repository layout

Foundation layout:

```text
.
├── AGENTS.md
├── README.md
├── WEBSITE_SPEC.md
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── DEVELOPMENT.md
    └── HANDOFF.md
```

The first implementation task should extend this with the minimal Quarto project structure.

Likely eventual structure, subject to refinement:

```text
.
├── _quarto.yml
├── index.qmd
├── research.qmd
├── publications.qmd
├── data-code.qmd
├── teaching.qmd
├── cv.qmd
├── about.qmd
├── contact.qmd
├── styles.css
├── research/
├── assets/
│   ├── images/
│   ├── figures/
│   └── files/
├── data/
├── docs/
├── AGENTS.md
├── WEBSITE_SPEC.md
└── README.md
```

Do not create directories merely because they appear in this example. Add them when needed.

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

Once Quarto is initialized, this section must be updated with exact commands.

Expected baseline:

```bash
quarto preview
```

for local development and:

```bash
quarto render
```

for a production build.

The actual deployment configuration must be documented after it is implemented.

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
