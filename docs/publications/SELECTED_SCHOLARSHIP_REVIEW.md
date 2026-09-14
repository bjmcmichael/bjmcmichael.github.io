# Research-program Scholarship Policy

Status: **implemented on the Milestone 2F feature branch; awaiting review**

The filename is retained for Milestone 2E history, but the earlier compact “Selected Scholarship” recommendation has been superseded. The governing policy is now complete topic-based association, not curation to a short list. The public heading remains **“Selected Scholarship”** as an editorial label; it does not indicate a capped subset.

## Governing rule

If a publication substantively belongs to a Research program, it remains associated with that program. Research-program pages render the complete set of publications with that approved topic membership from `data/publications.yml` under the heading “Selected Scholarship.”

A paper must not be excluded from a Research program merely because:

- it is older;
- another paper covers related ground;
- it also belongs to another Research program;
- a program already contains many publications; or
- including it makes the page longer.

Substantive relevance controls membership. Topic membership remains many-to-many, and a publication may also have no current topic when none of the six approved programs fits.

## Topic membership is not homepage selection

Research-program membership does not grant homepage placement. Homepage selections remain a separate editorial decision and separate metadata concern. Nothing in Milestone 2E changes the existing homepage.

Likewise, a future visual distinction between “Featured” and “All Scholarship” would be a presentation choice only. Featured treatment must not remove a relevant paper's topic membership or prevent the complete topic corpus from being available on its Research-program page.

## Approved program corpora

The topic decisions in `TOPIC_CODING_REVIEW.yml` and `TOPIC_CODING_REPORT.md` define the complete approved corpora for the next production milestone:

| Research program | Approved publication count |
|---|---:|
| Professional Licensing & Scope of Practice | 17 |
| Organ Allocation & Transplant Policy | 4 |
| Tort Law & Medical Liability | 17 |
| Opioids, Drug Policy & Harm Reduction | 6 |
| Reproductive Health & Family Formation | 4 |
| Health Care Payments & Financial Accountability | 8 |

No reduced 4–6-paper subset is recommended for Licensing, Organ Allocation, Torts, Drug Policy, or Reproductive Health.

## Payments transition

Five Payments papers were approved before Milestone 2E and initially populated the public Payments page's “Selected Scholarship” module:

1. `mh-state-legislation-industry-compensation-orthopaedic-residents`
2. `mh-open-payments-orthopedic-residents`
3. `sw-macra-incident-to-billing`
4. `lr-constitutional-false-claims-act`
5. `lr-constitutional-accounting-false-claims-act`

That five-item module is an accurate historical implementation, but it is not the forward limit for the Payments program. Milestone 2E approved three additional Payments memberships:

1. `mh-maximizing-nursing-workforce`
2. `bc-economic-context-nursing-practice-united-states`
3. `sw-np-entrepreneurs-primary-care-lifeline`

With Milestone 2E promoted into production, the Payments Research page therefore renders all eight Payments publications. Its five-item state remains an accurate historical implementation, not a forward limit.

## Implemented rendering architecture

Milestone 2F:

1. promotes the approved topic memberships into `data/publications.yml`;
2. generates each Research-program scholarship section from topic membership rather than hand-maintained citation lists;
3. retains **“Selected Scholarship”** across all six Research-program pages as the approved public heading; and
4. renders every publication assigned to the page's program.

This heading decision supersedes Milestone 2E's recommendation to rename the section “Scholarship.” Every approved topic member still appears, so “Selected” is not a numerical cap or a separate curation field.

If a complete list becomes visually long, presentation may be improved through restrained spacing or year grouping. The default page must continue to expose the complete topic corpus and must not change membership metadata.

Public topic-filter UI remains a separate, deferred implementation decision.
