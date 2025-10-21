import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const SignupSection = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(357 76% 48%), hsl(41 67% 69%))',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Card with form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                Get Early Access to SmartTradeX
              </h2>
              <p className="text-lg text-muted-foreground">
                Join the first 1,000 SMEs to experience AI-powered trade and financing through Zenith Bank's infrastructure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" required placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input id="businessName" required placeholder="Enter business name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required placeholder="+234..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sector">Sector / Industry *</Label>
                  <Input id="sector" required placeholder="e.g., Agriculture, Tech" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" required placeholder="Nigeria" />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to the terms and privacy policy.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={!agreed}
              >
                Join Pilot Launch
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already registered?{" "}
                <a href="#" className="text-primary font-semibold hover:underline">
                  Check your application status
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
