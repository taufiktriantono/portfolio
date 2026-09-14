import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taufiktriantono.railzway.com";
  return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...projects.map(({ slug }) => ({ url: `${base}/projects/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
