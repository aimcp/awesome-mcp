import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index.ts',
  ],
  declaration: true,
  alias: {
    '@': resolve(__dirname, './src'),
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    cjsBridge: true,
  },
  clean: true,
})
