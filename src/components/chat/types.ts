export type Role = 'user' | 'assistant'
export type Message = { id: string; role: Role; content: string; ts: number }