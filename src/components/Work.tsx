import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/Work.css";

const projectLinks: Record<number, { demo?: string; code?: string; study?: string }> = {
  9: { demo: "https://pdfsamtale.onrender.com/", code: "https://github.com/oumar969/Chat_with_your_PDF" },
  10: { demo: "https://su-overblik.vercel.app/", code: "https://github.com/oumar969/su-overblik" },
  8: { study: "/nordicflow.html", code: "https://github.com/oumar969/NordicFlow" },
  1: { demo: "https://rentop.dk" },
  7: { demo: "https://www.aerosight.dk/", code: "https://github.com/oumar969/-AeroSight" },
  2: { code: "https://github.com/oumar969/Lumo-app" },
  3: { study: "/forhinanden.html", code: "https://github.com/Zenbax/for-hinanden-frontend" },
  4: { demo: "https://padel-score-ab0b5.web.app", code: "https://github.com/oumar969/padel-score" },
  6: { code: "https://github.com/oumar969/timetrack-pro" },
};

const Work = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projects = config.projects;
  const selectedProject = activeProject === null ? null : projects[activeProject];
  const selectedLinks = selectedProject ? projectLinks[selectedProject.id] ?? {} : {};

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="work-container section-container">
        <header className="work-header">
          <div>
            <p className="work-eyebrow">Selected work · 2024—2026</p>
            <h2 id="work-title">Projects with <span>purpose.</span></h2>
          </div>
          <p className="work-intro">
            Full-stack products, data platforms and real-time experiences. Hover a project to explore it.
          </p>
        </header>

        <div className="work-showcase" onMouseLeave={() => setActiveProject(null)}>
          <div className="work-list" aria-label="Selected projects">
            {projects.map((project, index) => {
              const isExternal = !project.link.startsWith("/");

              return (
                <a
                  className={`work-list-item ${activeProject === index ? "is-active" : ""}`}
                  href={project.link}
                  key={project.id}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setActiveProject(index)}
                  onFocus={() => setActiveProject(index)}
                  onBlur={() => setActiveProject(null)}
                  data-cursor="disable"
                >
                  <span className="work-list-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-list-copy">
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </span>
                  <span className="work-list-arrow" aria-hidden="true">↗</span>
                  <img className="work-list-mobile-image" src={project.image} alt="" loading="lazy" />
                </a>
              );
            })}

            <Link to="/myworks" className="work-archive-link" data-cursor="disable">
              <span>View complete project archive</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={`work-preview ${selectedProject ? "has-project" : ""}`} aria-live="polite">
            {selectedProject ? (
              <div className="work-preview-card">
                <img className="work-preview-backdrop" src={selectedProject.image} alt="" aria-hidden="true" />
                <img className="work-preview-image" src={selectedProject.image} alt={`${selectedProject.title} project preview`} />
                <span className="work-preview-shade" />
                <span className="work-preview-label">
                  <span className="work-preview-meta">Selected project</span>
                  <strong>{selectedProject.title}</strong>
                </span>
                <div className="work-preview-actions">
                  {selectedLinks.demo && (
                    <a href={selectedLinks.demo} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                      Live Demo <span>↗</span>
                    </a>
                  )}
                  {selectedLinks.study && (
                    <a href={selectedLinks.study} data-cursor="disable">
                      Case Study <span>↗</span>
                    </a>
                  )}
                  {selectedLinks.code && (
                    <a href={selectedLinks.code} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                      View Code <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="work-preview-empty">
                <span>{String(projects.length).padStart(2, "0")} selected projects</span>
                <p>Move across the list<br />to reveal each build.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
