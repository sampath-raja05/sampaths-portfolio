const groups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "PostgreSQL", "PostGIS", "Prisma", "Supabase"],
  },
  {
    label: "Tools",
    items: ["Docker", "GitHub Actions", "Leaflet", "Clerk"],
  },
  {
    label: "AI / ML",
    items: ["Generative AI", "Prompt Engineering", "UI/UX", "Machine Learning"],
  },
  {
    label: "Certifications",
    items: ["AWS Generative AI", "Oracle Cloud Infrastructure", "Web Design"],
  },
];

const experience = [
  {
    company: "Sapphire Webs",
    role: "Web & UI/UX Designer",
    when: "Dec 2024 - Apr 2025",
    place: "Offline",
  },
  {
    company: "Skillable",
    role: "Generative AI Intern",
    when: "Jul 2024 - Sep 2024",
    place: "Online",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        {/* Skills */}
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3 reveal">
            <span className="w-8 h-px bg-accent" /> Toolkit
          </div>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1] text-foreground reveal">
            What I work <em className="text-accent not-italic">with</em>.
          </h2>

          <div className="mt-14 space-y-6">
            {groups.map((g, i) => (
              <div
                key={g.label}
                className={`grid grid-cols-12 gap-4 py-5 border-t border-border items-baseline reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="col-span-4 text-sm uppercase tracking-wider text-muted-foreground">
                  {g.label}
                </div>
                <div className="col-span-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-2xl md:text-3xl text-foreground">
                  {g.items.map((it, idx) => (
                    <span key={it} className="hover:text-accent transition-colors duration-500">
                      {it}
                      {idx < g.items.length - 1 && (
                        <span className="text-muted-foreground/40 ml-5">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="md:col-span-5 md:pl-8 md:border-l border-border">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3 reveal">
            <span className="w-8 h-px bg-accent" /> Experience
          </div>
          <h3 className="font-display text-4xl mt-6 text-foreground reveal">
            A short timeline.
          </h3>

          <ol className="mt-12 space-y-10 relative">
            {experience.map((e) => (
              <li key={e.company} className="relative pl-6 reveal">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {e.when} · {e.place}
                </div>
                <div className="font-display text-2xl text-foreground mt-1">
                  {e.role}
                </div>
                <div className="text-muted-foreground mt-1">{e.company}</div>
              </li>
            ))}
          </ol>

          <div className="mt-14 p-6 rounded-lg bg-secondary/60 reveal">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </div>
            <div className="font-display text-xl text-foreground mt-2 leading-snug">
              B.Tech, Artificial Intelligence & Data Science - CGPA 8/10
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              SNS College of Engineering, Coimbatore · 2022 - 2026
            </div>
            <div className="text-muted-foreground text-sm mt-4">
              HSC, Science - 74.0% · 2022
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              SSLC - 84.6% · 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
