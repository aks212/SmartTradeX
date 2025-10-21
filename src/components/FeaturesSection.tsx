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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="h-1 w-20 gradient-gold rounded-full mb-6 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The SmartTradeX Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Five powerful components working together to transform African trade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover:shadow-gold transition-all duration-300 hover:scale-105 animate-fade-in bg-white/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-1 w-16 gradient-gold rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
