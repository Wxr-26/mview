# MView frontend

Web UI for **MView**, a read-only local JMComic reader. This package is a React + TypeScript + Vite SPA.

## Prerequisites

- **Node.js 18+** (required by Vite 5)

## Install

```bash
cd frontend
npm install
```

## Development

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output is written to `dist/`.

## Preview production build locally

```bash
npm run preview
```

## Routes (skeleton)

| Path | Page |
|------|------|
| `/login` | Login placeholder |
| `/` | Redirects to `/jm` |
| `/jm` | JM Library placeholder |
| `/jm/:albumId` | Album detail placeholder |
| `/jm/:albumId/read/:chapterId` | Reader placeholder |

## Not included yet

- Real backend API calls (`/api/auth/*`, `/api/jm/*`)
- Authentication and token handling
- JM album list, detail, and reader business logic
- Image loading and lazy loading
- Reading progress, favorites, uploads, or file management

Lint scripts are not configured in this skeleton; add ESLint in a later task if needed.
