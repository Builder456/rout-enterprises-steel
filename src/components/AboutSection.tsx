import { Shield, Award, Globe, TrendingUp } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "1000+", label: "Products Delivered" },
  { value: "100%", label: "Quality Assured" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-steel-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(215 15% 72% / 0.1) 35px, hsl(215 15% 72% / 0.1) 36px)",
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
              About Rout Enterprises
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground uppercase mt-3 tracking-tight leading-tight">
              Built on Trust,{" "}
              <span className="text-forge">Forged</span> in Quality
            </h2>
            <p className="font-body text-steel text-base sm:text-lg mt-6 leading-relaxed">
              Rout Enterprises is a leading exporter of stainless steel products, committed to delivering superior quality materials to industries worldwide. With decades of expertise, we serve sectors including oil & gas, petrochemical, construction, automotive, and more.
            </p>
            <p className="font-body text-steel text-base sm:text-lg mt-4 leading-relaxed">
              Our rigorous quality control, competitive pricing, and timely delivery have made us a preferred partner for businesses across 50+ countries.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Shield, text: "ISO Certified" },
                { icon: Award, text: "Premium Grades" },
                { icon: Globe, text: "Global Shipping" },
                { icon: TrendingUp, text: "Competitive Pricing" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-steel/10 rounded-md px-4 py-2">
                  <Icon className="w-4 h-4 text-forge" />
                  <span className="font-body text-primary-foreground text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-steel/5 border border-steel/15 rounded-lg p-6 sm:p-8 text-center hover:bg-steel/10 transition-colors duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forge">
                  {stat.value}
                </div>
                <div className="font-body text-steel text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
