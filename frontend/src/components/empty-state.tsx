type EmptyStateProps = {
  title: string
  description?: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 px-6 py-10 text-center">
      <p className="font-medium text-zinc-200">{title}</p>
      {description ? <p className="mt-2 text-sm text-zinc-500">{description}</p> : null}
    </div>
  )
}
