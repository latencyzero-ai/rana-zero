import { cn } from '../../lib/utils'

/**
 * Base container: 1px hairline stroke, flat (no shadow), optional header
 * strip to separate title/metadata from body -- per the Operational
 * Realism "Cards & Containers" spec.
 */
export default function Card({ className, children, padded = true }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-stroke bg-surface',
        padded && 'p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-t-lg border-b border-stroke bg-surface-alt px-5 py-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export function Row({ className, children }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 border-b border-stroke py-4 last:border-b-0',
        className
      )}
    >
      {children}
    </div>
  )
}
