import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.description, openGraph: { title: project.name, description: project.description } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const sections = [
    ["Problem", project.problem],
    ["Technical decisions", project.technicalDecisions],
    ["Challenges", project.challenges],
    ["What I learned", project.learnings],
  ] as const;

  return (
    <main className="project-page shell">
      <Link className="back-link" href="/#projects">← Back to selected work</Link>
      <header className="project-hero">
        <p className="section-index">Personal project / {project.index}</p>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {project.github && <div className="hero-actions"><a className="button primary" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a></div>}
      </header>

      <div className="project-detail-grid">
        <aside><p className="mono-label">Technology</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></aside>
        <div className="project-body">
          <section><p className="section-index">01 / Overview</p><h2>Overview</h2><p>{project.overview}</p></section>
          {project.architecture && <section><p className="section-index">02 / Architecture</p><h2>Resource hierarchy</h2><ArchitectureFlow items={project.architecture} /></section>}
          {sections.map(([title, content], index) => (
            <section key={title}><p className="section-index">{String(index + (project.architecture ? 3 : 2)).padStart(2, "0")} / {title}</p><h2>{title}</h2>{typeof content === "string" ? <p>{content}</p> : <ul className="decision-list">{content.map((item) => <li key={item}>{item}</li>)}</ul>}</section>
          ))}
        </div>
      </div>
    </main>
  );
}
