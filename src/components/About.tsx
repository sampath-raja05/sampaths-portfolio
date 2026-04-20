const About = () => {
  return (
    <section id="about" className="py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> About
          </div>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1] text-foreground">
            A quiet maker of <em className="text-accent not-italic">thoughtful</em> software.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground reveal">
            I'm a detail-oriented engineer and data analyst building full-stack
            web applications with React, Node.js and MongoDB - and exploring
            machine learning on real-world problems.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl reveal reveal-delay-1">
            I completed my B.Tech in Artificial Intelligence and Data Science
            at SNS College of Engineering. Passionate about clean code,
            considered design, and shipping reliable software with great teams.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border reveal reveal-delay-2">
            <div>
              <div className="font-display text-5xl text-accent">3+</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Featured Projects
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">2</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Internships completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
