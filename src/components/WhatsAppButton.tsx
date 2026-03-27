import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918446055949?text=Hello%20Rout%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20stainless%20steel%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
