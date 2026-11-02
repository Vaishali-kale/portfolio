
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Brain,
  Database,
  Wrench,
  BriefcaseBusiness,
  Terminal,
  CheckCircle2,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "programming", label: "Programming" },
  { id: "professional", label: "Professional" },
];

const skills = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    level: "Strong foundation",
    detail: "Semantic HTML, forms, accessibility and page structure.",
    icon: Code2,
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Working knowledge",
    detail: "Responsive layouts, Flexbox, Grid, animations and transitions.",
    icon: Code2,
  },
  {
    name: "JavaScript ES6+",
    category: "frontend",
    level: "Working knowledge",
    detail: "Functions, arrays, objects, promises, async/await and DOM.",
    icon: Code2,
  },
  {
    name: "React.js",
    category: "frontend",
    level: "Project experience",
    detail: "Components, props, hooks, routing, Context API and state management.",
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Working knowledge",
    detail: "Utility-first styling, responsive design and reusable UI.",
    icon: Code2,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Project experience",
    detail: "Server-side JavaScript, modules, npm and asynchronous operations.",
    icon: Terminal,
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Project experience",
    detail: "REST APIs, routes, middleware, controllers and error handling.",
    icon: Terminal,
  },
  {
    name: "REST API Development",
    category: "backend",
    level: "Project experience",
    detail: "CRUD operations, HTTP methods, status codes and API integration.",
    icon: Terminal,
  },
  {
    name: "JWT Authentication",
    category: "backend",
    level: "Working knowledge",
    detail: "Token-based authentication and protected routes.",
    icon: Terminal,
  },
  {
    name: "RBAC",
    category: "backend",
    level: "Working knowledge",
    detail: "Role-based access control and authorization.",
    icon: Terminal,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    level: "Project experience",
    detail: "Collections, documents, CRUD operations and Mongoose.",
    icon: Database,
  },
  {
    name: "MySQL",
    category: "database",
    level: "Working knowledge",
    detail: "SQL queries, joins, relationships and database operations.",
    icon: Database,
  },

  // Programming, DSA and OOP
  {
    name: "Data Structures",
    category: "programming",
    level: "Fundamentals",
    detail: "Arrays, strings, linked lists, stacks, queues and hash maps.",
    icon: Brain,
  },
  {
    name: "Algorithms",
    category: "programming",
    level: "Fundamentals",
    detail: "Searching, sorting, recursion and basic algorithm analysis.",
    icon: Brain,
  },
  {
    name: "Problem Solving",
    category: "programming",
    level: "Practicing",
    detail: "Breaking problems into steps and writing logical solutions.",
    icon: Brain,
  },
  {
    name: "OOP Concepts",
    category: "programming",
    level: "Fundamentals",
    detail: "Encapsulation, inheritance, polymorphism and abstraction.",
    icon: Brain,
  },
  {
    name: "Programming Basics",
    category: "programming",
    level: "Foundation",
    detail: "Variables, data types, loops, conditions, functions and operators.",
    icon: Brain,
  },
  {
    name: "Time & Space Complexity",
    category: "programming",
    level: "Fundamentals",
    detail: "Understanding Big O notation and basic complexity analysis.",
    icon: Brain,
  },

  // Professional skills
  {
    name: "Git & GitHub",
    category: "professional",
    level: "Working knowledge",
    detail: "Version control, commits, branches and repository management.",
    icon: Wrench,
  },
  {
    name: "Postman",
    category: "professional",
    level: "Working knowledge",
    detail: "Testing APIs, requests, responses and status codes.",
    icon: Wrench,
  },
  {
    name: "Debugging",
    category: "professional",
    level: "Project experience",
    detail: "Identifying errors, checking logs and fixing application issues.",
    icon: Wrench,
  },
  {
    name: "Communication",
    category: "professional",
    level: "Professional skill",
    detail: "Explaining technical work and collaborating with team members.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Team Collaboration",
    category: "professional",
    level: "Professional skill",
    detail: "Working with others, sharing updates and coordinating tasks.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Continuous Learning",
    category: "professional",
    level: "Ongoing",
    detail: "Learning new technologies and improving development skills.",
    icon: BriefcaseBusiness,
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative py-24 px-4 bg-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold tracking-[0.25em] uppercase text-sm mb-3">
            My Technical Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Skills & <span className="text-primary">Technologies</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies, programming fundamentals and professional skills
            I use and continue to develop through projects and practical learning.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium border",
                "transition-all duration-300 hover:-translate-y-1",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                  : "bg-card border-border text-foreground hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/20"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  "border border-border bg-card p-6",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-2 hover:border-primary",
                  "hover:shadow-xl hover:shadow-primary/15"
                )}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <Icon size={24} />
                    </div>

                    <CheckCircle2
                      size={19}
                      className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-primary font-medium mb-3">
                    {skill.level}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Learning note */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">
              Always learning.
            </span>{" "}
            Improving my problem-solving abilities and full-stack development skills.
          </p>
        </div>
      </div>
    </section>
  );
};
