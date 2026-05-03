import { Link, useParams } from 'react-router-dom'

const PLACEHOLDER_PAGES = [1, 2, 3, 4, 5]

export function JMReaderPage() {
  const { albumId = '', chapterId = '' } = useParams<{
    albumId: string
    chapterId: string
  }>()
  const detailHref = `/jm/${encodeURIComponent(albumId)}`

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-4 rounded-md border border-amber-900/50 bg-amber-950/20 px-3 py-2 text-xs text-amber-100/90">
        Reader placeholder — no image API calls; gray blocks stand in for pages.
      </p>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <p className="text-xs text-zinc-500">Album</p>
          <p className="font-mono text-sm text-zinc-200">{albumId}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500">Chapter</p>
          <p className="font-mono text-sm text-zinc-200">{chapterId}</p>
        </div>
        <Link
          to={detailHref}
          className="rounded-md border border-zinc-600 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-900"
        >
          ← Back to detail
        </Link>
      </div>

      <div className="space-y-4">
        {PLACEHOLDER_PAGES.map((n) => (
          <div
            key={n}
            className="flex min-h-[280px] items-center justify-center rounded-lg bg-zinc-800/80 text-zinc-600"
            aria-hidden
          >
            Page {n} (placeholder)
          </div>
        ))}
      </div>
    </div>
  )
}
