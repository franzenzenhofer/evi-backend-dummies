Defne  an interace for an querybuilder landingape geneartero  for www.evi.gv.at . the idea is that the editor sets a backgorund search a la i.e. Insolvenzen + Location (add lots of tohter define filter fields( and then create a page a al  /lp/insolvenzen-wien and then can also set Meta Descirpton with placheodler like %results-number% and other SEO elements and settings i.e. canonical, number of list page resutls and so on!! and then there is a publish button!!! come up with thow this lofic might work and how such an interace must ook like!!! quierue builder is bascially a search filtered page! it reate a singel page!!!! based on a mpoerdful backend search interace!! that gets than packed into an text, dfield should incldue H1 and also intro text and post listpage content! 
ChatGPT said:
Thought

Got it! Here’s a tight, end-to-end spec for a Query-Builder Landing-Page Generator for evi.gv.at—built for editors to define a search, wrap it in content/SEO, and publish a single canonical landing page like /lp/insolvenzen-wien.

Goals (what this tool does)

Turn a saved search (e.g., Insolvenzen filtered to Wien) into a static, SEO-friendly landing page.

Let editors control content (H1, intro, body), SEO (title, meta, canonical, schema), and rendering (layout, list size).

Provide preview, QC checks, and a publish flow with versioning and rollback.

Editor flow (tabs & steps)

Create

Page name (internal): “Insolvenzen – Wien”

Slug generator: /lp/insolvenzen-wien (editable; validates uniqueness/redirects on change)

Query Builder (the “background search”)

Index/Domain: Insolvenzen (choose content source)

Filters (multi-select & chips)

Geography: Bundesland, Bezirk, PLZ, Gemeinde

Time: Zeitraum (rolling windows: last 7/30/90 days; fixed ranges)

Status: open/closed, ongoing/completed

Entity facets: Branche/NACE, Rechtsform, Größenklasse

Data quality: min fields present, exclude duplicates, language

Sorting: newest, most relevant, by magnitude (e.g., liabilities), alphabetical

Result cap: hard cap (e.g., 2,000) with sample windowing

Zero-result fallback: switch to parent geo or broaden time (configurable)

Live vs Snapshot:

Live query (page always reflects current data)

Snapshot (freeze result set at publish time; store IDs)

Preview panel:

Result count badge (live & snapshot numbers)

First 10 items list preview with card template

Quick filters simulator (what visitors will see, if enabled)

Content

H1 (supports placeholders)

Intro / Teaser (rich text, placeholders)

Body (before list) (rich text, optional module embed)

List component: choose List/Grid/Map+List, card style, items per page (e.g., 20)

Body (after list) (FAQ, guidance, CTAs)

Side modules (optional): sticky TOC, filter exposure, “top facets”, related links

SEO

Title (placeholders)

Meta description (placeholders)

Canonical: self / custom URL / none

Robots: index|noindex, follow|nofollow

Pagination policy:

Paginate with canonical to page 1, or

Single page with “load more” (no crawl)

OpenGraph / Twitter: title, description, image (upload or auto-generate)

Schema.org: ItemList (min/max), BreadcrumbList; optional FAQPage for after-list FAQs

Hreflang: auto across de-AT/de-DE (if multilingual later)

Sitemap: include/exclude, priority, changefreq

Enrichment (optional)

Trends widget: attach Google Trends for the query/geo (renders a small chart & “interest over time” copy block)

Computed stats: % increase vs last month, top 3 districts, etc.

QC (Quality & Compliance)

Warnings & blockers:

Duplicate slug / conflicting canonical

Thin content (H1 missing, intro < 140 chars, no body)

Zero results (and no fallback)

Robots noindex + sitemap include (mismatch)

Over-wide query (>2k results) without pagination

Accessibility: color contrast, heading order, alt text checks for OG image

Preview

Desktop/tablet/mobile toggles

Test with “simulate date/geo/user location”

Live structured-data validator output

Publish

Save Draft → Request Review → Publish (roles below)

Schedule: date/time (optional)

Versioning: keep diff (query, content, SEO); Rollback button

Outputs:

Static HTML (SSR) + JSON-LD

Cache key: lp:{slug}:{version}

Add to sitemap (if enabled)

(If Live query): background job to refresh count badges and JSON-LD itemCount

Placeholders (available in H1, intro, body, SEO fields)

%query-term% → “Insolvenzen”

%location-name% → “Wien”

%results-number% → “1 274” (localized)

%results-number-rounded% → “1,3 Tsd.”

%time-window% → “letzte 90 Tage”

%publish-date% / %last-updated%

%top-facet:branche% → “Bau, Handel, Dienstleistungen”

%first-result-date% / %latest-result-date%

%trend-delta% → “+12 % zum Vormonat” (if enrichment enabled)

%page% (only for paginated rendering; suppressed in canonical)

Placeholders render server-side. If a value is unavailable, define a graceful default or omit the token.

Data model (LP definition)

Core

id, status (draft/review/published), createdBy, updatedBy, version

Routing

slug (/lp/insolvenzen-wien), titleInternal

Query

mode: live | snapshot

index: insolvenzen

filters: { geo: { bundesland: "Wien", bezirk: [] }, timeRange: { type: "rolling", days: 90 }, status: ["offen"], branche: [], rechtsform: [], quality: { minFields: 5 }, dedupe: true }

sort: { field: "date", order: "desc" }

cap: 2000

snapshotIds: [ids...] (if snapshot)

Content

h1, introHtml, bodyBeforeListHtml, bodyAfterListHtml

list: { template: "list", itemsPerPage: 20, exposeFilters: ["bezirk","branche"] }

modules: [{ type: "trends", query: "Insolvenzen", geo: "AT-W" }]

SEO

metaTitle, metaDescription

canonical: "self" | "custom" with url

robots: { index: true, follow: true }

og: { title, description, imageUrl }

twitter: { title, description, imageUrl }

schema: { itemList: true, breadcrumb: true, faq: [...] }

sitemap: { include: true, priority: 0.6, changefreq: "daily" }

pagination: { type: "single" | "paged", canonicalToPage1: true }

Governance

reviewNotes, changelog: [{version, user, changes, timestamp}]

Example (filled)

Slug: /lp/insolvenzen-wien

H1: Insolvenzen in %location-name% – %time-window%

Intro: Aktuelle Übersicht zu Unternehmensinsolvenzen in %location-name%. Insgesamt %results-number% Fälle in %time-window%.

Meta Title: Insolvenzen Wien – aktuelle Fälle & Entwicklung

Meta Description: %results-number% Insolvenzen in %location-name% in %time-window%. Trends, Verteilung nach Bezirken & Branchen.

List: 20 per page, sort by newest

Canonical: self

Schema: ItemList with itemCount=%results-number%

Enrichment: Trends: “Insolvenzen” / AT-W

Mode: Live query (refresh counts daily @ 03:00)

Template & rendering logic

Server-side render a static HTML page on publish (and on scheduled refresh for live).

Inject JSON-LD ItemList (first 10 visible items only; include itemCount).

If pagination: pages /lp/insolvenzen-wien?page=2 are indexable=false; canonical points to page 1.

Sitemap lists only page 1.

OG image: allow auto-generate (title + key metric badge) or upload.

Governance / roles

Editor: create & edit draft

SEO Lead: approve (required if index = true)

Publisher: publish/schedule, rollback

Audit log on every change; diff viewer for query & content

QC rules (examples)

Blockers: duplicate slug, zero results without fallback, missing H1, canonical conflict, noindex + sitemap included

Warnings: thin intro (<140 chars), title > 60 chars, meta > 160 chars, over-broad query (>2k) without pagination, too many placeholders unresolved, empty OG image

Analytics & ops

UTM link helpers for internal CTAs

GSC ping on publish

Eventing: impressions, list item clicks, filter interactions, pagination, outbound link tracking

Health: monitor zero-result flips and trend anomalies; notify editor

UI sketch (sections)

Header: [Back] Page name • Status • [Preview] [Save] [Request Review] [Publish]

Tabs: Query | Content | SEO | Enrichment | QC | Preview

Query tab layout

Left: filter form (facet pickers, geo selector, time range, sort)

Right: result count + sample list + “Simulate user filters” toggle

Footer: Live vs Snapshot selector; Zero-result fallback strategy

Content tab

H1 (with placeholder helper)

Intro (rich text)

Body before list (rich text)

List block (template, items/page, exposed filters)

Body after list (rich text / FAQ)

SEO tab

Title, Meta description (live character counters, placeholder preview)

Canonical selector, robots switch

OG/Twitter image upload or “Auto”

Schema toggles (ItemList, FAQ)

Pagination policy

Enrichment tab

Google Trends attach (query, geo, range)

Computed metrics toggles

QC tab

Errors (block publish), Warnings (advisory) with fix links

Preview tab

Device frames, URL, structured data validation status

Tech notes

Storage: LP definition as JSON (see model above)

Search: represent query as engine-native JSON (e.g., Elasticsearch) + human readable summary

Jobs: nightly refresh for live pages (itemCount, Trends values, OG auto-image)

Caching: CDN edge cache; purge on publish/rollback

Redirects: slug change → auto 301 from old to new

Edge cases & policies

0 results at runtime → show broadened parent geo (if enabled) + banner “Ergebnisse erweitert”

Geo synonyms (Wien/W/AT-W) → normalized; slug generator uses canonical label

Multilingual future → keep placeholders language-agnostic; Hreflang later

If you want, I can turn this into a clickable React admin mock or a JSON schema you can hand to engineering.

Publish
You said:
NO TABS!!!!!!! 
ChatGPT said:
Thought

got it — no tabs. here’s a single-page, scrollable editor with a sticky preview + publish bar. everything lives on one screen with section anchors and inline QC (no hidden steps).

Layout (no tabs)

Top bar (sticky): Status • [Preview] • [Save] • [Request review] • [Publish / Schedule]

Left rail (sticky): Section anchors (01–06), each shows a small ✅/⚠️/⛔ status. Click = scroll-to.

Main column (scroll): Stacked cards (expandable, not switchy).

Right rail (sticky): Live preview (desktop/tablet/mobile), SD validation, key metrics (%results-number%).

Sections (stacked cards)
01. Basics

Page name (internal)

Slug (auto from name → /lp/insolvenzen-wien) • uniqueness check • auto-301 on change (confirm)

Ownership: createdBy, lastEditedBy

Mode: Live (always fresh) / Snapshot (freeze IDs at publish)

02. Query Builder (the “background search”)

Index: Insolvenzen

Filters:

Geo: Bundesland, Bezirk, PLZ, Gemeinde

Time: rolling (7/30/90) or fixed range

Status: offen/geschlossen/…

Branche (NACE), Rechtsform, Größenklasse

Data quality: min fields, dedupe

Sort: date desc | relevance | amount | name

Cap: max results (e.g., 2000)

Zero-result fallback: broaden geo ↑ or widen time window (toggle + priority)

Result preview (inline): count badge, first 10 cards, simulate-filter toggle

Snapshot control (if Snapshot): [Capture now] → shows frozen count & timestamp

03. Content (rendered around the list)

H1 (placeholders supported)

Intro / Teaser (rich text)

Body BEFORE list (rich text / components)

List block: layout (List | Grid | Map+List), items per page (e.g., 20), expose-filters (chips on page)

Body AFTER list (FAQ/CTAs)

Related links (optional)

04. SEO (inline, not a tab)

Title (+ counter) • Meta description (+ counter) — placeholders allowed

Canonical: self | custom

Robots: index/follow toggles

OpenGraph/Twitter: title/description + image (upload or auto-generate)

Schema: ItemList (itemCount), BreadcrumbList, optional FAQPage (from AFTER-list)

Pagination policy: single page (load more, noindex) or paged (canonical → page 1)

Sitemap: include, priority, changefreq

05. Enrichment (optional)

Google Trends widget: query + geo + range

Computed stats: MoM delta, top Bezirke/Branchen; exposes placeholders

06. QC & Publish

Inline checks show under each section; summary here aggregates:

⛔ Blockers: duplicate slug / zero results w/o fallback / missing H1 / canonical conflict / noindex + in sitemap

⚠️ Warnings: intro too short, title >60, meta >160, >2k results w/o pagination, unresolved placeholders

Diff viewer (current vs last published)

Schedule (date/time) • Publish • Rollback dropdown

Placeholders (usable in H1/Intro/Body/SEO)

%query-term%, %location-name%, %results-number%, %results-number-rounded%, %time-window%, %publish-date%, %last-updated%, %top-facet:branche%, %first-result-date%, %latest-result-date%, %trend-delta%, %page% (auto-suppressed on canonical).

Example fill

Slug: /lp/insolvenzen-wien

H1: Insolvenzen in %location-name% – %time-window%

Intro: Überblick über %results-number% Fälle in %location-name% in %time-window%.

Title: Insolvenzen Wien – aktuelle Fälle & Entwicklung

Meta: %results-number% Insolvenzen in %location-name%. Trends & Verteilung.

List: 20 / page, newest first

Mode: Live (refresh counts daily 03:00)

Logic & rendering

On Save: validate + store JSON definition; generate OG (if auto).

On Publish: SSR static HTML, inject JSON-LD (ItemList with itemCount), update sitemap (page 1 only), set cache key lp:{slug}:{version}, warm CDN.

Live mode job: refresh itemCount, Trends, OG image; purge CDN.

Pagination: only page 1 indexable; deeper pages noindex + canonical→1 (or single-page “load more” with no crawl).

Zero results at runtime: apply fallback rule and show banner “Ergebnisse erweitert”.

Keyboard & micro-UX (single page)

⌘/Ctrl+K: jump to section

Per-section “Compact summary” row (shows active filters, counts, title/meta lengths)

Inline preview updates on field blur; full preview in right rail is sticky.

If you want, I can sketch this as a one-page React admin mock (no tabs, anchored sections) so you can hand it to eng/design.

Publish
You said:
sketch it via the image tool, but ad time: default is from start! and ont setting taht show listitems per page, default 15 
ChatGPT said:
Thought
Image created
Share
You said:
ok, now a decierptioon for this concept Okay, this one is different because the thing is in this one, we don't create one page, but actually this is like a filter, a predefined filtered page generator. The thing is, we have metadata. We have metadata. We have metadata, like we have a database of organizations like Bundesministerium für Inneres, Bundesministerium für Finanzen, because we're talking www.efigv.at, das österreichische Amtsplatz, Landwirtschaftsministerium, and we have a list of locations, and I want them actually all be with checkboxes, so actually list all of the ministries and also Österreichische Nationalbank. Some of them are checked, some of them not, and then we have locations, and the locations is like all of the Bundesländer, but then there's also like cities and so on, and some of them are checked, some of them not, and then actually here. So, and out of this, so basically out of this, we do a few things because actually the quality criteria must also be checked. This is like at least five list items, active and inactive, both checked. That's the quality criteria, and yeah, the difference is that this one now creates not one kind of page, but multiple pages, so the CEO title and the HEIDL headline is actually split with templates, with template variable, like jobs, Finanzministerium, jobs, lint. So, and out of this one, actually there's like placeholders for the CEO title and for the meet description and for the H1, and then actually there should be an indicator of how many of these pages are going to be generated that meet the quality criteria, how many of these pages don't meet the quality criteria, but they should all basically be in there. Please actually come up with a very full future specification for this approach of creating lots and lots of list pages. 
ChatGPT said:
Thought

alright — here’s a full, future-proof spec for the “Predefined Filtered Page Generator” (multi-page) for www.evi.gv.at
 (jobs use-case, ministries + OeNB + locations). It’s a single scrolling screen (no tabs), bulk-generates many list pages from metadata, applies QC, wires SEO, then publishes.

0) Core concept

Editors tick checkboxes for Organizations (e.g., Bundesministerium für Finanzen, Bundesministerium für Inneres, Landwirtschaftsministerium, Österreichische Nationalbank) and Locations (Bundesländer → Bezirke → Städte/PLZ).

The tool produces one page per (org × location) combo (or per org, per location—configurable), using templates for H1/Title/Meta and a predefined search behind each page.

QC ensures pages only publish if they meet quality criteria (default: ≥5 list items; Status filters “active” + “inactive” both included).

Defaults:

Time window: “from start” (no lower bound; i.e., all historical records).

List items per page: 15 (editor can override).

Everything is server-rendered (SSR) with JSON-LD, canonical/pagination rules, and bulk sitemaps.

1) Single-page UI (no tabs)

