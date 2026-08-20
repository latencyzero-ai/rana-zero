import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-mono text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary:
    'bg-gradient-action text-white hover:brightness-[1.06] active:brightness-95',
  secondary:
    'border border-ink text-ink bg-transparent hover:bg-ink hover:text-white',
  ghost:
    'border border-stroke text-ink bg-transparent hover:border-ink',
  tertiary:
    'px-0 py-0 normal-case tracking-normal font-display text-[15px] font-semibold text-primary hover:text-cyan',
}

const sizes = {
  md: '',
  sm: 'px-4 py-2.5 text-[12px]',
  lg: 'px-6 py-3.5 text-[14px]',
}

/**
 * Polymorphic button: renders a <Link> for internal routes, an <a> for
 * external hrefs, or a native <button> otherwise.
 */
export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}) {
  const classes = cn(
    base,
    variant !== 'tertiary' && sizes[size],
    variants[variant],
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2.25} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2.25} aria-hidden="true" />}
    </>
  )

  if (to || as === 'link') {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {content}
    </button>
  )
}
