import "./styles/ProjectDetails.css";

type Project = { title: string; description: string; technologies: string; link: string; id: number };
const destinations: Record<number, { demo?: string; code?: string; study?: string }> = {
  8: { study: "/nordicflow.html", code: "https://github.com/oumar969/NordicFlow" },
  1: { demo: "https://rentop.dk" },
  7: { demo: "https://www.aerosight.dk/", code: "https://github.com/oumar969/-AeroSight" },
  2: { code: "https://github.com/oumar969/Lumo-app" },
  3: { code: "https://github.com/Zenbax/for-hinanden-frontend" },
  4: { demo: "https://padel-score-ab0b5.web.app", code: "https://github.com/oumar969/padel-score" },
  5: { code: "https://github.com/oumar969/SmartCharger" },
  6: { code: "https://github.com/oumar969/timetrack-pro" },
};
const ProjectDetails = ({ project }: { project: Project }) => {
  const links = destinations[project.id] ?? {};
  return <div className="project-details">
    <p className="project-purpose">{project.description}</p>
    <ul className="project-technologies" aria-label={`${project.title} technologies`}>
      {project.technologies.split(", ").map(tech => <li key={tech}>{tech}</li>)}
    </ul>
    <div className="project-actions">
      {links.demo ? <a href={links.demo} target="_blank" rel="noopener noreferrer" data-cursor="disable" aria-label={`${project.title}: Live Demo`}>Live Demo ↗</a>
        : links.study ? <a href={links.study} data-cursor="disable">Case Study ↗</a>
        : <span className="project-unavailable">Demo unavailable</span>}
      {links.code ? <a href={links.code} target="_blank" rel="noopener noreferrer" data-cursor="disable" aria-label={`${project.title}: View Code`}>View Code ↗</a>
        : <span className="project-unavailable">Code private</span>}
    </div>
  </div>;
};
export default ProjectDetails;
