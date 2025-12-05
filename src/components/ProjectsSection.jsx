import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FoodExpress – Full Stack App",
    description:
      "A complete food delivery system with authentication, menu, cart, and admin features.",
    image: "/projects/food.png", // FIXED
    tags: ["React", "Node.js", "Express", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Vaishali-kale",
  },
  {
    id: 2,
    title: "Hospital Management System – MERN",
    description:
      "Role-based dashboard for doctors, patients, and admins with JWT authentication.",
    image: "/projects/Hospital.png", // FIXED (capital H)
    tags: ["React", "MongoDB", "Node.js", "Express", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/Vaishali-kale",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "Live weather updates with search, auto-location, and dynamic UI.",
    image: "/projects/weather.png", // Already correct
    tags: ["React", "API", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Vaishali-kale",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my real-world projects built using modern
          technologies focusing on performance, UI/UX, and scalability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Vaishali-kale"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
