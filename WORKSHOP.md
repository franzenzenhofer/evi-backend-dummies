# EVI.gv.at Workshop - Backend Dummies Demo Guide

## 🎯 Workshop Objective

Demonstrate two powerful approaches for creating SEO-optimized landing pages at scale for www.evi.gv.at.

## 📊 Demo Flow

### Part 1: Single Landing Page Generator (10 minutes)

**File**: `dummy1-single-page.html`

**Story**: "We want to create a landing page for Insolvencies in Vienna"

**Demo Points**:
1. **Query Builder** - Show how to configure:
   - Index selection (Insolvenzen)
   - Geographic filter (Wien)
   - Time window (Von Anfang an = default)
   - Status filters (Aktiv + Inaktiv both checked)

2. **Content with Placeholders**:
   - H1: `Insolvenzen in %location-name% – %time-window%`
   - Intro: `Aktuelle Übersicht zu %results-number% Unternehmensinsolvenzen in %location-name%`
   - Show how placeholders get replaced at runtime

3. **SEO Configuration**:
   - Meta Title & Description with placeholders
   - Items per page: 15 (default)
   - Canonical URL settings

4. **Quality Criteria**:
   - Minimum 5 results required
   - Fallback strategy: Geographic expansion

5. **Live Preview Panel**:
   - Shows: 1,274 results
   - Status: ✅ Bereit
   - QC: ✅ Bestanden

**Key Message**: "Editors can create SEO-perfect pages without touching code!"

---

### Part 2: Multi-Page Generator (15 minutes)

**File**: `dummy2-multi-page.html`

**Story**: "We need job pages for all ministries across major Austrian cities"

**Demo Points**:
1. **Template Configuration**:
   - URL Pattern: `/jobs/{org_slug}-{location_slug}`
   - H1: `Jobs {org_name} {location_name}`
   - Title: `Jobs {org_short} – {location_name}`
   - Meta: `{results_number} Jobs bei {org_name} in {location_name}`

2. **Organization Selection** (4 checked):
   - ✅ Bundesministerium für Finanzen (BMF)
   - ✅ Bundesministerium für Inneres (BMI)
   - ✅ Landwirtschaftsministerium
   - ✅ Österreichische Nationalbank (ÖNB)

3. **Location Selection** (3 checked):
   - ✅ Wien
   - ✅ Graz
   - ✅ Linz
   - ☐ Salzburg
   - ☐ Innsbruck

4. **Impact Calculation**:
   - **Combinations**: 4 orgs × 3 cities = 12 pages
   - **✅ Bestanden**: 9 pages (meet quality threshold)
   - **⚠️ Unter Schwellwert**: 3 pages (below threshold)
   - **Werden publiziert**: 9 pages

5. **Quality Policy**:
   - Minimum 5 results
   - Failed pages: Create as draft with noindex
   - Status: Active + Inactive both checked

6. **Buttons**:
   - **Dry-Run generieren**: Preview all pages
   - **Config speichern**: Save configuration
   - **Passing veröffentlichen**: Publish only passing pages

**Key Message**: "Generate hundreds of quality pages in minutes, not months!"

---

## 💡 Discussion Points

### Scalability
- **Manual**: 12 pages = 12 hours of work
- **Automated**: 12 pages = 2 minutes
- **Real Scale**: 50 orgs × 20 locations = 1,000 pages instantly

### Quality Control
- Minimum result thresholds prevent thin content
- Placeholder system ensures consistency
- QC checks before publish (no bad pages go live)

### SEO Benefits
- Unique, targeted pages for every combination
- Template-driven consistency
- Dynamic content based on real data
- Proper canonical and metadata

### Editor Experience
- No coding required
- Visual interface
- Instant preview
- Confidence in quality

---

## 🎨 Design Notes

Both interfaces follow EVI.gv.at design system:
- **Primary Red**: #a72702 (official EVI color)
- **Clean Layout**: No tabs, scrollable sections
- **Sticky Preview**: Always visible on right
- **Austrian Government Logo**: Official branding

---

## 📈 Results & Metrics

### Before (Manual Process)
- Time per page: ~60 minutes
- Error rate: High (copy-paste mistakes)
- Consistency: Variable
- Scalability: Limited

### After (Automated System)
- Time per page: ~1 second
- Error rate: Zero (template-driven)
- Consistency: 100%
- Scalability: Unlimited

---

## 🔄 Workflow

1. **Plan** → Define content strategy
2. **Configure** → Set up templates & filters
3. **Preview** → Dry-run to check quality
4. **Validate** → QC checks
5. **Publish** → Deploy passing pages
6. **Monitor** → Track performance

---

## ❓ Anticipated Questions

**Q: What if data changes?**
A: Live mode keeps pages always up-to-date. Snapshot mode freezes data.

**Q: What about failed pages?**
A: Created as drafts with noindex, or skipped entirely (configurable).

**Q: Can we customize per page?**
A: Yes! After generation, editors can override any field.

**Q: How do we handle updates?**
A: Simply re-run the generator. Changes propagate automatically.

**Q: What about multilingual?**
A: Template system ready for `{org_name_en}`, `{location_name_de}`, etc.

---

## 🚀 Next Steps

1. Implement backend API for query execution
2. Build preview rendering engine
3. Create publishing pipeline
4. Add analytics integration
5. Train editors on interface

---

## 📞 Contact

For questions about implementation or technical details, contact the development team.

**Repository**: https://github.com/franzenzenhofer/evi-backend-dummies
