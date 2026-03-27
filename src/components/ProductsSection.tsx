import { Download } from "lucide-react";
import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";

const products = [
  {
    name: "Flanges",
    description: "Slip-on, weld neck, blind, socket weld & lap joint flanges in all grades and sizes. ASME B16.5, B16.47, DIN standards.",
    image: flangesImg,
    catalogue: "/catalogues/Flanges.pdf",
  },
  {
    name: "Fasteners",
    description: "High-strength bolts, nuts, screws, studs & washers for critical applications.",
    image: fastenersImg,
    catalogue: null,
  },
  {
    name: "Wires & Wire Rods",
    description: "Wire rods (5.5–39.5mm) & wires (0.09–15mm) — MIG, TIG, spring, rope, cold heading & more.",
    image: wiresImg,
    catalogue: "/catalogues/Wires.pdf",
  },
  {
    name: "Profiles & Flat Bars",
    description: "Drawn flat bars, angles, channels, T-bars in 304, 316, 321 & other grades.",
    image: profilesImg,
    catalogue: "/catalogues/Profiles.pdf",
  },
  {
    name: "Bright Bars",
    description: "Round, hex, square & forged bars (2–600mm). Cold drawn, peeled, polished & centreless ground.",
    image: brightBarsImg,
    catalogue: "/catalogues/Bright_bars.pdf",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
            What We Export
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase mt-3 tracking-tight">
            Our Product Range
          </h2>
          <div className="w-20 h-1 bg-forge-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-lg shadow-[var(--shadow-steel)] bg-card border border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-500 ${
                idx >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={`Stainless steel ${product.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground uppercase tracking-wide mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                {product.catalogue && (
                  <a
                    href={product.catalogue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-body font-semibold text-forge hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4" />
                    Download Catalogue
                  </a>
                )}
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forge-gradient flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground font-display text-xs font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
