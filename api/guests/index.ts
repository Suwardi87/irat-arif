import { kv } from '@vercel/kv'
import fs from 'node:fs'
import path from 'node:path'

const ALLOWED_SLUG_PATTERN = /^[a-z0-9-]+$/

function readStaticInvitation(slug: string) {
  try {
    const filePath = path.resolve('public/data/invitations.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(raw)
    return data.invitations.find((i: any) => i.slug === slug && i.isActive) || null
  } catch {
    return null
  }
}

async function getGuests(slug: string): Promise<any[]> {
  try {
    const stored = await kv.get<string>(`guests:${slug}`)
    if (stored) return JSON.parse(stored)
  } catch {
    // KV not available — fallback
  }
  const inv = readStaticInvitation(slug)
  return inv?.guests || []
}

async function saveGuests(slug: string, guests: any[]): Promise<boolean> {
  try {
    await kv.set(`guests:${slug}`, JSON.stringify(guests))
    return true
  } catch {
    return false
  }
}

export default async function handler(req: any, res: any) {
  const { method } = req
  const url = new URL(req.url, 'http://localhost')
  const slug = url.searchParams.get('slug')

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (method === 'OPTIONS') return res.status(200).end()

  if (method === 'GET') {
    if (!slug || !ALLOWED_SLUG_PATTERN.test(slug)) {
      return res.status(400).json({ error: 'Slug tidak valid' })
    }
    const guestSlug = url.searchParams.get('guest')
    const guests = await getGuests(slug)
    if (guestSlug) {
      const guest = guests.find((g: any) => g.slug === guestSlug)
      return res.status(200).json({ guest: guest || null })
    }
    return res.status(200).json({ guests })
  }

  if (method === 'POST') {
    let body = ''
    for await (const chunk of req) body += chunk

    try {
      const data = JSON.parse(body)
      const postSlug = data.slug as string | undefined
      const newGuests = data.guests as any[] | undefined

      if (!postSlug || !ALLOWED_SLUG_PATTERN.test(postSlug) || !Array.isArray(newGuests)) {
        return res.status(400).json({ error: 'Data tidak valid' })
      }

      const inv = readStaticInvitation(postSlug)
      if (!inv) {
        return res.status(404).json({ error: 'Undangan tidak ditemukan' })
      }

      const sanitized = newGuests.map((g: any) => ({
        slug: String(g.slug || '').slice(0, 100),
        name: String(g.name || '').slice(0, 200),
        group: String(g.group || 'keluarga').slice(0, 50),
        maxGuests: Math.min(Math.max(Number(g.maxGuests) || 1, 1), 10)
      }))

      await saveGuests(postSlug, sanitized)

      try {
        const filePath = path.resolve('public/data/invitations.json')
        const raw = fs.readFileSync(filePath, 'utf-8')
        const fileData = JSON.parse(raw)
        const target = fileData.invitations.find((i: any) => i.slug === postSlug)
        if (target) {
          target.guests = sanitized
          target.updatedAt = new Date().toISOString()
          fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2) + '\n', 'utf-8')
        }
      } catch {
        // production filesystem read-only — ignore
      }

      return res.status(200).json({ success: true, count: sanitized.length })
    } catch (e: any) {
      return res.status(500).json({ error: e.message })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
