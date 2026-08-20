import { ArrowRight } from 'lucide-react'
import { exceptionFlows } from '../../data/content'

export default function ExceptionFlow() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-stroke bg-stroke sm:grid-cols-2">
      {exceptionFlows.map((flow) => (
        <div key={flow.trigger} className="flex flex-col gap-3 bg-surface p-6">
          <span className="w-fit rounded-[2px] bg-surface-sunken px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-ink">
            {flow.trigger}
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-body">
            {flow.chain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight size={12} className="text-muted" aria-hidden="true" />}
                {step}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
