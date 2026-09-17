import { notFound } from "next/navigation";
import { renderSocialImage, socialImageContentType, socialImageSize } from "@/components/social-image";
import { getProject, projects } from "@/data/projects";

export const alt = "Project by Taufik Triantono";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return renderSocialImage({
    eyebrow: `PROJECT ${project.index}`,
    title: project.name,
    description: project.label,
    tags: project.stack,
  });
}
