<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

interface GuestEntry {
  slug: string
  name: string
  group: string
  maxGuests: number
}

interface OpenRecord {
  firstOpenedAt?: string
  lastOpenedAt?: string
  openCount?: number
}

const guests = ref<GuestEntry[]>([])
const invitationSlug = ref('asratul-fitri')
const newGuestName = ref('')
const newGuestGroup = ref('keluarga')
const newGuestMax = ref(2)
const copiedSlug = ref<string | null>(null)
const filterGroup = ref('')
const searchQuery = ref('')
const showJsonPanel = ref(false)
const jsonExport = ref('')
const editingSlug = ref<string | null>(null)
const editName = ref('')
const editGroup = ref('')
const editMax = ref(2)
const toastMsg = ref('')
const toastTimer = ref<any>(null)
const bulkInput = ref('')
const isSaving = ref(false)
const lastSavedAt = ref<string | null>(null)
const currentPage = ref(1)
const perPage = ref(10)

const STORAGE_KEY = 'wedding_guests_admin'

watch([searchQuery, filterGroup], () => { currentPage.value = 1 })

async function saveToServer() {
  isSaving.value = true
  try {
    const res = await fetch('/api/guests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: invitationSlug.value, guests: guests.value })
    })
    if (res.ok) {
      lastSavedAt.value = new Date().toLocaleTimeString()
    }
  } catch { /* production: no dev server */ }
  isSaving.value = false
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(guests.value))
  saveToServer()
}

const groupOptions = ['keluarga', 'teman', 'tetangga', 'rekan kerja', 'lainnya']

const guestGroups = computed(() => {
  const groups = new Set(guests.value.map(g => g.group).filter(Boolean))
  return [...Array.from(groups).sort()]
})

const filteredGuests = computed(() => {
  let result = guests.value
  if (filterGroup.value) {
    result = result.filter(g => g.group === filterGroup.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.slug.toLowerCase().includes(q)
    )
  }
  return result
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredGuests.value.length / perPage.value)))

const pagedGuests = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredGuests.value.slice(start, start + perPage.value)
})

function goToPage(p: number) {
  currentPage.value = Math.max(1, Math.min(p, totalPages.value))
}

