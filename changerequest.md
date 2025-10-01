# Change Request - Query Builder Improvements

## 1. Index & Volltext Section (Section 02)

### 1.1 Index/Domain Rename
- [ ] Change label from "Index/Domain (Datenquelle)" to just "Datenquelle"
- [ ] Change default from "Insolvenzen" to "Alles" (all data sources)
- [ ] Convert single dropdown to **checkbox list** for multiple selection
- [ ] Options: Alles, Insolvenzen, Jobs, Ausschreibungen, Förderungen, Immobilien

### 1.2 Volltext-Suche Improvements
- [ ] Add detailed description of search operators BELOW the input field:
  - `-` means NOT (exclude)
  - `+` means MUST HAVE (required)
  - Other operators as needed
- [ ] Add **Regex checkbox** below Volltext-Suche to interpret as regex

### 1.3 Title-Suche
- [ ] Add new field "Title-Suche" AFTER Volltext-Suche
- [ ] Similar to Volltext-Suche but searches only in titles

### 1.4 Geography Changes
- [ ] Add "Alle" checkbox ABOVE the geography section
- [ ] When "Alle" is checked, gray out Bundesland/PLZ fields below
- [ ] Default: "Alle" is checked
- [ ] Remove "Bezirk" field
- [ ] Remove "Gemeinde" field
- [ ] Rename "PLZ" field and allow comma-separated values

### 1.5 Status Section - DELETE
- [ ] **Remove entire Status section** (Offen, Geschlossen, Laufend, Abgeschlossen)

### 1.6 Abgelaufenen Content
- [ ] Add new field "Zeige abgelaufenen Content" (checkbox, default: YES)
- [ ] Add explanation: "Einige Content-Typen wie Jobs haben ein Ablaufdatum"

---

## 2. Zero-Result Fallback Changes

### 2.1 Logic Update
- [ ] Change options to:
  - Option 1: "0 Results → HTTP 404, nicht in Sitemap, nicht verlinkt"
  - Option 2: "Zeige leere Ergebnisseite (0 Ergebnisse angezeigt)"
- [ ] Remove other fallback options (Geo-Up, Time-Expand, etc.)

---

## 3. Content Section (Section 03)

### 3.1 Remove Headline Before List
- [ ] **Delete** "H2 Überschrift vor Liste" field

### 3.2 Add {brand} Placeholder
- [ ] Add `{brand}` to placeholder helper list
- [ ] In placeholder examples, show: `{brand}`: EVI.gv.at

---

## 4. SEO Section (Section 04)

### 4.1 Robots Changes
- [ ] **Remove "Follow" checkbox** (only keep Index)
- [ ] Add "In Sitemap aufnehmen" button/checkbox (default: ON)

### 4.2 Pagination Policy
- [ ] Add option: "Show all on one page" (show all results without pagination)

### 4.3 OpenGraph/Twitter
- [ ] **Do not mention Twitter** anywhere
- [ ] Keep only "OpenGraph"
- [ ] Fix: Add "OG Image" headline above the radio buttons
- [ ] Change "Upload Image..." to actual **file upload field** (input type="file")

### 4.4 Schema.org - MAJOR CHANGES
- [ ] **Remove all current Schema.org options** (ItemList, BreadcrumbList, FAQPage toggles)
- [ ] Create new **specialized FAQ Editor section** with:
  - Headline: "FAQ Editor (Schema.org)"
  - Explanation: "Erstellen Sie FAQs. Schema.org wird automatisch generiert."
  - FAQ entry fields (Question + Answer pairs)
  - Add/Remove buttons for FAQ entries

---

## 5. Enrichment Section (Section 05)

### 5.1 DELETE ENTIRE SECTION
- [ ] **Remove Section 05 (Enrichment) completely**
- [ ] This includes Google Trends widget and computed statistics

---

## 6. Build & Test

- [ ] Update build.js if section numbers change
- [ ] Run `npm run build`
- [ ] Test in browser
- [ ] Git commit after each component change

---

## Implementation Order

1. ✅ Create this changerequest.md
2. Update 02-query-builder.html (Index, Volltext, Title-Suche, Geography)
3. Update 02b-time-status.html (remove Status, add Abgelaufenen Content)
4. Update 02c-quality-sort.html (Zero-Result logic)
5. Update 03-content.html (remove H2 field, add {brand} placeholder)
6. Update 04-seo.html (Robots, Pagination, OG, FAQ Editor, remove old schema)
7. Delete 05-enrichment.html
8. Update build.js to skip 05-enrichment
9. Build & test
10. Final commit