Sticky top bar: Status • [Preview] • [Save] • [Generate Dry-Run] • [Publish Passing] • [Export CSV]

Section A — Scope & Templates

Page Family Name (internal): “Jobs • Ministerien + OeNB”

Route Pattern (slug template):
/jobs/{org_slug}-{location_slug} (fallbacks: /jobs/{org_slug} or /jobs/{location_slug})
Umlaut rules: ä→ae, ö→oe, ü→ue, ß→ss; collapse dashes; lowercase.

H1 Template: Jobs {org_name} {location_name}

SEO Title Template: Jobs {org_short} – {location_name}

Meta Description Template: {results_number} Jobs bei {org_name} in {location_name} (aktiv & inaktiv). Jetzt Übersicht & Details.

Intro (optional, rich text): supports variables (see §6).

List Items per Page: 15 (default; numeric input)

Time Window: From start (radio) | last 7/30/90 days | fixed range

Section B — Metadata Selection

Organizations (checkbox list)

All Federal Ministries, Österreichische Nationalbank, agencies, subordinate bodies.

Search box + “select all”, “select none”, “select by type” (Ministry/Agency/OeNB).

Each row shows live count of matching items for all locations and for selected locations (after Dry-Run).

Locations (checkbox tree)

Levels: Bundesland → Bezirk → Stadt/PLZ.

