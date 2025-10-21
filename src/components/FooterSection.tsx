import { Mail, Phone, MapPin, Globe } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold mb-4 text-accent">About</h3>
            <p className="text-white/80 leading-relaxed">
              SmartTradeX is an initiative of Nexus X Industries Ltd, in partnership with Zenith Bank, designed to simplify African trade and financing through innovation and collaboration.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Ecosystem
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="mailto:team@smarttradex.online" className="text-white/80 hover:text-accent transition-colors">
                  team@smarttradex.online
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="tel:+2348066844096" className="text-white/80 hover:text-accent transition-colors">
                  +234 806 684 4096
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/80">Kano, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="https://www.smarttradex.online" className="text-white/80 hover:text-accent transition-colors">
                  www.smarttradex.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px gradient-gold mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logos */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="text-white/90 font-heading font-semibold">Zenith Bank</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-accent font-heading font-bold">SmartTradeX</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/90 font-heading font-semibold">Nexus X Industries Ltd</div>
          </div>

          {/* Tagline */}
          <p className="text-white/70 text-center md:text-right italic">
            "Connecting African SMEs to the World — Powered by Zenith."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
