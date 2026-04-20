import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-4 backdrop-blur-md bg-background/70 border-b border-border/60"
          : "py-7 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-foreground">
          sampath<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-accent mr-1.5 text-xs">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-foreground/80 px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Let's talk
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
