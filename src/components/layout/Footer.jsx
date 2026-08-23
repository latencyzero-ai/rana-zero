import { Link } from 'react-router-dom'
import { Container } from '../ui/Layout'
import { Logo } from './Navbar'
import ZeroMark from '../ui/ZeroMark'

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container className="py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link to="/">
              <Logo light />
            </Link>
            <p className="mt-4 text-[14px] leading-[1.6] text-white/55">
              RAnA: infrastructure for business agents. Zero: the first agent.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:flex sm:gap-16" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">
                Product
              </span>
              <Link to="/" className="flex items-center gap-1.5 text-[14px] text-white/80 hover:text-cyan">
                <ZeroMark size={12} className="shrink-0" />
                Zero
              </Link>
              <Link to="/platform" className="text-[14px] text-white/80 hover:text-cyan">
                Platform
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">
                Company
              </span>
              <Link to="/developers" className="text-[14px] text-white/80 hover:text-cyan">
                Developers
              </Link>
              <Link to="/about" className="text-[14px] text-white/80 hover:text-cyan">
                About
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">
                Get started
              </span>
              <Link to="/get-zero" className="text-[14px] text-white/80 hover:text-cyan">
                Get Zero
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-white/35">
            &copy; {new Date().getFullYear()} RAnA Systems. Operational Realism.
          </p>
          <span className="flex items-center gap-1.5 rounded-[2px] bg-white/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            System nominal
          </span>
        </div>
      </Container>
    </footer>
  )
}
