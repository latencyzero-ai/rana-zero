import Badge from '../ui/Badge'
import { runtimeConcepts } from '../../data/content'

export default function RuntimeGrid() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-stroke bg-stroke md:grid-cols-2 lg:grid-cols-3">
      {runtimeConcepts.map((item) => (
        <div key={item.title} className="flex flex-col gap-3 bg-surface p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-bold text-ink">{item.title}</h3>
            <Badge tone={item.status} />
          </div>
          <p className="text-[14px] leading-relaxed text-body">{item.body}</p>
          {item.rows && (
            <dl className="mt-1 flex flex-col gap-1.5 border-t border-stroke pt-3">
              {item.rows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between font-mono text-[12px]">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      ))}
    </div>
  )
}
