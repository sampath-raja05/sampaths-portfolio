import { ArrowUpRight, Mail, Phone, Github, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Sampath-raja05", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/Sampath-raja", icon: Linkedin },
  { label: "Email", href: "mailto:sampathraja228@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+916379110411", icon: Phone },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 px-6 md:px-10 bg-foreground text-background overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-xs uppercase tracking-[0.3em] text-background/60 flex items-center gap-3 reveal">
          <span className="w-8 h-px bg-accent" /> Contact
        </div>

        <h2 className="font-display font-light text-[12vw] md:text-[8rem] leading-[0.95] tracking-tighter mt-6 reveal">
          Let's make
          <br />
          <em className="text-accent not-italic">something good</em>.
        </h2>

        <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 reveal reveal-delay-1">
            <a
              href="mailto:sampathraja228@gmail.com"
              className="group inline-flex items-center gap-4 font-display text-3xl md:text-5xl"
            >
              sampathraja228@gmail.com
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-accent group-hover:rotate-45 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <p className="mt-6 text-background/60 max-w-md leading-relaxed">
              Available for software engineering, full-stack development, AI,
              machine learning and data-focused opportunities.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-background/20 rounded-lg px-5 py-5 hover:bg-background hover:text-foreground transition-all duration-500"
              >
                <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-28 pt-8 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.25em] text-background/50">
          <div>© 2026 Sampath Raja A — All rights reserved</div>
          <div>Designed & built in Coimbatore</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