Quick picks: “All Bundesländer”, “Top cities”, “Only Wien, Linz, Graz…”.

Section C — Filters (predefined for every page)

Status: ☑ active ☑ inactive (both checked by default)

Contract type (if available), career level, department … (extensible)

Sorting: newest | relevance | alphabetical

Cap: hard upper bound per page (e.g., 2,000) to protect rendering.

Section D — Quality Criteria & Policy

QC threshold: Minimum results ≥ 5 (default; editable).

Publish policy:

Passing → publish + index.

Failing → create draft page with noindex (kept for internal linking & future growth) OR don’t create (toggle).

Fallback logic (optional): if <5, expand geo upward (city→Bezirk→Bundesland) or merge org synonyms; mark with banner “Ergebnisse erweitert”.

Section E — Generation & Impact (Dry-Run)

Matrix table: rows = orgs, columns = locations (or vice-versa).

Cell shows: count, pass/fail icon, predicted slug.

Hover: preview 5 sample items.

Counters (live):

Will generate (passing): N pages

Generated as drafts/noindex (failing): M pages

Total combinations: N+M

Conflicts: duped slugs (e.g., synonyms) → resolver UI.

Section F — Interlinking & Navigation

Sibling links: show up to 10 nearest siblings (same org, other locations; same location, other orgs).

