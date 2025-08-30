import { Message } from './types'
import { MessageItem } from './MessageItem'

export function MessageList({ messages }: { messages: Message[] }) {
  return (
    <div role="list" aria-label="Conversation history" className="space-y-1">
      {messages.map(m => <MessageItem key={m.id} m={m} />)}
    </div>
  )
}