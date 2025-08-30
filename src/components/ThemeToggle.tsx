import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') == null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark(v => !v)}
      className="rounded-2xl border border-border/70 px-3 py-1 text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border"
      aria-pressed={dark}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {dark ? 'Dark 🌙' : 'Light ☀️'}
    </button>
  )
}