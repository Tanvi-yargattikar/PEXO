# PEXO — Your campus, on loop ✳

PEXO is a student-first campus discovery and collaboration concept. It brings campus events, hackathons, notices, academic resources, student portfolios, and teammate discovery into one playful experience. The current version is a frontend demo with sample content.

## What works in this demo

- Scroll-driven storytelling landing page.
- Funky + chunky visual design using the existing PEXO color palette.
- Campus category cards, demo events, student profile previews, and team discovery interactions.
- Ask PEXO chat with simulated sample answers and clearly labelled sample sources.
- Animated `thinking-orbs` indicator while the demo assistant prepares an answer.
- Signup/login themed frontend screens (authentication is not connected).

## Tech stack

- React + JavaScript (JSX) — no TypeScript source files.
- Vite.
- Tailwind CSS and the project's existing custom CSS.
- Framer Motion and GSAP ScrollTrigger.
- Lucide React.
- Thinking Orbs for the AI searching state.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:3000`).

Create a production build with:

```bash
npm run build
```

## Important demo limitations

This version does not connect to a real campus database, live RAG pipeline, real account authentication, or live GitHub/LinkedIn integrations. The people, events, dates, and documents are fictional sample content. Do not enter real passwords or sensitive information.

## Team workflow

Create a feature branch, make a small focused change, commit it with a clear message, and open a pull request for review before merging into `main`. Never commit API keys or `.env` files.
