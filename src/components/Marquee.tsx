const items = [
  "React",
  "Tailwind CSS",
  "MongoDB",
  "Python",
  "Docker",
  "Machine Learning",
  "Generative AI",
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section className="border-y border-border py-8 overflow-hidden bg-secondary/50">
      <div className="marquee font-display text-3xl md:text-5xl text-foreground/80">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-16">
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
