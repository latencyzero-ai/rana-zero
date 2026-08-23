import { patientJourney } from '../../data/content'

export default function PatientJourney() {
  return (
    <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-stroke">
      {patientJourney.map((item) => (
        <li
          key={item.step}
          className="flex flex-col gap-3 border-b border-stroke py-6 pr-6 last:border-b-0 sm:border-b-0 sm:odd:pr-6 sm:even:pl-6 sm:[&:nth-child(-n+4)]:border-b sm:py-8 lg:border-b-0 lg:px-6 lg:py-0 lg:first:pl-0 lg:last:pr-0"
        >
          <span className="font-mono text-[13px] font-semibold text-cyan-action">{item.step}</span>
          <h3 className="text-[17px] font-bold leading-snug text-ink">{item.title}</h3>
          <p className="text-[14px] leading-relaxed text-body">{item.body}</p>
        </li>
      ))}
    </ol>
  )
}
