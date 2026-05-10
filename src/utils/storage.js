const KEY = 'arrole_franky_rsvp_v3'

export function getRsvps() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

export function saveRsvp(data) {
  const list = getRsvps()
  const entry = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...data }
  localStorage.setItem(KEY, JSON.stringify([entry, ...list]))
  return entry
}

export function clearRsvps() { localStorage.removeItem(KEY) }

export function exportCsv() {
  const rows = getRsvps()
  const headers = ['date','nom','email','telephone','presence','invites','menu','allergies','navette','message']
  const body = rows.map(r => [r.createdAt,r.fullName,r.email,r.phone,r.attendance,r.guests,r.meal,r.allergies,r.transport,r.message].map(v => `"${String(v || '').replaceAll('"','""')}"`).join(','))
  const blob = new Blob([[headers.join(','), ...body].join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'confirmations-mariage-arrole-franky.csv'
  a.click()
  URL.revokeObjectURL(url)
}
