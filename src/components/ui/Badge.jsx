import { cn } from '../../lib/utils'

const tones = {
  live: 'bg-ink text-white',
  building: 'bg-primary text-white',
  vision: 'border border-stroke-strong text-muted bg-transparent',
  neutral: 'bg-surface-sunken text-body',
  cyan: 'bg-cyan/15 text-primary-ink',
  error: 'bg-error-container text-error',
}

const labels = {
  live: 'Live',
  building: 'Building',
  vision: 'Vision',
}

/**
 * Small rectangular status label. Pass `tone="live" | "building" | "vision"`
 * to use the site-wide status vocabulary, or `tone="neutral" | "cyan" | "error"`
 * plus explicit children for anything else.
 */
export default function Badge({ tone = 'neutral', dot = false, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em]',
        tones[tone],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            tone === 'live' ? 'bg-cyan' : tone === 'building' ? 'bg-white' : 'bg-muted'
          )}
          aria-hidden="true"
        />
      )}
      {children ?? labels[tone]}
    </span>
  )
}
