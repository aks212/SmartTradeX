import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(217, 28, 35, 0.9), rgba(229, 192, 123, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="glass-effect rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Empowering Nigeria's SMEs to Trade, Learn & Grow Globally
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              SmartTradeX is the all-in-one ecosystem that helps African small businesses access trade finance, verified buyers, and export knowledge — powered by Zenith Bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                Join Pilot Launch
              </Button>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
