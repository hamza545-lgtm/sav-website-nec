import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from './scripts/prerender.mjs'

// After the build, write one HTML file per page with its own title and description.
function prerenderPages() {
  let outDir = 'dist'
  return {
    name: 'savnec-prerender-meta',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const count = prerender(outDir)
      console.log(`\n  savnec: wrote page metadata for ${count} routes`)
    },
  }
}

export default defineConfig({
  plugins: [react(), prerenderPages()],
})
