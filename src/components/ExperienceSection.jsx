
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12">
          My professional journey and development experience.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <BriefcaseBusiness className="text-primary" size={24} />
                <h3 className="text-xl font-bold">
                  Full Stack Developer
                </h3>
              </div>

              <p className="font-medium text-primary">
                BDreamz Global Solutions
              </p>

              <p className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <MapPin size={16} />
                Bengaluru, Karnataka
              </p>
            </div>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays size={16} />
              May 2026 – Present
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Key Responsibilities</h4>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Develop responsive web application interfaces using React.js.
              </li>
              <li>
                Build backend functionality using Node.js and Express.js.
              </li>
              <li>
                Work with MongoDB, MySQL and REST API integration.
              </li>
              <li>
                Implement application features, debug issues and improve
                application functionality.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
