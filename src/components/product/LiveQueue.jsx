import { useEffect, useState } from 'react'
import { Bell } from 'lucide-react'
import { queueStates } from '../../data/content'
import { cn } from '../../lib/utils'

const statusStyle = {
  waiting: 'bg-surface-sunken text-muted',
  active: 'bg-cyan/15 text-primary-ink',
  done: 'bg-surface-sunken text-muted line-through decoration-1',
  scheduled: 'bg-ink text-white',
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Demonstrates queue state changing live: #14 moves from Waiting to
 * With doctor, and a patient notification briefly appears. Purely
 * illustrative -- no backend. Respects prefers-reduced-motion by
 * settling immediately into the "after" state without animating.
 */
export default function LiveQueue() {
  const [advanced, setAdvanced] = useState(false)
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t1 = setTimeout(() => setAdvanced(true), 2200)
    const t2 = setTimeout(() => setShowNotice(true), 2400)
    const t3 = setTimeout(() => setShowNotice(false), 5200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const rows = queueStates.map((row) =>
    row.id === '#14' && advanced ? { ...row, label: 'With doctor', status: 'active' } : row
  )

  return (
    <div className="relative rounded-lg border border-stroke bg-surface">
      <div className="flex items-center justify-between border-b border-stroke bg-surface-alt px-5 py-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          Today&rsquo;s log
        </span>
        <span className="font-mono text-[11px] text-muted">Live</span>
      </div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex items-center justify-between border-b border-stroke px-5 py-3.5 last:border-b-0"
          >
            <span className="font-mono text-[13px] text-ink">{row.id}</span>
            <span
              className={cn(
                'rounded-[2px] px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] transition-colors duration-500',
                statusStyle[row.status]
              )}
            >
              {row.label}
            </span>
          </li>
        ))}
      </ul>

      <div
        aria-live="polite"
        className={cn(
          'pointer-events-none absolute -bottom-4 left-1/2 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-md border border-stroke bg-ink px-4 py-3 text-white shadow-none transition-all duration-500',
          showNotice ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}
      >
        <Bell size={14} className="shrink-0 text-cyan" aria-hidden="true" />
        <p className="font-mono text-[11px] leading-snug">Patient #14 — it&rsquo;s your turn.</p>
      </div>
    </div>
  )
}
