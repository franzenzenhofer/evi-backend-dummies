# ACTION PLAN: EVI.gv.at Backend Dummies - Complete Rebuild

## 🎯 Core Issues Identified

1. **Incomplete query builder** - Missing critical filter fields from spec
2. **Wrong placeholder syntax** - Using `%percent%` instead of `{curly}` braces
3. **No placeholder documentation** - Users don't know which placeholders exist
4. **Missing rich text areas** - Spec calls for body before/after list
5. **No QC section** - Missing warnings, blockers, validation
6. **Incomplete multi-page generator** - Missing matrix table, dry-run preview
7. **NO TABS requirement** - Current design doesn't match "scrollable sections" spec

## 📋 Spec Requirements Checklist

### Dummy 1: Single Landing Page Generator

#### ✅ Must Have:
- [ ] NO TABS - Single scrollable page with numbered sections (01-06)
- [ ] Section anchors on left rail with ✅/⚠️/⛔ status
- [ ] Sticky preview panel on right
- [ ] **Query Builder** with ALL filters:
  - [ ] Index/Domain selection
  - [ ] **Geography**: Bundesland, Bezirk, PLZ, Gemeinde (multi-select)
  - [ ] **Time**: Rolling windows (7/30/90 days) + fixed ranges + "From Start" default
  - [ ] **Status**: open/closed, ongoing/completed checkboxes
  - [ ] **Entity facets**: Branche/NACE, Rechtsform, Größenklasse
  - [ ] **Data quality**: min fields, dedupe toggle, language
  - [ ] **Sorting**: newest, relevance, magnitude, alphabetical
  - [ ] **Result cap**: hard limit (default 2000)
  - [ ] **Zero-result fallback**: geo expansion, time broadening
- [ ] **Content** with proper structure:
  - [ ] H1 with placeholder helper
  - [ ] Intro/Teaser (rich text with placeholders)
  - [ ] Body BEFORE list (rich text)
  - [ ] List component config: List/Grid/Map+List, items per page (default 15)
  - [ ] Body AFTER list (FAQ, CTAs)
- [ ] **SEO** complete:
  - [ ] Meta Title + Description with character counters
  - [ ] Canonical selector (self/custom)
  - [ ] Robots (index/follow toggles)
  - [ ] OG/Twitter cards
  - [ ] Schema toggles (ItemList, Breadcrumb, FAQ)
  - [ ] Pagination policy
  - [ ] Sitemap settings
- [ ] **Enrichment** (optional):
  - [ ] Google Trends widget toggle
  - [ ] Computed stats
- [ ] **QC** section with real validation:
  - [ ] ⛔ Blockers list (duplicate slug, zero results, missing H1, etc.)
  - [ ] ⚠️ Warnings list (thin content, long titles, etc.)
  - [ ] Fix links next to each issue
- [ ] **Placeholder system**:
  - [ ] Use `{curly_braces}` NOT `%percent%`
  - [ ] Insert buttons next to text fields
  - [ ] Popup reference card showing all available placeholders
  - [ ] Live preview of placeholder resolution

#### Placeholders (All From Spec):
```
{query-term}, {location-name}, {results-number}, {results-number-rounded},
{time-window}, {publish-date}, {last-updated}, {top-facet:branche},
{first-result-date}, {latest-result-date}, {trend-delta}
```

### Dummy 2: Multi-Page Filtered Generator

#### ✅ Must Have:
- [ ] NO TABS - Sections A-G stacked vertically
- [ ] **Section A: Scope & Templates**
  - [ ] Page Family Name
  - [ ] Route Pattern with `{org_slug}-{location_slug}`
  - [ ] H1 Template
  - [ ] SEO Title Template
  - [ ] Meta Description Template
  - [ ] Intro template (rich text)
  - [ ] Items per page (default 15)
  - [ ] Time window (default "From start")
- [ ] **Section B: Organizations**
  - [ ] Searchable checkbox list
  - [ ] "Select all", "Select none", "By type" buttons
  - [ ] Live count per org (after dry-run)
  - [ ] At least 10+ organizations listed
- [ ] **Section C: Locations**
  - [ ] Hierarchical checkbox tree: Bundesland → Bezirk → Stadt
  - [ ] "Select all", "Top cities" quick picks
  - [ ] 9 Bundesländer + major cities
