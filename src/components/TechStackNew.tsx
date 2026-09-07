import "./styles/TechStackNew.css";

// Based on the projects, education and skills listed in config.ts.
const groups = [
  { title: "Languages", items: ["Python", "SQL", "Java", "C#", "JavaScript", "TypeScript"] },
  { title: "Frameworks & Libraries", items: ["React", "Next.js", "React Native", "ASP.NET Core", "Spring Boot", "Node.js", "Express", "Flutter", "Tailwind CSS"] },
  { title: "Data & Databases", items: ["PostgreSQL", "MongoDB", "SQLite", "Firestore", "Turso", "Prisma", "Databricks", "PySpark", "Delta Lake", "ETL Pipelines", "Data Modelling", "SCD (Slowly Changing Dimensions)", "Power BI"] },
  { title: "Tools & Cloud", items: ["Git", "GitHub", "Docker", "Azure", "Terraform", "Firebase", "Supabase", "Vercel"] },
];

const TechStackNew = () => (
  <section className="techstack-new" aria-labelledby="techstack-title">
    <div className="techstack-video-container" aria-hidden="true">
      <video autoPlay loop muted playsInline className="techstack-video">
        <source src="/video/video.webm" type="video/webm" />
      </video>
      <div className="techstack-overlay" />
    </div>
    <div className="techstack-content">
      <h2 id="techstack-title">Tech Stack</h2>
      <p className="techstack-summary">Technologies I use across software, full-stack and data engineering projects.</p>
      <div className="techstack-groups">
        {groups.map((group) => (
          <section className="techstack-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="techstack-badges">
              {group.items.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackNew;
