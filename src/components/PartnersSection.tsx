const partners = [
  { name: "Zenith Bank", placeholder: true },
  { name: "Nexus X Industries Ltd", placeholder: true },
  { name: "NEPC", placeholder: true },
  { name: "NEXIM Bank", placeholder: true },
  { name: "AfCFTA Secretariat", placeholder: true },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Top gold divider */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="h-1 w-20 gradient-gold rounded-full mb-6 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Building the Future of African Trade — Together.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SmartTradeX collaborates with leading organizations to build Africa's most trusted digital trade ecosystem.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 rounded-xl bg-secondary/50 hover:bg-white hover:shadow-gold transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <span className="text-3xl font-heading font-bold text-muted-foreground group-hover:text-accent-foreground">
                    {partner.name.substring(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-heading font-semibold text-muted-foreground italic">
            "Partnerships that power progress."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
