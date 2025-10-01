# EVI.gv.at Backend Dummies

## Project Overview
Interactive HTML prototypes for EVI.gv.at workshop demonstrating landing page generation.

## Purpose
Workshop demonstrations for www.evi.gv.at (Austrian government portal):
1. **Query Builder** (`query-builder.html`) - Single page generator with comprehensive filters
2. **Filter Builder** (`filter-builder.html`) - Multi-page bulk generator (orgs × locations)

## CRITICAL: 75-Line Limit & Build System

### Architecture
```
components/               # Source files (max 75 lines each!)
├── query-builder/       # Sections 01-06 for single-page generator
├── filter-builder/      # Sections A-G for multi-page generator
└── shared/              # Reusable components

public/                  # Built output (no line limits)
├── query-builder.html   # Final file for workshop
└── filter-builder.html  # Final file for workshop

build.js                 # Concatenates components → public/
```

### 75-Line Rule (ENFORCED!)
- **Every component file**: MAX 75 lines (enforced by ESLint)
- **Skip blank lines & comments** in count
- **Split large sections** into multiple component files
- **Final public/ files**: No limit (auto-generated)

### Build Process
```bash
npm run build      # Concatenate components → public/ folder
npm run watch      # Auto-rebuild on component changes
npm run lint       # Verify 75-line limit (FAILS if exceeded)
npm run test       # Lint + TypeCheck + Build
```

## Development Workflow
1. Edit components in `/components/`
2. Keep each file ≤75 lines
3. Run `npm run build` to generate `/public/` files
4. Open `/public/query-builder.html` in browser
5. Commit & push after each component change

## Workshop Files
- **USE THESE**: `public/query-builder.html`, `public/filter-builder.html`
- **NOT THESE**: Individual components (for dev only)

## Placeholder Syntax
Use `{curly_braces}` NOT `%percent%`:
- `{query-term}`, `{location-name}`, `{results-number}`
- `{org_name}`, `{org_short}`, `{location_slug}`

## Git Workflow
Atomic commits after every component change, pushed immediately.
