import { useSpeechRecognition } from '../../hooks/useSpeechRecognition'

export function MicButton({ onTranscript }:{ onTranscript:(t:string)=>void }) {
  const { supported, listening, transcript, start, stop, setTranscript } = useSpeechRecognition()

  // Push transcript when recognition stops
  if (!listening && transcript) {
    onTranscript(transcript)
    setTranscript('')
  }

  if (!supported) {
    return <span className="text-xs text-muted">🎙️ Voice input not supported in this browser.</span>
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => (listening ? stop() : start())}
        className="rounded border border-border/70 px-2 py-1 text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-border"
        aria-pressed={listening}
        aria-label={listening ? 'Stop recording' : 'Start recording'}
        title="Voice input"
      >
        {listening ? 'Stop 🎙️' : 'Speak 🎙️'}
      </button>
      <span className="text-xs text-muted">{listening ? 'Listening…' : 'Press to dictate'}</span>
    </div>
  )
}