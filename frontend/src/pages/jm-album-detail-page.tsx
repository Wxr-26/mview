import { Link, useParams } from 'react-router-dom'

const MOCK_CHAPTERS = [
  { id: '1', title: 'Chapter 1 (mock)' },
  { id: '2', title: 'Chapter 2 (mock)' },
  { id: '3', title: 'Chapter 3 (mock)' },
]

export function JMAlbumDetailPage() {
  const { albumId = '' } = useParams<{ albumId: string }>()
  const readBase = `/jm/${encodeURIComponent(albumId)}/read`

  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-4 rounded-md border border-amber-900/50 bg-amber-950/20 px-3 py-2 text-xs text-amber-100/90">
        Placeholder detail layout — <code className="text-amber-200/90">GET /api/jm/albums/{'{album_id}'}</code>{' '}
        not used.
      </p>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Album ID (from URL)</p>
        <p className="mt-1 font-mono text-xl text-zinc-100">{albumId || '—'}</p>
        <p className="mt-4 text-sm text-zinc-400">
          Metadata and cover would appear here after the API is integrated.
        </p>
        <div className="mt-6 h-48 rounded-lg bg-zinc-800" aria-hidden />
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-medium text-zinc-200">Chapters (placeholder)</h2>
        <ul className="mt-4 divide-y divide-zinc-800 rounded-lg border border-zinc-800">
          {MOCK_CHAPTERS.map((ch) => (
            <li key={ch.id}>
              <Link
                to={`${readBase}/${encodeURIComponent(ch.id)}`}
                className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-900/60"
              >
                <span>{ch.title}</span>
                <span className="text-zinc-600">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 text-center text-xs text-zinc-600">
        Open reader:{' '}
        <Link to={`${readBase}/1`} className="text-zinc-400 underline hover:text-zinc-200">
          {readBase}/1
        </Link>
      </p>
    </div>
  )
}
