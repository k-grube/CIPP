#!/usr/bin/env node

// Rewrites hardcoded absolute paths in a Storybook static export
// so it can be served from a subpath instead of root.
//
// Usage: node .storybook/rebase-storybook.js <buildDir> <basePath>
// Example: node .storybook/rebase-storybook.js build-storybook /CIPP

const fs = require('fs')
const path = require('path')

const [buildDir = 'build-storybook', rawBasePath = '/CIPP'] = process.argv.slice(2)

if (!buildDir || !rawBasePath) {
  console.error('Usage: node rebase-storybook.js <buildDir> <basePath>')
  process.exit(1)
}

const basePath = rawBasePath.replace(/\/+$/, '')

console.log(`Rebasing storybook in '${buildDir}' to base path '${basePath}'`)

function listDir(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...listDir(full))
    } else if (entry.name.endsWith('.js')) {
      files.push(full)
    }
  }
  return files
}

const jsFiles = listDir(buildDir)

for (const file of jsFiles) {
  let content = fs.readFileSync(file, 'utf8')
  let updated = content
  updated = updated.replaceAll('"/assets/', `"${basePath}/assets/`)
  updated = updated.replaceAll('"/mockServiceWorker.js"', `"${basePath}/mockServiceWorker.js"`)
  // Fix MSW service worker scope for subpath deployment
  updated = updated.replaceAll('options:null', `options:{scope:'${basePath}/'}`)
  if (updated !== content) {
    fs.writeFileSync(file, updated)
    console.log(`  Updated: ${path.basename(file)}`)
  }
}

// Prevent Jekyll from filtering files on GitHub Pages
fs.writeFileSync(path.join(buildDir, '.nojekyll'), '')
console.log('  Created .nojekyll')

console.log('Done.')
