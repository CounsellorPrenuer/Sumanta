import { useEffect } from "react";
import { useLocation } from "wouter";
import PremiumNavigation from "@/components/premium-navigation";
import PremiumHero from "@/components/premium-hero";
import WhyProfessionalsChoose from "@/components/why-professionals-choose";
import AIFutureSection from "@/components/ai-future-section";
import RoadmapSection from "@/components/roadmap-section";
import PremiumAbout from "@/components/premium-about";
import VisualDifferentiators from "@/components/visual-differentiators";
import PremiumPackages from "@/components/premium-packages";
import TrustLegal from "@/components/trust-legal";
import PremiumContact from "@/components/premium-contact";
import MentoriaSection from "@/components/mentoria-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  const [location] = useLocation();

  // Robust scroll-to-section with retry logic
  useEffect(() => {
    const url = new URL(window.location.href);
    const targetSection = url.searchParams.get('section') || (window.location.hash || '').slice(1);
    
    if (!targetSection) return;
    
    let attempts = 0;
    const maxAttempts = 40; // ~2 seconds with requestAnimationFrame
    
    const attemptScroll = () => {
      const element = document.getElementById(targetSection);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      
      if (attempts++ < maxAttempts) {
        requestAnimationFrame(attemptScroll);
      }
    };
    
    // Start the scroll attempt
    requestAnimationFrame(attemptScroll);
  }, [location]);

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      <PremiumHero />
      <WhyProfessionalsChoose />
      <AIFutureSection />
      <VisualDifferentiators />
      <RoadmapSection />
      <PremiumAbout />
      <PremiumPackages />
      <TrustLegal />
      <PremiumContact />
      <MentoriaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
