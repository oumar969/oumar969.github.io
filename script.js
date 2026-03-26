const translations = {
	en: {
		"nav.about": "About",
		"nav.experience": "Experience",
		"nav.skills": "Skills",
		"nav.projects": "Projects",
		"nav.education": "Education",
		"nav.contact": "Contact",

		"hero.greeting": "Hi, I'm",
		"hero.subtitle": "Software Engineer | Data Engineering | Full Stack",
		"hero.cta": "View Projects",
		"hero.avatarAlt": "Portrait of Oumar Ammar",

		"about.title": "About Me",
		"about.p1": "Newly graduated Software Engineer (Data Engineering) from VIA University College. I enjoy building data-driven and full-stack solutions and turning complex problems into robust, maintainable systems.",
		"about.p2": "During my internship at TinyMobileRobots, I worked in an international team on frontend tasks, designing and implementing customer-specific sports-field templates using JavaScript and Cordova.",
		"about.p3": "I'm passionate about clean code, system architecture, and creating solutions that scale. My experience spans backend development, frontend interfaces, and real-time communication systems. I thrive in collaborative environments and am always eager to learn emerging technologies.",
		"label.languages": "Languages:",

		"experience.title": "Experience",
		"experience.tmr.title": "Frontend Developer Intern • TinyMobileRobots",
		"experience.tmr.li1": "Developed interactive sports-field configuration system serving enterprise clients across Europe",
		"experience.tmr.b1": "Worked in an international team, focusing on frontend development.",
		"experience.tmr.b2": "Designed and implemented customer-specific sports-field templates.",
		"experience.tmr.li2": "Collaborated with product and backend teams on feature implementation and debugging",
		"experience.tmr.tech": "JavaScript, Cordova, jQuery, REST APIs",
		"experience.other.title": "Other Experience",
		"experience.other.fs.label": "Full Stack Development (Academic):",
		"experience.other.fs.desc": "Built multiple course projects covering React/Vue frontends, Node.js/ASP.NET backends, and SQL databases.",
		"experience.other.temp.label": "Temp worker (2019–2025):",
		"experience.other.temp.desc": "Worked under pressure, quick onboarding, and teamwork in diverse environments.",
		"experience.other.vol.label": "Volunteer:",
		"experience.other.vol.desc": "Fundraising collector for the Danish Refugee Council.",
		"experience.other.clean.label": "Cleaning assistant (2018–2019):",
		"experience.other.clean.desc": "Hotel operations support (cleaning, dishwashing, outdoor work, serving).",

		"skills.title": "Technical Skills",
		"skills.cat.programming": "Programming",
		"skills.cat.frameworks": "Frameworks",
		"skills.cat.databases": "Databases",
		"skills.cat.apis": "APIs",
		"skills.cat.tools": "Tools",
		"skills.cat.architecture": "Architecture",
		"skills.cat.fullstack": "Full Stack",

		"projects.title": "Projects",
		"projects.amazirian.title": "Amazirian – React + Flutter Marketplace",
		"projects.amazirian.desc": "Fully modern e-commerce platform with React/TypeScript frontend, Flutter mobile app, and Node.js backend. Features product catalog, detailed product pages, authentication and local SQLite database.",
		"projects.amazirian.features": "Product catalog · Detailed product pages (Amazon-style) · Gallery + zoom · Rating & reviews · Shopping cart · User authentication · Login system",
		"projects.amazirian.design": "Modern UI · Responsive design · Breadcrumbs · Related products · Delivery info",
		"projects.amazirian.frontend": "React + TypeScript · Vite · GitHub Pages deployment",
		"projects.amazirian.mobile": "Flutter · iOS & Android · Web support",
		"projects.amazirian.tech": "React, TypeScript, Flutter, Node.js, SQLite, REST API, JWT Auth",
		"projects.forhinanden.title": "For Hinanden – Community Help Platform",
		"projects.forhinanden.desc": "A digital platform designed to connect people in local communities who need help with volunteers willing to assist.",
		"projects.forhinanden.features": "User authentication · Real-time notifications · Location-based matching · Request management",
		"projects.forhinanden.tech": "React, Node.js, Express, REST API, AWS",
		"projects.digitallibrary.title": "Digital Library System",
		"projects.digitallibrary.desc": "Group project with 5 people: Digitalization of VIA University's manual library system. Implemented with three-tier architecture, JWT authentication and SOLID design principles.",
		"projects.digitallibrary.features": "Book management · User authentication · Book reservation · Search functionality · Loan history · Admin panel",
		"projects.digitallibrary.architecture": "Three-tier · GraphQL + REST API · JWT Auth · SOLID principles",
		"projects.digitallibrary.tech": "Spring Boot, Blazor WebAssembly, GraphQL, REST API, JPA, SQL Database, C#, Java",
		"projects.digitallibrary.methodology": "Unified Process + Kanban · 1120 hours (10 ECTS)",
		"projects.smartplant.title": "Smart Plant Care System (IoT)",
		"projects.smartplant.desc": "Group project with 12 people: Development of self-watering potted plant with IoT technology. Humidity sensors automatically water plants based on specific needs via website interface.",
		"projects.smartplant.features": "Humidity sensor · Automatic watering system · Plant calibration · Real-time monitoring · User interface · Data collection",
		"projects.smartplant.hardware": "IoT sensors · Arduino/Raspberry Pi · Watering pump · Humidity gauge",
		"projects.smartplant.tech": "React, Node.js, MQTT, IoT protocols, Database, Hardware Integration",
		"projects.smartplant.methodology": "SCRUM + Unified Process · 12 sprints · Kanban Board · Burndown Charts",
		"projects.smartplant.period": "February – May 2024",
		"projects.uno.title": "Multiplayer UNO – Real-time Game",
		"projects.uno.p1": "Course assignment focused on designing and implementing a full-stack TypeScript web application.",
		"projects.uno.p2": "Real-time gameplay via Apollo GraphQL + WebSockets, with a functional and immutable UNO core.",
		"projects.uno.features": "Real-time multiplayer · Game state management · Immutable card logic · SSR optimization",
		"projects.uno.tech": "TypeScript, Apollo GraphQL, WebSockets, React, Redux, Next.js (SSR)",
		"projects.dashboard.title": "Data Dashboard – Full Stack Analytics",
		"projects.dashboard.desc": "A comprehensive web application built with .NET and Blazor for managing and visualizing business data. Features real-time dashboards with interactive charts and data export capabilities.",
		"projects.dashboard.features": "Real-time charts · Data export · Multi-user support · Responsive design",
		"projects.dashboard.tech": ".NET 6, Blazor, SQL Server, SignalR, Bootstrap",
		"project.badge.featured": "Featured",
		"project.link.github": "GitHub Repository",
		"project.link.frontend": "Frontend Code",
		"project.link.backend": "Backend Code",
		"project.link.view": "View on GitHub",
		"label.tech": "Tech:",
		"label.features": "Features:",
		"label.design": "Design:",
		"label.frontend": "Frontend:",
		"label.mobile": "Mobile:",

		"education.title": "Education",
		"education.diplomingeniør.title": "Diplomingeniør in Software Technology (Data Engineering) • VIA University College",
		"education.diplomingeniør.period": "Aug 2022 – Jan 2026",
		"education.diplomingeniør.location": "Horsens, Denmark",
		"education.diplomingeniør.p1": "Completed 7 semester projects with high industrial focus.",
		"education.diplomingeniør.p2": "Bachelor project grade: 12",
		"education.diplomingeniør.p3": "Specialization: Real-time multiplayer systems and scalable architecture patterns",
		"education.coursework": "Selected coursework:",
		"education.coursework.badge": "Graduated",
		"education.access.title": "Engineering Access Course • VIA University College",
		"education.access.period": "Aug 2021 – Jun 2022",
		"education.access.subject": "Mathematics A",
		"education.access.desc": "Foundation course preparing for university-level engineering studies.",
		"education.hf.title": "Higher Preparatory Examination (HF) • HF & VUC NORD",
		"education.hf.period": "2018 – 2021",
		"education.hf.location": "Aalborg, Denmark",
		"education.hf.desc": "General educational qualification with focus on mathematics and sciences.",

		"contact.title": "Let's Connect",
		"contact.intro": "I'm open to collaboration, freelance opportunities, and interesting projects. Feel free to reach out!",
		"contact.emailLabel": "Email:",
		"contact.github": "GitHub",
		"contact.linkedin": "LinkedIn",

		"footer.copyright": "© 2025 Oumar Ammar",
	},
	da: {
		"nav.about": "Om",
		"nav.experience": "Erfaring",
		"nav.skills": "Kompetencer",
		"nav.projects": "Projekter",
		"nav.education": "Uddannelse",
		"nav.contact": "Kontakt",

		"hero.greeting": "Hej, jeg hedder",
		"hero.subtitle": "Softwareingeniør | Data Engineering | Full Stack",
		"hero.cta": "Se projekter",
		"hero.avatarAlt": "Portræt af Oumar Ammar",

		"about.title": "Om mig",
		"about.p1": "Nyuddannet softwareingeniør (Data Engineering) fra VIA University College. Jeg kan lide at bygge datadrevne og full-stack løsninger og omsætte komplekse problemstillinger til robuste, vedligeholdelsesvenlige systemer.",
		"about.p2": "Under min praktik hos TinyMobileRobots arbejdede jeg i et internationalt team med frontend-opgaver, hvor jeg designede og implementerede kundespecifikke sportstemplates ved hjælp af JavaScript og Cordova.",
		"about.p3": "Jeg er passioneret omkring rent kode, systemarkitektur og at skabe løsninger, der skalerer. Min erfaring spænder over backend-udvikling, frontend-grænseflader og realtids-kommunikationssystemer. Jeg trives i samarbejdsbaserede miljøer og er altid ivrig efter at lære nye teknologier.",
		"label.languages": "Sprog:",

		"experience.title": "Erfaring",
		"experience.tmr.title": "Frontend udviklerpraktikant • TinyMobileRobots",
		"experience.tmr.li1": "Udviklet interaktivt sportsmarkerings-konfigurationssystem, der betjener virksomhedskunder i hele Europa",
		"experience.tmr.b1": "Arbejdede i et internationalt team med fokus på frontend-udvikling.",
		"experience.tmr.b2": "Designede og implementerede kundespecifikke sportstemplates.",
		"experience.tmr.li2": "Samarbejdede med produkt- og backend-teams om funktionsimplementering og debugging",
		"experience.tmr.tech": "JavaScript, Cordova, jQuery, REST API'er",
		"experience.other.title": "Anden erfaring",
		"experience.other.fs.label": "Full Stack-udvikling (akademisk):",
		"experience.other.fs.desc": "Byggede flere kursusprojekter med React/Vue frontends, Node.js/ASP.NET backends og SQL-databaser.",
		"experience.other.temp.label": "Vikar (2019–2025):",
		"experience.other.temp.desc": "Arbejdede under pres, hurtig onboarding og samarbejde i mangfoldige teams.",
		"experience.other.vol.label": "Frivilligt arbejde:",
		"experience.other.vol.desc": "Indsamler for Dansk Flygtningehjælp.",
		"experience.other.clean.label": "Rengøringsassistent (2018–2019):",
		"experience.other.clean.desc": "Hotelopgaver (rengøring, opvask, udendørs arbejde, tjenerfunktioner).",

		"skills.title": "Tekniske kompetencer",
		"skills.cat.programming": "Programmering",
		"skills.cat.frameworks": "Frameworks",
		"skills.cat.databases": "Databaser",
		"skills.cat.apis": "API'er",
		"skills.cat.tools": "Værktøjer",
		"skills.cat.architecture": "Arkitektur",
		"skills.cat.fullstack": "Full Stack",

		"projects.title": "Projekter",
		"projects.amazirian.title": "Amazirian – React + Flutter Marketplace",
		"projects.amazirian.desc": "Fuldt moderne e-commerce platform med React/TypeScript frontend, Flutter mobile app og Node.js backend. Features produktkatalog, detaljerede produktsider, autentificering og lokal SQLite database.",
		"projects.amazirian.features": "Produktkatalog · Detaljerede produktsider (Amazon-stil) · Galleri + zoom · Ratings & anmeldelser · Indkøbsvogn · Brugerautentificering · Login-system",
		"projects.amazirian.design": "Moderne UI · Responsivt design · Brødkrummer · Relaterede produkter · Leveringsinfo",
		"projects.amazirian.frontend": "React + TypeScript · Vite · GitHub Pages deployment",
		"projects.amazirian.mobile": "Flutter · iOS & Android · Web-support",
		"projects.amazirian.tech": "React, TypeScript, Flutter, Node.js, SQLite, REST API, JWT Auth",
		"projects.forhinanden.title": "For Hinanden – Community Help Platform",
		"projects.forhinanden.desc": "En digital platform designet til at forbinde mennesker i lokalsamfund, som har brug for hjælp, med frivillige der kan assistere.",
		"projects.forhinanden.features": "Brugerautentificering · Realtids-notifikationer · Lokationsbaseret matching · Anmodningsadministration",
		"projects.forhinanden.tech": "React, Node.js, Express, REST API, AWS",
		"projects.digitallibrary.title": "Digital Library System",
		"projects.digitallibrary.desc": "Gruppeprojekt med 5 personer: Digitalisering af VIA University's manuelle bibliotekssystem. Implementeret med three-tier arkitektur, JWT-autentificering og SOLID-design-principler.",
		"projects.digitallibrary.features": "Bogadministration · Brugerautentificering · Bogreservering · Søgefunktionalitet · Lånehistorik · Admin-panel",
		"projects.digitallibrary.architecture": "Three-tier · GraphQL + REST API · JWT Auth · SOLID principles",
		"projects.digitallibrary.tech": "Spring Boot, Blazor WebAssembly, GraphQL, REST API, JPA, SQL Database, C#, Java",
		"projects.digitallibrary.methodology": "Unified Process + Kanban · 1120 timer (10 ECTS)",
		"projects.smartplant.title": "Smart Plant Care System (IoT)",
		"projects.smartplant.desc": "Gruppeprojekt med 12 personer: Udvikling af selvvandende potteplante med IoT-teknologi. Fugtigheds-sensorer automatisk vander planter baseret på plantens specifikke behov via hjemmeside-interface.",
		"projects.smartplant.features": "Fugtigheds-sensor · Automatisk vandingssystem · Plantekalibrering · Realtids-monitorering · Brugergrænse-flade · Dataopsamling",
		"projects.smartplant.hardware": "IoT-sensorer · Arduino/Raspberry Pi · Vandingspumpe · Fugtmål",
		"projects.smartplant.tech": "React, Node.js, MQTT, IoT-protokoller, Database, Hardware Integration",
		"projects.smartplant.methodology": "SCRUM + Unified Process · 12 sprints · Kanban Board · Burndown Charts",
		"projects.smartplant.period": "Februar – Maj 2024",
		"projects.uno.title": "Multiplayer UNO – Real-time Game",
		"projects.uno.p1": "Kursusopgave med fokus på design og implementering af en full-stack TypeScript webapplikation.",
		"projects.uno.p2": "Realtids-gameplay via Apollo GraphQL + WebSockets, med en funktionel og immutable UNO-core.",
		"projects.uno.features": "Realtids-multiplayer · Game state management · Immutable card logic · SSR optimization",
		"projects.uno.tech": "TypeScript, Apollo GraphQL, WebSockets, React, Redux, Next.js (SSR)",
		"projects.dashboard.title": "Data Dashboard – Full Stack Analytics",
		"projects.dashboard.desc": "En omfattende webapplikation bygget med .NET og Blazor til administration og visualisering af forretningsdata. Features realtids-dashboards med interaktive diagrammer og data-eksportfunktionalitet.",
		"projects.dashboard.features": "Realtids-diagrammer · Data-eksport · Multi-bruger-support · Responsivt design",
		"projects.dashboard.tech": ".NET 6, Blazor, SQL Server, SignalR, Bootstrap",
		"project.badge.featured": "Udvalgt",
		"project.link.github": "GitHub Repository",
		"project.link.frontend": "Frontend-kode",
		"project.link.backend": "Backend-kode",
		"project.link.view": "Se på GitHub",
		"label.tech": "Tech:",
		"label.features": "Features:",
		"label.design": "Design:",
		"label.frontend": "Frontend:",
		"label.mobile": "Mobile:",

		"education.title": "Uddannelse",
		"education.diplomingeniør.title": "Diplomingeniør i Softwareteknologi (Data Engineering) • VIA University College",
		"education.diplomingeniør.period": "Aug 2022 – Jan 2026",
		"education.diplomingeniør.location": "Horsens, Danmark",
		"education.diplomingeniør.p1": "Gennemførte 7 semesterprojekter med høj industriel fokus.",
		"education.diplomingeniør.p2": "Bachelorprojekt karakter: 12",
		"education.diplomingeniør.p3": "Speciale: Realtids-multiplayer systemer og scalable architecture patterns",
		"education.coursework": "Udvalgte fag:",
		"education.coursework.badge": "Gradueret",
		"education.access.title": "Adgangskursus til ingeniøruddannelserne • VIA University College",
		"education.access.period": "Aug 2021 – Jun 2022",
		"education.access.subject": "Matematik A",
		"education.access.desc": "Foundation-kursus til forberedelse til universitetsniveau engineering-studier.",
		"education.hf.title": "Højere forberedelseseksamen (HF) • HF & VUC NORD",
		"education.hf.period": "2018 – 2021",
		"education.hf.location": "Aalborg, Danmark",
		"education.hf.desc": "Almen uddannelseskvalifikation med fokus på matematik og naturvidenskab.",

		"contact.title": "Lad os få kontakt",
		"contact.intro": "Jeg er åben for samarbejde, freelance-muligheder og interessante projekter. Kontakt mig gerne!",
		"contact.emailLabel": "Email:",
		"contact.github": "GitHub",
		"contact.linkedin": "LinkedIn",

		"footer.copyright": "© 2025 Oumar Ammar",
	},
};

