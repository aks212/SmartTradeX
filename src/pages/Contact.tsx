import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingSocial from "@/components/FloatingSocial";
import FooterSection from "@/components/FooterSection";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocial />

      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(357 76% 48%), hsl(41 67% 69%))",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto">
              Have questions about SmartTradeX? We're here to help you grow your
              business globally.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-elegant animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                  Reach out to us directly through any of these channels. Our
                  team is ready to support your trade journey.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-gold transition-all">
                  <div className="p-2 sm:p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1 text-sm sm:text-base">
                      Email Us
                    </h3>
                    <a
                      href="mailto:team@smarttradex.online"
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      team@smarttradex.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-gold transition-all">
                  <div className="p-2 sm:p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1 text-sm sm:text-base">
                      Call Us
                    </h3>
                    <a
                      href="tel:+2348066844096"
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors"
                    >
                      +234 806 684 4096
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-gold transition-all">
                  <div className="p-2 sm:p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1 text-sm sm:text-base">
                      Visit Us
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Kano, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-gold transition-all">
                  <div className="p-2 sm:p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1 text-sm sm:text-base">
                      Website
                    </h3>
                    <a
                      href="https://www.smarttradex.online"
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.smarttradex.online
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-zenith to-accent rounded-xl text-white">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/90">
                  Join the SmartTradeX pilot program and be among the first to
                  access our revolutionary trade ecosystem.
                </p>
                <a href="/#signup">
                  <Button variant="hero" size="lg" className="w-full">
                    Join Pilot Launch
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
