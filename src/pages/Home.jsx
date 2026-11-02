
import { useState } from "react";



import {
  Menu, X, Github, Linkedin, Mail, Phone, Download,
  ExternalLink, ArrowUpRight, Code2, BriefcaseBusiness,
  GraduationCap, Award, Sparkles, Database, Globe,
  Layers, Cpu, Rocket, ChevronRight
} from "lucide-react";

const projects = [
  {
    name: "AI Resume Analyzer",
    category: "AI",
    description:
      "AI-powered application that analyzes resumes against job descriptions, identifies skill gaps and provides improvement insights.",
    tech: ["React.js", "Node.js", "Express.js", "Gemini AI"],
    github: "https://github.com/Vaishali-kale/ai-resume-analyzer",
    demo: "https://ai-resume-analyzer-phi-lake.vercel.app/",
    color: "from-violet-500 to-indigo-600",
    glow: "group-hover:shadow-violet-500/30",
    featured: true,
  },
  {
    name: "FoodExpress",
    category: "Full Stack",
    description:
      "Food delivery platform with food listings, cart functionality, authentication and ordering workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/Vaishali-kale/mern-food-delivery-app",
    color: "from-orange-400 to-rose-500",
    glow: "group-hover:shadow-orange-500/30",
  },
  {
    name: "Hospital Management System",
    category: "Full Stack",
    description:
      "Hospital management project featuring patient registration, appointment workflows and role-based dashboards.",
    tech: ["React.js", "MongoDB", "Node.js", "JWT"],
    github: "https://github.com/Vaishali-kale/MERN-Stack-Hospital-Management-System",
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/30",
  },
  {
    name: "Real-Time Pricing Engine",
    category: "Backend",
    description:
      "Real-time pricing project exploring live updates and backend processing.",
    tech: ["React.js", "Node.js", "WebSocket", "Redis"],
    github: "https://github.com/Vaishali-kale/real-time-pricing-engine-Market",
    color: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-500/30",
  },
  {
    name: "AI Chatbot",
    category: "AI",
    description:
      "AI chatbot project exploring conversational interactions through an AI-powered application.",
    tech: ["React.js", "Node.js", "Gemini AI"],
    github: "https://github.com/Vaishali-kale/ai-chatbot",
    color: "from-fuchsia-500 to-purple-600",
    glow: "group-hover:shadow-fuchsia-500/30",
  },
  {
    name: "Spotify App",
    category: "Frontend",
    description:
      "Music application interface focused on frontend development and user experience.",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Vaishali-kale/Spotify_app",
    color: "from-green-500 to-lime-600",
    glow: "group-hover:shadow-green-500/30",
  },
  {
    name: "News Dashboard",
    category: "Frontend",
    description:
      "News dashboard project for presenting news information through a web interface.",
    tech: ["React.js", "JavaScript"],
    github: "https://github.com/Vaishali-kale/news-dashboard",
    color: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/30",
  },
  {
    name: "E-Commerce Application",
    category: "Full Stack",
    description:
      "E-commerce project exploring online shopping interfaces and application workflows.",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Vaishali-kale/ecommerce",
    color: "from-pink-500 to-red-500",
    glow: "group-hover:shadow-pink-500/30",
  },
  {
    name: "Weather App",
    category: "Frontend",
    description:
      "Weather application with location-based search and weather API integration.",
    tech: ["React.js", "JavaScript", "Weather API"],
    github: "https://github.com/Vaishali-kale/Weather-app",
    color: "from-sky-500 to-blue-700",
    glow: "group-hover:shadow-sky-500/30",
  },
  {
    name: "AI Spend Audit",
    category: "AI",
    description:
      "AI-related project focused on spend auditing and analysis workflows.",
    tech: ["AI", "JavaScript"],
    github: "https://github.com/Vaishali-kale/ai-spend-audit",
    color: "from-amber-500 to-orange-600",
    glow: "group-hover:shadow-amber-500/30",
  },
];

