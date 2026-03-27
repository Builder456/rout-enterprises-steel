import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    country: "Saudi Arabia",
    company: "Gulf Petrochemical Industries",
    text: "Rout Enterprises has been our go-to supplier for SS flanges and fasteners. Consistent quality, competitive pricing, and always on time — even for urgent orders.",
    rating: 5,
  },
  {
    name: "Michael Hartmann",
    country: "Germany",
    company: "Hartmann Engineering GmbH",
    text: "We've sourced bright bars and profiles from Rout Enterprises for over 3 years. The material quality meets DIN standards perfectly. Highly reliable partner.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    country: "Nigeria",
    company: "Atlantic Pipeline Solutions",
    text: "From initial inquiry to delivery at Lagos port, the entire process was seamless. Their team understands export documentation thoroughly. Excellent service.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    country: "Brazil",
    company: "SulAço Construções",
    text: "Great range of stainless steel wires and rods. The packaging was export-grade and products arrived in perfect condition. Will order again.",
    rating: 4,
  },
  {
    name: "Nguyen Thi Lan",
    country: "Vietnam",
    company: "Saigon Steel Corp",
    text: "Rout Enterprises delivered custom-spec profiles that matched our requirements exactly. Their technical team was very supportive throughout.",
    rating: 5,
  },
  {
    name: "David Chen",
    country: "Singapore",
    company: "Pacific Marine Engineering",
    text: "We needed ASTM-grade flanges for a shipbuilding project on a tight deadline. Rout Enterprises delivered ahead of schedule with full mill test certificates.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-steel-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(215 15% 72%) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
            Client Feedback
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground uppercase mt-3 tracking-tight">
            Trusted Worldwide
          </h2>
          <div className="w-20 h-1 bg-forge-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-steel/5 border border-steel/15 rounded-lg p-6 sm:p-8 hover:border-forge/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-forge/20 mb-4" />

              <p className="font-body text-steel text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-forge fill-forge" : "text-steel/30"}`}
                  />
                ))}
              </div>

              <div>
                <div className="font-display text-primary-foreground text-sm font-semibold uppercase tracking-wide">
                  {t.name}
                </div>
                <div className="font-body text-steel/70 text-xs mt-0.5">
                  {t.company}
                </div>
                <div className="font-body text-forge text-xs mt-0.5 uppercase tracking-wider">
                  {t.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
