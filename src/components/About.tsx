import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <span className="number">00.</span> About_Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground">Cloud & DevOps Engineer</span> based in
            Pune, India, passionate about building reliable, automated, and scalable
            cloud infrastructure.
          </p>
          <p>
            Currently working as a{" "}
            <span className="text-primary">Cloud DevOps Intern at CloudBlitz Technology</span>,
            where I design and deploy AWS infrastructure, implement CI/CD pipelines,
            and automate cloud operations.
          </p>
          <p>
            I believe infrastructure should be treated as code — versioned, tested,
            and deployed with the same rigor as application software.
          </p>
        </div>
        <div className="border border-border p-8 font-mono text-sm space-y-2 text-muted-foreground">
          <p className="text-primary">$ cat about.yml</p>
          <p>---</p>
          <p>name: <span className="text-foreground">Pranav Rajendra Thakare</span></p>
          <p>role: <span className="text-foreground">Cloud & DevOps Engineer</span></p>
          <p>location: <span className="text-foreground">Pune, India</span></p>
          <p>current_org: <span className="text-foreground">CloudBlitz Technology</span></p>
          <p>interests:</p>
          <p>&nbsp;&nbsp;- Cloud Architecture</p>
          <p>&nbsp;&nbsp;- Infrastructure as Code</p>
          <p>&nbsp;&nbsp;- CI/CD Automation</p>
          <p>&nbsp;&nbsp;- Container Orchestration</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
