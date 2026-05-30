import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

export function jsonServer(): Plugin {
  return {
    name: 'json-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method === 'POST' && req.url === '/api/guests') {
          const filePath = path.resolve(process.cwd(), 'public/data/invitations.json')

          let body = ''
          for await (const chunk of req) {
            body += chunk
          }

          try {
            const { slug, guests: newGuests } = JSON.parse(body)

            const raw = fs.readFileSync(filePath, 'utf-8')
            const data = JSON.parse(raw)

            const inv = data.invitations.find((i: any) => i.slug === slug)
            if (!inv) {
              res.statusCode = 404
              res.end(JSON.stringify({ error: 'Invitation not found' }))
              return
            }

            inv.guests = newGuests
            inv.updatedAt = new Date().toISOString()

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8')

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, count: newGuests.length }))
          } catch (e: any) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: e.message }))
          }
          return
        }

        next()
      })
    }
  }
}
