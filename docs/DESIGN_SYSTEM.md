# Design System

## 1. Design intent

The visual identity should be:

- scholarly;
- restrained;
- confident;
- modern but not trendy;
- editorial rather than commercial;
- research-forward;
- highly readable.

The visual reference is the approved **hybrid homepage concept**: a Research Observatory structure with Scholar's Journal typography and restraint.

The site should feel closer to a strong academic journal, university press, or serious research center than to a startup landing page.

## 2. Core visual principle

**The scholarship is the visual content.**

Whenever possible, use:
- maps;
- empirical figures;
- diagrams;
- paper/project imagery generated from the research itself;
- carefully typeset text.

Avoid relying on generic decorative photography.

## 3. Color

Baseline palette:

- Background: white or very near-white
- Primary text: black / charcoal
- Secondary text: medium gray
- Accent: restrained deep crimson / muted Alabama-adjacent red
- Rules/borders: very light gray
- Panels/cards: subtle off-white or light gray only when needed for hierarchy

Do not flood the site with crimson.

The accent should be used sparingly for:
- links;
- small rules;
- buttons;
- active navigation states;
- selected research highlights.

Do not rely on color alone to communicate status or data meaning.

Exact color tokens should be defined centrally in CSS when implementation begins.

## 4. Typography

Use:
- an elegant, readable **serif** for display headings and selected editorial text;
- a highly legible **sans-serif** for navigation, UI, metadata, and most body copy.

Avoid:
- novelty fonts;
- handwritten fonts;
- highly condensed fonts;
- excessive font families.

Typography should carry much of the visual identity.

Font selection should consider:
- web availability;
- performance;
- licensing;
- accessibility;
- consistent rendering across platforms.

Prefer system/open web fonts unless a compelling reason justifies another choice.

## 5. Layout

General rules:

- generous whitespace;
- strong vertical rhythm;
- comfortable reading widths;
- clear grid;
- restrained card use;
- thin separators instead of heavy boxes;
- ample margins on desktop;
- thoughtful collapse on mobile.

The site should not feel crowded even when it contains substantial research content.

Avoid:
- dashboard density;
- excessive sidebars;
- nested cards;
- full-width walls of text;
- decorative gradients;
- glassmorphism;
- heavy shadows;
- floating UI unless functionally necessary.

## 6. Header and navigation

Header should remain simple and professional.

Desktop:
- name/identity on the left;
- primary navigation on the right.

Mobile:
- compact accessible menu;
- no horizontal overflow;
- no tiny touch targets.

Navigation labels should remain conventional and immediately understandable.

## 7. Homepage hierarchy

Desired hierarchy:

1. Name and professional identity
2. Short research descriptor
3. Primary actions: CV and Research
4. Featured research visual/project
5. Selected Research
6. Additional current work or resources as appropriate

The homepage should provide enough substance to communicate the research program without becoming a full CV.

## 8. Research cards/modules

Research cards should be editorial rather than commercial.

Preferred characteristics:
- one strong project title;
- concise descriptor;
- small number of relevant links;
- optional research-derived image/figure;
- subtle borders/rules;
- no exaggerated shadows or hover animation.

Do not use identical generic cards for every type of content merely for consistency.

## 9. Buttons and links

Buttons should be used selectively for high-priority actions such as:
- View CV
- Explore Research
- Download data/code where appropriate

Most scholarly navigation should remain ordinary text links.

Use underlines or other clear hover/focus affordances.

## 10. Images

Preferred:
- approved professional headshot if later supplied;
- research figures;
- maps;
- diagrams;
- selected project imagery with clear relevance.

Avoid:
- gavels;
- scales of justice;
- courthouse stock imagery;
- generic stethoscopes;
- anonymous doctors in white coats;
- abstract AI/network imagery;
- decorative hospital photos;
- anything that makes the site look like a law firm or health-tech company.

If a placeholder is needed, prefer an understated layout placeholder over irrelevant stock imagery.

## 11. Data visualization

Interactive and static figures should:
- preserve the aesthetic discipline of published academic figures;
- use clear labels;
- avoid unnecessary decoration;
- expose data definitions/notes where useful;
- support keyboard interaction where practical;
- provide readable tooltips;
- remain legible on mobile;
- not misrepresent uncertainty or fabricate results.

Do not invent demonstration data that could be mistaken for actual research findings on the public site.

## 12. Motion

Default: minimal.

Allow only subtle transitions where they improve comprehension.

No:
- parallax;
- animated hero text;
- scroll-jacking;
- autoplay graphics;
- decorative count-up statistics;
- looping background animation.

Respect `prefers-reduced-motion`.

## 13. Accessibility

Baseline targets:

- semantic heading order;
- strong contrast;
- keyboard-accessible navigation;
- visible focus states;
- meaningful alt text;
- accessible link text;
- appropriate ARIA only when semantic HTML is insufficient;
- sufficient touch target size;
- responsive type sizing;
- no information conveyed solely by hover.

## 14. Responsive behavior

The mobile site is a first-class deliverable.

On smaller screens:
- hero columns stack naturally;
- research visuals move below primary identity text;
- cards become single-column or well-spaced compact modules;
- navigation becomes an accessible menu;
- long publication titles wrap cleanly;
- tables/figures use deliberate mobile handling rather than shrinking to unreadability.

## 15. Prohibited drift

Do not let implementation drift toward:
- generic Bootstrap defaults;
- corporate consulting site;
- SaaS product landing page;
- data-dashboard portal;
- law-firm branding;
- university departmental template;
- blog-first design.

Any significant change in visual direction should be documented and approved before implementation.
