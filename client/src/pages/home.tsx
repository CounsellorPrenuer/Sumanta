import PremiumNavigation from "@/components/premium-navigation";
import PremiumHero from "@/components/premium-hero";
import PremiumAbout from "@/components/premium-about";
import PremiumServices from "@/components/premium-services";
import PremiumPackages from "@/components/premium-packages";
import PremiumTestimonials from "@/components/premium-testimonials";
import PremiumContact from "@/components/premium-contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      <PremiumHero />
      <PremiumAbout />
      <PremiumServices />
      <PremiumPackages />
      <PremiumTestimonials />
      <PremiumContact />
      <Footer />
    </div>
  );
}
