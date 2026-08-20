import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { Container } from '../ui/Layout'
import { nav } from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route change / resize back to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-stroke bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono text-[13px] font-medium uppercase tracking-[0.06em] transition-colors ${
                  isActive ? 'text-ink underline decoration-cyan decoration-2 underline-offset-8' : 'text-muted hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/get-zero" size="sm">
            Get Zero
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-sm p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stroke bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] ${
                    isActive ? 'bg-surface-sunken text-ink' : 'text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/get-zero" className="mt-3 w-full" onClick={() => setOpen(false)}>
              Get Zero
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}

export function Logo({ light = false }) {
  return (
    <span
      className={`font-display text-[22px] font-extrabold tracking-[-0.02em] ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      RAnA
    </span>
  )
}
