import { useEffect, useMemo, useRef, useState } from 'react'
import { chat as aiChat } from '../../lib/ai'
import { Message, Role } from './types'
import { MessageList } from './MessageList'
import { InputBar } from './InputBar'
import { FileUpload } from './FileUpload'
import { MicButton } from './MicButton'
import { CopyDownload } from './CopyDownload'
import { FeatureSelector, type Feature } from './FeatureSelector'

function uid() { return Math.random().toString(36).slice(2) }

type Context = {
  fileText: string
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [context, setContext] = useState<Context>({ fileText: '' })
  const [feature, setFeature] = useState<Feature>('chat')
  const [targetLang, setTargetLang] = useState('Hindi')

  const liveRegionRef = useRef<HTMLDivElement>(null)

  const push = (role: Role, content: string) => {
    setMessages(m => [...m, { id: uid(), role, content, ts: Date.now() }])
  }

  function buildUserPrompt(base: string) {
    switch (feature) {
      case 'summarize':
        return `Summarize the following text in 5-8 bullet points. Be concise.\n\n${base}`
      case 'translate':
        return `Translate the following text to ${targetLang}. Keep meaning and tone.\n\n${base}`
      case 'tone-formal':
        return `Rewrite the following text in a formal tone.\n\n${base}`
      case 'tone-friendly':
        return `Rewrite the following text in a friendly, conversational tone.\n\n${base}`
      case 'keypoints':
        return `Extract key points as bullet points.\n\n${base}`
      case 'sentiment':
        return `Analyze the sentiment (positive/neutral/negative) and explain briefly.\n\n${base}`
      case 'explain-code':
        return `Explain the following code step by step, with comments if helpful.\n\n${base}`
      case 'qa-file':
        return `Answer the question *using only the provided CONTEXT*. If the answer is not in the context, say: "I couldn't find that in the uploaded text."\n\nQuestion: ${base}`
      default:
        return base
    }
  }

  const onSubmit = async () => {
    if (!input.trim()) return
    const prompt = input.trim()
    setInput('')
    push('user', prompt)
    try {
      const messagesForAPI = [
        { role: 'system', content: 'You are a concise helpful AI assistant.' },
      ] as { role: 'user' | 'assistant' | 'system'; content: string }[]

      if (context.fileText) {
        messagesForAPI.push({
          role: 'system',
          content:
            `CONTEXT (from user-uploaded file):\n` +
            context.fileText.slice(0, 8000) // keep requests small
        })
      }

      // Include conversation history
      for (const m of messages) {
        messagesForAPI.push({ role: m.role, content: m.content })
      }

      messagesForAPI.push({ role: 'user', content: buildUserPrompt(prompt) })

      const { content } = await aiChat(messagesForAPI as any)
      push('assistant', content)
    } catch (err:any) {
      push('assistant', `⚠️ ${err.message}`)
    }
  }

  const onReset = () => setMessages([])

  useEffect(() => {
    // Announce last message for screen readers
    const last = messages[messages.length - 1]
    if (last && liveRegionRef.current) {
      liveRegionRef.current.textContent = `${last.role} said: ${last.content}`
    }
  }, [messages])

  const lastAssistant = useMemo(
    () => [...messages].reverse().find(m => m.role === 'assistant')?.content ?? '',
    [messages]
  )

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_360px]">
      <section className="rounded-2xl border border-border/70 p-4 bg-card">
        <h2 className="text-base font-semibold mb-2">Chat</h2>
        <div className="h-[50vh] overflow-y-auto pr-1">
          <MessageList messages={messages} />
        </div>

        <div aria-live="polite" aria-atomic="true" className="sr-only" ref={liveRegionRef} />

        <div className="mt-4 space-y-3">
          <InputBar value={input} onChange={setInput} onSubmit={onSubmit} onReset={onReset} />
          {lastAssistant && <CopyDownload text={lastAssistant} />}
        </div>
      </section>

      <aside className="space-y-4">
        <section className="rounded-2xl border border-border/70 p-4 bg-card">
          <h2 className="text-base font-semibold mb-2">Feature</h2>
          <FeatureSelector
            feature={feature}
            setFeature={setFeature}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
          />
        </section>

        <section className="rounded-2xl border border-border/70 p-4 bg-card">
          <h2 className="text-base font-semibold mb-2">Inputs</h2>
          <div className="space-y-3">
            <MicButton onTranscript={(t) => setInput(prev => (prev ? prev + '\n' : '') + t)} />
            <FileUpload onText={(t) => setContext(prev => ({ ...prev, fileText: (prev.fileText ? prev.fileText + '\n' : '') + t }))} />
            <div className="text-xs text-muted">
              Context from file: <strong>{context.fileText.length}</strong> chars
              {context.fileText && (
                <>
                  {' '}<button
                    className="ml-2 underline"
                    onClick={() => setContext({ fileText: '' })}
                  >
                    Clear
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border/70 p-4 bg-card">
          <h2 className="text-base font-semibold mb-2">Tips</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Use <kbd className="px-1 py-0.5 rounded border">Ctrl/⌘ + Enter</kbd> to send.</li>
            <li>Toggle theme from the header.</li>
            <li>Upload a .txt file to include its content as context.</li>
          </ul>
        </section>
      </aside>
    </div>
  )
}