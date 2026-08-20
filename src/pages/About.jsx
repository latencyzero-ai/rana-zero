import { CheckCircle2 } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { Section, Eyebrow } from '../components/ui/Layout'
import { whyClinicsPairs, technicalRealism } from '../data/content'

export default function About() {
  return (
    <>
      <Section tone="bg" divider={false} spacing="xl" className="pt-14 md:pt-20">
        <Eyebrow>The mission</Eyebrow>
        <h1 className="max-w-2xl text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[42px]">
          AI shouldn&rsquo;t just talk about work. It should do it.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-body">
          We are building RAnA to bridge the gap between conversational AI and operational reality.
          We reject the &lsquo;magical&rsquo; in favor of the functional, creating agents that
          integrate, execute, and report back with technical precision.
        </p>
      </Section>

      <Section tone="alt">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Badge tone="cyan" dot>
              Starting point
            </Badge>
            <h2 className="mt-4 text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink md:text-[30px]">
              Why start with clinics?
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-[17px] font-medium leading-snug text-ink">
              Operationally dense environments force the solving of hard problems.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyClinicsPairs.map((item) => (
                <div key={item.title} className="rounded-lg border border-stroke bg-surface p-5">
                  <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-body">{item.body}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 rounded-lg border border-stroke bg-surface-sunken p-6">
              <p className="text-[16px] italic leading-relaxed text-ink">
                &ldquo;If you can build an agent that successfully navigates the operational chaos of
                a modern clinic without requiring human intervention, you have built the foundation
                for an agent that can run any service business.&rdquo;
              </p>
              <cite className="mt-3 block font-mono text-[11px] font-semibold uppercase not-italic tracking-[0.08em] text-muted">
                The RAnA thesis
              </cite>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section tone="bg">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-stroke bg-surface-sunken">
            <ServerRackArt />
          </div>
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink md:text-[30px]">
              Technical realism.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">
              We are a team of engineers building for engineers and operators. We prioritize
              reliability, transparency, and control over conversational flair.
            </p>
            <ul className="mt-6 flex flex-col">
              {technicalRealism.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 border-b border-stroke py-3 text-[14px] text-body last:border-b-0"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}

/**
 * Lightweight, license-free stand-in for the server-rack photography used
 * in the Stitch mock. Built from the design system's own tokens rather
 * than a stock photo, so it never risks an uncleared image asset.
 */
function ServerRackArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Illustration of a server rack">
      <rect width="400" height="300" fill="var(--color-surface-sunken)" />
      {[0, 1, 2, 3].map((row) => (
        <g key={row} transform={`translate(60 ${40 + row * 58})`}>
          <rect width="280" height="42" rx="4" fill="var(--color-surface)" stroke="var(--color-stroke-strong)" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx={24 + i * 14}
              cy={21}
              r="3"
              fill={row % 2 === 0 && i < 2 ? 'var(--color-cyan)' : 'var(--color-stroke-strong)'}
            />
          ))}
          <rect x="230" y="12" width="34" height="18" rx="2" fill="none" stroke="var(--color-stroke-strong)" />
        </g>
      ))}
    </svg>
  )
}
