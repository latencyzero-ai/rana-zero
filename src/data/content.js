export const nav = [
  { to: '/', label: 'Zero' },
  { to: '/platform', label: 'Platform' },
  { to: '/developers', label: 'Developers' },
  { to: '/about', label: 'About' },
]

export const patientJourney = [
  {
    step: '01',
    title: 'Patient reaches the clinic',
    body: 'A patient messages the clinic through WhatsApp — no app to install, no portal to log into.',
  },
  {
    step: '02',
    title: 'Zero understands',
    body: 'Zero collects basic information and determines what the patient actually needs.',
  },
  {
    step: '03',
    title: 'Zero takes action',
    body: 'Zero can book appointments, check availability, or assign an on-site queue number.',
  },
  {
    step: '04',
    title: 'Zero keeps the workflow moving',
    body: "Zero tracks the patient's state and keeps both sides informed as things change.",
  },
  {
    step: '05',
    title: 'Humans step in when needed',
    body: "When something exceeds Zero's boundaries, it escalates to clinic staff with full context.",
  },
]

export const capabilities = [
  {
    icon: 'ClipboardList',
    title: 'Patient intake',
    status: 'live',
    body: 'Zero handles initial data gathering and preliminary record creation before the patient is seen.',
    meta: 'Intake forms -> Structuring data -> Sync to EMR',
  },
  {
    icon: 'CalendarCheck',
    title: 'Appointments',
    status: 'live',
    body: 'Autonomous booking, rescheduling, and reminder dispatch linked directly to the clinic calendar.',
    meta: null,
  },
  {
    icon: 'ListOrdered',
    title: 'Live queue',
    status: 'live',
    body: 'Dynamic patient flow management that keeps wait times realistic and visible.',
    meta: 'Real-time',
  },
  {
    icon: 'MessageCircle',
    title: 'Patient communication',
    status: 'live',
    body: 'Status updates, delay notices, and confirmations sent the moment something changes.',
    meta: null,
  },
  {
    icon: 'Clock',
    title: 'Delay management',
    status: 'live',
    body: 'Zero notices when a queue is running behind and keeps waiting patients informed automatically.',
    meta: null,
  },
  {
    icon: 'Users',
    title: 'Human escalation',
    status: 'live',
    body: "High-risk scenarios, complex needs, or strict medical queries are routed to staff with full context attached.",
    meta: 'State transition: Autonomous -> Supervised',
    featured: true,
  },
  {
    icon: 'PhoneCall',
    title: 'Calls & analytics',
    status: 'building',
    body: 'Voice channel support and clinic-level reporting on how Zero is spending its time.',
    meta: null,
  },
]

export const queueStates = [
  { id: '#12', label: 'Waiting', status: 'waiting' },
  { id: '#13', label: 'With doctor', status: 'active' },
  { id: '#14', label: 'Waiting', status: 'waiting' },
  { id: '#15', label: 'Done', status: 'done' },
  { id: '#16', label: 'Appointment', status: 'scheduled' },
]

export const appointmentTimeline = [
  {
    time: '10 minutes before',
    title: 'Reminder sent',
    body: 'Zero messages the patient to confirm they still plan to attend.',
  },
  {
    time: 'Appointment time',
    title: 'Are you at the clinic?',
    body: 'Zero checks in and starts tracking arrival state.',
  },
  {
    time: 'On confirmation',
    title: 'Attendance confirmed',
    body: 'The clinic is notified and the patient is added to the live queue.',
  },
  {
    time: 'No response',
    title: 'Cancelled & rescheduled',
    body: 'The slot is released and Zero offers the patient a new time.',
  },
]

export const exceptionFlows = [
  { trigger: 'Doctor delayed', chain: ['Queue paused', 'Patients informed'] },
  { trigger: 'Patient waits too long', chain: ["Zero acknowledges the wait", 'Front desk alerted'] },
  { trigger: 'Patient cancels', chain: ['Appointment updated', 'Clinic informed'] },
  { trigger: "Zero reaches its boundary", chain: ['Human assistance requested'] },
]