Random cross-links: add 5 additional internal links (toggle; category-coherent).

Parent hubs auto-gen (optional): /jobs/{org_slug} aggregates all locations; /jobs/{location_slug} aggregates all orgs (indexable only if QC ≥ threshold across at least X children).

Section G — Publishing

Publish Passing Now | Schedule (date/time)

Create Redirects on slug change (auto 301)

Include in Sitemaps (passing only)

Versioning & Rollback per page and for the family config.

2) Data model
2.1 Page-Family Definition (generator config)
Publish
{
  "id": "jobs-ministerien-oeNB",
  "routePattern": "/jobs/{org_slug}-{location_slug}",
  "h1Tpl": "Jobs {org_name} {location_name}",
  "titleTpl": "Jobs {org_short} – {location_name}",
  "metaTpl": "{results_number} Jobs bei {org_name} in {location_name} (aktiv & inaktiv). Jetzt Übersicht & Details.",
  "introHtmlTpl": "<p>Überblick zu Stellen bei {org_name} in {location_name}.</p>",
  "itemsPerPage": 15,
  "timeWindow": {"type": "from_start"},
  "preFilters": {"status": ["active","inactive"]},
  "qc": {"minResults": 5, "fallback": {"geoUpmerge": true, "synonymMerge": true}},
  "interlinking": {"siblings": 10, "randomLinks": 5},
  "schema": {"itemList": true, "breadcrumb": true},
  "sitemap": {"includePassing": true, "priority": 0.6, "changefreq": "daily"},
  "selection": {"orgIds": [...], "locationIds": [...]}
}

