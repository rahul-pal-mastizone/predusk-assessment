import { Message } from './types'

export function MessageItem({ m }: { m: Message }) {
  return (
    <div className="flex gap-3 py-3" role="listitem" aria-label={m.role === 'user' ? 'User message' : 'Assistant message'}>
      <div className="shrink-0 w-8 h-8 rounded-full bg-card border border-border/60 grid place-items-center text-sm" aria-hidden>
        {m.role === 'user' ? '👤' : '🤖'}
      </div>
      <div className="flex-1">
        <div className="text-xs text-muted mb-1">{new Date(m.ts).toLocaleTimeString()}</div>
        <div className="prose prose-invert:prose-neutral max-w-none whitespace-pre-wrap">
          {m.content}
        </div>
      </div>
    </div>
  )
}