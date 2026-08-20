import Badge from '../ui/Badge'
import { roadmap } from '../../data/content'

export default function Roadmap() {
  return (
    <ol className="flex flex-col">
      {roadmap.map((item) => (
        <li
          key={item.phase}
          className="grid grid-cols-1 gap-2 border-b border-stroke py-6 last:border-b-0 sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-6"
        >
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            {item.phase}
          </span>
          <div>
            <h3 className="text-[16px] font-bold text-ink">{item.title}</h3>
            <p className="mt-1 text-[14px] text-body">{item.body}</p>
          </div>
          <Badge tone={item.status} />
        </li>
      ))}
    </ol>
  )
}