2.2 Generated Page (per combination)
Publish
{
  "familyId": "jobs-ministerien-oeNB",
  "org": {"id": "bmf", "name": "Bundesministerium für Finanzen", "short": "BMF", "slug": "bundesministerium-fuer-finanzen"},
  "location": {"id": "AT-9-Wien", "name": "Wien", "slug": "wien", "parents": ["AT-9"]},
  "slug": "/jobs/bundesministerium-fuer-finanzen-wien",
  "search": {
    "index": "jobs",
    "filters": {"orgId": "bmf", "locationId": "AT-9-Wien", "status": ["active","inactive"]},
    "timeWindow": {"type": "from_start"},
    "sort": {"field": "date", "order": "desc"},
    "cap": 2000
  },
  "render": {"itemsPerPage": 15, "layout": "list"},
  "placeholders": {
    "org_name": "Bundesministerium für Finanzen",
    "org_short": "BMF",
    "location_name": "Wien",
    "results_number": 0, "active_count": 0, "inactive_count": 0
  },
  "qc": {"resultCount": 0, "status": "fail", "reason": "below_min"},
  "seo": {
    "h1": "Jobs Bundesministerium für Finanzen Wien",
    "title": "Jobs BMF – Wien",
    "meta": "0 Jobs bei Bundesministerium für Finanzen in Wien (aktiv & inaktiv). Jetzt Übersicht & Details.",
    "canonical": "self",
    "robots": {"index": false, "follow": true}
  },
  "publish": {"state": "draft", "version": 1}
}

