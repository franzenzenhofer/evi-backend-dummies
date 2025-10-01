# Filter-Builder Rebuild: EVI.gv.at Native Implementation

**Last Updated:** 2025-10-01
**Status:** Planning Phase
**Goal:** Transform filter-builder from dummy data to real EVI.gv.at domain model

---

## Phase 1: Understanding & Planning ✅

- [x] Read EVI.gv.at specification document
- [x] Understand publication families (Firmenbuch, HV, Anlegerinfo, Stellen, Gläubiger, Glücksspiel, Kassenwerte, Großverfahren)
- [x] Understand organization normalization ("Verantwortlich für den Inhalt")
- [x] Understand location mapping rules per family
- [x] Create this TODO.md

---

## Phase 2: Data Model (Section 01 - Basics)

- [ ] **01-basics.html:** Keep current structure
  - Current kampagnenname works fine
  - Current URL pattern works: `/lp/{org_slug}-{location_slug}`
  - Add note about EVI families

---

## Phase 3: Publication Families (NEW Section 02)

- [ ] **Create 02-families.html** (replaces old organizations)
  - [ ] Add family selector with real EVI families:
    - Firmenbuch & Unternehmensverlautbarungen
    - Hauptversammlungen
    - Anlegerinformationen & Kapitalmarkt
    - Stellenausschreibungen
    - Gläubigeraufforderungen
    - Glücksspiel
    - Kassenwerte (BMF)
    - Großverfahren (UVP/AVG)
    - Findok-Feeds (optional)
  - [ ] Add multi-select checkboxes
  - [ ] Add counter showing selected families

---

## Phase 4: Aussendungstypen (NEW Section 03)

- [ ] **Create 03-aussendungstypen.html**
  - [ ] Dynamic type selector based on selected families
  - [ ] Firmenbuch types:
    - Neueintragung
    - Funktion eingetragen/geändert/gelöscht
    - Gesellschafter eingetragen/geändert/gelöscht
    - Kapitaländerung
    - Jahresabschluss eingereicht
    - Konzernabschluss eingereicht
    - Verschmelzung, Spaltung, Umwandlung
    - Namensänderung, Sitzveränderung, Geschäftszweigänderung
    - Beschluss, Urkunde
    - Auflösung, Löschung
  - [ ] Hauptversammlung types:
    - Ordentliche HV
    - Außerordentliche HV
  - [ ] Anlegerinfo types:
    - Dividendenbekanntmachung
    - Prospekt, Prospekt-Nachtrag
    - Prospekt-Änderung, KIDs-Änderung
  - [ ] Stellen types:
    - Leitung/Vorstand/Geschäftsführung
    - Justiz/Bund/Schule/Uni/Öffentlich
    - Sonstige
  - [ ] Gläubiger types:
    - Liquidation
    - Sonstige
  - [ ] Glücksspiel types:
    - Spielkundmachung
    - Auslosung
    - Sonstige
  - [ ] Kassenwerte types:
    - Neufestsetzung
    - Gesamtverlautbarung
  - [ ] Großverfahren types:
    - UVP/AVG Kundmachung
  - [ ] Add conditional visibility (show only relevant types for selected families)

---

## Phase 5: Organizations (NEW Section 04)

- [ ] **Create 04-organizations.html** (replaces old 02-organizations)
  - [ ] Remove dummy orgs (Polizei, Finanzamt, Gerichte, etc.)
  - [ ] Add real EVI publishers grouped by org_type:
    - **Bund/Ministerien:**
      - Bundesministerium für Finanzen (BMF)
      - Bundesministerium für Justiz
      - Bundesministerium für Inneres
      - Bundesministerium für Landesverteidigung
    - **Bund/Behörden:**
      - Finanzmarktaufsicht (FMA)
      - Österreichische Nationalbank (ÖNB)
      - Statistik Austria
    - **Landesregierungen/Behörden:**
      - Land Wien
      - Land Niederösterreich
      - Land Oberösterreich
      - Land Steiermark
      - Land Tirol
      - Land Vorarlberg
      - Land Salzburg
      - Land Kärnten
      - Land Burgenland
    - **Gemeinden/Städte/Magistrate:**
      - Magistrat Wien
      - Magistrat Graz
      - Magistrat Linz
    - **Körperschaften öffentlichen Rechts:**
      - ÖNB
      - Sozialversicherung
    - **Unternehmen (AG):**
      - Österreichische Post AG
      - OMV AG
      - Raiffeisen Bank International AG
    - **Unternehmen (GmbH):**
      - Österreichische Lotterien GmbH
    - **Universitäten/FH:**
      - Universität Wien
      - TU Wien
  - [ ] Add autocomplete search functionality (via data attributes)
  - [ ] Add "Alle Organisationen" checkbox
  - [ ] Add counter

