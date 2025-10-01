# EVI.gv.at Backend Dummies

Interactive HTML prototypes demonstrating two landing page generation approaches for the EVI.gv.at workshop.

## 🎯 Purpose

Workshop demonstrations for **www.evi.gv.at** (Austrian government portal) showcasing:

1. **Single Landing Page Generator** (`dummy1-single-page.html`)
   - Query-builder for creating individual SEO-optimized landing pages
   - Use case: `/lp/insolvenzen-wien` with placeholders and quality criteria

2. **Multi-Page Filtered Generator** (`dummy2-multi-page.html`)
   - Bulk page generator for organizations × locations
   - Use case: Jobs pages for Austrian ministries and ÖNB across cities

## 🚀 Quick Start

Simply open the HTML files in your browser:

```bash
open dummy1-single-page.html
open dummy2-multi-page.html
```

## 📋 Features

### Dummy 1: Single Landing Page Generator
- **Query Builder**: Configure filters (location, status, time window)
- **Content Management**: H1, intro text with placeholder support
- **SEO Controls**: Meta title/description, canonical, items per page
- **Quality Criteria**: Minimum results threshold, fallback strategies
- **Live Preview**: Real-time result count and QC status

### Dummy 2: Multi-Page Generator
- **Bulk Selection**: Checkbox lists for organizations and locations
- **Template System**: Reusable patterns with `{org_name}`, `{location_name}`, etc.
- **Quality Policy**: Configure minimum results and publish strategy
- **Impact Preview**: Shows total combinations, passing/failing counts
- **Dry-Run Mode**: Preview before publishing

## 🎨 Design System

Based on EVI.gv.at official design:
- **Primary Red**: `#a72702`
- **Typography**: System font stack
- **Layout**: Responsive grid with sticky preview panel
- **Logo**: Official Austrian government logo

## 🛠️ Development

```bash
npm install      # Install dependencies
npm run lint     # Run ESLint
npm run build    # TypeScript check
npm run test     # Run all checks
```

## 📏 Code Quality

- **Maximum 75 lines per file** (enforced via ESLint)
- TypeScript strict mode
- No external dependencies for HTML/CSS
- Clean, maintainable code following DRY principles

## 🔧 Technical Stack

- Pure HTML5/CSS3
- Vanilla JavaScript (inline for simplicity)
- TypeScript for type checking
- ESLint for code quality

## 📦 Project Structure

```
backenddummies/
├── dummy1-single-page.html    # Single page generator
├── dummy2-multi-page.html     # Multi-page generator
├── styles.css                 # Base styles
├── styles-extended.css        # Extended interactive styles
├── logo.svg                   # EVI.gv.at logo
├── CLAUDE.md                  # Project documentation
├── README.md                  # This file
└── package.json               # Build configuration
```

## 🎓 Workshop Use

These dummies demonstrate:
- How editors create SEO-optimized pages without coding
- Template system with placeholders (`%results-number%`, `%location-name%`)
- Quality criteria enforcement (minimum 5 results)
- Preview and validation workflows
- Bulk generation for scalable content strategies

## 📝 Placeholders

Both generators support:
- `{org_name}` / `%org-name%` - Organization name
- `{location_name}` / `%location-name%` - Location name
- `{results_number}` / `%results-number%` - Result count
- `{time_window}` / `%time-window%` - Time range description

## 📄 License

MIT

## 👤 Author

Franz Enzenhofer

## 🔗 Links

- Repository: https://github.com/franzenzenhofer/evi-backend-dummies
- EVI.gv.at: https://www.evi.gv.at
