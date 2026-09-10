# Project Handoff

## Current status

**Stage: Foundation specification**

The GitHub repository exists:

`bjmcmichael/bjmcmichael.github.io`

The repository is intended to become Benjamin J. McMichael's personal academic website and public research interface.

The selected visual/product direction has been decided and is documented in:

- `WEBSITE_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

The durable coding-agent rules are documented in:

- `AGENTS.md`

The cross-machine and build philosophy is documented in:

- `docs/DEVELOPMENT.md`

At this stage, **no substantive website code should exist yet** beyond these documentation files.

## Decisions already made

### Product
- Personal academic website
- Research-first rather than biography-first
- Conventional academic information remains easy to find
- Major research projects may eventually contain public interactive figures/maps/data/code

### Design
- Hybrid design selected
- Approximately 70% Research Observatory / 20% Scholar's Journal / 10% Data Studio
- White/near-white background
- Black/charcoal text
- Restrained deep crimson accent
- Serif-led editorial headings
- Clean sans-serif UI/body typography
- Research outputs preferred over decorative stock imagery
- Minimal motion
- No dashboard-heavy appearance

### Technical
- Quarto
- GitHub
- GitHub Pages
- Custom domain later
- Static/browser-side interactivity first
- No paid infrastructure unless specifically justified
- Repository must be portable across machines

### Security
- Treat repository and deployed site as public
- No restricted data
- No credentials
- No proprietary/licensed materials unless redistribution is authorized

## Information that is not yet finalized

Do not invent these values:

- final custom domain;
- final homepage bio copy;
- final headshot/photo;
- full publication metadata;
- final research project descriptions;
- public data/code links;
- external profile URLs;
- the first interactive research component;
- analytics;
- any contact form.

## Next recommended task

### Task: Build the minimal Quarto site skeleton

This is the **first implementation task**, but it should begin only when explicitly authorized.

The implementation should:

1. Read all governing project documents.
2. Create the minimum Quarto website structure.
3. Create placeholder top-level pages:
   - Home
   - Research
   - Publications
   - Data & Code
   - Teaching
   - CV
   - About
   - Contact
4. Implement the initial custom visual system in a central stylesheet.
5. Make the homepage structurally resemble the approved hybrid concept:
   - identity/hero;
   - research descriptor;
   - CV/Research actions;
   - featured-research placeholder;
   - three Selected Research entries.
6. Use placeholders where factual content has not been supplied.
7. Do **not** fabricate research statistics or findings.
8. Do **not** add real interactive figures yet.
9. Make the site responsive.
10. Ensure `quarto render` succeeds.
11. Do not configure the custom domain yet.
12. Do not add paid services or server-side infrastructure.
13. Update `docs/DEVELOPMENT.md` with the actual tested build process.
14. Update this handoff document with what was completed and the next recommended task.

## Suggested first branch name

`build/initial-quarto-skeleton`

## Definition of done for the next task

- Quarto project exists.
- All top-level placeholder pages render.
- Navigation works.
- Custom CSS establishes the intended visual direction.
- Homepage clearly resembles the approved hybrid architecture.
- No fake empirical content is presented as real.
- Site renders successfully locally.
- Repository contains enough documentation for another computer/Codex session to continue.
- `docs/HANDOFF.md` identifies the next step.