3) Templating & variables

Available in H1, Title, Meta, Intro, After-List text:

{org_name}, {org_short}, {org_slug}

{location_name}, {location_slug}, {location_parent} (Bundesland)

{results_number}, {active_count}, {inactive_count}, {first_date}, {latest_date}

{time_window} (“Gesamter Zeitraum” if from start)

{trend_delta} (if enrichment enabled)

Conditional blocks: {{#if active_count>=1}}…{{/if}}

Safety: missing value → suppress token (no “undefined” leaks).

4) Generation algorithm (dry-run & publish)

Collect selections: orgs × locations → candidate set.

For each candidate: compile search query; count results (fast facet/count API).

QC: mark pass if count ≥ minResults; otherwise fail.

Slug: generate & dedupe (append -2, or use {org_slug}-{bundesland_slug}-{city_slug} when needed).

Templating: render H1/Title/Meta/Intro with live counts.

Preview table: show counts, pass/fail, slug, and first 5 items.

Publish Passing:

Create SSR page artifacts (+ JSON-LD ItemList with itemCount).

Add to sitemaps (only page 1).

Cache + CDN warm.

Failing pages: create drafts with noindex (or skip, per policy).

Live refresh job (daily 03:00): recompute counts; update JSON-LD itemCount; if page crosses QC boundary, move between published and draft per policy (optional, guarded by approval).

5) Search & results rendering

