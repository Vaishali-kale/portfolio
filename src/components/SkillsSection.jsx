import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 60, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 65, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 60, category: "backend" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "MongoDB", level: 65, category: "database" },
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "Postman", level: 50, category: "tools" },
  { name: "OOP Concepts", level: 80, category: "concepts" },
  { name: "JWT Authentication", level: 60, category: "concepts" },
];

const categories = ["all", "frontend", "backend", "database", "tools", "concepts"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills
    .filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    .sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-2 rounded-full transition-all duration-700 ease-out",
                    skill.level >= 75
                      ? "bg-green-500"
                      : skill.level >= 50
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  )}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
