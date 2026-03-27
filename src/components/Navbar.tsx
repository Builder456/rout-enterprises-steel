import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-steel-dark/95 backdrop-blur-md border-b border-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forge-gradient rounded-md flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-lg">R</span>
            </div>
            <div>
              <span className="font-display text-primary-foreground font-semibold text-lg tracking-wider uppercase">
                Rout Enterprises
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-steel font-body text-sm tracking-wide uppercase hover:text-primary-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-forge-gradient hover:opacity-90 text-primary-foreground font-display uppercase tracking-wider text-sm px-6">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-steel font-body text-sm tracking-wide uppercase hover:text-primary-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-forge-gradient hover:opacity-90 text-primary-foreground font-display uppercase tracking-wider text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
