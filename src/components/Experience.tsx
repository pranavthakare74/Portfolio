import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <span className="number">03.</span> Runtime_Log
      </h2>

      <div className="border border-border p-8 md:p-12 glow-hover">
        <div className="flex items-start gap-5">
          <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
            <Briefcase size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Cloud DevOps Intern</h3>
            <p className="text-primary font-mono text-sm mb-1">CloudBlitz Technology</p>
            <p className="text-muted-foreground text-sm mb-5">Pune, India</p>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                Designed and deployed AWS infrastructure including VPC, EC2, S3, and Auto Scaling solutions
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                Implemented CI/CD pipelines using Jenkins for automated build, test, and deployment workflows
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                Containerized applications with Docker and managed orchestration via Kubernetes
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                Automated infrastructure provisioning using Terraform and Bash scripting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience;
