import { appointmentTimeline } from '../../data/content'

export default function AppointmentTimeline() {
  return (
    <ol className="relative flex flex-col">
      {appointmentTimeline.map((item, i) => (
        <li key={item.title} className="relative flex gap-5 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="z-10 flex h-2.5 w-2.5 shrink-0 rounded-full border-2 border-cyan bg-surface" />
            {i < appointmentTimeline.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-stroke" aria-hidden="true" />
            )}
          </div>
          <div className="-mt-1 pb-1">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              {item.time}
            </span>
            <h3 className="mt-1 text-[16px] font-bold text-ink">{item.title}</h3>
            <p className="mt-1 text-[14px] leading-relaxed text-body">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
