import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PackagesSection from "@/components/packages-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import ResourcesSection from "@/components/resources-section";
import PartnershipSection from "@/components/partnership-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <BlogSection />
      <ResourcesSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
