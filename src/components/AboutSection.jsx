
import React from "react";
import {
  Code2,
  Laptop,
  Database,
  BrainCircuit,
  Rocket,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive, and user-friendly interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Database size={24} />,
      title: "Backend Development",
      description:
        "Developing server-side functionality, REST APIs, authentication, and database operations using Node.js, Express.js, and MongoDB.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "AI & Modern Technologies",
      description:
        "Exploring AI-powered applications, real-time features, and modern technologies to create smarter digital solutions.",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: <Rocket size={24} />,
      title: "Continuous Learning",
      description:
        "Improving problem-solving, programming fundamentals, and development practices while learning new technologies.",
      color: "from-green-500 to-teal-500",
    },
  ];

  const technologies = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080d1b] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Introduction */}
        <div className="mb-16 grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-7 shadow-xl shadow-cyan-950/20 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/50 md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
              <GraduationCap size={30} />
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Passionate About Technology.
              <span className="block text-cyan-400">
                Driven to Build Real-World Solutions.
              </span>
            </h3>

            <p className="mb-4 leading-8 text-gray-300">
              I am an MCA graduate and Full Stack Developer with hands-on
              professional experience in building web applications. I enjoy
              transforming ideas into functional, responsive, and user-friendly
              digital solutions.
            </p>

            <p className="mb-4 leading-8 text-gray-300">
              I have practical experience working with React.js, JavaScript,
              Node.js, Express.js, and MongoDB, including developing interactive
              frontend interfaces, implementing backend functionality,
              integrating REST APIs, and managing database operations.
            </p>

            <p className="leading-8 text-gray-300">
              I am passionate about MERN stack development, AI-powered
              applications, secure authentication systems, and real-time web
              technologies. My goal is to build scalable applications and
              contribute to impactful software projects.
            </p>
          </div>

          {/* Developer visual */}
          <div className="flex justify-center">
            <div className="group relative w-full max-w-md rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-[#111a30] to-purple-500/10 p-8 transition duration-500 hover:border-purple-400/50">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs text-gray-400">
                    developer.js
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm md:text-base">
                  <p className="text-purple-400">const developer = {"{"}</p>
                  <p className="pl-5 text-gray-300">
                    name: <span className="text-green-400">"Vaishali"</span>,
                  </p>
                  <p className="pl-5 text-gray-300">
                    role: <span className="text-green-400">"Full Stack Developer"</span>,
                  </p>
                  <p className="pl-5 text-gray-300">
                    stack: <span className="text-green-400">"MERN"</span>,
                  </p>
                  <p className="pl-5 text-gray-300">
                    passion: <span className="text-green-400">"Building Solutions"</span>,
                  </p>
                  <p className="pl-5 text-gray-300">
                    mindset: <span className="text-green-400">"Always Learning"</span>
                  </p>
                  <p className="text-purple-400">{"};"}</p>
                  <p className="pt-3 text-cyan-400">
                    // Turning ideas into applications.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <Laptop className="text-cyan-400" size={25} />
                  <span className="text-sm text-gray-300">
                    Design. Develop. Learn. Improve.
                  </span>
                  <ArrowUpRight className="ml-auto text-cyan-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            What I <span className="text-cyan-400">Do</span>
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-950/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <h4 className="mb-3 text-xl font-bold transition group-hover:text-cyan-400">
                  {item.title}
                </h4>

                <p className="leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <h3 className="mb-7 text-center text-2xl font-bold">
            Technologies I <span className="text-cyan-400">Work With</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="cursor-default rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/15 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
