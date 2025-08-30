export function CopyDownload({ text, filename='response.txt' }:{ text: string; filename?: string }) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied to clipboard')
    } catch {
      alert('Copy failed')
    }
  }
  const onDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }
  return (
    <div className="flex gap-2">
      <button onClick={onCopy} className="rounded border border-border/70 px-2 py-1 text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-border" aria-label="Copy response">Copy</button>
      <button onClick={onDownload} className="rounded border border-border/70 px-2 py-1 text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-border" aria-label="Download response">Download</button>
    </div>
  )
}