import { Link, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <header className="flex items-center gap-6 border-b border-zinc-800 px-4 py-3">
        <Link to="/jm" className="text-lg font-semibold tracking-tight text-zinc-100">
          MView
        </Link>
        <nav className="flex gap-4 text-sm text-zinc-400">
          <Link to="/jm" className="hover:text-zinc-100">
            JM Library
          </Link>
          <Link to="/login" className="hover:text-zinc-100">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}
