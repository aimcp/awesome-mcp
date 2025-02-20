import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { destr } from 'destr'

let mdContent = `# awesome-mcp\n`

interface ServerItem {
  name: string
  description: string
  repo_url: string
  tags: string[]
  language: string
}
const servers = destr<{ servers: ServerItem[] }>(readFileSync(resolve(__dirname, '../data/servers/list.json'), 'utf-8')).servers
const serversGroup = servers.reduce<Map<string, ServerItem[]>>((map, item) => {
  item.tags.forEach((tag) => {
    if (map.has(tag)) {
      map.get(tag)!.push(item)
    }
    else {
      map.set(tag, [item])
    }
  })

  return map
}, new Map<string, ServerItem[]>())
if (serversGroup.size) {
  mdContent += '\n## Mcp Servers\n'
  Array.from(serversGroup.entries().map(([key, items]) => ({
    key,
    items,
  }))).sort((a, b) => {
    if (a.key === 'official') {
      return -1
    }
    if (b.key === 'official') {
      return 1
    }

    if (a.key.toLocaleLowerCase() > b.key.toLocaleLowerCase()) {
      return 1
    }

    return -1
  }).forEach(({ key, items }) => {
    mdContent += `\n### ${key}\n\n`

    items.forEach((item) => {
      mdContent += `- [${item.name}](${item.repo_url}) - ${item.description}\n`
    })
  })
}

writeFileSync(resolve(__dirname, '../README.md'), mdContent, 'utf-8')
