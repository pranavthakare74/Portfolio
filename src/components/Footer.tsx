const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-mono">
        © {new Date().getFullYear()} Pranav Thakare
      </span>
      <span className="font-mono text-xs">
        Built with React + Tailwind CSS
      </span>
    </div>
  </footer>
);

export default Footer;