const visiblePages = computed(() => {
  const pages: (number | string)[] = []
  const t = totalPages.value
  const c = currentPage.value

  if (t <= 7) {
    for (let i = 1; i <= t; i++) pages.push(i)
  } else {
    pages.push(1)
    if (c > 3) pages.push('...')
    const start = Math.max(2, c - 1)
    const end = Math.min(t - 1, c + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (c < t - 2) pages.push('...')
    pages.push(t)
  }
  return pages
})

const stats = computed(() => {
  const total = guests.value.length
  const opened = guests.value.filter(g => getOpenData(g.slug)).length
  const totalInvited = guests.value.reduce((sum, g) => sum + (g.maxGuests || 1), 0)
  return { total, opened, pending: total - opened, totalInvited }
})

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateLink(guest: GuestEntry): string {
  return `${window.location.origin}/${invitationSlug.value}?guest=${guest.slug}`
}

function getOpenData(guestSlug: string): OpenRecord | null {
  try {
    const key = `wedding_guest_opens_${invitationSlug.value}`
    const data = JSON.parse(localStorage.getItem(key) || '{}')
    return data[guestSlug] || null
  } catch {
    return null
  }
}

function showToast(msg: string) {
  toastMsg.value = msg
  clearTimeout(toastTimer.value)
  toastTimer.value = setTimeout(() => { toastMsg.value = '' }, 2500)
}

function addGuest() {
  const name = newGuestName.value.trim()
  if (!name) return

  const slug = slugify(name)
  if (guests.value.some(g => g.slug === slug)) {
    showToast(`"${name}" sudah ada di daftar!`)
    return
  }

  guests.value.push({
    slug,
    name,
    group: newGuestGroup.value,
    maxGuests: newGuestMax.value || 1
  })

  newGuestName.value = ''
  saveToStorage()
  showToast(`"${name}" berhasil ditambahkan`)
}

function startEdit(guest: GuestEntry) {
  editingSlug.value = guest.slug
  editName.value = guest.name
  editGroup.value = guest.group
  editMax.value = guest.maxGuests
}

function cancelEdit() {
  editingSlug.value = null
}

function saveEdit() {
  if (!editingSlug.value) return
  const guest = guests.value.find(g => g.slug === editingSlug.value)
  if (!guest) return

  const newSlug = slugify(editName.value.trim())
  if (newSlug !== editingSlug.value && guests.value.some(g => g.slug === newSlug)) {
    showToast(`Slug "${newSlug}" sudah digunakan!`)
    return
  }

  guest.name = editName.value.trim()
  guest.slug = newSlug
  guest.group = editGroup.value
  guest.maxGuests = editMax.value || 1
  editingSlug.value = null
  saveToStorage()
  showToast('Berhasil disimpan')
}

function removeGuest(slug: string) {
  const guest = guests.value.find(g => g.slug === slug)
  if (!confirm(`Hapus "${guest?.name}"?`)) return
  guests.value = guests.value.filter(g => g.slug !== slug)
  saveToStorage()
  showToast('Tamu dihapus')
}

async function copyLink(guest: GuestEntry) {
  const link = generateLink(guest)
  try {
    await navigator.clipboard.writeText(link)
    copiedSlug.value = guest.slug
    showToast(`Link "${guest.name}" disalin!`)
    setTimeout(() => { copiedSlug.value = null }, 2000)
  } catch {
    prompt('Salin link ini:', link)
  }
}

async function copyAllLinks() {
  const lines = filteredGuests.value.map(g =>
    `${g.name}: ${generateLink(g)}`
  ).join('\n')
  try {
    await navigator.clipboard.writeText(lines)
    showToast('Semua link berhasil disalin!')
  } catch {
    prompt('Salin link ini:', lines)
  }
}

function loadFromStorage(): GuestEntry[] | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

async function loadFromJson() {
  try {
    const response = await fetch('/data/invitations.json')
    const json = await response.json()
    const inv = json.invitations.find((i: any) => i.slug === invitationSlug.value)
    if (inv?.guests?.length) {
      return inv.guests as GuestEntry[]
    }
  } catch { /* ignore */ }
  return null
}

function downloadJson() {
  const blob = new Blob([JSON.stringify({ guests: guests.value }, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `guests-${invitationSlug.value}.json`
  a.click()
  URL.revokeObjectURL(url)
  showToast('File JSON didownload')
}

function importJson() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json'
  input.onchange = async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
    try {
      const text = await file.text()
      const data = JSON.parse(text)
      if (data.guests && Array.isArray(data.guests)) {
        guests.value = data.guests
        saveToStorage()
        showToast(`Berhasil import ${data.guests.length} tamu!`)
      } else {
        showToast('Format file tidak valid')
      }
    } catch {
      showToast('Gagal membaca file JSON')
    }
  }
  input.click()
}

function addBulkGuests() {
  const lines = bulkInput.value.split('\n').map(l => l.trim()).filter(Boolean)
  let added = 0
  for (const line of lines) {
    const slug = slugify(line)
    if (!slug || guests.value.some(g => g.slug === slug)) continue
    guests.value.push({ slug, name: line, group: 'keluarga', maxGuests: 2 })
    added++
  }
  if (added > 0) {
    bulkInput.value = ''
    saveToStorage()
    showToast(`${added} tamu berhasil ditambahkan`)
  } else {
    showToast('Tidak ada tamu baru yang ditambahkan')
  }
}

onMounted(async () => {
  const fromJson = await loadFromJson()
  if (fromJson && fromJson.length > 0) {
    guests.value = fromJson
  } else {
    const stored = loadFromStorage()
    if (stored && stored.length > 0) {
      guests.value = stored
    }
  }
})
</script>

<template>
  <div class="admin-root">
    <nav class="topbar">
      <div class="topbar-left">
        <span class="topbar-logo">&#9830;</span>
        <span class="topbar-title">Guest Manager</span>
      </div>
      <a href="/" class="topbar-link">Lihat Undangan &rarr;</a>
      <span v-if="lastSavedAt" class="save-status" :class="{ saving: isSaving }">
        {{ isSaving ? 'Menyimpan...' : `Tersimpan ${lastSavedAt}` }}
      </span>
    </nav>

    <div class="admin-body">
      <aside class="sidebar">
        <div class="sidebar-section">
          <h3 class="sidebar-heading">Tambah Tamu</h3>
          <div class="form-group">
            <label class="form-label">Nama Lengkap</label>
            <input v-model="newGuestName" type="text" class="form-input" placeholder="cth: Budi Santoso" @keydown.enter="addGuest" />
          </div>
          <div class="form-group">
            <label class="form-label">Grup</label>
            <select v-model="newGuestGroup" class="form-input">
              <option v-for="g in groupOptions" :key="g" :value="g">{{ g }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Max Tamu</label>
            <select v-model="newGuestMax" class="form-input">
              <option :value="1">1 orang</option>
              <option :value="2">2 orang</option>
              <option :value="3">3 orang</option>
              <option :value="4">4 orang</option>
              <option :value="5">5 orang</option>
            </select>
          </div>
          <button class="btn btn-primary btn-block" @click="addGuest">Tambah Tamu</button>
        </div>

        <div class="sidebar-section">
          <h3 class="sidebar-heading">Tambah Massal</h3>
          <textarea v-model="bulkInput" class="form-textarea" rows="5" placeholder="Satu nama per baris:&#10;Budi Santoso&#10;Siti Aminah&#10;Pak Ahmad"></textarea>
          <button class="btn btn-secondary btn-block" @click="addBulkGuests" :disabled="!bulkInput.trim()">Tambah Semua</button>
        </div>

        <div class="sidebar-section">
          <h3 class="sidebar-heading">Tools</h3>
          <button class="btn btn-ghost btn-block" @click="copyAllLinks">Salin Semua Link</button>
          <button class="btn btn-ghost btn-block" @click="downloadJson">Download JSON</button>
          <button class="btn btn-ghost btn-block" @click="importJson">Import JSON</button>
        </div>
      </aside>

      <main class="main-panel">
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-value">{{ stats.total }}</span>
            <span class="stat-label">Total Tamu</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">{{ stats.totalInvited }}</span>
            <span class="stat-label">Diundang</span>
          </div>
          <div class="stat-card stat-green">
            <span class="stat-value">{{ stats.opened }}</span>
            <span class="stat-label">Dibuka</span>
          </div>
          <div class="stat-card stat-muted">
            <span class="stat-value">{{ stats.pending }}</span>
            <span class="stat-label">Belum Dibuka</span>
          </div>
        </div>

        <div class="toolbar">
          <div class="toolbar-left">
            <input v-model="searchQuery" type="text" class="form-input toolbar-search" placeholder="Cari nama tamu..." />
            <select v-model="filterGroup" class="form-input toolbar-filter">
              <option value="">Semua Grup</option>
              <option v-for="g in guestGroups" :key="g" :value="g">{{ g }}</option>
            </select>
          </div>
          <span class="toolbar-count">{{ filteredGuests.length }} dari {{ guests.length }} tamu</span>
        </div>

        <div class="table-wrap">
          <table class="tbl">
            <thead>
              <tr>
                <th class="th-num">#</th>
                <th>Nama</th>
                <th>Grup</th>
                <th class="th-center">Max</th>
                <th class="th-center">Status</th>
                <th class="th-actions">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(guest, idx) in pagedGuests" :key="guest.slug" :class="{ 'row-editing': editingSlug === guest.slug }">
                <template v-if="editingSlug === guest.slug">
                  <td class="td-num">{{ (currentPage - 1) * perPage + idx + 1 }}</td>
                  <td>
                    <input v-model="editName" class="form-input form-input-sm" />
                  </td>
                  <td>
                    <select v-model="editGroup" class="form-input form-input-sm">
                      <option v-for="g in groupOptions" :key="g" :value="g">{{ g }}</option>
                    </select>
                  </td>
                  <td class="td-center">
                    <select v-model="editMax" class="form-input form-input-sm">
                      <option :value="1">1</option>
                      <option :value="2">2</option>
                      <option :value="3">3</option>
                      <option :value="4">4</option>
                      <option :value="5">5</option>
                    </select>
                  </td>
                  <td class="td-center">
                    <span v-if="getOpenData(guest.slug)" class="status-badge status-open">
                      {{ getOpenData(guest.slug)?.openCount }}x
                    </span>
                    <span v-else class="status-badge status-pending">-</span>
                  </td>
                  <td class="td-actions">
                    <button class="btn-icon btn-save" @click="saveEdit" title="Simpan">&#10003;</button>
                    <button class="btn-icon btn-cancel" @click="cancelEdit" title="Batal">&#10005;</button>
                  </td>
                </template>
                <template v-else>
                  <td class="td-num">{{ (currentPage - 1) * perPage + idx + 1 }}</td>
                  <td>
                    <div class="guest-name">{{ guest.name }}</div>
                    <div class="guest-slug">{{ guest.slug }}</div>
                  </td>
                  <td><span class="group-badge">{{ guest.group || '-' }}</span></td>
                  <td class="td-center">{{ guest.maxGuests }}</td>
                  <td class="td-center">
                    <span v-if="getOpenData(guest.slug)" class="status-badge status-open" :title="'Terakhir: ' + getOpenData(guest.slug)?.lastOpenedAt">
                      {{ getOpenData(guest.slug)?.openCount }}x dibuka
                    </span>
                    <span v-else class="status-badge status-pending">belum</span>
                  </td>
                  <td class="td-actions">
                    <button class="btn-icon btn-edit" @click="startEdit(guest)" title="Edit">&#9998;</button>
                    <button class="btn-icon btn-copy" @click="copyLink(guest)" :title="copiedSlug === guest.slug ? 'Tersalin!' : 'Salin Link'">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </button>
                    <button class="btn-icon btn-delete" @click="removeGuest(guest.slug)" title="Hapus">&#10005;</button>
                  </td>
                </template>
              </tr>
              <tr v-if="filteredGuests.length === 0">
                <td colspan="6" class="td-empty">
                  <div class="empty-state">
                    <span class="empty-icon">&#128203;</span>
                    <p>Belum ada tamu. Tambah dari panel kiri.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="totalPages > 1" class="pagination">
          <button class="page-btn" :disabled="currentPage <= 1" @click="goToPage(1)" title="Halaman pertama">&laquo;</button>
          <button class="page-btn" :disabled="currentPage <= 1" @click="goToPage(currentPage - 1)">&lsaquo;</button>

          <template v-for="p in visiblePages" :key="p">
            <span v-if="p === '...'" class="page-dots">...</span>
            <button v-else class="page-btn" :class="{ active: p === currentPage }" @click="goToPage(p as number)">{{ p }}</button>
          </template>

          <button class="page-btn" :disabled="currentPage >= totalPages" @click="goToPage(currentPage + 1)">&rsaquo;</button>
          <button class="page-btn" :disabled="currentPage >= totalPages" @click="goToPage(totalPages)" title="Halaman terakhir">&raquo;</button>

          <select v-model.number="perPage" class="page-size" @change="currentPage = 1">
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
        </div>

        <div v-if="showJsonPanel" class="json-panel">
          <div class="json-panel-header">
            <h3>JSON Sync</h3>
            <div>
              <button class="btn btn-ghost btn-sm" @click="async () => { await navigator.clipboard.writeText(jsonExport); showToast('JSON disalin!') }">Salin</button>
              <button class="btn btn-ghost btn-sm" @click="showJsonPanel = false">Tutup</button>
            </div>
          </div>
          <pre class="json-pre">{{ jsonExport }}</pre>
          <p class="json-hint">Copy JSON di atas, lalu tempel ke <code>invitations.json</code> pada field <code>guests</code>.</p>
        </div>
      </main>
    </div>

    <Transition name="toast">
      <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>
    </Transition>
  </div>
</template>

<style scoped>
.admin-root {
  min-height: 100vh;
  background: #0F0E0C;
  color: #E8E0D1;
  font-family: 'Cormorant Garamond', serif;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  height: 56px;
  background: #1A1815;
  border-bottom: 1px solid rgba(201,168,106,0.15);
  flex-shrink: 0;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.topbar-logo {
  color: #C9A86A;
  font-size: 18px;
}

.topbar-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: #C9A86A;
  font-weight: 700;
}

.save-status {
  font-size: 11px;
  color: rgba(232,224,209,0.3);
}

.save-status.saving {
  color: #C9A86A;
}

.topbar-link {
  margin-left: auto;
  color: #C9A86A;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.admin-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 280px;
  flex-shrink: 0;
  background: #161412;
  border-right: 1px solid rgba(201,168,106,0.12);
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-heading {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  color: #C9A86A;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(201,168,106,0.12);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-label {
  font-size: 12px;
  color: rgba(232,224,209,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-input {
  background: #1E1B17;
  border: 1px solid rgba(201,168,106,0.2);
  color: #E8E0D1;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #C9A86A;
}

.form-input-sm {
  padding: 6px 8px;
  font-size: 13px;
}

.form-textarea {
  background: #1E1B17;
  border: 1px solid rgba(201,168,106,0.2);
  color: #E8E0D1;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  outline: none;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-textarea:focus {
  border-color: #C9A86A;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.btn-block { width: 100%; }

.btn-sm { padding: 5px 10px; font-size: 12px; }

.btn-primary {
  background: #C9A86A;
  color: #0F0E0C;
}

.btn-primary:hover:not(:disabled) {
  background: #D4B878;
}

.btn-secondary {
  background: rgba(201,168,106,0.15);
  color: #C9A86A;
  border: 1px solid rgba(201,168,106,0.25);
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(201,168,106,0.25);
}

.btn-ghost {
  background: transparent;
  color: rgba(232,224,209,0.6);
  border: 1px solid rgba(201,168,106,0.1);
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
}

.btn-ghost:hover:not(:disabled) {
  color: #C9A86A;
  border-color: rgba(201,168,106,0.3);
}

.main-panel {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.stat-card {
  background: #1A1815;
  border: 1px solid rgba(201,168,106,0.12);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #C9A86A;
}

.stat-green .stat-value { color: #8E9B84; }
.stat-muted .stat-value { color: rgba(232,224,209,0.4); }

.stat-label {
  font-size: 12px;
  color: rgba(232,224,209,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.toolbar-left {
  display: flex;
  gap: 8px;
  flex: 1;
}

.toolbar-search {
  max-width: 280px;
}

.toolbar-filter {
  max-width: 160px;
}

.toolbar-count {
  font-size: 13px;
  color: rgba(232,224,209,0.4);
  white-space: nowrap;
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid rgba(201,168,106,0.12);
  border-radius: 8px;
  background: #1A1815;
}

.tbl {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.tbl th {
  text-align: left;
  padding: 12px 14px;
  font-size: 11px;
  color: rgba(232,224,209,0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  border-bottom: 1px solid rgba(201,168,106,0.12);
  background: #161412;
  white-space: nowrap;
}

.tbl td {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(201,168,106,0.06);
  vertical-align: middle;
}

.tbl tbody tr:hover {
  background: rgba(201,168,106,0.03);
}

.row-editing {
  background: rgba(201,168,106,0.06) !important;
}

.th-num { width: 40px; }
.th-center { text-align: center; }
.th-actions { width: 120px; text-align: center; }
.td-num { color: rgba(232,224,209,0.3); font-size: 12px; }
.td-center { text-align: center; }

.td-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.guest-name {
  font-weight: 600;
  font-size: 15px;
}

.guest-slug {
  font-family: monospace;
  font-size: 11px;
  color: rgba(232,224,209,0.3);
  margin-top: 2px;
}

.group-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  background: rgba(201,168,106,0.1);
  color: rgba(201,168,106,0.8);
  border: 1px solid rgba(201,168,106,0.15);
  text-transform: capitalize;
}

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.status-open {
  background: rgba(142,155,132,0.15);
  color: #8E9B84;
}

.status-pending {
  background: rgba(232,224,209,0.05);
  color: rgba(232,224,209,0.3);
}

.btn-icon {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  transition: all 0.15s;
  background: transparent;
  color: rgba(232,224,209,0.4);
}

.btn-icon:hover {
  background: rgba(201,168,106,0.1);
  color: #C9A86A;
}

.btn-edit:hover { color: #C9A86A; }
.btn-copy:hover { color: #8E9B84; }
.btn-delete:hover { color: #B07060; background: rgba(176,112,96,0.1); }

.btn-save {
  color: #8E9B84;
  font-size: 16px;
}

.btn-save:hover { background: rgba(142,155,132,0.15); }

.btn-cancel {
  color: #B07060;
  font-size: 14px;
}

.btn-cancel:hover { background: rgba(176,112,96,0.1); }

.td-empty { padding: 0; }

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: rgba(232,224,209,0.3);
}

.empty-icon { font-size: 32px; display: block; margin-bottom: 12px; }

.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.page-btn {
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(201,168,106,0.12);
  background: transparent;
  color: rgba(232,224,209,0.5);
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover:not(:disabled):not(.active) {
  border-color: rgba(201,168,106,0.3);
  color: #C9A86A;
}

.page-btn:disabled {
  opacity: 0.25;
  cursor: default;
}

.page-btn.active {
  background: #C9A86A;
  color: #0F0E0C;
  border-color: #C9A86A;
  font-weight: 700;
}

.page-dots {
  width: 28px;
  text-align: center;
  color: rgba(232,224,209,0.25);
  font-size: 13px;
  user-select: none;
}

.page-size {
  margin-left: auto;
  background: #1E1B17;
  border: 1px solid rgba(201,168,106,0.2);
  color: rgba(232,224,209,0.5);
  padding: 4px 8px;
  border-radius: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  outline: none;
  cursor: pointer;
}

.json-panel {
  background: #1A1815;
  border: 1px solid rgba(201,168,106,0.12);
  border-radius: 8px;
  overflow: hidden;
}

.json-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(201,168,106,0.12);
}

.json-panel-header h3 {
  margin: 0;
  font-size: 14px;
  color: #C9A86A;
}

.json-pre {
  padding: 16px;
  font-family: monospace;
  font-size: 12px;
  color: #E8E0D1;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 300px;
  overflow-y: auto;
  margin: 0;
}

.json-hint {
  padding: 12px 16px;
  font-size: 12px;
  color: rgba(232,224,209,0.4);
  margin: 0;
  border-top: 1px solid rgba(201,168,106,0.08);
}

.json-hint code {
  background: rgba(201,168,106,0.1);
  padding: 2px 6px;
  border-radius: 3px;
  color: #C9A86A;
}

.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #C9A86A;
  color: #0F0E0C;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  z-index: 9999;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

@media (max-width: 768px) {
  .admin-body {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(201,168,106,0.12);
    padding: 16px;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
  }

  .sidebar-section {
    min-width: 240px;
    flex-shrink: 0;
  }

  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .toolbar-left {
    flex-direction: column;
  }

  .toolbar-search,
  .toolbar-filter {
    max-width: none;
  }

  .main-panel {
    padding: 16px;
  }

  .tbl th,
  .tbl td {
    padding: 8px 10px;
    font-size: 13px;
  }

  .guest-slug {
    display: none;
  }
}
</style>
