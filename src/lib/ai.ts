export type ChatMessage = { role: 'user' | 'assistant' | 'system'; content: string }
export type ChatResponse = { content: string }

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const BASE_URL = import.meta.env.VITE_OPENAI_BASE_URL || 'https://api.openai.com/v1'
const MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini'

// Minimal OpenAI-compatible adapter. You can replace the URL/model to use different providers.
export async function chat(messages: ChatMessage[]): Promise<ChatResponse> {
  if (!API_KEY) {
    // Fallback demo behavior (no network). Echo the last user message reversed.
    const last = messages.filter(m => m.role === 'user').pop()?.content ?? ''
    const mock = last.split('').reverse().join('')
    return { content: `🔐 Set your API key in .env to enable real AI. Demo echo: ${mock}` }
  }
  const r = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.3
    })
  })
  if (!r.ok) {
    const text = await r.text()
    throw new Error(`API error ${r.status}: ${text}`)
  }
  const data = await r.json()
  const content = data?.choices?.[0]?.message?.content ?? ''
  return { content }
}