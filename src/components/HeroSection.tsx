import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-steel-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-dark via-steel-dark/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Globe className="w-5 h-5 text-forge" />
            <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
              Global Stainless Steel Exporters
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground uppercase leading-[0.95] tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Precision Steel,{" "}
            <span className="text-gradient-steel">Delivered</span>{" "}
            Worldwide
          </h1>

          <p className="font-body text-lg sm:text-xl text-steel max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Rout Enterprises is a trusted exporter of premium stainless steel products — flanges, fasteners, wires, profiles & bright bars — serving industries across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <a href="#products">
              <Button size="lg" className="bg-forge-gradient hover:opacity-90 text-primary-foreground font-display uppercase tracking-wider text-base px-8 py-6">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-steel/40 text-primary-foreground hover:bg-steel/10 font-display uppercase tracking-wider text-base px-8 py-6">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
