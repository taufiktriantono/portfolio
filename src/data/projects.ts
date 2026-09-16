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
  github?: string;
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
  {
    slug: "railzwayapis",
    index: "03",
    name: "Railzway APIs",
    label: "API design experiment",
    description: "A personal contract-first API experiment for exploring how public billing and payment interfaces can remain consistent, versioned, and implementation-independent.",
    question: "How can a financial API evolve without weakening its domain invariants or breaking existing consumers?",
    stack: ["Protocol Buffers", "gRPC", "REST/JSON", "Buf", "OpenAPI"],
    architecture: ["Proto contract", "Buf validation", "Generated SDK", "gRPC service", "REST gateway", "API consumer"],
    highlights: ["Contract-first design", "Resource-oriented APIs", "API versioning", "gRPC transcoding", "Breaking-change detection", "Idempotency semantics", "Financial invariants", "Generated SDKs"],
    overview: "Railzway APIs contains the canonical Protocol Buffer contracts for Railzway public APIs. It is an engineering experiment in expressing billing, usage ingestion, invoicing, and payment semantics independently from service implementations while exposing the same contract through gRPC and REST/JSON.",
    problem: "Public financial APIs need to evolve while preserving compatibility and precise domain behavior. Monetary precision, event replay, effective-dated resources, immutable invoices, payment retries, and tenant boundaries all need semantics that are visible in the contract rather than hidden inside an implementation.",
    technicalDecisions: [
      "Protocol Buffers as the canonical, versioned source of API contracts",
      "Resource-oriented standard methods with explicit custom methods for domain actions such as invoice finalization",
      "gRPC and REST/JSON transcoding from one contract to avoid maintaining parallel API definitions",
      "Canonical decimal strings and shared Money types instead of binary floating-point values",
      "Buf linting and breaking-change detection as automated contract quality gates",
      "Generated clients treated as disposable build artifacts rather than hand-maintained source code",
    ],
    challenges: [
      "Encoding financial and lifecycle invariants clearly at the API boundary",
      "Keeping organization scoping secure without exposing unnecessary tenant identifiers in public URLs",
      "Distinguishing technical payment failures from ambiguous or business-level failures",
      "Designing additive evolution rules that preserve existing consumers",
    ],
    learnings: [
      "API contracts are part of the domain model, not merely transport schemas",
      "Idempotency and immutability need explicit wire-level semantics",
      "Breaking-change automation makes contract evolution a repeatable engineering practice",
      "A shared contract can support multiple transports without coupling it to persistence models",
    ],
    github: "https://github.com/railzwaylabs/railzwayapis",
  },
  {
    slug: "railzway-cloud",
    index: "04",
    name: "Railzway Cloud",
    label: "Cloud control plane experiment",
    description: "A personal control-plane experiment for provisioning and operating isolated Railzway billing environments across multiple organizations.",
    question: "How can tenant onboarding and infrastructure provisioning become durable, observable, and safe to retry?",
    stack: ["Go", "PostgreSQL", "GORM", "Uber Fx", "Gin"],
    architecture: ["Organization API", "Transaction", "Outbox event", "Durable worker", "Database provisioner", "Tenant database"],
    highlights: ["Organization lifecycle", "Dedicated databases", "Transactional outbox", "Durable workers", "Provisioning states", "Retry-safe operations", "Bounded contexts", "Cloud orchestration"],
    overview: "Railzway Cloud explores the control-plane responsibilities around a multi-tenant billing platform. Its current implementation models organizations, records dedicated database allocations, publishes provisioning work through a transactional outbox, and processes that work with a background worker.",
    problem: "Creating tenant infrastructure crosses API, database, and external provisioning boundaries. A partial failure must not leave the organization lifecycle ambiguous or require unsafe manual recovery.",
    technicalDecisions: [
      "Separate organization domain, application, persistence, and HTTP transport boundaries",
      "Create organization state and its provisioning event in one PostgreSQL transaction",
      "Use a transactional outbox to bridge committed application state and asynchronous work",
      "Run provisioning in a dedicated worker process rather than inside an HTTP request",
      "Track explicit provisioning states and failure information for operational visibility",
    ],
    challenges: [
      "Making database creation safe to retry after partial failures",
      "Keeping control-plane records consistent with externally provisioned resources",
      "Separating organization ownership from infrastructure-provider details",
      "Evolving from database provisioning toward runtime orchestration without collapsing boundaries",
    ],
    learnings: [
      "Control planes need explicit desired, transitional, and failed states",
      "The outbox pattern provides a durable handoff without pretending external work is transactional",
      "Provisioning workers should be independently deployable and observable",
      "Tenant isolation decisions shape both operations and cost attribution",
    ],
    github: "https://github.com/railzwaylabs/railzway-cloud",
  },
  {
    slug: "railzway-auth",
    index: "05",
    name: "Railzway Auth",
    label: "Identity and IAM experiment",
    description: "A personal identity-provider and IAM control-plane experiment for exploring OAuth 2.0, OpenID Connect, organization-aware access, admin sessions, and service-to-service trust across the Railzway ecosystem.",
    question: "How should identity and organization context flow across a control plane and isolated billing services without coupling every service to login concerns?",
    stack: ["Go", "PostgreSQL", "Redis", "React", "OAuth 2.0", "OpenID Connect"],
    architecture: ["User", "Authorization flow", "Identity provider", "Signed token", "JWKS validation", "Railzway service"],
    highlights: ["OAuth 2.0", "OpenID Connect", "Organization context", "Token lifecycle", "JWKS", "Service trust", "Session security", "Standards-first design"],
    overview: "Railzway Auth is the identity-provider and IAM control-plane experiment in the Guard repository. It explores OAuth 2.0 and OpenID Connect flows, password and OTP login, organization discovery, token issuance, admin session controls, and federated access while keeping identity concerns separate from billing domain logic.",
    problem: "A multi-service platform needs a consistent source of identity while each service retains its own authorization boundaries. Tenant context must be verifiable, tokens need a safe lifecycle, and signing-key changes must not require tightly coupled deployments.",
    technicalDecisions: [
      "Follow OAuth 2.0 and OpenID Connect protocols instead of inventing a proprietary login flow",
      "Keep identity-provider responsibilities separate from billing and provisioning services",
      "Use asymmetric token signing with JWKS-based verification by dependent services",
      "Represent organization membership explicitly rather than inferring authorization from identity alone",
      "Treat refresh, revocation, rotation, and session handling as core lifecycle concerns",
    ],
    challenges: [
      "Separating authentication, organization membership, and service-level authorization",
      "Propagating trusted tenant context without relying on unverified request metadata",
      "Rotating signing keys while preserving active verification paths",
      "Keeping browser, API, and service-to-service flows understandable and auditable",
    ],
    learnings: [
      "Identity is infrastructure, but authorization still belongs near each domain",
      "Standards reduce custom protocol risk without removing implementation complexity",
      "Tenant resolution must be authenticated rather than accepted from routing alone",
      "Token and session lifecycles need explicit state and revocation strategies",
    ],
    github: "https://github.com/railzwaylabs/guard",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
