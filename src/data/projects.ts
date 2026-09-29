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
    slug: "billing",
    index: "01",
    name: "Billing",
    label: "Open-source billing experiment",
    description: "A personal open-source billing platform experiment focused on understanding the internals of usage-based billing systems.",
    stack: ["Go", "PostgreSQL", "React", "Prometheus"],
    highlights: ["Products & prices", "Subscriptions", "Usage rating", "Billing cycles", "Invoice generation", "IAM", "Resource monitoring", "Multi-tenancy"],
    overview: "Billing explores the lifecycle of usage-based billing, from accepting usage events to rating activity and generating deterministic invoices, with organization-scoped IAM and operational monitoring.",
    problem: "Billing is a stateful domain where time, precision, retries, and lifecycle transitions interact. This project creates a practical environment for studying those concerns without presenting itself as a commercial product.",
    technicalDecisions: ["Go for explicit service boundaries and predictable concurrency", "PostgreSQL as the source of truth for transactional billing data", "Scheduled processing for billing-cycle work", "Observable workflows so delayed and failed operations can be investigated"],
    challenges: ["Keeping rating and invoice generation deterministic", "Handling retries without duplicating financial effects", "Representing subscription and billing-cycle state transitions clearly"],
    learnings: ["Financial correctness depends on explicit domain invariants", "Idempotency belongs in the design, not only at API boundaries", "A billing system needs an audit-friendly model of how each amount was produced"],
    github: "https://github.com/railzwaylabs/billing",
  },
  {
    slug: "railzwayapis",
    index: "02",
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
    slug: "macro",
    index: "03",
    name: "Macro",
    label: "Go service toolkit and workspace CLI",
    description: "A lightweight Go toolkit for scaffolding consistent services, workers, and jobs, organizing them in workspaces, and standardizing runtime infrastructure without coupling business logic to the framework.",
    question: "How can Go projects share reliable structure and infrastructure conventions while keeping application logic independent?",
    stack: ["Go", "Cobra", "YAML", "gRPC", "Protocol Buffers", "Zap", "GORM", "GitHub Actions"],
    architecture: ["Workspace manifest", "Project scaffold", "Composition root", "Application service", "Infrastructure adapter"],
    highlights: ["Project scaffolding", "Workspace management", "Typed manifests", "Service lifecycle", "Worker lifecycle", "Graceful shutdown", "gRPC transport", "pprof diagnostics", "Cross-platform releases"],
    overview: "Macro is a personal service-toolkit experiment inspired by Go Micro and adapted to Railzway's development conventions. The v0.1.0 CLI focuses on initializing service, worker, and job projects and organizing related projects through a workspace manifest. Its runtime assembles shared infrastructure at the executable boundary while business logic and integrations remain owned by each application.",
    problem: "As the number of Go services grows, both project structure and operational conventions tend to drift. Teams repeatedly recreate scaffolding, workspace organization, logging, server startup, shutdown behavior, diagnostics, and database configuration with small but consequential differences. Macro explores how those concerns can be standardized without moving business rules into a framework or generic repository layer.",
    technicalDecisions: [
      "A deliberately small v0.1.0 CLI centered on init and workspace commands",
      "Typed YAML manifests as explicit, reviewable project and workspace configuration",
      "Embedded templates for deterministic scaffolding without network access",
      "A small lifecycle contract based on Start and Stop rather than a broad framework-owned service abstraction",
      "An infrastructure-agnostic Worker contract based on Run(context.Context)",
      "Composition-root wiring so only the executable entrypoint knows every concrete dependency",
      "Standard gRPC and application-owned protobuf contracts instead of a custom RPC protocol",
      "Zap logging with an internal HTTP endpoint for changing log levels at runtime",
      "Loopback-only pprof and management endpoints by default",
      "Explicit database configuration for PostgreSQL, MySQL, and SQLite rather than opaque DSN-only setup",
      "GoReleaser and GitHub Actions for reproducible cross-platform CLI releases",
    ],
    challenges: [
      "Keeping generated service, worker, and job layouts consistent without hiding application structure",
      "Discovering the nearest workspace and storing portable relative project paths",
      "Keeping convenience APIs small enough that application code remains framework-independent",
      "Coordinating bounded service shutdown and context-driven worker cancellation correctly",
      "Defining shared repository primitives without allowing business logic to leak into persistence adapters",
      "Providing useful defaults while leaving transport and infrastructure choices replaceable",
    ],
    learnings: [
      "A narrow CLI scope makes the first release easier to understand, test, and evolve",
      "Typed manifests and deterministic templates make project conventions visible instead of implicit",
      "Worker lifecycle can be standardized without hiding broker-specific semantics",
      "A service framework is most useful at the composition boundary, not inside business use cases",
      "Lifecycle management and operational defaults create more consistency than abstracting every application concern",
      "Repository interfaces should be owned by the application layer and implemented by infrastructure adapters",
      "Small explicit contracts are easier to test and evolve than framework-wide implicit behavior",
    ],
    github: "https://github.com/railzwaylabs/macro",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
