const About = () => {
  return (
    <section id="about" className="py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> About
          </div>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1] text-foreground">
            A practical builder of <em className="text-accent not-italic">AI-ready</em> software.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground reveal">
            I'm a B.Tech graduate in Artificial Intelligence and Data Science
            with hands-on experience across full-stack development, generative
            AI, and machine learning.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl reveal reveal-delay-1">
            I build scalable end-to-end applications with React.js, Next.js,
            FastAPI, PostgreSQL, and modern UI systems. My work spans real
            estate analytics, AI interview workflows, weather applications, and
            client-facing responsive websites.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border reveal reveal-delay-2">
            <div>
              <div className="font-display text-5xl text-accent">3+</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Client Websites
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">2</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Internships
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