---

## Phase 6: Locations (Update Section 05)

- [ ] **Update 03-locations.html → 05-locations.html**
  - [ ] Keep hierarchical structure BUT update to real Austrian data
  - [ ] **Wien: 23 Bezirke** (not 9!)
    - 1. Innere Stadt
    - 2. Leopoldstadt
    - 3. Landstraße
    - 4. Wieden
    - 5. Margareten
    - 6. Mariahilf
    - 7. Neubau
    - 8. Josefstadt
    - 9. Alsergrund
    - 10. Favoriten
    - 11. Simmering
    - 12. Meidling
    - 13. Hietzing
    - 14. Penzing
    - 15. Rudolfsheim-Fünfhaus
    - 16. Ottakring
    - 17. Hernals
    - 18. Währing
    - 19. Döbling
    - 20. Brigittenau
    - 21. Floridsdorf
    - 22. Donaustadt
    - 23. Liesing
  - [ ] Niederösterreich: 21 Bezirke
  - [ ] Oberösterreich: 15 Bezirke
  - [ ] Steiermark: 13 Bezirke
  - [ ] Tirol: 9 Bezirke
  - [ ] Salzburg: 6 Bezirke
  - [ ] Kärnten: 10 Bezirke
  - [ ] Vorarlberg: 4 Bezirke
  - [ ] Burgenland: 9 Bezirke
  - [ ] Add location mapping explanation per family:
    - Firmenbuch → Sitz der Firma
    - HV → Veranstaltungsort
    - Anlegerinfo → Sitz der Gesellschaft
    - Stellen → Dienstort
    - Gläubiger → Sitz der Firma oder Adresse
    - Glücksspiel → Bundesweit (default)
    - Kassenwerte → Österreich
    - Großverfahren → Bundesland + Gemeinden

---

## Phase 7: Extra Filters (NEW Section 06)

- [ ] **Create 06-extra-filters.html**
  - [ ] Family-specific filters (conditional visibility)
  - [ ] **Firmenbuch:**
    - Rechtsform (GmbH, AG, OG, KG, Einzelunternehmen)
    - Ereignis-Stichtag (Date range)
  - [ ] **Hauptversammlung:**
    - Termin von/bis (Date range)
  - [ ] **Anlegerinfo:**
    - ISIN (multi-input)
    - Zahltag (Date range)
    - Ex-Tag (Date range)
  - [ ] **Stellen:**
    - Dienststelle-Kategorie (Bund/Land/Gemeinde/Staatsnah)
    - Hierarchie (Leitung/Vorstand)
    - Bewerbungsfrist (Date range)
  - [ ] **Großverfahren:**
    - Aktenzeichen (text input)
  - [ ] **Kassenwerte:**
    - Wirksam ab (Date)
  - [ ] Date/Time filters with presets (7/30/90/365 Tage)
  - [ ] Volltext search with syntax hints

---

## Phase 8: Sort & Quality (NEW Section 07)

- [ ] **Create 07-sort-quality.html**
  - [ ] Type-specific sorting:
    - Default: Publish date desc
    - Stellen: Bewerbungsfrist asc
    - HV: Termin asc
    - Anlegerinfo: Zahltag asc
  - [ ] Quality filters:
    - Deduplicate
    - Minimum fields filled
    - Language filter
  - [ ] Result cap (default 2000)
  - [ ] Zero-result policy with relaxation rules

---

## Phase 9: Templates (Update Sections 08-10)

- [ ] **Rename 04-headline.html → 08-headline.html**
  - [ ] Update placeholders to include:
    - `{familie}`, `{typ}`, `{org_name}`, `{location_name}`
    - `{publish_date}`, `{frist}`, `{termin}`

- [ ] **Rename 05-content.html → 09-content.html**
  - [ ] Add EVI-specific placeholders
  - [ ] Keep existing structure

- [ ] **Rename 05b-seo.html → 10-seo.html**
  - [ ] Update slug pattern: `/lp/{familie}-{typ?}-{location_slug}-{org_short?}`
  - [ ] Keep existing SEO fields

