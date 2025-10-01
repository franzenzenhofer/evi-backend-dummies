#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function buildHTML(name, components) {
  console.log(`Building ${name}...`);
  let html = '';

  components.forEach(comp => {
    const filePath = path.join(__dirname, 'components', comp);
    if (fs.existsSync(filePath)) {
      html += fs.readFileSync(filePath, 'utf8') + '\n';
    } else {
      console.warn(`Warning: ${comp} not found`);
    }
  });

  const outputPath = path.join(__dirname, 'public', name);
  fs.writeFileSync(outputPath, html);
  console.log(`✓ Created ${name}`);
}

// Build query-builder.html
buildHTML('query-builder.html', [
  'query-builder/00-head.html',
  'query-builder/01-basics.html',
  'query-builder/02-query-builder.html',
  'query-builder/02b-time-status.html',
  'query-builder/02c-quality-sort.html',
  'query-builder/02d-headline.html',
  'query-builder/03-content.html',
  'query-builder/03b-seo.html',
  'query-builder/03c-interlinking.html',
  'query-builder/06-qc-publish.html',
  'query-builder/99-foot.html'
]);

// Build filter-builder.html (cloned from query-builder structure)
buildHTML('filter-builder.html', [
  'filter-builder/00-head.html',
  'filter-builder/01-basics.html',
  'filter-builder/02-organizations.html',
  'filter-builder/03-locations.html',
  'filter-builder/04-headline.html',
  'filter-builder/05-content.html',
  'filter-builder/05b-seo.html',
  'filter-builder/05c-interlinking.html',
  'filter-builder/06-qc-publish.html',
  'filter-builder/07-matrix-preview.html',
  'filter-builder/99-foot.html'
]);

console.log('\n✓ Build complete! Open public/query-builder.html or public/filter-builder.html');
