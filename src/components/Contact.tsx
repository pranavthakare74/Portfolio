import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pranavthakare74",
    display: "pranavthakare74",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pranav-thakare",
    display: "Pranav Thakare",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:pranavthakare74@gmail.com",
    display: "pranavthakare74@gmail.com",
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="section-heading justify-center">
        <span className="number">04.</span> Initialize_Contact
      </h2>

      <p className="text-muted-foreground max-w-[50ch] mx-auto mb-12 leading-relaxed">
        Open to Cloud & DevOps opportunities. Let's build resilient infrastructure together.
      </p>

      <div className="grid sm:grid-cols-3 gap-px bg-border max-w-3xl mx-auto mb-12">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-background hover:bg-primary/5 transition-colors group flex flex-col items-center gap-3"
          >
            <link.icon size={24} className="text-primary" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              {link.label}
            </span>
            <span className="text-sm text-foreground group-hover:text-primary transition-colors">
              {link.display}
            </span>
          </a>
        ))}
      </div>

      <a href="mailto:pranavthakare74@gmail.com" className="btn-primary inline-block">
        Send_Message
      </a>
    </motion.div>
  </section>
);

export default Contact;
