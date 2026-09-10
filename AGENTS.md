# AGENTS.md

## Purpose

These are standing instructions for any coding agent, including Codex, working in this repository.

Read this file together with `WEBSITE_SPEC.md`, `docs/DESIGN_SYSTEM.md`, `docs/DEVELOPMENT.md`, and `docs/HANDOFF.md` before making substantive changes.

## Project identity

This repository powers Benjamin J. McMichael's personal academic website.

The site should present him primarily as a legal scholar and empirical health-law researcher. It should be serious, restrained, scholarly, and publication-oriented—not a generic portfolio, startup landing page, personal blog, or data-dashboard product.

The selected design is a hybrid:

- primarily the **Research Observatory** concept;
- with the typography, restraint, and editorial seriousness of a **Scholar's Journal**;
- with selective use of interactive research tools where they add scholarly value.

The intended balance is approximately:

- 70% Research Observatory
- 20% Scholar's Journal
- 10% Data Studio

Do not drift toward a dashboard-heavy design unless explicitly instructed.

## Source of truth

Use these files as the durable project memory:

- `WEBSITE_SPEC.md` — product requirements
- `docs/DESIGN_SYSTEM.md` — visual system
- `docs/DEVELOPMENT.md` — environment, build, and deployment
- `docs/HANDOFF.md` — current state and next task

Do not rely on prior Codex chat history as the source of truth.

If you make a durable architectural or design decision that is not already documented, update the appropriate file in the same pull request or commit.

## Development rules

1. Keep `main` stable.
2. For substantive changes, work on a branch and prefer a pull request.
3. Make focused commits with meaningful messages.
4. Never leave important work only in a local working tree.
5. Before ending a substantial work session, commit and push changes and update `docs/HANDOFF.md`.
6. Avoid absolute paths or machine-specific assumptions.
7. Keep the project reproducible on Windows, macOS, and Linux wherever reasonably practical.
8. Do not add dependencies merely for convenience; prefer a minimal, maintainable stack.
9. Do not introduce a server, database, CMS, or paid service without explicit approval.
10. Prefer static generation and browser-side interactivity.
11. Do not add analytics, cookies, trackers, advertising, mailing-list integrations, or third-party embeds without explicit approval.
12. Do not add AI chatbots or other novelty features to the public site unless explicitly requested.

## Content safety and privacy

Assume the repository and deployed site are public.

Never commit:

- restricted data;
- proprietary/licensed data that cannot be redistributed;
- PHI or other sensitive information;
- credentials or tokens;
- private PDFs or correspondence;
- machine secrets;
- local configuration containing private paths or usernames.

If a requested feature appears to require restricted or proprietary source material, stop and propose a public-safe architecture rather than copying the material into the repository.

## Design discipline

Follow `docs/DESIGN_SYSTEM.md`.

In particular:

- white or near-white background;
- black/charcoal primary text;
- restrained deep crimson accent;
- serif display/headline typography paired with a highly legible sans-serif UI/body face;
- generous whitespace;
- minimal animation;
- clear hierarchy;
- scholarly rather than commercial tone;
- research figures and maps preferred over decorative stock imagery;
- no generic courthouse gavels, scales of justice, medical stock icons, or similar clichés unless explicitly requested.

Do not redesign the site based on a default framework theme. The Quarto theme is a starting point, not the final visual identity.

## Accessibility and responsiveness

Treat accessibility as a baseline requirement, not a later cleanup task.

- Use semantic HTML.
- Maintain keyboard navigability.
- Use visible focus states.
- Preserve adequate color contrast.
- Do not convey meaning by color alone.
- Provide alt text for meaningful images.
- Make interactive figures usable or understandable on mobile.
- Ensure the navigation works on small screens.
- Avoid text that becomes unreadably small on mobile.
- Respect reduced-motion preferences.
- Prefer progressive enhancement when adding interactivity.

## Research pages

The fundamental unit of the site is often a **research project**, not merely a publication citation.

A major project page may ultimately contain:

- overview;
- paper(s);
- abstract;
- publication/journal link;
- key findings;
- static figures;
- interactive figures;
- public data;
- code;
- documentation;
- related research.

Interactive research belongs beside the relevant scholarship, not in a separate novelty section merely because it is interactive.

## Data and code

Small public datasets used by browser-side graphics may live in the repository.

Large public datasets should usually live in an appropriate external repository, with stable links from the site.

Replication packages may be separate GitHub repositories. The website should serve as the polished front end that links papers, data, code, and interactive outputs together.

## Implementation restraint

Do not overengineer.

Prefer:

- Quarto;
- Markdown / `.qmd`;
- CSS;
- small amounts of JavaScript where useful;
- static assets;
- browser-side interactive libraries when they materially improve the research presentation.

Avoid:

- React/Vue/Svelte application architectures unless a concrete feature justifies them;
- server-side frameworks;
- databases;
- authentication systems;
- CMS platforms;
- complex build tooling;
- infrastructure that creates recurring maintenance without clear scholarly value.

## Verification before completion

For every substantive implementation task:

1. Render/build the site successfully.
2. Check for broken internal links.
3. Check the changed pages at desktop and mobile widths.
4. Verify that navigation remains consistent.
5. Verify that no private/restricted material was added.
6. Summarize exactly what changed.
7. Update `docs/HANDOFF.md` with:
   - completed work;
   - unresolved issues;
   - next recommended task;
   - any setup changes required on another machine.

## Current constraint

The minimal Quarto site skeleton is complete. Do **not** proceed to substantive content integration, deployment, custom-domain configuration, or later implementation work until the next task in `docs/HANDOFF.md` is explicitly authorized.
