export const profile = {
  name: "Taufik Triantono",
  role: "Backend Engineer",
  headline: "Building reliable backend systems and exploring cloud platform engineering.",
  summary:
    "I work primarily with Go, PostgreSQL, distributed systems, observability, and cloud infrastructure. I enjoy understanding how systems behave in production and building tools that make them easier to operate.",
  email: "taufik.triantono@railzway.com",
  links: {
    github: "https://github.com/taufiktriantono",
    linkedin: "https://www.linkedin.com/in/taufiktriantono",
  },
} as const;

export const interests = [
  { name: "Backend systems", items: ["Go", "REST APIs", "Distributed services", "Concurrency"] },
  { name: "Data", items: ["PostgreSQL", "Database design", "Transactions", "Consistency"] },
  { name: "Messaging", items: ["Kafka", "Asynchronous processing", "Event-driven systems"] },
  { name: "Platform", items: ["Docker", "Kubernetes", "Nomad", "Consul", "CI/CD"] },
  { name: "Observability", items: ["Prometheus", "Grafana", "OpenTelemetry", "Loki", "Tempo"] },
  { name: "Cloud", items: ["Google Cloud Platform", "Compute", "Networking", "Deployment", "Infrastructure experiments"] },
] as const;

export const principles = [
  "Systems should be observable before they become difficult to debug.",
  "Business boundaries and infrastructure boundaries do not always need to be identical.",
  "A service should be testable independently where practical.",
  "Operational complexity should be justified by a real requirement.",
  "Infrastructure changes should be measurable and reversible.",
  "Prefer explicit state transitions over generic status updates.",
] as const;
