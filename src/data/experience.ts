export const experience = [
  {
    role: "Backend Engineer",
    company: "Ottodigital Group",
    location: "Indonesia",
    period: "Sep 2020 — Present",
    description:
      "Building and operating backend systems for loyalty and reward processing, with a focus on reliability, data consistency, and maintainable service boundaries.",
    highlights: [
      "Diagnosed race conditions and distributed consistency issues across Kafka event streams and Redis caching layers.",
      "Introduced stricter timeout and lifecycle management with Go context to reduce goroutine leaks and cascading failures.",
      "Refactored legacy shared services and replaced database-driven cron scheduling with in-memory backoff and retry mechanisms.",
      "Maintained core loyalty-point and third-party voucher aggregation systems with an emphasis on data integrity and secure reward processing.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "8Villages",
    location: "Jakarta, Indonesia",
    period: "Apr 2019 — Apr 2020 · Jul 2017 — Dec 2018",
    description:
      "Worked on backend APIs, cloud integrations, payment connectivity, and data products for community and agricultural platforms.",
    highlights: [
      "Built and maintained concurrent REST APIs for a content-sharing community platform.",
      "Migrated static assets to Google Cloud Storage and introduced centralized production logging and monitoring with Google Stackdriver.",
      "Built FinPay payment connectivity and billing synchronization with Telkomsel systems.",
      "Built and maintained a farmer dashboard providing localized agricultural information.",
    ],
  },
] as const;

export const education = {
  school: "SMK Swasta Bina Mandiri",
  program: "Computer and Network Engineering (Teknik Komputer dan Jaringan)",
  qualification: "Vocational High School",
  graduated: "2013",
} as const;

export const languages = [
  { name: "Bahasa Indonesia", proficiency: "Native" },
  { name: "English", proficiency: "Working proficiency" },
] as const;
