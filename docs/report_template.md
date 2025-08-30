# Project Report — Predusk Assessment

## 1. Research
- Studied **OpenAI Playground** (for API behavior), HuggingFace Spaces, and LangChain docs to understand AI-powered interfaces.  
- Selected **8 core features**:
  1. General Chat  
  2. Summarize  
  3. Translate  
  4. Rewrite (Formal)  
  5. Rewrite (Friendly)  
  6. Key Points Extraction  
  7. Sentiment Analysis  
  8. Explain Code / Q&A over File  
- These cover a mix of NLP tasks (summarization, sentiment, translation) and developer-focused utilities (code explanation, Q&A).

---

## 2. Design
- Created **wireframes & component library** (Figma/Framer — link here once you have it).  
- **Design tokens**:
  - Colors: light/dark theme support.  
  - Typography: Inter, size system (sm, base, lg, xl).  
  - Spacing: Tailwind’s scale.  
- **Responsive breakpoints**: mobile-first, optimized up to desktop (flex/grid layout).

---

## 3. Development
- **Tech stack**: React + TypeScript + Vite, TailwindCSS, Storybook.  

  **Architecture**
  - React + TS UI → `lib/ai.ts` OpenAI-compatible adapter → Chat Completions API.
  - Feature selector builds a task-specific prompt; uploaded file text is injected as system context.

- **Folder structure**:
  - `src/app` → root App.  
  - `src/components/chat` → Chat, FeatureSelector, InputBar, MicButton, FileUpload.  
  - `src/hooks` → Speech Recognition.  
- **State management**: React hooks (`useState`, `useEffect`).  
- **Accessibility**:
  - Keyboard navigation (tab, enter).  
  - ARIA labels (mic button, upload).  
  - Color contrast via Tailwind dark/light themes.



---

## 4. Testing & Documentation
- **Storybook coverage**:  
  - Chat  
  - ThemeToggle  
  - InputBar  
  - MicButton  
  - FileUpload  
- **Manual tests**:
  - ✅ Chat input works with Enter.  
  - ✅ Voice input with mic button.  
  - ✅ Dark/light theme toggle.  
  - ✅ Mobile responsive.  
- **Known limitations**:
  - File upload only supports `.txt`, `.md`, `.json`.  
  - API key must be set manually in `.env`.  

  - Web Speech API (voice input) requires Chrome and mic permission.
  - Q&A uses only uploaded **plain text** (PDF/Docx not parsed in this version).

---

## 5. Deployment
- Hosting provider: **Vercel** (alternatively Netlify).  
- Environment variables set in Vercel:
  - `VITE_OPENAI_API_KEY`  
  - `VITE_OPENAI_MODEL`  
  - `VITE_OPENAI_BASE_URL`  
- **Live URL**: _(will add after deployment)_.

### Environment variables used
- `VITE_OPENAI_API_KEY` – stored only in local `.env` and Vercel Project Settings.
- `VITE_OPENAI_MODEL` – default `gpt-4o-mini`.
- `VITE_OPENAI_BASE_URL` – `https://api.openai.com/v1`.

### Privacy & cost notes
- No keys committed to Git. Calls are serverless client → OpenAI; usage billed to my account.

---

## 6. Screenshots
- Desktop chat UI (light + dark).  
- Translate example (English → Hindi).  
- Summarize example.  
- Sentiment example.  
- File upload + Q&A.  
- Storybook components (Chat, InputBar, FileUpload, MicButton).