- [ ] **Rename 05c-interlinking.html → 11-interlinking.html**
  - [ ] Add family-aware interlinking options
  - [ ] Keep existing structure

---

## Phase 10: Matrix Preview (Update Section 12)

- [ ] **Rename 07-matrix-preview.html → 12-matrix-preview.html**
  - [ ] Update to show real EVI combinations:
    - Families × Organizations × Locations
    - Example: "Firmenbuch × BMF × Wien = X pages"
    - Example: "Stellenausschreibungen × Bundesministerien × 9 Bundesländer = Y pages"
  - [ ] Add realistic page count calculations
  - [ ] Show sample URLs with real patterns
  - [ ] Update table headers and structure

---

## Phase 11: QC & Publishing (Update Section 13)

- [ ] **Rename 06-qc-publish.html → 13-qc-publish.html**
  - [ ] Add EVI-specific QC checks:
    - Valid familie + typ combination
    - Required fields per family/typ
    - Location derivable (with family-specific rules)
    - FN/ISIN validation where required
  - [ ] Add publication blockers
  - [ ] Keep existing publish workflow

---

## Phase 12: Build & Test

- [ ] **Update build.js** with new component order
- [ ] **Run npm run build**
- [ ] **Test filter-builder.html** in browser
- [ ] **Verify all sections render correctly**
- [ ] **Check 75-line limits** on all new components
- [ ] **Verify matrix calculations**

---

## Phase 13: Documentation

- [ ] Update CLAUDE.md with EVI domain model notes
- [ ] Add examples of real queries
- [ ] Document placeholder syntax
- [ ] Add migration notes

---

## Phase 14: Polish & Edge Cases

- [ ] Add helpful tooltips for EVI-specific terms
- [ ] Add "What is this?" help icons
- [ ] Handle edge cases (multi-location Stellen, etc.)
- [ ] Add realistic example data in form fields
- [ ] Test zero-result scenarios

---

## Notes

**Current file structure:**
```
components/filter-builder/
├── 00-head.html              ✅ Keep as-is
├── 01-basics.html            ✅ Keep as-is (minor updates)
├── 02-organizations.html     ❌ REPLACE with 02-families.html
├── 03-locations.html         ⚠️  UPDATE to 05-locations.html (real AT data)
├── 04-headline.html          ➡️  MOVE to 08-headline.html
├── 05-content.html           ➡️  MOVE to 09-content.html
├── 05b-seo.html              ➡️  MOVE to 10-seo.html
├── 05c-interlinking.html     ➡️  MOVE to 11-interlinking.html
├── 06-qc-publish.html        ➡️  MOVE to 13-qc-publish.html
├── 07-matrix-preview.html    ➡️  MOVE to 12-matrix-preview.html
└── 99-foot.html              ✅ Keep as-is
```

**New structure:**
```
components/filter-builder/
├── 00-head.html              (unchanged)
├── 01-basics.html            (minor updates)
├── 02-families.html          (NEW - publication families)
├── 03-aussendungstypen.html  (NEW - conditional types)
├── 04-organizations.html     (NEW - real EVI publishers)
├── 05-locations.html         (updated - real AT hierarchy)
├── 06-extra-filters.html     (NEW - family-specific filters)
├── 07-sort-quality.html      (NEW - type-aware sorting)
├── 08-headline.html          (renamed from 04)
├── 09-content.html           (renamed from 05)
├── 10-seo.html               (renamed from 05b)
├── 11-interlinking.html      (renamed from 05c)
├── 12-matrix-preview.html    (renamed from 07, updated)
├── 13-qc-publish.html        (renamed from 06, updated)
└── 99-foot.html              (unchanged)
```

**Key Changes:**
- Organizations → Real EVI publishers (BMF, Landesregierungen, AG/GmbH, etc.)
- Locations → Real Austrian administrative hierarchy (9 Bundesländer, Wien 23 Bezirke)
- NEW: Publication families selector
- NEW: Dynamic Aussendungstypen based on families
- NEW: Family-specific extra filters (ISIN, Fristen, Aktenzeichen, etc.)
- Matrix shows realistic EVI combinations

**Placeholders Evolution:**
- Old: `{org_name}`, `{location_name}`
- New: `{familie}`, `{typ}`, `{org_name}`, `{location_name}`, `{fn}`, `{isin}`, `{frist}`, `{termin}`
