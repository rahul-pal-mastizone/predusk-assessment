import { ThemeToggle } from '../components/ThemeToggle'
import { Chat } from '../components/chat/Chat'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 backdrop-blur bg-background/70">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">AI Playground • Predusk Assessment</h1>
          <ThemeToggle />
        </div>
      </header>
      <main id="content" className="mx-auto max-w-5xl px-4 py-6">
        <Chat />
      </main>
      <footer className="mx-auto max-w-5xl px-4 py-10 text-sm text-muted">
        <p className="mb-1">Built with React + TypeScript + Vite. Accessible, responsive, and themable.</p>
        <p>Use the mic to speak, upload a text file, or just type. Outputs can be copied or downloaded.</p>
      </footer>
    </div>
  )
}