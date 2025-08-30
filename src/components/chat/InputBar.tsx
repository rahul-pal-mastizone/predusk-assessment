import { ChangeEvent } from 'react'

export function InputBar({
  value,
  onChange,
  onSubmit,
  onReset,
}: {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
  onReset: () => void
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      onSubmit()
    }
  }
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)

  return (
    <div className="rounded-2xl border border-border/70 p-3 bg-card">
      <label htmlFor="prompt" className="sr-only">Prompt</label>
      <textarea
        id="prompt"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={3}
        className="w-full resize-y bg-transparent outline-none"
        placeholder="Type a prompt... (Cmd/Ctrl + Enter to send)"
      />
      <div className="flex items-center justify-end gap-2 pt-2">
        <button onClick={onReset} className="rounded border border-border/70 px-3 py-1 text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-border">Reset</button>
        <button onClick={onSubmit} className="rounded bg-foreground text-background px-3 py-1 text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-border">Send</button>
      </div>
    </div>
  )
}