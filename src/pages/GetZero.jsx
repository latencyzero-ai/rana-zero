import { ArrowRight, CircuitBoard } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Section, Eyebrow, SectionHeading } from '../components/ui/Layout'
import CapabilityGrid from '../components/product/CapabilityGrid'
import PilotApplicationForm from '../components/product/PilotApplicationForm'
import { capabilities } from '../data/content'

export default function GetZero() {
  return (
    <>
      <Section tone="bg" divider={false} spacing="xl" className="pt-14 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="cyan" dot>
                Pilot program
              </Badge>
              <Badge tone="neutral">Limited capacity</Badge>
            </div>
            <h1 className="mt-4 text-h1 text-ink">
              Deploy Zero in your clinic.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-[1.6] text-body">
              We&rsquo;re currently onboarding a select group of 3–6 clinics to integrate Zero into
              their daily operations. Gain early access to the infrastructure built for business
              agents.
            </p>
            <Button href="#pilot-application" icon={ArrowRight} className="mt-7">
              Apply for the Zero pilot
            </Button>
          </div>

          <div className="rounded-lg border border-stroke bg-surface p-6">
            <div className="flex items-center justify-between border-b border-stroke pb-4">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                Pilot readiness
              </span>
              <CircuitBoard size={16} className="text-primary" aria-hidden="true" />
            </div>
            <ul className="mt-4 flex flex-col gap-3.5">
              {[
                'WhatsApp Business line provisioned',
                'EMR / calendar connection mapped',
                'Front-desk escalation contacts set',
                'Staff walkthrough scheduled',
              ].map((step) => (
                <li key={step} className="flex items-center justify-between gap-4 text-[13.5px] text-body">
                  {step}
                  <span className="shrink-0 rounded-[2px] bg-surface-sunken px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">
                    Per clinic
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-stroke pt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
              Onboarding runs alongside your existing front desk — nothing switches over on day one.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="What Zero handles" title="Core capabilities" />
        <div className="mt-12">
          <CapabilityGrid items={capabilities} />
        </div>
      </Section>

      <Section id="pilot-application" tone="bg" className="text-center">
        <Eyebrow className="mx-auto">Pilot application</Eyebrow>
        <h2 className="mx-auto max-w-lg text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink md:text-[32px]">
          Submit your clinic details to be considered for the initial deployment phase.
        </h2>
        <div className="mx-auto mt-10 max-w-2xl text-left">
          <PilotApplicationForm />
        </div>
      </Section>
    </>
  )
}
