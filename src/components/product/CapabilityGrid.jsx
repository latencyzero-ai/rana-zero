import Badge from '../ui/Badge'
import { cn } from '../../lib/utils'
import { iconMap } from './icons'

export default function CapabilityGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        const featured = item.featured
        return (
          <div
            key={item.title}
            className={cn(
              'flex flex-col gap-3 rounded-lg border p-6',
              featured
                ? 'border-primary bg-primary text-white sm:col-span-2 lg:col-span-2'
                : 'border-stroke bg-surface'
            )}
          >
            <div className="flex items-start justify-between">
              <Icon
                size={20}
                strokeWidth={1.75}
                className={featured ? 'text-white' : 'text-ink'}
                aria-hidden="true"
              />
              <Badge tone={item.status} className={featured ? 'bg-white/15 text-white' : undefined}>
                {item.status === 'live' ? (item.meta && item.meta.includes('Real') ? 'Real-time' : 'Automated') : 'Coming to Zero'}
              </Badge>
            </div>
            <h3 className={cn('text-[17px] font-bold', featured ? 'text-white' : 'text-ink')}>
              {item.title}
            </h3>
            <p className={cn('text-[14px] leading-relaxed', featured ? 'text-white/85' : 'text-body')}>
              {item.body}
            </p>
            {item.meta && (
              <p
                className={cn(
                  'mt-auto border-t pt-3 font-mono text-[11px] uppercase tracking-[0.04em]',
                  featured ? 'border-white/20 text-white/70' : 'border-stroke text-muted'
                )}
              >
                {item.meta}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
