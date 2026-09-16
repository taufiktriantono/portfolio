import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { education, experience, languages } from "@/data/experience";
import { interests, principles, profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow"><span className="status-dot" /> Backend · Platform · Reliability</div>
        <p className="hero-name">Taufik Triantono</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <Link className="button primary" href="#projects">View projects ↓</Link>
          <a className="button secondary" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="quiet-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="hero-systems" aria-hidden="true">
          <span>api.request</span><i /><span>queue.process</span><i /><span>state.persist</span><i /><span>metrics.observe</span>
        </div>
      </section>

      <section id="about" className="section shell two-column">
        <div><p className="section-index">01 / About</p><h2>Learning by building systems that have to work.</h2></div>
        <div className="prose">
          <p>I entered software engineering through a vocational background in computer and network engineering, then continued learning independently through professional work, experimentation, and personal projects.</p>
          <p>My experience has been primarily backend engineering, but over time my interests have expanded toward distributed systems, reliability, observability, cloud infrastructure, and platform engineering.</p>
          <p>I enjoy understanding not only how an application works, but also how it behaves after deployment: how it scales, fails, recovers, is monitored, and how infrastructure costs can be understood and controlled.</p>
        </div>
      </section>

      <section id="engineering" className="section shell">
        <div className="section-heading"><div><p className="section-index">02 / Engineering interests</p><h2>The systems around the application.</h2></div><p>Areas I work with and continue to explore—not a list of expert-level claims.</p></div>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <article key={interest.name} className="interest-item"><span>{String(index + 1).padStart(2, "0")}</span><h3>{interest.name}</h3><p>{interest.items.join(" · ")}</p></article>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading"><div><p className="section-index">03 / Selected work</p><h2>Projects as engineering laboratories.</h2></div><p>Personal, open-source experiments for understanding difficult backend and infrastructure problems in depth.</p></div>
        <div className="projects-list">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </section>

      <section className="section principles-section">
        <div className="shell">
          <p className="section-index">04 / How I think about engineering</p>
          <h2>Calm systems come from<br />deliberate decisions.</h2>
          <ol className="principles-list">{principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></li>)}</ol>
        </div>
      </section>

      <section id="experience" className="section shell two-column">
        <div><p className="section-index">05 / Experience</p><h2>Professional experience.</h2><p className="section-note">More than eight years building and operating production backend systems.</p></div>
        <div className="timeline">
          {experience.map((item) => <article key={`${item.company}-${item.period}`}><span className="timeline-dot" /><p className="mono-label">{item.period}</p><h3>{item.role}</h3><p className="experience-company">{item.company} · {item.location}</p><p>{item.description}</p><ul className="experience-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article>)}
          <div className="background-details">
            <div><p className="mono-label">Education</p><h3>{education.school}</h3><p>{education.qualification} in {education.program}</p><span>Graduated {education.graduated}</span></div>
            <div><p className="mono-label">Languages</p>{languages.map((language) => <p key={language.name}>{language.name}<span>{language.proficiency}</span></p>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section shell">
        <p className="section-index">06 / Contact</p><h2>Let&apos;s talk about backend systems,<br />platforms, and reliability.</h2>
        <p>If you are working on thoughtful infrastructure or backend problems, I would be glad to hear about them.</p>
        <div className="contact-links"><a href={`mailto:${profile.email}`}>Email <span>↗</span></a><a href={profile.links.github}>GitHub <span>↗</span></a><a href={profile.links.linkedin}>LinkedIn <span>↗</span></a></div>
      </section>
    </main>
  );
}
