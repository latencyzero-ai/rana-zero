import { cn } from '../../lib/utils'

export function Container({ className, children, as: As = 'div' }) {
  return (
    <As className={cn('mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16', className)}>
      {children}
    </As>
  )
}

/**
 * Vertical section wrapper. `tone` controls the alternating background
 * surface used to separate narrative beats down the page; `divider`
 * draws the hairline rule Operational Realism uses instead of gaps.
 */
export function Section({
  id,
  tone = 'bg',
  divider = true,
  spacing = 'lg',
  className,
  children,
}) {
  const tones = {
    bg: 'bg-bg',
    alt: 'bg-bg-alt',
    sunken: 'bg-surface-sunken',
    surface: 'bg-surface',
  }
  const spacings = {
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-24 md:py-36',
  }
  return (
    <section
      id={id}
      className={cn(tones[tone], divider && 'hairline-t', spacings[spacing], className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        'mb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-primary',
        className
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-h2">{title}</h2>
      {description && <p className="mt-4 text-body-lg text-body">{description}</p>}
    </div>
  )
}
