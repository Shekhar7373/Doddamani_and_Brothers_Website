export async function sendToSheet(formData) {
  const SHEETDB_API = import.meta.env.VITE_SHEETDB_API
  const response = await fetch(SHEETDB_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: formData })
  })
  if (!response.ok) throw new Error('Failed to submit')
  return response.json()
}