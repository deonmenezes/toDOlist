# toDOlist

A To-Do list web application built with Next.js 14 (Pages Router), NextUI v2, and Firebase. Provides task creation, authentication, and management features with a polished UI.

## Tech Stack

- **Next.js 14** (Pages Router)
- **TypeScript 5**
- **NextUI v2** — component library
- **Tailwind CSS** with Tailwind Variants
- **Firebase 10** — backend/auth/data storage
- **next-auth** — authentication
- **Framer Motion** + **GSAP** — animations
- **axios** — HTTP client
- **react-hot-toast** — notifications

## Setup

```bash
yarn install
```

Firebase credentials are required. Set up a `.env.local` file with your Firebase project config (API key, project ID, etc.) and any `next-auth` secrets before running.

## Build / Run / Test

```bash
yarn dev      # development server (Next.js)
yarn build    # production build
yarn start    # production server
yarn lint     # ESLint with auto-fix
```

## Project Structure

```
toDOlist/
├── pages/              # Next.js pages (file-based routing)
│   ├── index.tsx       # Home page
│   ├── Login.tsx       # Authentication page
│   ├── ToDoList.tsx    # Main to-do list page
│   ├── _app.tsx        # App wrapper (providers, themes)
│   ├── _document.tsx   # Custom HTML document
│   └── api/            # API routes
├── components/
│   ├── todo/           # Todo-specific components
│   │   ├── index.tsx   # Todo container
│   │   ├── AllTasks.tsx
│   │   ├── createButton.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── navbar.tsx
│   └── icons.tsx
├── context/
│   └── index.tsx       # React context for app state
├── config/
│   └── site.ts         # Site metadata and nav config
├── types/
│   └── index.ts        # Shared TypeScript types
├── styles/             # Global CSS
├── layouts/            # Page layout wrappers
└── tailwind.config.js
```

## Architecture & Key Files

- **Pages Router**: Uses `pages/` directory (not Next.js App Router).
- **Context** (`context/index.tsx`): Global state for todo items and user session.
- **Firebase**: Used for data persistence; initialize via environment variables.
- **Authentication**: `next-auth` with Firebase backend; session managed in `pages/SessionProvider.tsx`.
- **UI**: NextUI components styled with Tailwind CSS and Tailwind Variants.

## Conventions & Notes for Agents

- This project uses the **Pages Router**, not the App Router — do not add `app/` directory files.
- Environment variables for Firebase and next-auth **must** be present in `.env.local`; the app will fail without them.
- ESLint is configured strictly (`@typescript-eslint`); run `yarn lint` before committing changes.
- Animation is handled by both Framer Motion (component transitions) and GSAP (`@gsap/react`); prefer Framer Motion for new UI animations.
- `axioss` in package.json is a security placeholder package — do not use it; use `axios` for HTTP requests.
- Some page files (`davidoff.tsx`, `test.tsx`) appear to be experimental; treat them as non-production.
