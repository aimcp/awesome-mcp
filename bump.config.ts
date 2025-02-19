import { defineConfig } from 'bumpp'

export default defineConfig({
  preid: 'beta',
  commit: true,
  tag: true,
  push: true,
  all: true,
  confirm: true,
  execute: 'pnpm build',
})
