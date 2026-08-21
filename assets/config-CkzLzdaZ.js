const e = {
  developer: {
    name: "Oumar",
    fullName: "Oumar Ammar",
    title: "Software Engineer | Full-Stack Developer",
    description: "Software Engineer turning complex ideas into reliable digital products, with a specialization in Data Engineering."
  },
  social: { github: "oumar969", email: "oammar198@gmail.com", location: "Denmark" },
  about: {
    title: "About Me",
    description: "I am a Software Engineer specialized in Data Engineering from VIA University College. I work with Python, SQL, ETL pipelines, dimensional data modelling and Power BI, alongside full-stack and real-time product development. I am currently deepening my Azure and Databricks skills by building NordicFlow as a hands-on enterprise data-platform learning project. I care about clean architecture, useful interfaces and reliable delivery."
  },
  experiences: [
    {
      position: "Frontend Developer Intern",
      company: "TinyMobileRobots",
      period: "2024 - 2025",
      location: "Malling, Denmark",
      description: "Built customer-specific sports-field templates and interactive configuration features in an international product team.",
      responsibilities: ["Implemented customer-specific field templates", "Collaborated with product and backend teams", "Debugged and improved production features"],
      technologies: ["JavaScript", "Cordova", "jQuery", "REST APIs"]
    },
    {
      position: "Software Engineering",
      company: "VIA University College",
      period: "2022 - 2026",
      location: "Horsens, Denmark",
      description: "Completed seven industry-focused semester projects and graduated as a Software Engineer specializing in Data Engineering.",
      responsibilities: ["Bachelor project grade: 12", "Built full-stack and real-time systems", "Worked in cross-functional project teams"],
      technologies: ["TypeScript", "C#", ".NET", "Java", "Python", "SQL"]
    },
    {
      position: "Full-Stack Developer",
      company: "Client & Personal Projects",
      period: "2023 - Present",
      location: "Denmark",
      description: "Designing, building and deploying complete web and mobile products for real users and businesses.",
      responsibilities: ["Shipped production web applications", "Built mobile and PWA products", "Implemented auth, booking and real-time sync"],
      technologies: ["React", "Next.js", "Node.js", "Flutter", "Firebase", "Docker"]
    }
  ],
  projects: [
    {
      id: 7,
      title: "NordicFlow",
      category: "Cloud Data Platform / Learning Project",
      technologies: ".NET, React, Azure, Databricks, PySpark, PostgreSQL, Terraform, Docker, GitHub Actions",
      image: "/images/nordicflow-overview.png",
      description: "A hands-on supply-chain intelligence platform I am building to learn Azure and Databricks in practice. It explores secure event ingestion, medallion data pipelines, observability, infrastructure as code and an authenticated operations dashboard.",
      link: "/nordicflow.html"
    },
    { id: 1, title: "Rentop", category: "Client / Full-Stack", technologies: "Next.js, TypeScript, Prisma, Turso, Vercel", image: "/images/rentop.png", description: "A complete business platform for a Danish cleaning company — customer booking, admin analytics, invoicing, gift cards, loyalty and SEO.", link: "https://rentop.dk" },
    { id: 2, title: "Lumo", category: "Real-Time Mobile", technologies: "React Native, Firebase, Node.js, Turso", image: "/images/lumo-screenshots/lumo-home.png", description: "A private creative collaboration app for live drawing, shared notes, presence and invite-only spaces.", link: "https://github.com/oumar969/Lumo-app" },
    { id: 3, title: "For Hinanden", category: "Community Platform", technologies: "Flutter, ASP.NET Core, PostgreSQL, Firebase", image: "/images/forhinanden-1.png", description: "A community platform connecting people who need help with nearby volunteers through matching, tasks and real-time chat.", link: "https://github.com/Zenbax/for-hinanden-frontend" },
    { id: 4, title: "Padel Score", category: "Real-Time PWA", technologies: "Flutter, Firestore, Riverpod, PWA", image: "/images/padel-score.png", description: "An installable match tracker with a complete scoring engine, live spectators, analytics and TV mode.", link: "https://padel-score-ab0b5.web.app" },
    { id: 5, title: "SmartCharger", category: "Clean Energy / Full-Stack", technologies: ".NET 8, React, TypeScript, ML.NET, SQLite, Docker", image: "/images/smartcharger.png", description: "A Danish EV charging app that uses live Energinet prices and CO₂ data to find the cheapest or greenest charging window, with ML-powered price forecasting.", link: "https://github.com/oumar969/SmartCharger" },
    { id: 6, title: "TimeTrack Pro", category: "Workforce Management", technologies: "React, Node.js, Express, PostgreSQL, JWT, Docker", image: "/images/timetrack-pro.png", description: "An accessible employee time-tracking system with secure clock-in and clock-out, staff management, shift history and weekly analytics for administrators.", link: "https://github.com/oumar969/timetrack-pro" }
  ],
  contact: {
    email: "oammar198@gmail.com",
    github: "https://github.com/oumar969",
    linkedin: "https://www.linkedin.com/in/omar-a-8a2491253/",
    twitter: "https://github.com/oumar969",
    facebook: "https://github.com/oumar969",
    instagram: "https://github.com/oumar969"
  },
  skills: {
    develop: {
      title: "SOFTWARE ENGINEER",
      description: "Reliable software with a Data Engineering specialization",
      details: "I build maintainable systems across backend, APIs and databases. My Data Engineering experience includes Python, SQL, ETL pipelines, dimensional modelling and Power BI. I am expanding this foundation through hands-on work with Azure, Databricks and PySpark.",
      tools: ["C#", ".NET", "Python", "SQL", "Azure", "Databricks", "PySpark", "Terraform", "ETL Pipelines", "PostgreSQL", "Docker", "Git"]
    },
    design: {
      title: "FULL-STACK",
      description: "Modern web & mobile applications",
      details: "Creating responsive products from interface to database using modern web and mobile technologies.",
      tools: ["React", "Next.js", "Node.js", "React Native", "Flutter", "Firebase", "Tailwind CSS", "Vercel", "Git"]
    }
  }
};

export { e as c };
