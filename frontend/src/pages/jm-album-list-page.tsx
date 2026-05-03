import { Link } from 'react-router-dom'

const MOCK_ALBUMS = [
  { id: 'demo-1', title: 'Mock Album Alpha', note: 'placeholder' },
  { id: 'demo-2', title: 'Mock Album Beta', note: 'placeholder' },
  { id: 'demo-3', title: 'Mock Album Gamma', note: 'placeholder' },
]

export function JMAlbumListPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-100">JM Library</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Not connected to <code className="text-zinc-400">GET /api/jm/albums</code> yet (placeholder).
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            type="search"
            placeholder="Search (placeholder)"
            disabled
            className="min-w-[200px] rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-500"
            aria-label="Search placeholder"
          />
          <button
            type="button"
            disabled
            className="rounded-md border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-500"
          >
            Refresh (placeholder)
          </button>
        </div>
      </div>

      <p className="mb-4 rounded-md border border-amber-900/50 bg-amber-950/20 px-3 py-2 text-xs text-amber-100/90">
        Cards below use static mock data for layout only — not real albums.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_ALBUMS.map((album) => (
          <li key={album.id}>
            <Link
              to={`/jm/${encodeURIComponent(album.id)}`}
              className="block rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition hover:border-zinc-600 hover:bg-zinc-900/70"
            >
              <div className="aspect-[3/4] max-h-40 rounded-md bg-zinc-800" aria-hidden />
              <p className="mt-3 font-medium text-zinc-200">{album.title}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{album.note}</p>
              <p className="mt-2 font-mono text-xs text-zinc-600">album_id: {album.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
