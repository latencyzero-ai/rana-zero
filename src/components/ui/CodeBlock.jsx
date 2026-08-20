import { cn } from '../../lib/utils'

export default function CodeBlock({ children, className }) {
  return (
    <pre
      className={cn(
        'overflow-x-auto whitespace-pre-wrap break-words rounded-md border border-stroke bg-ink px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-[#d7f5fa]',
        className
      )}
    >
      <code>{children}</code>
    </pre>
  )
}
