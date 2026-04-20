import { useReveal } from "@/hooks/use-reveal";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  useReveal();

  return (
    <>
      {/* SEO */}
      <title>Sampath Raja A — Full-Stack Developer & Data Analyst Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Sampath Raja A — a full-stack developer and data analyst building React, Node.js and AI-powered web applications."
      />
      <link rel="canonical" href="/" />

      <CustomCursor />
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
