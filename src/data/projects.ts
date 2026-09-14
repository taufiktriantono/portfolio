export type Project = {
  slug: string;
  index: string;
  name: string;
  label: string;
  description: string;
  question?: string;
  stack: string[];
  architecture?: string[];
  highlights: string[];
  overview: string;
  problem: string;
  technicalDecisions: string[];
  challenges: string[];
  learnings: string[];
  github: string;
};

export const projects: Project[] = [
  {
    slug: "railzway",
    index: "01",
    name: "Railzway",
    label: "Open-source billing experiment",
    description: "A personal open-source billing platform experiment focused on understanding the internals of usage-based billing systems.",
    stack: ["Go", "PostgreSQL", "REST API", "Observability"],
    highlights: ["Products & prices", "Subscriptions", "Usage rating", "Billing cycles", "Invoice generation", "Payment integrations", "Ledger concepts", "Multi-tenancy"],
    overview: "Railzway explores the lifecycle of usage-based billing, from accepting usage events to rating activity, generating invoices, and representing money movement with accounting ledger concepts.",
    problem: "Billing is a stateful domain where time, precision, retries, and lifecycle transitions interact. This project creates a practical environment for studying those concerns without presenting itself as a commercial product.",
    technicalDecisions: ["Go for explicit service boundaries and predictable concurrency", "PostgreSQL as the source of truth for transactional billing data", "Scheduled processing for billing-cycle work", "Observable workflows so delayed and failed operations can be investigated"],
    challenges: ["Keeping rating and invoice generation deterministic", "Handling retries without duplicating financial effects", "Representing subscription and billing-cycle state transitions clearly"],
    learnings: ["Financial correctness depends on explicit domain invariants", "Idempotency belongs in the design, not only at API boundaries", "A billing system needs an audit-friendly model of how each amount was produced"],
    github: "https://github.com/railzwaylabs/railzway",
  },
  {
    slug: "capacity-control-plane",
    index: "02",
    name: "Multi-Tenant Capacity Control Plane",
    label: "Platform engineering experiment",
    description: "A personal engineering experiment for exploring dedicated resource allocation, runtime orchestration, SLO-based capacity recommendations, progressive infrastructure changes, and infrastructure cost attribution for multi-tenant systems.",
    question: "Can an isolated tenant be safely right-sized based on observed SLOs while keeping infrastructure cost directly attributable?",
    stack: ["Go", "PostgreSQL", "Docker", "Prometheus"],
    architecture: ["Organization", "Project", "Application", "Environment", "Allocation", "Deployment"],
    highlights: ["Provider-neutral runtime", "PostgreSQL-backed jobs", "Runtime reconciliation", "Capacity recommendations", "Candidate allocations", "Safe promotion & rollback", "Progressive traffic shifting", "Cost attribution"],
    overview: "The control plane models isolated application environments and reconciles their intended allocation with a runtime provider. It is designed as a place to reason about capacity, safety, and cost together.",
    problem: "Dedicated tenant infrastructure makes attribution clearer, but creates an operational question: how can capacity change based on real behavior without making reliability unpredictable?",
    technicalDecisions: ["A provider-neutral runtime boundary with Docker as the first implementation", "PostgreSQL-backed asynchronous jobs for durable control-plane work", "Desired and observed state reconciliation", "Candidate allocations that can be evaluated before promotion"],
    challenges: ["Separating control-plane state from runtime-provider state", "Turning noisy observations into conservative recommendations", "Designing promotion and rollback as explicit, measurable transitions"],
    learnings: ["A recommendation is not the same thing as an infrastructure change", "Progressive delivery concepts also apply to capacity", "Cost attribution is easier when ownership exists in the resource hierarchy"],
    github: "https://github.com/railzwaylabs/multi-tenant-workspace-platform",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