export const runtimeConcepts = [
  {
    title: 'State management',
    status: 'building',
    body: 'A distributed state engine gives agents fault-tolerant, strictly consistent execution — allowing them to pause, resume, and hand off tasks seamlessly.',
    rows: [
      ['Execution.Status', 'Yielding'],
      ['Context.Snapshot', 'Committed (T+120ms)'],
      ['Recovery.Policy', 'Strict_Resume'],
    ],
  },
  {
    title: 'Memory',
    status: 'building',
    body: 'Semantic and episodic memory isolated per tenant, with vectorized search combined with exact-match indexing for deterministic recall.',
  },
  {
    title: 'Tools',
    status: 'building',
    body: 'Standardized interfaces for API invocation. Declarative schemas enforce strict payload validation before execution.',
  },
  {
    title: 'Permissions',
    status: 'building',
    body: 'Role-based access control injected directly into the runtime context. Agents operate with strictly bounded authority.',
    rows: [['Policy', 'DENY_ALL'], ['Exception', 'Write_Invoice']],
  },
  {
    title: 'Observability',
    status: 'vision',
    body: 'Immutable audit trails for every decision, tool call, and state transition — built for compliance and operational debugging.',
  },
  {
    title: 'Human escalation',
    status: 'building',
    body: 'A first-class runtime primitive, not a fallback bolted on after the fact — agents hand off to a person with full context the moment they hit a policy boundary.',
  },
]

export const roadmap = [
  {
    phase: 'Now',
    title: 'Zero',
    body: 'Production deployment with a small group of clinics.',
    status: 'live',
  },
  {
    phase: 'Next',
    title: 'RAnA primitives',
    body: 'Extract the infrastructure Zero needs to operate reliably.',
    status: 'building',
  },
  {
    phase: 'Then',
    title: 'Developer platform',
    body: 'Give developers tools to build their own business agents.',
    status: 'vision',
  },
  {
    phase: 'Later',
    title: 'Agent marketplace',
    body: 'Businesses discover, configure, and deploy agents.',
    status: 'vision',
  },
  {
    phase: 'Long term',
    title: 'Business agent infrastructure',
    body: 'The underlying operating layer for autonomous digital work.',
    status: 'vision',
  },
]

export const anatomyOfAgent = [
  {
    title: 'Tools',
    body: 'Deterministic capabilities. Wrap existing APIs, database queries, or legacy commands into RAnA-compatible tool definitions.',
    code: `const fetchUserData = new Tool({
  name: 'get_user',
  description: 'Retrieves user data by ID from CRM.',
  execute: async (userId) => { ... }
});`,
  },
  {
    title: 'Context',
    body: 'Inject dynamic enterprise knowledge — vectorized documentation, org charts, and live operational data streams.',
    list: ['Vector DB connector', 'Live data streams', 'Secure enclaves (beta)'],
  },
  {
    title: 'Policies',
    body: 'Establish the hard boundaries of agent autonomy: required approvals, budget limits, and strict action blacklists — evaluated at the infrastructure layer, independent of the LLM.',
    code: `policy:
  require_approval:
    actions: ['execute_transaction', 'modify_record']
    threshold: > $500
  fallback: route_to_human_queue`,
  },
]

export const marketplaceListings = [
  { name: 'InvoiceProcessor_v2', by: 'FinOps_Labs', price: '$0.02 / task' },
  { name: 'L1_Triage_Agent', by: 'SupportFlow', price: '$0.05 / task' },
]

export const whyClinicsPairs = [
  {
    title: 'Complex state management',
    body: 'Clinics manage intersecting schedules, dynamic patient states, and strict compliance requirements. An agent here cannot hallucinate — it must act on concrete, verifiable data.',
  },
  {
    title: 'High-stakes integration',
    body: "Success requires interacting with legacy systems — EHRs, billing software — and real-world triggers. It's the ultimate test of infrastructure reliability.",
  },
]

export const technicalRealism = [
  'Deterministic execution paths',
  'Transparent system state',
  'Robust tool integration',
  'Comprehensive audit logging',
]

export const patientVolumes = [
  'Select volume range',
  'Under 50 / week',
  '50–150 / week',
  '150–400 / week',
  '400+ / week',
]
