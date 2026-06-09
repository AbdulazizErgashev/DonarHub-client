import { NavLink, Outlet } from 'react-router-dom'
import { HeartHandshake, BellRing, ShieldCheck } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/donors', label: 'Donors' },
  { to: '/emergency', label: 'Emergency' },
]

export function MainLayout() {
  return (
    <div className="min-h-screen bg-soft text-text">
      <header className="border-b border-primary/15 bg-soft/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold text-text">
            <HeartHandshake className="h-5 w-5 text-primary" />
            DonarHub
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'text-primary' : 'hover:text-text'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-primary/15 bg-soft/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm text-muted">
          <span className="flex items-center gap-2">
            <BellRing className="h-4 w-4 text-teal" />
            Fast, trusted aid coordination
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secure and privacy-first
          </span>
        </div>
      </footer>
    </div>
  )
}
