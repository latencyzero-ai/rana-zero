import { ArrowRight, Eye, ShieldCheck, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Section, SectionHeading, Eyebrow } from '../components/ui/Layout'
import HeroSequence from '../components/product/HeroSequence'
import PatientJourney from '../components/product/PatientJourney'
import ComparisonPanel from '../components/product/ComparisonPanel'
import LiveQueue from '../components/product/LiveQueue'
import AppointmentTimeline from '../components/product/AppointmentTimeline'
import ExceptionFlow from '../components/product/ExceptionFlow'
import ZeroChatPreview from '../components/product/ZeroChatPreview'

const runtimeWords = [
  'State',
  'Memory',
  'Tools',
  'Permissions',
  'Escalation',
  'Reliability',
  'Recovery',
  'Observability',
]

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Section tone="bg" divider={false} spacing="xl" className="pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <div>
            <Eyebrow>RAnA</Eyebrow>
            <h1 className="text-display text-ink">AI agents that do the work.</h1>
            <p className="mt-7 max-w-md text-body-lg text-body">
              RAnA builds AI agents for real business workflows. Our first agent, Zero, operates the
              front desk for clinics through WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#meet-zero" icon={ArrowRight}>
                Meet Zero
              </Button>
              <Button to="/platform" variant="secondary">
                Explore RAnA
              </Button>
            </div>
            <p className="mt-10 max-w-sm border-l-2 border-stroke-strong pl-3 text-[13px] leading-relaxed text-muted">
              Built for real workflows. Designed to operate with humans, not replace them blindly.
            </p>
          </div>

          <div className="lg:mt-14">
            <HeroSequence />
          </div>
        </div>
      </Section>

      {/* 2. Meet Zero */}
      <Section id="meet-zero" tone="bg">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            eyebrow="Meet Zero"
            title="A front desk that runs on WhatsApp."
            description="Zero is a WhatsApp-native AI clinic operations assistant that handles the work between a patient and the front desk — not just the conversation."
            className="max-w-xl"
          />
          <Badge tone="live" dot />
        </div>
        <div className="mt-12">
          <PatientJourney />
        </div>
      </Section>

      {/* 3. Differentiation */}
      <Section tone="alt">
        <SectionHeading
          title={
            <>
              Most AI assistants stop at the conversation.{' '}
              <span className="text-primary">Zero continues into the workflow.</span>
            </>
          }
          description="A patient sends a message. Zero collects the information, determines what needs to happen next, updates the clinic's workflow, and keeps the patient informed."
        />
        <div className="mt-12">
          <ComparisonPanel />
        </div>
      </Section>

      {/* 4. Live queue */}
      <Section tone="bg">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            title="Know where every patient is."
            description="Zero maintains a live view of the clinic queue so staff always know what's happening without constantly asking, calling, or checking manually. When the queue changes, patients can be informed automatically."
          />
          <LiveQueue />
        </div>
      </Section>

      {/* 5. Appointments */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Appointments"
          title="The full lifecycle, not just the booking."
          description="Zero manages what happens before and after the appointment is made — reminders, check-ins, and the follow-through that usually falls on front-desk staff."
        />
        <div className="mt-12 max-w-2xl">
          <AppointmentTimeline />
        </div>
      </Section>

      {/* 6. Exception handling */}
      <Section tone="bg">
        <SectionHeading
          eyebrow="Exception handling"
          title="Real workflows are messy."
          description="Doctors run late. Patients cancel. Zero is built around the exceptions, not just the happy path."
        />
        <div className="mt-12">
          <ExceptionFlow />
        </div>
        <p className="mt-8 text-[15px] font-medium text-ink">
          Automation is only useful when it knows what to do when things go wrong.
        </p>
      </Section>

      {/* 7. Human control */}
      <Section tone="alt">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Human control"
            title="Autonomous where it can be. Human when it should be."
            description="Zero doesn't replace clinic staff — it removes the repetitive work standing between patients and the people who make judgment calls."
            className="max-w-none"
          />
          <ul className="flex flex-col">
            {[
              { icon: ShieldCheck, title: 'Clear boundaries', body: 'Zero knows exactly what it is — and is not — allowed to do.' },
              { icon: Users, title: 'Human escalation', body: 'Staff can step in whenever a situation calls for judgment.' },
              { icon: Eye, title: 'Operational visibility', body: 'The clinic can see what Zero is doing at every moment.' },
            ].map((item, i) => (
              <li
                key={item.title}
                className="flex items-start gap-5 border-t border-stroke py-6 first:pt-0 last:pb-0"
              >
                <span className="mt-0.5 font-mono text-[12px] text-muted">0{i + 1}</span>
                <item.icon size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-h4 font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-body-sm text-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. ZeroChat */}
      <Section tone="bg">
        <SectionHeading
          title="Meet ZeroChat."
          description="The clinic's operational inbox for everything Zero is handling."
        />
        <div className="mt-12">
          <ZeroChatPreview />
        </div>
      </Section>

      {/* 9. Transition to RAnA */}
      <Section tone="sunken">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>What&rsquo;s next</Eyebrow>
            <h2 className="text-[28px] leading-[1.15] tracking-[-0.02em] text-ink md:text-[36px]">
              Zero is only the beginning.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-body">
              We started with clinics because real business workflows expose problems that simple
              chatbots don&rsquo;t have to solve. Building Zero forced us to solve them — and that work
              is becoming the infrastructure other business agents will run on.
            </p>
            <Button to="/platform" variant="tertiary" icon={ArrowRight} className="mt-6">
              See the RAnA platform
            </Button>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-center border-t border-stroke pt-6 sm:grid-cols-4 lg:grid-cols-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {runtimeWords.map((word) => (
              <li key={word} className="font-mono text-[13px] text-muted">
                {word}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 10. Platform teaser */}
      <Section tone="bg" divider={false} className="text-center">
        <Badge tone="vision" className="mx-auto">
          Vision
        </Badge>
        <h2 className="mx-auto mt-5 max-w-2xl text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink md:text-[34px]">
          The next generation of business software won&rsquo;t just respond.
          <br />
          <span className="text-gradient">It will operate.</span>
        </h2>
      </Section>

      {/* 11. Closing CTA band */}
      <Section tone="alt" divider={false} spacing="md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col justify-between gap-4 rounded-lg border border-stroke bg-surface p-7">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                For clinics
              </span>
              <h3 className="mt-2 text-[19px] font-bold text-ink">Deploy Zero in your clinic.</h3>
            </div>
            <Button to="/get-zero" icon={ArrowRight} className="w-fit">
              Apply for the Zero pilot
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-lg border border-stroke bg-ink p-7">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50">
                For developers
              </span>
              <h3 className="mt-2 text-[19px] font-bold text-white">Build on RAnA early.</h3>
            </div>
            <Button to="/developers" variant="secondary" icon={ArrowRight} className="w-fit border-white text-white hover:bg-white hover:text-ink">
              Join the RAnA builder list
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
