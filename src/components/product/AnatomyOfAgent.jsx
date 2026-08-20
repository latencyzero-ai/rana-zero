import { Wrench, Database, ShieldCheck } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'
import { anatomyOfAgent } from '../../data/content'

const icons = [Wrench, Database, ShieldCheck]

export default function AnatomyOfAgent() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {anatomyOfAgent.map((item, i) => {
        const Icon = icons[i]
        return (
          <div key={item.title} className="flex flex-col gap-4 rounded-lg border border-stroke bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <Icon size={18} className="text-primary" aria-hidden="true" />
              <h3 className="text-[17px] font-bold text-ink">{item.title}</h3>
            </div>
            <p className="text-[14px] leading-relaxed text-body">{item.body}</p>
            {item.code && <CodeBlock>{item.code}</CodeBlock>}
            {item.list && (
              <ul className="flex flex-col gap-2">
                {item.list.map((entry, idx) => (
                  <li key={entry} className="flex items-center gap-2 text-[13px] text-body">
                    <span
                      className={`h-2 w-2 rounded-full border ${
                        idx < 2 ? 'border-cyan bg-cyan' : 'border-stroke-strong bg-transparent'
                      }`}
                      aria-hidden="true"
                    />
                    {entry}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
