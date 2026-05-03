type ErrorStateProps = {
  title: string
  detail?: string
}

export function ErrorState({ title, detail }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-900/60 bg-red-950/30 px-6 py-8">
      <p className="font-medium text-red-200">{title}</p>
      {detail ? <p className="mt-2 text-sm text-red-300/80">{detail}</p> : null}
    </div>
  )
}
