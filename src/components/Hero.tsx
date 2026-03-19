import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Cloud & DevOps Engineer",
  "AWS Specialist",
  "CI/CD Automation",
  "Infrastructure as Code",
];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="border-r-2 ml-0.5 animate-cursor-blink">&nbsp;</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-svh flex flex-col justify-center px-6 max-w-7xl mx-auto relative">
      {/* Status indicator */}
      <div className="absolute top-28 right-6 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-blink" />
        <span className="font-mono text-xs text-muted-foreground">System: Online</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="font-mono text-primary mb-4 block tracking-widest uppercase text-sm">
          // Status: Ready to Deploy
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[0.95]">
          Pranav <br />
          <span className="gradient-text">Thakare</span>
        </h1>

        <div className="text-lg md:text-xl mb-3 h-8">
          <TypingText />
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-[55ch] mb-10 leading-relaxed">
          Building scalable cloud infrastructure and automation solutions.
          Specializing in <span className="text-foreground">AWS Architecture</span> and{" "}
          <span className="text-foreground">CI/CD Automation</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Initialize_Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
