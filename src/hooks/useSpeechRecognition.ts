import { useEffect, useRef, useState } from 'react'

type SpeechRecognitionType = typeof window & {
  webkitSpeechRecognition?: any
  SpeechRecognition?: any
}

export function useSpeechRecognition() {
  const [supported, setSupported] = useState(false)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    const w = window as unknown as SpeechRecognitionType
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition
    if (SR) {
      setSupported(true)
      recognitionRef.current = new SR()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (e: any) => {
        const t = Array.from(e.results).map((r: any) => r[0].transcript).join(' ')
        setTranscript(t)
      }
      recognitionRef.current.onend = () => setListening(false)
    }
  }, [])

  const start = () => {
    if (!recognitionRef.current) return
    setTranscript('')
    setListening(true)
    recognitionRef.current.start()
  }
  const stop = () => {
    if (!recognitionRef.current) return
    recognitionRef.current.stop()
  }

  return { supported, listening, transcript, start, stop, setTranscript }
}