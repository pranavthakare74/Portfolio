import { motion } from "framer-motion";

const skills = [
  {
    category: "Cloud",
    items: ["AWS EC2", "VPC", "S3", "Load Balancer", "Auto Scaling"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    category: "Scripting",
    items: ["Python", "Bash", "Git", "GitHub"],
  },
  {
    category: "Monitoring",
    items: ["Datadog", "CloudWatch"],
  },
  {
    category: "Concepts",
    items: ["CI/CD", "Infrastructure as Code", "Automation", "Networking"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => (
  <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <span className="number">01.</span> Core_Capabilities
      </h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            className="p-8 bg-background hover:bg-primary/5 transition-colors group"
          >
            <h3 className="font-mono text-primary mb-6 text-sm tracking-wider uppercase">
              {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((s) => (
                <li
                  key={s}
                  className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2.5 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-primary/40 group-hover:bg-primary rounded-full transition-colors" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