- [ ] **Section D: Quality Criteria**
  - [ ] Minimum results threshold (default 5)
  - [ ] Status filters (active + inactive both checked)
  - [ ] Publish policy selector (draft-noindex / skip)
  - [ ] Fallback strategy
- [ ] **Section E: Generation & Impact (DRY-RUN)**
  - [ ] **Matrix table**: Orgs (rows) × Locations (cols)
  - [ ] Cell shows: result count, ✅/⛔ icon, predicted slug
  - [ ] Hover preview: 5 sample items
  - [ ] Summary counters:
    - [ ] Total combinations
    - [ ] ✅ Passing (≥5 results)
    - [ ] ⚠️ Failing (<5 results)
    - [ ] Will be published count
- [ ] **Section F: Interlinking** (optional but mentioned)
  - [ ] Sibling links config
  - [ ] Random cross-links
  - [ ] Parent hub generation
- [ ] **Section G: Publishing**
  - [ ] "Generate Dry-Run" button
  - [ ] "Save Config" button
  - [ ] "Publish Passing" button
  - [ ] Schedule option
  - [ ] Export CSV

#### Template Variables (All From Spec):
```
{org_name}, {org_short}, {org_slug},
{location_name}, {location_slug}, {location_parent},
{results_number}, {active_count}, {inactive_count},
{first_date}, {latest_date}, {time_window}, {trend_delta}
```

## 🛠️ Implementation Plan

### Phase 1: Cleanup (5 min)
1. Remove `dummy1-enhanced.html`, `placeholders.html` (incomplete)
2. Back up original `dummy1-single-page.html` and `dummy2-multi-page.html`
3. Start fresh with proper architecture

### Phase 2: Shared Components (10 min)
1. Create `styles-components.css` with:
   - Section anchor styles
   - Status badges (✅/⚠️/⛔)
   - Matrix table styles
   - Placeholder helper popup
   - Rich text area styles
2. Create `placeholder-helper.js` for insertion UI

### Phase 3: Dummy 1 Rebuild (30 min)
1. HTML structure: sections 01-06, left rail, right preview
2. Section 01: Basics (slug, mode)
3. Section 02: Query Builder (ALL filters from spec!)
4. Section 03: Content (H1, intro, body before, list config, body after)
5. Section 04: SEO (complete with all options)
6. Section 05: Enrichment (toggles)
7. Section 06: QC & Publish (validation, buttons)
8. Right panel: Live preview with metrics

### Phase 4: Dummy 2 Rebuild (30 min)
1. HTML structure: sections A-G
2. Section A: Templates (all fields)
3. Section B: Organizations (20+ checkboxes)
4. Section C: Locations (tree structure, 9 Bundesländer + cities)
5. Section D: Quality & Policy
6. Section E: **Dry-Run Matrix Table** (KEY FEATURE!)
7. Section F: Interlinking config
8. Section G: Publishing controls
9. Right panel: Impact summary

### Phase 5: Polish & Test (15 min)
1. Add inline help text everywhere
2. Add tooltips with ℹ️ icons
3. Test placeholder insertion
4. Test checkbox interactions
5. Verify matrix table renders correctly
6. Ensure 75-line limit per file (split if needed)

### Phase 6: Self-Review (10 min)
1. Open both files in browser
2. Check every section against spec
3. Verify all placeholders work
4. Confirm NO TABS design
5. Test responsive behavior

## 🎨 Design Principles

1. **Self-Explanatory**: User should understand without manual
2. **Inline Help**: Tooltips and helper text everywhere
3. **Visual Feedback**: Status badges, counts, validation
4. **Progressive Disclosure**: Show advanced options on demand
5. **EVI.gv.at Branding**: Logo, colors, typography

## 📊 Success Criteria

- [ ] User can create a landing page without asking "what does this do?"
- [ ] All placeholders clearly documented with examples
- [ ] Query builder has EVERY filter from spec
- [ ] Multi-page generator shows matrix with predicted outcomes
- [ ] QC section prevents bad pages from publishing
- [ ] Zero ambiguity about curly braces vs percent signs
- [ ] Workshop-ready: Can demo in 10 minutes without explanation

## 🚀 Deployment

1. Lint check (max 75 lines)
2. TypeScript build (no errors)
3. Git commit with atomic messages
4. Push to GitHub
5. Open both files in browser for final verification
6. Create workshop demo script

---

**CRITICAL**: This is for a WORKSHOP. The interface must be immediately understandable and impressive. No shortcuts!
