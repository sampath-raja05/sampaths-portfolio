import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Propspace AI",
    year: "2026",
    role: "Full-stack · AI Analytics",
    href: "https://prop-space-ai-w8t9.vercel.app/",
    description:
      "AI-powered real estate analytics platform with PostGIS spatial search, ML valuation, live market overlays and investment insight dashboards.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL/PostGIS", "Tailwind CSS", "Leaflet"],
  },
  {
    n: "02",
    title: "HireGenius",
    year: "2026",
    role: "Full-stack · AI Interviews",
    href: "https://hire-genius-five.vercel.app/",
    description:
      "AI interview platform with interviewer and interviewee flows, smart onboarding, scheduling, credit-based payments, video sessions and feedback.",
    stack: ["Next.js", "Clerk", "Prisma", "Supabase", "Tailwind CSS"],
  },
{
    n: "03",
    title: "TrackSpend AI",
    year: "2026",
    role: "Full Stack",
    href: "https://track-spend-ai-sandy.vercel.app/",
    description:
      "Subscription audit tool with AI-generated executive summaries, automated email delivery, and shareable audit links.",
    stack: ["Next.js", "Prisma", "Supabase", "Anthropic Claude API", "Resend"],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 md:py-44 px-6 md:px-10 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
              <span className="w-8 h-px bg-accent" /> Selected Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] text-foreground">
              Things I've <em className="text-accent not-italic">built</em>.
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">
            ({String(projects.length).padStart(2, "0")}) projects
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((p) => {
            const ProjectTag = p.href ? "a" : "div";

            return (
              <ProjectTag
                href={p.href}
                key={p.n}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noreferrer" : undefined}
                className="group block py-10 md:py-14 relative overflow-hidden lift"
              >
                <div className="grid md:grid-cols-12 gap-6 items-baseline relative z-10">
                  <div className="md:col-span-1 text-sm text-muted-foreground">
                    {p.n}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-4xl md:text-6xl text-foreground tracking-tight transition-transform duration-700 group-hover:translate-x-2">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4 text-muted-foreground text-base leading-relaxed max-w-md">
                    {p.description}
                  </div>
                  <div className="md:col-span-2 flex items-start justify-between md:justify-end gap-4">
                    <div className="text-sm text-muted-foreground">
                      <div>{p.year}</div>
                      <div className="text-foreground/70 mt-1">{p.role}</div>
                    </div>
                    <span className="w-12 h-12 shrink-0 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                    </span>
                  </div>
                </div>

                <div className="mt-6 md:ml-[8.33%] flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-secondary/40 -z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </ProjectTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
