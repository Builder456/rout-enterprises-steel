import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-steel-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-forge text-sm uppercase tracking-[0.25em] font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground uppercase mt-3 tracking-tight">
            Request a Quote
          </h2>
          <div className="w-20 h-1 bg-forge-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-steel/5 border border-steel/20 text-primary-foreground font-body placeholder:text-steel/50 focus:outline-none focus:border-forge transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-steel/5 border border-steel/20 text-primary-foreground font-body placeholder:text-steel/50 focus:outline-none focus:border-forge transition-colors"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-steel/5 border border-steel/20 text-primary-foreground font-body placeholder:text-steel/50 focus:outline-none focus:border-forge transition-colors"
              />
              <textarea
                placeholder="Tell us about your requirements — product type, grade, size, quantity..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-steel/5 border border-steel/20 text-primary-foreground font-body placeholder:text-steel/50 focus:outline-none focus:border-forge transition-colors resize-none"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto bg-forge-gradient hover:opacity-90 text-primary-foreground font-display uppercase tracking-wider text-base px-10 py-6">
                Send Inquiry
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-forge/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-forge" />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground uppercase tracking-wide text-sm mb-1">Office Address</h4>
                <p className="font-body text-steel text-sm leading-relaxed">
                  102/A-Wing, Saipooja Apt,<br />
                  Trivedi Nagar, Saravali,<br />
                  Boisar — 401501, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-forge/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-forge" />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground uppercase tracking-wide text-sm mb-1">Phone</h4>
                <p className="font-body text-steel text-sm">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-forge/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-forge" />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground uppercase tracking-wide text-sm mb-1">Email</h4>
                <p className="font-body text-steel text-sm">info@routenterprises.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
