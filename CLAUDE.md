# EVI.gv.at Backend Dummies

## Project Overview
Interactive HTML prototypes for the EVI.gv.at workshop demonstrating two different landing page generation approaches.

## Purpose
Workshop demonstrations for www.evi.gv.at (Austrian government portal) showing:
1. **Single Landing Page Generator** - Query-builder for creating individual SEO-optimized landing pages
2. **Multi-Page Filtered Generator** - Bulk page generator for organizations × locations

## Technical Requirements
- Maximum 75 lines per code file (enforced via ESLint)
- TypeScript strict mode
- No dependencies - pure HTML/CSS/JS
- Responsive design matching EVI.gv.at look and feel

## Files
- `dummy1-single-page.html` - Single landing page generator interface
- `dummy2-multi-page.html` - Multi-page bulk generator interface
- `styles.css` - Shared styles matching EVI.gv.at design
- `utils.ts` - Shared TypeScript utilities

## Development
```bash
npm run build  # Compile TypeScript
npm run lint   # Check code quality
```

## Workshop Goals
Demonstrate how these interfaces enable editors to:
- Create SEO-optimized landing pages without coding
- Use templates with placeholders (%results-number%, %location-name%, etc.)
- Apply quality criteria (min 5 results)
- Preview, validate, and publish pages

## Git Workflow
Atomic commits after every file change, pushed immediately to GitHub.
