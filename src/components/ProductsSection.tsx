import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";

const products = [
  {
    name: "Flanges",
    description: "Slip-on, weld neck, blind, socket weld & lap joint flanges in all grades and sizes.",
    image: flangesImg,
  },
  {
    name: "Fasteners",
    description: "High-strength bolts, nuts, screws, studs & washers for critical applications.",
    image: fastenersImg,
  },
  {
    name: "Wires",
    description: "Cold-drawn & bright annealed wires for industrial, medical & construction use.",
    image: wiresImg,
  },
  {
    name: "Profiles",
    description: "Custom & standard profiles — angles, channels, T-bars & structural sections.",
    image: profilesImg,
  },
  {
    name: "Bright Bars",
    description: "Precision-ground, polished bright bars in round, flat, square & hex shapes.",
    image: brightBarsImg,
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
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
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
