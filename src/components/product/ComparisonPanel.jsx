import { Check, X } from 'lucide-react'

const zeroActions = [
  'Checks availability',
  'Books the appointment',
  'Records it in the system',
  'Sends confirmation',
  'Reminds the patient',
  'Confirms attendance',
  'Notifies the clinic',
]

export default function ComparisonPanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-lg border border-stroke bg-surface-alt p-6">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          Traditional chatbot
        </span>
        <div className="mt-4 flex flex-col gap-3">
          <p className="max-w-[85%] rounded-md border border-stroke bg-surface px-3.5 py-2.5 text-[13px] text-ink">
            Can I see the doctor tomorrow?
          </p>
          <p className="max-w-[85%] self-end rounded-md bg-stroke-strong/60 px-3.5 py-2.5 text-[13px] text-body">
            Yes, please contact the clinic.
          </p>
        </div>
        <div className="mt-6 flex items-start gap-2 text-[13px] text-muted">
          <X size={16} className="mt-0.5 shrink-0 text-error" aria-hidden="true" />
          <span>Conversation ends. The work still has to happen.</span>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-surface p-6">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
          Zero
        </span>
        <div className="mt-4 flex flex-col gap-3">
          <p className="max-w-[85%] rounded-md border border-stroke bg-surface-alt px-3.5 py-2.5 text-[13px] text-ink">
            Can I see the doctor tomorrow?
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {zeroActions.map((action) => (
            <li key={action} className="flex items-center gap-2 text-[13px] text-body">
              <Check size={14} className="shrink-0 text-cyan" aria-hidden="true" />
              {action}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-start gap-2 text-[13px] font-medium text-ink">
          <Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
          <span>Conversation is only the beginning.</span>
        </div>
      </div>
    </div>
  )
}
