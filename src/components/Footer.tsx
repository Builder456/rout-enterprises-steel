const Footer = () => {
  return (
    <footer className="bg-steel-dark border-t border-steel/15 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-forge-gradient rounded-md flex items-center justify-center">
            <span className="font-display text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="font-display text-primary-foreground font-semibold tracking-wider uppercase text-sm">
            Rout Enterprises
          </span>
        </div>
        <p className="font-body text-steel text-xs text-center sm:text-right">
          © {new Date().getFullYear()} Rout Enterprises. All rights reserved. Premium Stainless Steel Exporters.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
