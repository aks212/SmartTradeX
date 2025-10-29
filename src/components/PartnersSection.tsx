import zenithLogo from "@/assets/zenith-logo.png";
import nexusLogo from "@/assets/nexus-logo.png";

const partners = [
  { name: "Zenith Bank", logo: zenithLogo },
  { name: "Nexus X Industries Ltd", logo: nexusLogo },
  { name: "NEPC", placeholder: true },
  { name: "NEXIM Bank", placeholder: true },
  { name: "AfCFTA Secretariat", placeholder: true },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Top gold divider */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="h-1 w-16 sm:w-20 gradient-gold rounded-full mb-4 sm:mb-6 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 px-4">
            Building the Future of African Trade — Together.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            SmartTradeX collaborates with leading organizations to build Africa's most trusted digital trade ecosystem.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white hover:shadow-gold transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center w-full">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-14 sm:h-16 md:h-20 object-contain mx-auto mb-2 sm:mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-muted-foreground group-hover:text-accent-foreground">
                      {partner.name.substring(0, 2)}
                    </span>
                  </div>
                )}
                <p className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <p className="text-base sm:text-lg md:text-xl font-heading font-semibold text-muted-foreground italic">
            "Partnerships that power progress."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
