import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20" style={{
    backgroundImage: `linear-gradient(135deg, rgba(217, 28, 35, 0.9), rgba(229, 192, 123, 0.8)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
              Empowering Nigeria's SMEs to Trade, Learn & Grow Globally
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">SmartTradeX is the all-in-one ecosystem that helps African small businesses access trade finance, verified buyers, and export knowledge — Built with Zenith Bank.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button variant="gold" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection("signup")}>
                Join Pilot Launch
              </Button>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection("about")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default HeroSection;