import PremiumNavigation from "@/components/premium-navigation";
import PremiumHero from "@/components/premium-hero";
import WhyProfessionalsChoose from "@/components/why-professionals-choose";
import AIFutureSection from "@/components/ai-future-section";
import RoadmapSection from "@/components/roadmap-section";
import PremiumAbout from "@/components/premium-about";
import VisualDifferentiators from "@/components/visual-differentiators";
import PremiumPackages from "@/components/premium-packages";
import PremiumTestimonials from "@/components/premium-testimonials";
import TrustLegal from "@/components/trust-legal";
import PremiumContact from "@/components/premium-contact";
import MentoriaSection from "@/components/mentoria-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
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
      <PremiumTestimonials />
      <TrustLegal />
      <PremiumContact />
      <MentoriaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
