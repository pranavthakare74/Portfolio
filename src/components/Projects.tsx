import { motion } from "framer-motion";
import { Terminal, Network, Server } from "lucide-react";

const projects = [
  {
    title: "VPC Peering & NAT Gateway",
    desc: "Architected secure multi-VPC environments with isolated private subnets and enabled internet access via NAT Gateway.",
    tags: ["AWS", "VPC", "Networking", "Security"],
    icon: Network,
    version: "v1.2.0",
  },
  {
    title: "Application Load Balancer",
    desc: "Configured Application Load Balancer with EC2 target groups, health checks, and path-based routing.",
    tags: ["AWS", "ALB", "EC2", "High Availability"],
    icon: Server,
    version: "v2.0.1",
  },
  {
    title: "Auto Scaling Infrastructure",
    desc: "Implemented Auto Scaling Group with CPU-based dynamic scaling policies for cost-optimized compute.",
    tags: ["AWS", "Auto Scaling", "CloudWatch", "IaC"],
    icon: Terminal,
    version: "v1.0.4",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <span className="number">02.</span> Deployment_History
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass-card glow-hover p-8 group cursor-default flex flex-col"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <p.icon size={22} />
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {p.version}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
