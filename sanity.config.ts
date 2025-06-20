'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
// ❌ REMOVE structureTool import
// import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
// ❌ Optional: remove this too if you're not using custom structure yet
// import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // ❌ REMOVE structureTool
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
