import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* 1. Branding & Status */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter uppercase text-primary italic">
              Ahmed Yasser
            </h2>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                System_Status:{" "}
                <span className="text-foreground">Active_For_Hire</span>
              </span>
            </div>
          </div>

          {/* 2. Massive Navigation Links */}
          <nav>
            <ul className="flex flex-nowrap gap-2 sm:flex-wrap sm:gap-x-10 gap-y-4 font-bold text:lg sm:text-xl tracking-tighter uppercase">
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    {item}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Icon-Based Socials */}
          <div className="flex justify-between md:justify-center w-full sm:w-auto gap-4">
            <a
              href="https://github.com/AhmedYasser35"
              target="_blank"
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-yasser-78a956358/"
              target="_blank"
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ahmedyasserabds@gmail.com"
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
            © 2026 // ALL_RIGHTS_RESERVED
          </p>

          <div className="flex items-center gap-6 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            <p>
              Built with <span className="text-foreground">Next.js 14</span>
            </p>
            <div className="h-1 w-1 bg-white/20 rounded-full" />
            <p>
              Deployed on <span className="text-foreground">Vercel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
