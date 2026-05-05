import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-10 overflow-hidden grain"
    >
      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute top-1/3 right-[8%] w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-[55%] left-[10%] w-56 h-56 rounded-full bg-secondary blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Tag line top */}
        <div className="absolute -top-[40vh] left-0 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
          <span className="w-8 h-px bg-foreground/40" />
          Portfolio · 2026
        </div>

        <div className="space-y-6">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mask-word">
            <span style={{ animationDelay: "0.1s" }}>
              Software Engineer · Full-Stack Developer · AI & Data Science
            </span>
          </p>

          <h1 className="font-display font-light text-[14vw] md:text-[10rem] leading-[0.95] tracking-tighter text-foreground">
            <span className="mask-word"><span style={{ animationDelay: "0.2s" }}>Sampath</span></span>{" "}
            <span className="mask-word"><span style={{ animationDelay: "0.35s" }}>Raja</span></span>
            <span className="text-accent">.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 pt-8 items-end">
            <p className="font-display italic text-2xl md:text-3xl text-foreground/80 max-w-lg leading-snug reveal">
              Building scalable full-stack products where{" "}
              <span className="text-accent">AI, data and clean code</span> meet real-world problems.
            </p>

            <div className="flex md:justify-end items-center gap-6 reveal reveal-delay-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest"
              >
                <span className="w-12 h-12 rounded-full border border-foreground/80 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-500">
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
                View projects
              </a>
            </div>
          </div>
        </div>

        {/* bottom meta */}
        <div className="mt-24 flex items-end justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground reveal reveal-delay-3">
          <div>
            <div className="text-foreground/50">Based in</div>
            <div className="text-foreground mt-1">Coimbatore, IN</div>
          </div>
          <div className="hidden md:block">
            <div className="text-foreground/50">Graduate</div>
            <div className="text-foreground mt-1">B.Tech AI & DS · CGPA 8/10</div>
          </div>
          <div>
            <div className="text-foreground/50">Status</div>
            <div className="text-foreground mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
              Open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
