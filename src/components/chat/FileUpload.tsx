import { useId } from 'react'

export function FileUpload({ onText }: { onText: (t: string) => void }) {
  const id = useId()
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('text/') && !file.name.endsWith('.md') && !file.name.endsWith('.json')) {
      alert('Please upload a plain text, .md, or .json file for this demo.')
      return
    }
    const text = await file.text()
    onText(text)
    e.currentTarget.value = ''
  }
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm">Upload file:</label>
      <input id={id} type="file" onChange={onChange} className="text-sm" aria-describedby={id+'-desc'} />
      <span id={id+'-desc'} className="text-xs text-muted">Accepts .txt, .md, .json</span>
    </div>
  )
}