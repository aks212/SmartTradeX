import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import zenithLogo from "@/assets/zenith-logo.png";
import smarttradexLogo from "@/assets/smarttradex-logo.png";
import nexusLogo from "@/assets/nexus-logo.png";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Main Logo */}
          <div className="flex items-center gap-3">
            <img src={smarttradexLogo} alt="SmartTradeX" className="h-14 md:h-16" />
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Join Pilot
            </button>
            <a
              href="/contact"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Right: Partner Logos & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 pr-6 border-r border-border">
              <img src={zenithLogo} alt="Zenith Bank" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src={nexusLogo} alt="Nexus X Industries" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <Button
              variant="gold"
              size="sm"
              onClick={() => scrollToSection("signup")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Join Pilot
            </button>
            <a
              href="/contact"
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Contact Us
            </a>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img src={zenithLogo} alt="Zenith Bank" className="h-6" />
              <img src={nexusLogo} alt="Nexus X Industries" className="h-6" />
            </div>
            <Button
              variant="gold"
              size="sm"
              className="w-full"
              onClick={() => scrollToSection("signup")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
