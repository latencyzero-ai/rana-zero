import { useEffect, useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'

const steps = [
  { key: 'message', label: 'Patient' },
  { key: 'checking', label: 'Zero' },
  { key: 'confirmed', label: 'Zero' },
  { key: 'notified', label: 'Front desk' },
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * The hero's operational proof: a message becomes an action becomes a
 * confirmed business state. Auto-advances through four beats and loops.
 * Settles on the final ("notified") frame when reduced motion is set.
 */
export default function HeroSequence() {
  const [index, setIndex] = useState(() => (prefersReducedMotion() ? steps.length - 1 : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length)
    }, 2100)
    return () => clearInterval(id)
  }, [])

  const active = steps[index].key

  return (
    <div className="rounded-lg border border-stroke bg-surface">
      <div className="flex items-center justify-between border-b border-stroke bg-surface-alt px-5 py-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          WhatsApp — Riverside Clinic
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
          Zero active
        </span>
      </div>

      <div className="flex min-h-[260px] flex-col gap-3 p-5" aria-live="polite">
        <Bubble side="in" show={active !== 'message' || index >= 0}>
          Can I see the doctor tomorrow morning?
        </Bubble>

        <StatusLine
          show={['checking', 'confirmed', 'notified'].includes(active)}
          icon={active === 'checking' ? Loader2 : Check}
          spin={active === 'checking'}
          label={active === 'checking' ? 'Checking availability…' : 'Availability confirmed'}
        />

        <Bubble side="out" show={['confirmed', 'notified'].includes(active)}>
          You&rsquo;re booked for 9:40 AM tomorrow with Dr. Adeyemi. Reply if anything changes.
        </Bubble>

        <StatusLine
          show={active === 'notified'}
          icon={Check}
          label="Front desk notified — queue #17 reserved"
          tone="ink"
        />
      </div>
    </div>
  )
}

function Bubble({ side, show, children }) {
  return (
    <div
      className={cn(
        'max-w-[85%] rounded-md border px-3.5 py-2.5 text-[13px] leading-snug transition-all duration-300',
        side === 'in' ? 'self-start border-stroke bg-surface-alt text-ink' : 'self-end border-transparent bg-gradient-action text-white',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      )}
    >
      {children}
    </div>
  )
}

function StatusLine({ show, icon: Icon, label, spin = false, tone = 'cyan' }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 self-start rounded-[2px] bg-surface-sunken px-2.5 py-1.5 font-mono text-[11px] transition-opacity duration-300',
        tone === 'ink' ? 'text-ink' : 'text-primary-ink',
        show ? 'opacity-100' : 'opacity-0'
      )}
    >
      <Icon size={12} className={cn(spin && 'animate-spin')} aria-hidden="true" />
      {label}
    </div>
  )
}
