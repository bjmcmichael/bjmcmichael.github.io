# Benjamin J. McMichael Academic Website

This repository is the source for Benjamin J. McMichael's personal academic website and public research interface.

## Project status

**Foundation stage.** The repository currently contains project specifications and handoff documentation only. Substantive website implementation should not begin until the first implementation task described in `docs/HANDOFF.md` is explicitly authorized.

## Intended stack

- **Quarto** for the static website framework and content generation
- **GitHub** for version control and project history
- **GitHub Pages** for public hosting
- A **custom domain** to be connected after the first working site is ready
- Browser-side JavaScript / Plotly / Observable-style components for interactive research where appropriate
- No paid infrastructure unless a specific later feature genuinely requires server-side computation or another paid service

## Governing documents

Before making substantive changes, read:

1. [`AGENTS.md`](AGENTS.md) — standing instructions for coding agents and contributors
2. [`WEBSITE_SPEC.md`](WEBSITE_SPEC.md) — product, content, and information-architecture specification
3. [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — visual and interaction rules
4. [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) — portable development and deployment requirements
5. [`docs/HANDOFF.md`](docs/HANDOFF.md) — current project state and next recommended task

If these documents conflict, use the following priority order:

1. `WEBSITE_SPEC.md` for product and content decisions
2. `docs/DESIGN_SYSTEM.md` for visual and interaction decisions
3. `AGENTS.md` for implementation process and agent behavior
4. `docs/DEVELOPMENT.md` for environment/build mechanics
5. `docs/HANDOFF.md` for current status and the next task only

## Core product principle

The site is an **academic research website first** and a personal profile second.

It must make conventional materials—biography, CV, publications, teaching, and contact information—easy to find while allowing major empirical projects to develop into richer research pages containing public data, code, maps, figures, and interactive results.

The scholarship itself should provide much of the site's visual identity.

## Security and data boundary

Treat everything committed to this repository and everything deployed through GitHub Pages as public.

Never commit:

- restricted or confidential research data;
- licensed or proprietary materials that cannot be redistributed;
- credentials, API keys, passwords, tokens, or private configuration;
- unpublished confidential documents or review materials;
- machine-specific secrets;
- private correspondence;
- source files that contain restricted data merely because the rendered output is public.

Public replication data and code may be included when redistribution is appropriate. Large public datasets should generally be stored in an appropriate external repository and linked from the site.

## Portability principle

The repository must be sufficient for another computer or another coding agent to continue the project without relying on local chat history, undocumented machine state, or absolute file paths.

If a decision matters later, document it in the repository.
