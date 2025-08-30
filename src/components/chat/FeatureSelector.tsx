import { useId } from 'react'

export type Feature =
  | 'chat'
  | 'summarize'
  | 'translate'
  | 'tone-formal'
  | 'tone-friendly'
  | 'keypoints'
  | 'sentiment'
  | 'explain-code'
  | 'qa-file'

export function FeatureSelector({
  feature,
  setFeature,
  targetLang,
  setTargetLang,
}: {
  feature: Feature
  setFeature: (f: Feature) => void
  targetLang: string
  setTargetLang: (s: string) => void
}) {
  const id = useId()
  const langId = useId()

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-sm">Feature:</label>
        <select
          id={id}
          value={feature}
          onChange={(e) => setFeature(e.target.value as Feature)}
          className="rounded border border-border/70 bg-card px-2 py-1 text-sm"
        >
          <option value="chat">General chat</option>
          <option value="summarize">Summarize</option>
          <option value="translate">Translate</option>
          <option value="tone-formal">Rewrite (formal)</option>
          <option value="tone-friendly">Rewrite (friendly)</option>
          <option value="keypoints">Extract key points</option>
          <option value="sentiment">Sentiment analysis</option>
          <option value="explain-code">Explain code</option>
          <option value="qa-file">Q&A over uploaded text</option>
        </select>
      </div>

      {feature === 'translate' && (
        <div className="flex items-center gap-2">
          <label htmlFor={langId} className="text-sm">Target language:</label>
          <input
            id={langId}
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            placeholder="e.g., Hindi"
            className="rounded border border-border/70 bg-card px-2 py-1 text-sm"
          />
        </div>
      )}

      <p className="text-xs text-muted">
        Pick a feature, then type your text below. Uploading a file adds context that some features (like Q&A) can use.
      </p>
    </div>
  )
}