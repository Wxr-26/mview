import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Placeholder only — no API call in FE-001
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-zinc-50">MView</h1>
        <p className="mt-2 text-center text-xs text-amber-200/90">
          Placeholder — not wired to a real login API yet.
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-xs font-medium text-zinc-400">
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-zinc-600 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-zinc-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-zinc-600 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-zinc-100 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-zinc-500">
          This page is a frontend placeholder only; <code className="text-zinc-400">/api/auth/login</code>{' '}
          is not called.
        </p>
        <p className="mt-4 text-center">
          <Link to="/jm" className="text-sm text-zinc-400 underline hover:text-zinc-200">
            Skip to JM Library (placeholder)
          </Link>
        </p>
      </div>
    </div>
  )
}