function getInitialLanguage() {
	const stored = localStorage.getItem("lang");
	if (stored && translations[stored]) return stored;

	const browserLang = (navigator.language || "").toLowerCase();
	if (browserLang.startsWith("da")) return "da";
	return "en";
}

function applyLanguage(lang) {
	const t = translations[lang] || translations.en;

	document.documentElement.lang = lang;
	localStorage.setItem("lang", lang);

	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		if (!key) return;
		const value = t[key];
		if (typeof value !== "string") return;
		el.textContent = value;
	});

	document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
		const key = el.getAttribute("data-i18n-alt");
		if (!key) return;
		const value = t[key];
		if (typeof value !== "string") return;
		el.setAttribute("alt", value);
	});

	document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
		const btnLang = btn.getAttribute("data-lang");
		btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
	});
}

function setupLanguageSwitch() {
	document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
		btn.addEventListener("click", () => {
			const lang = btn.getAttribute("data-lang");
			if (!lang) return;
			applyLanguage(lang);
		});
	});
}

function setupLanguageItems() {
	const langItems = document.querySelectorAll('.lang-item');
	langItems.forEach(item => {
		item.addEventListener('click', function() {
			const flagEl = this.querySelector('.flag');
			
			// Add click animation
			flagEl.style.animation = 'none';
			setTimeout(() => {
				flagEl.style.animation = '';
			}, 10);
			
			// Show tooltip with language name
			const langName = this.getAttribute('title');
			const tooltip = document.createElement('div');
			tooltip.textContent = langName;
			tooltip.style.cssText = `
				position: fixed;
				background: var(--gradient-primary);
				color: black;
				padding: 6px 12px;
				border-radius: 6px;
				font-size: 12px;
				font-weight: 600;
				pointer-events: none;
				z-index: 1000;
				animation: tooltipFade 0.6s ease-in-out;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			`;
			document.body.appendChild(tooltip);
			
			setTimeout(() => {
				tooltip.remove();
			}, 600);
		});
	});
}

function getInitialTheme() {
	const stored = localStorage.getItem("theme");
	if (stored && (stored === "light" || stored === "dark")) return stored;
	
	// Check system preference
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
		return "light";
	}
	return "dark";
}

function applyTheme(theme) {
	if (theme === "light") {
		document.body.classList.add("light-mode");
		localStorage.setItem("theme", "light");
		document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>';
	} else {
		document.body.classList.remove("light-mode");
		localStorage.setItem("theme", "dark");
		document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-moon"></i>';
	}
}

function setupThemeToggle() {
	const themeBtn = document.getElementById("theme-toggle");
	if (!themeBtn) return;
	
	themeBtn.addEventListener("click", () => {
		const isDark = document.body.classList.contains("light-mode");
		applyTheme(isDark ? "dark" : "light");
	});
}

document.addEventListener("DOMContentLoaded", () => {
	setupThemeToggle();
	applyTheme(getInitialTheme());
	setupLanguageSwitch();
	setupLanguageItems();
	applyLanguage(getInitialLanguage());
});
