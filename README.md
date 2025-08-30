# Predusk Frontend & UI/UX Assessment

A frontend developer assessment project for **Predusk Technology Pvt Ltd**.  
Built with **React + TypeScript + Vite + TailwindCSS**, featuring a modular chat interface, AI-powered features, accessibility best practices, Storybook documentation, and deployment to Vercel.

---

## ✨ Features

- **General Chat** — simple AI conversation
- **Summarize** — condense text into concise bullet points
- **Translate** — translate text to a target language (default: Hindi)
- **Rewrite** — switch between **formal** or **friendly** tone
- **Key Points Extraction** — extract important points from long content
- **Sentiment Analysis** — classify and explain positive/neutral/negative tone
- **Explain Code** — provide line-by-line explanation of code snippets
- **Q&A over Uploaded File** — answer questions strictly from uploaded `.txt/.md/.json` context

### Input Methods
- **Text input** with submit/reset  
- **Voice input** (Web Speech API)  
- **File upload** (plain text, markdown, JSON)  

### Output Tools
- Copy to clipboard  
- Download as `.txt`  

---

## 🛠️ Tech Stack

- **Framework:** React 18, TypeScript, Vite  
- **Styling:** TailwindCSS (light/dark themes)  
- **Docs:** Storybook 8  
- **Deployment:** Vercel (Netlify alternative supported)  
- **AI API:** OpenAI-compatible (Chat Completions API)  

---

## ♿ Accessibility

- Keyboard navigation with visible focus rings  
- `aria-live` regions announce new assistant messages  
- Labeled inputs and buttons (mic, file upload, reset)  
- Color-contrast verified in light and dark themes  

---

## 🚀 Getting Started

### Clone & Install
```bash
1. Clone the Repository
git clone https://github.com/rahul-pal-mastizone/predusk-assessment.git
cd predusk-assessment
npm install

2. Configure Environment

Create a .env file:

VITE_OPENAI_API_KEY=sk-xxxx
VITE_OPENAI_MODEL=gpt-4o-mini
VITE_OPENAI_BASE_URL=https://api.openai.com/v1

3. Run Locally
npm run dev


App → http://localhost:5173

4. Storybook
npm run storybook


Docs → http://localhost:6006

5. Build for Production
npm run build
npm run preview



📂 Project Structure
project-root/
├─ src/                  # Main source code
│  ├─ app/               # Root app shell
│  │  └─ App.tsx
│  │
│  ├─ components/        # Reusable UI components
│  │  ├─ chat/           # Chat interface components
│  │  │  └─ Chat.tsx
│  │  ├─ ThemeToggle.tsx # Light/Dark theme toggle
│  │  └─ ThemeToggle.stories.tsx
│  │
│  ├─ hooks/             # Custom React hooks
│  │  └─ useSpeechRecognition.ts
│  │
│  ├─ lib/               # Utility functions
│  │  └─ ai.ts           # AI API adapter (OpenAI-compatible)
│  │
│  ├─ main.tsx           # React entry point
│  └─ styles.css         # Global styles
│
├─ .storybook/           # Storybook configuration
│  ├─ main.ts
│  └─ preview.ts
│
├─ docs/                 # Documentation
│  ├─ figma-checklist.md
│  ├─ report_template.md
│  └─ submission-checklist.md
│
├─ public/               # Static assets
│
├─ .env                  # Environment variables (API keys, etc.)
├─ .env.example          # Example env template
├─ .gitignore            # Git ignore rules
├─ index.html            # Main HTML entry
├─ package.json          # Dependencies & scripts
├─ package-lock.json     # NPM lockfile
├─ tailwind.config.js    # Tailwind CSS config
├─ postcss.config.js     # PostCSS config
├─ tsconfig.json         # TypeScript config
├─ vite.config.ts        # Vite config
└─ README.md             # Documentation

```

---

## 🌍 Deployment

Deployed on **Vercel** (recommended):  

- **Framework preset:** Vite  
- **Build command:** `npm run build`  
- **Output directory:** `dist`  
- **Environment variables:** same as `.env`  

---

## 📖 Documentation

- **Design (Figma/Framer):** [will Add link here]  
- **Report (PDF):** see `/docs/report_template.md`  
- **Storybook:** run locally with `npm run storybook` or deploy separately  

---

## 📸 Screenshots

screenshots of each feature here:  
- General Chat  
- Summarize  
- Translate  
- Rewrite (Formal/Friendly)  
- Key Points Extraction  
- Sentiment Analysis  
- Explain Code  
- Q&A over File  

---

## ✅ Submission Checklist

- [x] GitHub repo with code  
- [x] Live deployed app (Vercel/Netlify)  
- [x] Figma/Framer design link  
- [x] Project Report (PDF)  
- [x] Storybook docs  
- [x] Screenshots of features  

---

## 👨‍💻 Author

**Rahul Pal**  
Frontend Developer — Predusk Assessment  
📧 [rahul.pal.moderntechno@gmail.com](mailto:rahulpal.moderntechno@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/rahul155/)

---