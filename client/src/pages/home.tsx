import PremiumNavigation from "@/components/premium-navigation";
import PremiumHero from "@/components/premium-hero";
import AIFutureSection from "@/components/ai-future-section";
import RoadmapSection from "@/components/roadmap-section";
import PremiumAbout from "@/components/premium-about";

import PremiumPackages from "@/components/premium-packages";
import PremiumTestimonials from "@/components/premium-testimonials";
import PremiumContact from "@/components/premium-contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      <PremiumHero />
      <AIFutureSection />
      <RoadmapSection />
      <PremiumAbout />
      <PremiumPackages />
      <PremiumTestimonials />
      <PremiumContact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
