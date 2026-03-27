import { FileCheck, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "GST Registration Certificate",
    file: "/certificates/GST.pdf",
    description: "Goods & Services Tax registration — verified & active.",
  },
  {
    name: "PAN Card",
    file: "/certificates/PAN.pdf",
    description: "Permanent Account Number — government-issued identity.",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
            Trust & Compliance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase mt-3 tracking-tight">
            Our Certificates
          </h2>
          <div className="w-20 h-1 bg-forge-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-forge/40 hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-forge/10 flex items-center justify-center group-hover:bg-forge-gradient transition-colors duration-300">
                <FileCheck className="w-6 h-6 text-forge group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-foreground uppercase tracking-wide mb-1 flex items-center gap-2">
                  {cert.name}
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
