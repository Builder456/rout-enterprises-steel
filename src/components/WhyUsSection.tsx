import { CheckCircle, Truck, Microscope, Handshake, Clock, Package } from "lucide-react";

const features = [
  { icon: Microscope, title: "Rigorous Quality Control", desc: "Every product undergoes strict testing to meet international standards including ASTM, ASME, and DIN." },
  { icon: Truck, title: "On-Time Global Delivery", desc: "Efficient logistics ensure your orders reach any port worldwide within committed timelines." },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Long-standing relationships with mills and suppliers guarantee consistent quality and availability." },
  { icon: CheckCircle, title: "Custom Specifications", desc: "We accommodate custom sizes, grades, and finishes tailored to your project requirements." },
  { icon: Clock, title: "Quick Turnaround", desc: "Ready stock and streamlined processes mean faster order fulfillment for urgent requirements." },
  { icon: Package, title: "Secure Packaging", desc: "Export-grade packaging with proper markings ensures products arrive in perfect condition." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
            Our Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase mt-3 tracking-tight">
            Why Choose Rout Enterprises
          </h2>
          <div className="w-20 h-1 bg-forge-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-forge/40 hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-forge/10 flex items-center justify-center mb-5 group-hover:bg-forge-gradient transition-colors duration-300">
                <Icon className="w-6 h-6 text-forge group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground uppercase tracking-wide mb-3">
                {title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
