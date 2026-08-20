import { Zap } from 'lucide-react'

const queue = [
  { label: 'Waiting', value: 14 },
  { label: 'With doctor', value: 3 },
  { label: 'Appointments', value: 8 },
  { label: 'Needs attention', value: 2, alert: true },
  { label: 'Done', value: 27 },
]

export default function ZeroChatPreview() {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-stroke bg-surface md:grid-cols-[200px_1fr]">
      <div className="border-b border-stroke bg-surface-alt p-4 md:border-b-0 md:border-r">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          Patients
        </span>
        <ul className="mt-3 flex flex-col gap-2.5">
          {queue.map((row) => (
            <li key={row.label} className="flex items-center justify-between text-[13px]">
              <span className={row.alert ? 'font-medium text-error' : 'text-body'}>{row.label}</span>
              <span className={row.alert ? 'font-mono font-semibold text-error' : 'font-mono text-ink'}>
                {row.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-ink">Patient #1432</h3>
          <span className="rounded-[2px] bg-cyan/15 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-primary-ink">
            Status: waiting
          </span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-muted">Last interaction: 2 min ago</p>

        <div className="mt-4 flex items-center gap-2 rounded-md border border-stroke bg-surface-alt px-3 py-2.5 text-[13px] text-body">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
            Appointment
          </span>
          4:30 PM
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-md bg-surface-sunken px-3 py-2.5">
          <Zap size={14} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
          <p className="font-mono text-[11px] leading-relaxed text-ink">
            Zero action: queue #18 assigned. Front desk notified.
          </p>
        </div>

        <p className="mt-4 text-[13px] text-muted">
          Zero handles the conversation. ZeroChat gives the clinic visibility and control.
        </p>
      </div>
    </div>
  )
}