Index: jobs (or positions), scoped by orgId, locationId, status IN (active,inactive).

Time: from start by default; editor can switch to rolling/fixed.

List layout: cards with title, org, location, status, date; 15 items/page.

Pagination: page 1 indexable, page ≥2 noindex + canonical → page 1; OR single page “load more” (no crawl).

6) SEO, schema & routing

Canonical: self; for non-passing pages (draft/noindex) set robots: noindex, follow.

JSON-LD: ItemList (itemCount, first 10 items), BreadcrumbList (/jobs → /jobs/{org} → /jobs/{org}-{location}).

OpenGraph/Twitter: templated; allow auto OG image (title badge + count).

Sitemaps: split into index files; include only passing pages.

Hreflang (future): de-AT primary; multi-lang later.

Redirects: if org/location naming changes, auto-301 old slugs to new.

7) Interlinking strategy

Sibling clusters:

Same org, other locations (top 5 by result count).

Same location, other orgs (top 5).

Random links: add 5 other government job pages (weighted by popularity) to satisfy internal linking rule.

Parent hubs: auto list children and show top facets; indexable only if it aggregates ≥ X passing children.

8) Governance, roles & safety

Roles: Editor (configure), SEO Lead (approve thresholds & templates), Publisher (publish/rollback).

Audit log: every generated page keeps a diff (query, template, routing, QC).

QC blockers: duplicate slug unresolved, empty H1/Title, index=true with < minResults, canonical conflicts.

Warnings: title > 60 chars, meta > 160, intro < 140, unresolved tokens, too many pages with identical text blocks.

Manual overrides: per-page “force index” or “force noindex” (requires approver note).

9) Performance & ops

Precompute counts for (org, location) nightly to make Dry-Run instant.

Shard publishing (batch 500) and idempotent deploys.

CDN: cache pages; purge on org/location data changes.

Metrics: indexation rate, impressions/clicks per family, pass/fail drift, thin-content alerts.

Health: notify when a page drops below threshold for N days.

10) Examples

Generated page:
/jobs/bundesministerium-fuer-finanzen-wien

H1: Jobs Bundesministerium für Finanzen Wien

Title: Jobs BMF – Wien

Meta: 27 Jobs bei Bundesministerium für Finanzen in Wien (aktiv & inaktiv). Jetzt Übersicht & Details.

List: 15 items, newest first; JSON-LD ItemList with itemCount: 27.

Failing combo (kept as draft/noindex):
/jobs/landwirtschaftsministerium-feldkirchen → 3 results (below 5) → noindex, visible internally; links from parent suppressed.

11) Extensibility

Other page families: “Vorstand Jobs”, “Bundesdienst Jobs”, “{topic} × {location}”.

Variables: {org_acronym}, {geo_level}, {top_facet:contract_type}, etc.

Alternate routing: /lp/jobs-{org_slug}/{location_slug}.

Snapshots: freeze IDs at publish if needed for press releases.

12) Guardrails (SEO/compliance)

Avoid mass-publishing zero-value pages: QC threshold + noindex policy.

Detect near-duplicate content; require unique intro for low-variance pairs.

Respect accessibility (contrast, alt text, heading order).

Log data provenance (government source, last fetched).

TL;DR defaults (as requested)

Time: from start (default).

List items per page: 15 (default; editable).

Status: active + inactive both checked.

QC: ≥5 results to publish (else draft/noindex or skip).

If you want, I can turn this into a JSON schema (for engineering) or a clickable admin mock next.

Publish
You said:
now liek the last time scribe tehm via the image tool! 
ChatGPT said:
Thought
Image created