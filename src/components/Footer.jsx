import { ArrowUp, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Vaishali Kale. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/vaishali-kale-5052782b0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Vaishali-kale"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
