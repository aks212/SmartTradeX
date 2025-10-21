import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const FloatingSocial = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <a
        href="mailto:team@smarttradex.online"
        className="group relative w-12 h-12 rounded-full bg-zenith-red hover:bg-zenith-gold text-white flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
        aria-label="Email"
      >
        <Mail size={20} />
        <span className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          team@smarttradex.online
        </span>
      </a>
      
      <a
        href="tel:+2348066844096"
        className="group relative w-12 h-12 rounded-full bg-zenith-red hover:bg-zenith-gold text-white flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
        aria-label="Phone"
      >
        <Phone size={20} />
        <span className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          +234 806 684 4096
        </span>
      </a>
      
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-zenith-red hover:bg-zenith-gold text-white flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
        <span className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Follow us
        </span>
      </a>
      
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-zenith-red hover:bg-zenith-gold text-white flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter size={20} />
        <span className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Follow us
        </span>
      </a>
      
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-zenith-red hover:bg-zenith-gold text-white flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook size={20} />
        <span className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Follow us
        </span>
      </a>
    </div>
  );
};

export default FloatingSocial;
