import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import FloatingSocial from "@/components/FloatingSocial";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const SignupSection = lazy(() => import("@/components/SignupSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocial />
      <HeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AboutSection />
        <FeaturesSection />
        <PartnersSection />
        <SignupSection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
