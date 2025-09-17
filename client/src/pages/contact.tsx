import PremiumNavigation from "@/components/premium-navigation";
import PremiumContact from "@/components/premium-contact";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In
              <span className="text-gradient-blue block">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your career? Let's start with a conversation about your goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      <PremiumContact />
      <FAQSection />
      <Footer />
    </div>
  );
}