const features = [
  {
    title: "ZConnect Marketplace",
    description: "Verified SME listings, secure escrow transactions, and access to global buyers.",
  },
  {
    title: "ZenithSense AI",
    description: "AI-driven business analysis that recommends tailored Zenith Bank products and financing options.",
  },
  {
    title: "Blockchain Records",
    description: "Immutable digital trade and identity verification for secure cross-border transactions.",
  },
  {
    title: "Learning Hub",
    description: "Interactive courses and certification programs to prepare SMEs for export readiness.",
  },
  {
    title: "Zenith Bank Integration",
    description: "SmartTradeX connects directly with Zenith Bank's financial infrastructure to streamline KYC, lending, and payments for businesses.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="h-1 w-16 sm:w-20 gradient-gold rounded-full mb-4 sm:mb-6 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            The SmartTradeX Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Five powerful components working together to transform African trade
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-gold transition-all duration-300 hover:scale-105 animate-fade-in bg-white/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-1 w-12 sm:w-16 gradient-gold rounded-full mb-4 sm:mb-6 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
