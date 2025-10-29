import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up order-2 md:order-1">
            <div className="inline-block">
              <div className="h-1 w-16 sm:w-20 gradient-gold rounded-full mb-4 sm:mb-6"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              One Platform. Infinite Growth.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              SmartTradeX unites trade, finance, and learning into one simple ecosystem.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Through AI and blockchain technology, we empower African SMEs to participate in global trade, access instant financing, and gain export knowledge — all seamlessly powered by Zenith Bank.
            </p>
            <Button variant="gold" size="lg" className="mt-4 w-full sm:w-auto">
              Discover SmartTradeX
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in order-1 md:order-2">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="African SME business owner working on digital platform"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 gradient-gold rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
