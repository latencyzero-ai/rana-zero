import { BookOpen } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import CodeBlock from '../components/ui/CodeBlock'
import { Section, Eyebrow, SectionHeading } from '../components/ui/Layout'
import AnatomyOfAgent from '../components/product/AnatomyOfAgent'
import MarketplaceFlow from '../components/product/MarketplaceFlow'
import BuilderWaitlistForm from '../components/product/BuilderWaitlistForm'

const heroSnippet = `import { Agent, Tools } from '@rana/core';

const zero = new Agent({
  name: 'Zero',
  role: 'Business Operations',
});

zero.equip([Tools.DataAccess]);
zero.deploy();
// Deploying to infrastructure...`

export default function Developers() {
  return (
    <>
      <Section tone="bg" divider={false} spacing="xl" className="pt-14 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge tone="cyan" dot>
              Developer preview
            </Badge>
            <h1 className="mt-4 text-h1 text-ink">
              Build once. Deploy everywhere.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-[1.6] text-body">
              The RAnA infrastructure provides a unified API for deploying business agents. Give them
              tools, define their context, and set their operational policies — we handle the
              distributed execution.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button href="#builder-list">Join the RAnA builder list</Button>
              <Button href="https://docs.rana.dev" variant="ghost" icon={BookOpen} iconPosition="left">
                Read the docs
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-stroke bg-surface p-1.5">
            <div className="flex items-center justify-between px-3.5 py-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-cyan-action">
                Status: online
              </span>
            </div>
            <CodeBlock className="border-0">{heroSnippet}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Anatomy of an agent"
          title="We don't build prompts. We build infrastructure."
          description="RAnA separates agent logic into discrete, manageable components — tools, context, and policies — for predictable behavior in enterprise environments."
        />
        <div className="mt-12">
          <AnatomyOfAgent />
        </div>
      </Section>

      <Section tone="bg">
        <SectionHeading
          eyebrow="Roadmap"
          title="The agent marketplace."
          description="Zero is just the beginning. RAnA is building the marketplace where developers can publish specialized agents and tools — monetizing operational expertise across the broader RAnA ecosystem."
        />
        <div className="mt-12">
          <MarketplaceFlow />
        </div>
      </Section>

      <Section id="builder-list" tone="alt" divider={false} spacing="md">
        <div className="rounded-lg border border-white/10 bg-ink px-6 py-12 text-center sm:px-12">
          <Eyebrow className="mx-auto text-cyan">Early access</Eyebrow>
          <h2 className="mx-auto max-w-lg text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white md:text-[32px]">
            Build the infrastructure of work.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-white/70">
            We&rsquo;re selectively onboarding technical partners and developers to shape the core
            RAnA protocol before public release.
          </p>
          <div className="mx-auto mt-9 max-w-md text-left">
            <BuilderWaitlistForm />
          </div>
        </div>
      </Section>
    </>
  )
}
