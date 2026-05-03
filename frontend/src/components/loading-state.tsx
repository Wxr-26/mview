type LoadingStateProps = {
  message?: string
}

export function LoadingState({ message = 'Loading…' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-6 py-8 text-zinc-400">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-300"
        aria-hidden
      />
      <p className="text-sm">{message}</p>
    </div>
  )
}
