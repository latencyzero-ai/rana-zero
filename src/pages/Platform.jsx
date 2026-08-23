import { ArrowDown, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Section, Eyebrow, SectionHeading } from '../components/ui/Layout'
import RuntimeGrid from '../components/product/RuntimeGrid'
import Roadmap from '../components/product/Roadmap'

const analogy = ['Common primitives', 'Different environments', 'Different tools', 'Different rules', 'Different agents']

export default function Platform() {
  return (
    <>
      <Section tone="bg" divider={false} spacing="xl" className="pt-14 md:pt-20">
        <Badge tone="vision">Vision</Badge>
        <h1 className="mt-4 max-w-2xl text-h1 text-ink">
          Infrastructure for business agents.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-body">
          The RAnA Platform provides the essential primitives required to deploy, scale, and govern
          autonomous agents in enterprise environments. We replace fragmented toolchains with a
          unified, deterministic runtime.
        </p>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Core architecture" title="The RAnA Runtime" />
        <div className="mt-12">
          <RuntimeGrid />
        </div>
      </Section>

      <Section tone="bg">
        <SectionHeading
          eyebrow="Why this shape"
          title="We believe business agents will evolve like coding agents did."
          description="A shared runtime, specialized at the edges. The infrastructure stays constant; what changes is the environment it's pointed at."
        />
        <div className="mt-12 flex flex-col items-center gap-3">
          {analogy.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <span className="rounded-[2px] border border-stroke bg-surface px-4 py-2.5 text-[13.5px] font-medium text-ink">
                {step}
              </span>
              {i < analogy.length - 1 && (
                <ArrowDown size={14} className="my-2 text-stroke-strong" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-md text-center text-[15px] font-medium text-ink">
          The agent becomes specific. The infrastructure doesn&rsquo;t have to be.
        </p>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Roadmap" title="Here&rsquo;s what exists, what we're building, and where we're going." />
        <div className="mt-10">
          <Roadmap />
        </div>
      </Section>

      <Section tone="bg" divider={false} spacing="md">
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-stroke bg-ink p-8 sm:flex-row sm:items-center">
          <div>
            <Eyebrow className="text-cyan">For developers</Eyebrow>
            <h3 className="text-[20px] font-bold text-white">See how the runtime is built for builders.</h3>
          </div>
          <Button to="/developers" variant="secondary" icon={ArrowRight} className="shrink-0 border-white text-white hover:bg-white hover:text-ink">
            Explore for developers
          </Button>
        </div>
      </Section>
    </>
  )
}
