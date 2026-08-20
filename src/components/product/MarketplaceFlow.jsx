import { ArrowRight } from 'lucide-react'
import { marketplaceListings } from '../../data/content'

function FlowRow({ label, steps }) {
  return (
    <div>
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
        {label}
      </span>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            {i > 0 && <ArrowRight size={14} className="text-stroke-strong" aria-hidden="true" />}
            <span className="rounded-[2px] border border-stroke bg-surface px-3 py-2 text-[13px] font-medium text-ink">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MarketplaceFlow() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
      <div className="flex flex-col gap-6">
        <FlowRow label="Businesses" steps={['Discover', 'Configure', 'Connect', 'Deploy']} />
        <FlowRow label="Developers" steps={['Build', 'Test', 'Publish', 'Earn']} />
      </div>

      <div className="hidden h-full w-px bg-stroke lg:block" aria-hidden="true" />

      <div className="rounded-lg border border-stroke bg-surface p-5">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          Marketplace preview
        </span>
        <ul className="mt-3 flex flex-col gap-3">
          {marketplaceListings.map((item) => (
            <li key={item.name} className="flex items-center justify-between border-b border-stroke pb-3 last:border-b-0 last:pb-0">
              <div>
                <p className="font-mono text-[12.5px] font-semibold text-ink">{item.name}</p>
                <p className="text-[12px] text-muted">by {item.by}</p>
              </div>
              <span className="font-mono text-[12px] text-primary">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
