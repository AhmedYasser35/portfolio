import Image from "next/image";
import ecommerce from '../../assets/e-commerce.jpg'
import games from '../../assets/games.jpg'
import food from '../../assets/food.jpg'
import Contact from "./_components/contact/page";



export default function Home() {
  return (
    <>
      <section id="home">
        <div className="min-h-[70vh] w-full flex flex-col justify-center items-center bg-background relative overflow-hidden">
          {/* Subtle Background Glow - Makes it feel premium */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 px-6">
            {/* Small Tagline */}
            <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-3 duration-1000">
              Frontend Engineer // AI & Security Student
            </span>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-2">
              Hi, I am
            </h1>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="text-foreground/20 font-light">{"<"}</span>
              Ahmed Yasser
              <span className="text-foreground/20 font-light">{" />"}</span>
            </h1>

            {/* Short Subtext - This "Sells" your value */}
            <p className="mt-8 max-w-lg text-muted-foreground text-lg md:text-xl leading-relaxed">
              Building{" "}
              <span className="text-foreground font-medium">
                secure, type-safe
              </span>{" "}
              web applications with a focus on high-performance React
              architecture.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <button className="border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary text-foreground px-8 py-3 rounded-full font-bold transition-all">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            // IDENTITY_MODULE
          </h2>
          <h3 className="text-4xl font-bold text-foreground">
            Background & Expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: The Narrative */}
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a{" "}
              <span className="text-foreground font-medium ">
                Cybersecurity and AI student
              </span>{" "}
              with a deep passion for Frontend Engineering. I bridge the gap
              between complex backend security and intuitive, high-performance
              user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to build web applications that are not only visually
              stunning but also built on{" "}
              <span className="text-foreground">
                secure, type-safe foundations
              </span>
              . I treat every project as a piece of engineering, focusing on
              clean code, modular architecture, and seamless deployments.
            </p>

            {/* College Info as a simple tag */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg">
                <span className="text-sm font-medium text-primary/90 font-mono uppercase tracking-tight">
                  Faculty of Artificial Intelligence (Cybersecurity)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Toolbelt */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Development Category */}
            <div className="p-6 bg-surface border border-white/5 rounded-2xl">
              <h4 className="font-mono text-center text-xl text-primary uppercase tracking-widest mb-4">
                Core_Development
              </h4>
              <ul className="space-y-2 text-lg text-foreground/80 font-medium">
                <li className="mb-6">• React / Next.js</li>
                <li className="mb-6">• TypeScript</li>
                <li className="mb-6">• JavaScript (ES6+)</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            {/* Workflow Category */}
            <div className="p-6 bg-surface border border-white/5 rounded-2xl">
              <h4 className="font-mono text-center text-xl text-primary uppercase tracking-widest mb-4">
                Infrastructure
              </h4>
              <ul className="space-y-2 text-lg text-foreground/80 font-medium">
                <li className="mb-6">• Git / GitHub</li>
                <li className="mb-6">• Vercel Deployment</li>
                <li className="mb-6">• Linux Environments</li>
                <li>• PostCSS / Build Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-6">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase">
            // PROJECT_REGISTRY
          </h2>
          <h3 className="text-4xl font-bold text-foreground">
            Featured Deployments
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. E-Commerce */}
          <div className="group bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
              {/* The Image inside the gradient div */}
              <div className="absolute inset-0 z-10 bg-linear-to-t from-surface via-transparent to-transparent" />
              <Image
                src={ecommerce}
                alt="ecommerce"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-bold text-foreground">
                  E-Commerce Engine
                </h4>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  SECURE_BUILD
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                Full-stack commerce platform with encrypted session handling and
                Zod schema validation.
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://e-commerce-seven-amber-28.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
                >
                  <span className="text-lg">🌐</span> LIVE_DEMO
                </a>
                <a
                  href="https://github.com/AhmedYasser35/e-commerce"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg">📁</span> SOURCE_CODE
                </a>
              </div>
            </div>
          </div>

          {/* 2. Recipe API */}
          <div className="group bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-surface via-transparent to-transparent" />
              <Image
                src={food}
                alt="food"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-bold text-foreground">
                  Food Recipe
                </h4>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  SECURE_BUILD
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                Advanced ingredient discovery tool with optimized Tailwind
                layouts and async data fetching.
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://recipe-nu-hazel.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
                >
                  <span className="text-lg">🌐</span> LIVE_DEMO
                </a>
                <a
                  href="https://github.com/AhmedYasser35/Recipe"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg">📁</span> SOURCE_CODE
                </a>
              </div>
            </div>
          </div>

          {/* 3. Game Review */}
          <div className="group bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-surface via-transparent to-transparent" />
              <Image
                src={games}
                alt="games"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-bold text-foreground">
                  Games Reviews
                </h4>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  SECURE_BUILD
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                A high-performance gaming database with dynamic route rendering
                and external store linking.
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://ahmedyasser35.github.io/game-reviews/"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
                >
                  <span className="text-lg">🌐</span> LIVE_DEMO
                </a>
                <a
                  href="https://github.com/AhmedYasser35/game-reviews"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg">📁</span> SOURCE_CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-6">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase">
            // COMMUNICATIONS_LINK
          </h2>
          <h3 className="text-4xl font-bold text-foreground">Get In Touch</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Let's build something secure.
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm currently looking for new opportunities and collaborations.
                Whether you have a question or just want to say hi, my inbox is
                always open.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:ahmedyasserabds@gmail.com"
                className="group flex items-center gap-4 p-4 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    Email_Address
                  </p>
                  <p className="text-foreground font-medium">
                    ahmedyassserabds@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmed-yasser-78a956358/"
                target="_blank"
                className="group flex items-center gap-4 p-4 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    Professional_Network
                  </p>
                  <p className="text-foreground font-medium ">
                    linkedin.com/in/ahmedyasser
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Right Side: The Secure Form */}
          <Contact />
        </div>
      </section>
    </>
  );
}