const skills = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    items: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "RBAC", "API Integration"],
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-emerald-500 to-green-500",
    items: ["MongoDB", "MySQL", "SQL", "CRUD Operations", "Database Design Fundamentals"],
  },
  {
    title: "Programming Fundamentals",
    icon: Cpu,
    color: "from-amber-500 to-orange-500",
    items: ["JavaScript Programming", "Variables & Data Types", "Operators", "Loops & Conditions", "Functions", "Error Handling", "Problem Solving"],
  },
  {
    title: "Data Structures & Algorithms",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    items: ["Arrays", "Strings", "Linked Lists", "Stacks & Queues", "Hash Maps", "Searching & Sorting", "Recursion", "Time & Space Complexity (Big O)"],
  },
  {
    title: "Object-Oriented Programming",
    icon: Layers,
    color: "from-fuchsia-500 to-pink-500",
    items: ["Classes & Objects", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Constructors", "OOP Principles"],
  },
  {
    title: "Tools & Technologies",
    icon: Layers,
    color: "from-indigo-500 to-blue-500",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vite", "npm", "Browser DevTools"],
  },
  {
    title: "Professional Skills",
    icon: BriefcaseBusiness,
    color: "from-teal-500 to-emerald-500",
    items: ["Debugging", "Analytical Thinking", "Communication", "Team Collaboration", "Time Management", "Continuous Learning"],
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full Stack", "Frontend", "Backend", "AI"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#080d1b] text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#080d1b]/90 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#home" className="text-2xl font-black tracking-tight">
            VK<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden xl:flex items-center gap-6">
            {navigation.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="xl:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="xl:hidden px-6 pb-6 flex flex-col gap-4 bg-[#0c1427]">
            {navigation.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative py-28 md:py-40 px-6">

        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-4 py-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Full Stack Developer
            </span>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Immediate Joiner
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Open to Relocation: Bengaluru · Pune · Hyderabad
              </span>
            </div>

            <p className="text-gray-400 mt-9 tracking-[0.3em] uppercase text-sm">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-3">
              Vaishali
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kale.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-200 font-semibold mt-7">
              Software Engineer & MERN Stack Developer
            </h2>

            <p className="text-gray-400 leading-8 mt-6 max-w-xl">
              Full Stack Developer with 6 months of professional
              development experience. Skilled in React.js, JavaScript,
              Node.js, Express.js, MongoDB, MySQL and REST API development.
              I enjoy building responsive and useful web applications. I am
              available to join immediately and open to relocation to Bengaluru,
              Pune and Hyderabad.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:from-purple-600 hover:to-pink-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Explore Projects
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </a>

              <a
                href="/Vaishali_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

            <div className="flex gap-5 mt-9">
              <a
                href="https://github.com/Vaishali-kale"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-white/5 hover:bg-purple-500 hover:scale-110 transition-all"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/vaishali-v-kale-5052782b0/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-white/5 hover:bg-blue-500 hover:scale-110 transition-all"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:vaishalikalekale@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl bg-white/5 hover:bg-pink-500 hover:scale-110 transition-all"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111b31] p-8 md:p-12 shadow-2xl hover:border-cyan-400/50 transition-all duration-500">

              <div className="flex justify-between items-center">
                <Cpu size={38} className="text-cyan-400" />
                <span className="text-gray-500 text-xs tracking-widest">
                  DEVELOPER PORTFOLIO
                </span>
              </div>

              <div className="mt-16">
                <p className="text-cyan-400 font-semibold tracking-widest text-sm">
                  MY DEVELOPMENT PHILOSOPHY
                </p>

                <h2 className="text-4xl md:text-5xl font-black leading-tight mt-5">
                  Create.
                  <br />
                  Build.
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                    Innovate.
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-12">
                {["React.js", "Node.js", "MongoDB", "JavaScript"].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/5 p-4 rounded-xl text-center text-sm hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-5 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 shadow-xl animate-bounce">
              <Sparkles size={26} />
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-[#0c1427]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-cyan-400 font-bold tracking-widest text-sm">
              ABOUT ME
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Passionate About
              <span className="text-cyan-400"> Technology.</span>
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-8">
              I am an MCA graduate and Full Stack Developer with hands-on
              professional development experience. I enjoy transforming ideas
              into functional, responsive and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              I have practical experience with React.js, JavaScript, Node.js,
              Express.js, MongoDB and MySQL, including building frontend
              interfaces, developing backend functionality, integrating REST
              APIs and working with databases.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              I am also strengthening my programming fundamentals, Data
              Structures and Algorithms, problem-solving skills and Object-
              Oriented Programming concepts such as encapsulation, abstraction,
              inheritance and polymorphism. I am interested in AI-powered
              applications, authentication systems and real-time web
              technologies, and I continuously work to improve my skills.
            </p>

            <a
              href="https://github.com/Vaishali-kale"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-7 text-cyan-400 font-semibold hover:text-purple-400 transition-colors"
            >
              Explore GitHub <ChevronRight />
            </a>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-cyan-400 font-bold tracking-widest text-sm">
              WHAT I WORK WITH
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-2xl p-7 bg-[#111b31] border border-white/10 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.color} group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold mt-6 group-hover:text-cyan-400 transition-colors">
                    {skill.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      
{/* EXPERIENCE SECTION */}
<section
  id="experience"
  className="py-24 px-6 bg-[#0c1427]"
>
  <div className="max-w-5xl mx-auto">

    <div className="mb-14">
      <p className="text-cyan-400 font-bold tracking-[0.25em] text-sm">
        CAREER JOURNEY
      </p>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        Professional <span className="text-cyan-400">Experience</span>
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl leading-7">
        My professional journey in software development, building
        web applications and strengthening full-stack development skills.
      </p>
    </div>

    <div className="relative border-l-2 border-cyan-500/40 pl-8 md:pl-12">

      {/* Experience Card */}
      <div className="absolute w-4 h-4 rounded-full bg-cyan-400 -left-[9px] top-2 shadow-lg shadow-cyan-400/50" />

      <div className="group relative rounded-2xl border border-white/10 bg-[#111b31] p-7 md:p-9 hover:border-cyan-400/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">

        {/* Date and employment */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-cyan-400 font-semibold text-sm">
            May 2026 – Present
          </span>

          <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
            Current Role
          </span>
        </div>

        {/* Job title */}
        <h3 className="text-2xl md:text-3xl font-bold mt-5 group-hover:text-cyan-300 transition-colors">
          Full Stack Developer
        </h3>

        <p className="text-gray-300 font-medium mt-2">
          BDreamz Global Solutions
        </p>

        <p className="text-gray-500 text-sm mt-1">
          Bengaluru, Karnataka, India
        </p>

        {/* Description */}
        <p className="text-gray-400 leading-8 mt-6">
          Working on full-stack web development using modern JavaScript
          technologies. Gaining practical experience in developing
          frontend interfaces, integrating backend services, working
          with REST APIs and handling database operations.
        </p>

        {/* Responsibilities */}
        <h4 className="text-lg font-bold mt-8 mb-5">
          Key Responsibilities
        </h4>

        <ul className="space-y-4">
          {[
            "Develop and maintain responsive user interfaces using React.js and JavaScript.",
            "Build and integrate frontend components with backend REST APIs.",
            "Work with Node.js and Express.js for server-side application development.",
            "Perform database operations using MongoDB and MySQL.",
            "Implement application functionality, troubleshoot issues and debug code.",
            "Use Git and GitHub for source code management and project collaboration.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3 text-gray-400 leading-7">
              <span className="text-cyan-400 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <h4 className="text-lg font-bold mt-9 mb-5">
          Technologies & Tools
        </h4>

        <div className="flex flex-wrap gap-3">
          {[
            "React.js",
            "JavaScript ES6+",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "REST APIs",
            "Git",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-cyan-400 font-bold tracking-widest text-sm">
              MY CREATIVE WORK
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <p className="text-gray-400 mt-5">
              Explore my development projects and technical work.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-[#111b31] border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredProjects.map((project, index) => (
              <article
                key={project.name}
                className={`group relative overflow-hidden rounded-2xl bg-[#111b31] border border-white/10 hover:border-transparent hover:-translate-y-3 hover:shadow-2xl ${project.glow} transition-all duration-500`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color} group-hover:h-3 transition-all duration-300`} />

                <div className="p-7">

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs text-gray-500">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                    {project.featured && (
                      <span className="text-xs rounded-full bg-violet-500/20 text-violet-300 px-3 py-1">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className={`mt-6 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <Rocket size={23} />
                  </div>

                  <p className="text-xs text-cyan-400 mt-6 font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold mt-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-400 leading-7 mt-4 min-h-[84px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 group-hover:border-cyan-400/30 transition-colors"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mt-7 pt-5 border-t border-white/10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={17} />
                      GitHub
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={17} />
                        Live Demo
                      </a>
                    )}

                  </div>
                </div>

                <div className={`absolute inset-0 -z-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition-opacity duration-500`} />
              </article>
            ))}

          </div>

          <div className="text-center mt-14">
            <a
              href="https://github.com/Vaishali-kale"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:from-purple-600 hover:to-pink-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <Github size={20} />
              View All GitHub Projects
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 bg-[#0c1427]">
        <div className="max-w-5xl mx-auto">

          <p className="text-cyan-400 font-bold tracking-widest text-sm">
            ACADEMIC BACKGROUND
          </p>

          <h2 className="text-4xl font-black mt-4 mb-12">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-7">

            {[
              {
                degree: "Master of Computer Applications",
                college: "Visvesvaraya Technological University",
                year: "2023 – 2024",
                score: "80.4%",
              },
              {
                degree: "B.Sc Computer Science and Technology",
                college: "Gulbarga University",
                year: "2019 – 2022",
                score: "85%",
              },
            ].map((item) => (
              <div
                key={item.degree}
                className="group rounded-2xl bg-[#111b31] border border-white/10 p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <GraduationCap size={34} className="text-cyan-400 group-hover:scale-125 transition-transform" />

                <h3 className="text-xl font-bold mt-6 group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.college}
                </p>

                <div className="flex justify-between mt-7 pt-5 border-t border-white/10">
                  <span className="text-gray-300 text-sm">{item.year}</span>
                  <span className="text-cyan-400 font-bold">{item.score}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
<section id="certificates" className="py-24 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <Award size={42} className="mx-auto text-cyan-400" />

    <h2 className="text-4xl font-black mt-6">
      Certificates & <span className="text-cyan-400">Achievements</span>
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto leading-8 mt-5">
      My technical learning, training and professional achievements.
    </p>

    <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111b31] p-5 text-left shadow-lg">
      <div className="overflow-hidden rounded-xl bg-white">
        <img
          src="/Node_Certificate.png"
          alt="Node.js Certificate"
          className="w-full max-h-[520px] object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
        <h3 className="text-lg font-bold text-white">
          Node.js Certificate
        </h3>

        <a
          href="/Node_Certificate.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-[#07111f] transition hover:bg-cyan-400"
        >
          View Certificate
        </a>
      </div>
    </div>

     <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111b31] p-5 text-left shadow-lg">
      <div className="overflow-hidden rounded-xl bg-white">
        <img
          src="/web_Certificate.png"
          alt="Web Development Certificate"
          className="w-full max-h-[520px] object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
        <h3 className="text-lg font-bold text-white">
          Web Development Certificate
        </h3>

        <a
          href="/web_Certificate.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-[#07111f] transition hover:bg-cyan-400"
        >
          View Certificate
        </a>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#0c1427]">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-bold tracking-widest text-sm">
            LET'S CONNECT
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-5">
            Let's Build
            <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              Something Great.
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-7 leading-8">
            Looking for software development opportunities in Bengaluru,
            Pune and Hyderabad. I am available to join immediately and excited
            to contribute to impactful projects. Feel free to contact me.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:vaishalikalekale@gmail.com"
              className="flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-purple-600 hover:to-pink-500 hover:scale-105 transition-all duration-300 font-bold"
            >
              <Mail size={19} /> Email Me
            </a>

            <a
              href="tel:+917899116885"
              className="flex items-center gap-3 px-7 py-4 rounded-xl border border-white/20 hover:border-green-400 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
            >
              <Phone size={19} /> Call Me
            </a>

          </div>

          <div className="flex justify-center gap-7 mt-12">
            <a
              href="https://github.com/Vaishali-kale"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition-all"
            >
              <Github size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaishali-v-kale-5052782b0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-all"
            >
              <Linkedin size={25} />
            </a>

            <a
              href="mailto:vaishalikalekale@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-pink-400 hover:scale-125 transition-all"
            >
              <Mail size={25} />
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050914] border-t border-white/10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <a href="#home" className="text-xl font-black">
            VK<span className="text-cyan-400">.</span>
          </a>

          <p className="text-sm text-gray-500">
            © 2026 Vaishali Kale. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Back to top ↑
          </a>

        </div>
      </footer>

    </div>
  );
};

export default Home;
