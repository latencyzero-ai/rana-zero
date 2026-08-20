import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

function FieldShell({ label, htmlFor, error, className, children }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="font-mono text-[12px] text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  'w-full rounded-none border-0 border-b bg-transparent px-0.5 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none transition-colors'

export function TextField({ label, id, error, className, ...props }) {
  return (
    <FieldShell label={label} htmlFor={id} error={error}>
      <input
        id={id}
        className={cn(
          inputBase,
          error ? 'border-error' : 'border-stroke-strong focus:border-cyan',
          className
        )}
        aria-invalid={!!error}
        {...props}
      />
    </FieldShell>
  )
}

export function SelectField({ label, id, error, options, className, ...props }) {
  return (
    <FieldShell label={label} htmlFor={id} error={error}>
      <div className="relative">
        <select
          id={id}
          className={cn(
            inputBase,
            'cursor-pointer appearance-none pr-6',
            !props.value && 'text-muted/70',
            error ? 'border-error' : 'border-stroke-strong focus:border-cyan',
            className
          )}
          aria-invalid={!!error}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt} value={opt === options[0] ? '' : opt} disabled={opt === options[0]}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-0.5 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </div>
    </FieldShell>
  )
}
