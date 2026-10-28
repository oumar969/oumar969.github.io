import { useState } from "react";
import { config } from "../config";
import "./styles/MLProjects.css";

const MLProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectCount = config.mlProjects.length;

  const showPrevious = () => {
    setActiveProject((current) => (current - 1 + projectCount) % projectCount);
  };

  const showNext = () => {
    setActiveProject((current) => (current + 1) % projectCount);
  };

  return (
    <section className="ml-projects" id="ml-projects" aria-labelledby="ml-projects-title">
      <div className="ml-projects-inner">
        <header className="ml-projects-header">
          <p>Small projects · applied machine learning</p>
          <h2 id="ml-projects-title">
            ML <span>Experiments</span>
          </h2>
          <div className="ml-projects-intro">
            Focused prototypes where I explore computer vision, model behaviour and practical ML workflows.
          </div>
        </header>

        <div className="ml-carousel-controls">
          <p aria-live="polite">
            <span>{String(activeProject + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(projectCount).padStart(2, "0")}</span>
          </p>
          <div>
            <button type="button" onClick={showPrevious} aria-label="Show previous ML project">
              ←
            </button>
            <button type="button" onClick={showNext} aria-label="Show next ML project">
              →
            </button>
          </div>
        </div>

        <div className="ml-projects-viewport">
          <div
            className="ml-projects-grid"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {config.mlProjects.map((project, index) => (
            <article className="ml-project-card" key={project.id}>
              <div className="ml-project-visual">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    aria-label={`${project.title} demonstration video`}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt="Drone footage with detected sheep, tracking boxes and a virtual counting line"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="ml-project-visual-topline">
                  <span>ML {String(index + 1).padStart(2, "0")}</span>
                  <span className="ml-project-status">{project.status}</span>
                </div>
                <div className="ml-project-scanline" aria-hidden="true" />
              </div>

              <div className="ml-project-content">
                <div className="ml-project-title-row">
                  <div>
                    <p className="ml-project-kicker">Computer vision · object tracking</p>
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                  </div>
                  <span className="ml-project-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="ml-project-description">{project.description}</p>

                <div className="ml-project-details">
                  <div>
                    <span>Approach</span>
                    <p>{project.approach}</p>
                  </div>
                  <div>
                    <span>Current limitations</span>
                    <p>{project.limitations}</p>
                  </div>
                </div>

                <ul className="ml-project-tech" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="ml-project-actions">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View code ↗
                    </a>
                  ) : (
                    <span>Repository coming soon</span>
                  )}
                </div>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLProjects;
