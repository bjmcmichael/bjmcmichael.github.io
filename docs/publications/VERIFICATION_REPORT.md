# Publications Metadata Verification Report

## Scope and result

This Milestone 2C review checked all 49 records in
`docs/publications/inventory.yml` against public publisher, journal, DOI,
PubMed, SSRN, or institutional-repository records. The source inventory remains
unchanged as the original September 2026 CV-transcription snapshot. Reviewed
metadata is recorded separately in `docs/publications/reviewed_inventory.yml`.

All 49 stable IDs are retained. No record was added, removed, combined, or
promoted to a public page. Forty-three records have no recorded citation
caution; six are externally checked but retain an explicitly identified
unresolved field. A missing optional identifier or final forthcoming detail does
not by itself prevent future inclusion after implementation is authorized.
Each record continues to inherit its CV disciplinary section and publication
type unchanged; topic membership is a separate editorial dimension.

## Verification method

The review preferred, in order:

1. the publication's journal or publisher record;
2. DOI registration and resolution;
3. PubMed for indexed health and medical publications;
4. SSRN for current working-paper or forthcoming status;
5. an official university or journal institutional repository.

The review checked exact titles, ordered authorship, publication status, venue,
year, volume, issue, page range or article number, DOI/PMID where available, and
a stable public link. No abstract, finding, manuscript, dataset, or restricted
material was copied into the repository.

## Approved Research-program amendment

The approved forward architecture now has six programs. The sixth is **Health
Care Payments & Financial Accountability**, with stable ID `payments`, short
filter label **Payments & Accountability**, and future path
`research/payments/index.qmd`. It follows the five programs already implemented
in Milestone 2B.

The scope covers health care payment and billing rules, industry financial
relationships, and legal accountability for public spending, including False
Claims Act scholarship. False Claims Act work is not limited to health care, and
future public copy must follow verified sources rather than imply otherwise.
This decision replaces the earlier blanket exclusion of payment research from
the public Research taxonomy, but it does not authorize unfinished AMA RUC / RVU
work or any private or preliminary material.

The following five existing records are separately marked both for `payments`
topic membership and for the future payments page's initial Selected Scholarship
list:

- `mh-state-legislation-industry-compensation-orthopaedic-residents`
- `mh-open-payments-orthopedic-residents`
- `sw-macra-incident-to-billing`
- `lr-constitutional-false-claims-act`
- `lr-constitutional-accounting-false-claims-act`

No homepage placement, other topic membership, or additional curated placement
was approved.

## Priority-record results

| Stable ID | Verification result | Current status and link |
|---|---|---|
| `mh-state-legislation-industry-compensation-orthopaedic-residents` | Full eight-author order, publisher title, issue, e-pages, DOI, and PMID checked | Published, 2020; [PubMed](https://pubmed.ncbi.nlm.nih.gov/32441903/) |
| `mh-open-payments-orthopedic-residents` | Full eight-author order, issue, pages, DOI, and PMID checked | Published, 2020; [PubMed](https://pubmed.ncbi.nlm.nih.gov/32546385/) |
| `sw-macra-incident-to-billing` | Full seven-author order, date, venue, and DOI checked | Published, 2018; [DOI](https://doi.org/10.1377/hblog20180103.135358) |
| `lr-constitutional-false-claims-act` | Three-author order, volume, issue, pages, and journal page checked | Published, 2025; [Washington University Law Review](https://wustllawreview.org/2025/02/25/a-constitutional-false-claims-act/) |
| `lr-constitutional-accounting-false-claims-act` | Three-author order, current forthcoming status, SSRN DOI, and Vanderbilt research-paper number checked | Vanderbilt Law Review, forthcoming; [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6271820) |

The two False Claims Act articles are distinct publications and remain separate.
The published Washington University Law Review article and the separately
forthcoming Vanderbilt Law Review article have different titles, author order,
status, and records.

## Material citation updates from the CV snapshot

- Two records the CV labels forthcoming are now published: the Journal of
  Nursing Regulation article and the Medical Care Research and Review pediatric
  hospitalizations article.
- The American Journal of Health Economics publisher currently labels “Sharing
  Is Caring” as Just Accepted; final volume, issue, and pages are not yet shown.
- “The Failure of ‘Sorry’” is dated 2018 by the Lewis & Clark Law Review
  repository, while the CV cites 2019.
- The Nursing Outlook record is 72(1):102016, not volume 71, pages 1–6.
- The first Open Payments title uses “3-Year” and the full Centers for Medicare
  and Medicaid Services name in the publisher/PubMed record, with pages
  e1020–e1028.
- Several health-journal records use article numbers rather than conventional
  page ranges. The reviewed data follows the publisher or index record.

These are corrections in the reviewed overlay only. The source inventory is
intentionally unchanged so the CV transcription remains auditable.

## Unresolved fields

Six externally checked records retain narrow cautions:

- `lr-constitutional-accounting-false-claims-act`: final volume, issue, and
  pages are not yet available from the forthcoming record.
- `lr-socially-distant-healthcare`: SSRN and the Alabama repository index show
  different author orders; the published-version order and issue remain to be
  confirmed from a stable journal record.
- `lr-access-to-care-epidemic`: sources disagree whether the ending page is 607
  or 608.
- `el-sharing-is-caring-organ-allocation`: final volume, issue, and pages are
  unavailable while the publisher lists the paper as Just Accepted.
- `mh-ambulatory-sensitive-conditions-scope-laws`: the checked publisher record
  does not expose a page range or article number beyond its PII.
- `bc-economic-context-nursing-practice-united-states`: the checked publisher
  chapter record does not expose a page range.

These cautions are bibliographic, not editorial. They do not reopen the approval
of the five payments-topic records.

## Implementation boundary

No public `.qmd` page, stylesheet, navigation entry, Quarto configuration,
homepage content, existing Research-program page, deployment setting, or domain
setting was changed. The next separately authorized implementation must use a
shared publication source, add the sixth Research-index entry and landing page,
provide a source-grounded overview, and render the five approved Selected
Scholarship records without duplicating their citations across pages.
