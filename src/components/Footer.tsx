import { SiBehance, SiGithub, SiDribbble } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary mt-20 py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-foreground mb-3" style={{ fontWeight: 400 }}>
          Let's connect!
        </h2>
        <p className="text-muted-foreground mb-8 text-sm font-light max-w-sm mx-auto leading-relaxed">
          Feel free to get in touch for collaborations or to just say hi!
        </p>

        <div className="flex flex-col items-center gap-5">
          <a
            href="mailto:gsaravana.uxdesign@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Mail size={15} />
            <span>gsaravana.uxdesign@gmail.com</span>
          </a>

          <div className="flex items-center gap-2 mt-1">
            <a href="https://github.com/gsaravanakumardev" target="_blank" rel="noreferrer"
               className="p-2.5 border border-border text-foreground hover:text-primary hover:border-primary transition-all" aria-label="GitHub">
              <SiGithub size={17} />
            </a>
            <a href="https://www.linkedin.com/in/saravana-design/" target="_blank" rel="noreferrer"
               className="p-2.5 border border-border text-foreground hover:text-primary hover:border-primary transition-all" aria-label="LinkedIn">
              <FaLinkedin size={17} />
            </a>
            <a href="https://www.behance.net/saravanan_design" target="_blank" rel="noreferrer"
               className="p-2.5 border border-border text-foreground hover:text-primary hover:border-primary transition-all" aria-label="Behance">
              <SiBehance size={17} />
            </a>
            <a href="https://dribbble.com/saravananakumar" target="_blank" rel="noreferrer"
               className="p-2.5 border border-border text-foreground hover:text-primary hover:border-primary transition-all" aria-label="Dribbble">
              <SiDribbble size={17} />
            </a>
          </div>
        </div>

        <p className="mt-14 text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Saravanan. Designed with care.
        </p>
      </div>
    </footer>
  );
}



