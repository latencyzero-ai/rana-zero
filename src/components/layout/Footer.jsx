import { Link } from 'react-router-dom'
import { Container } from '../ui/Layout'
import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="hairline-t bg-bg-alt">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-[14px] leading-[1.6] text-muted">
              RAnA: infrastructure for business agents. Zero: the first agent.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:flex sm:gap-16" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                Product
              </span>
              <Link to="/" className="text-[14px] text-ink hover:text-primary">
                Zero
              </Link>
              <Link to="/platform" className="text-[14px] text-ink hover:text-primary">
                Platform
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                Company
              </span>
              <Link to="/developers" className="text-[14px] text-ink hover:text-primary">
                Developers
              </Link>
              <Link to="/about" className="text-[14px] text-ink hover:text-primary">
                About
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                Get started
              </span>
              <Link to="/get-zero" className="text-[14px] text-ink hover:text-primary">
                Get Zero
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-stroke pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
            &copy; {new Date().getFullYear()} RAnA Systems. Operational Realism.
          </p>
          <span className="rounded-[2px] bg-surface-sunken px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            System nominal
          </span>
        </div>
      </Container>
    </footer>
  )
}
