import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArchitectureFlow } from "./architecture-flow";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-topline"><span>{project.index}</span><span>{project.label}</span></div>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technology">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      {project.architecture && <ArchitectureFlow items={project.architecture} />}
      {project.question && <blockquote>“{project.question}”</blockquote>}
      <div className="project-highlights">
        {project.highlights.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="project-actions">
        {project.github && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
        <Link className="text-link" href={`/projects/${project.slug}`}>Project details <span>→</span></Link>
      </div>
    </article>
  );
}
