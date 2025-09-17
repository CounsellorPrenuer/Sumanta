import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail, Clock, Shield, Award, Users } from 'lucide-react';

const faqData = [
  {
    category: "Services & Pricing",
    icon: Award,
    questions: [
      {
        question: "What career services do you offer?",
        answer: "We provide comprehensive career guidance including psychometric assessments, 1:1 career coaching sessions, foreign admissions assistance, CV building, mentorship programs, and corporate wellbeing solutions. Our services are tailored for professionals at all career stages - from fresh graduates to senior executives."
      },
      {
        question: "How much do your services cost?",
        answer: "Our packages start from ₹550 for discovery calls. Our main packages include Ascend (₹6,499) and Ascend Plus (₹10,599) with different features and session counts. We also offer premium executive coaching packages. All packages include ongoing support and lifetime access to resources."
      },
      {
        question: "What's included in the free consultation?",
        answer: "The free consultation includes a 30-minute career assessment call where we understand your current situation, career goals, and challenges. We'll provide initial guidance and recommend the best package for your needs. No commitment required."
      },
      {
        question: "Do you offer payment plans or EMI options?",
        answer: "Yes, we offer flexible payment options including EMI through our secure Razorpay integration. You can pay via UPI, credit/debit cards, net banking, or digital wallets. Contact us to discuss customized payment plans for premium packages."
      }
    ]
  },
  {
    category: "Process & Methodology",
    icon: Users,
    questions: [
      {
        question: "How does your career coaching process work?",
        answer: "Our proven 4-step process includes: 1) Initial consultation and psychometric assessment, 2) Strategic career planning and goal setting, 3) 1:1 coaching sessions with actionable strategies, 4) Ongoing support and progress tracking. Each step is tailored to your specific career stage and industry."
      },
      {
        question: "How long does it take to see results?",
        answer: "Most clients see initial clarity and direction within the first 2-3 sessions. Significant career progress typically occurs within 3-6 months. Our 94% success rate is based on clients achieving their stated career goals within 12 months of starting the program."
      },
      {
        question: "What makes your approach different from other career coaches?",
        answer: "Our founder Sumanta Chaudhuri brings 24+ years of Fortune 500 HR leadership experience from companies like Reliance Industries, Vodafone, and Aircel. We provide executive-level insights, industry-specific guidance, and proven strategies used by top performers in Telecom, Retail, Pharma, FMCG, and Technology sectors."
      },
      {
        question: "Do you provide industry-specific guidance?",
        answer: "Absolutely! We specialize in Telecom, Retail, Pharma, FMCG, FMCD, Technology, and related sectors. Our guidance is tailored based on industry trends, leadership requirements, and career progression paths specific to your field."
      }
    ]
  },
  {
    category: "Booking & Scheduling",
    icon: Clock,
    questions: [
      {
        question: "How do I book a session?",
        answer: "You can book sessions through our website using the 'Book A Free Call' or 'Book Strategic Career Consultation' buttons. After booking, you'll receive confirmation via email and SMS with Calendly or Google Calendar links for easy scheduling."
      },
      {
        question: "Can I reschedule my appointment?",
        answer: "Yes, you can reschedule appointments up to 24 hours before your scheduled time through the calendar link provided in your confirmation email. For urgent changes, contact us directly at +91 9147424608."
      },
      {
        question: "Are sessions conducted online or in-person?",
        answer: "We offer both online and in-person sessions. Online sessions are conducted via secure video conferencing platforms. In-person sessions are available in Kolkata by appointment. Most clients prefer online sessions for convenience and flexibility."
      },
      {
        question: "What if I miss my scheduled session?",
        answer: "Please inform us at least 24 hours in advance if you need to cancel. Missed sessions without prior notice may result in session forfeiture. We understand emergencies happen and will work with you to reschedule when possible."
      }
    ]
  },
  {
    category: "Privacy & Security",
    icon: Shield,
    questions: [
      {
        question: "Is my personal information secure?",
        answer: "Yes, we take data privacy seriously. All personal information is encrypted and stored securely. We comply with data protection regulations and never share your information with third parties without consent. Read our Privacy Policy for complete details."
      },
      {
        question: "Are coaching sessions confidential?",
        answer: "Absolutely. All coaching sessions are completely confidential. We maintain strict professional standards and your career discussions, assessments, and personal information remain private and secure."
      },
      {
        question: "How do you handle payment security?",
        answer: "All payments are processed through Razorpay's secure payment gateway with bank-level encryption. We don't store your payment information. All transactions are protected by advanced security measures and comply with industry standards."
      },
      {
        question: "Can I delete my data?",
        answer: "Yes, you have the right to request deletion of your personal data. Contact us at leadcrestconsulting6@gmail.com to initiate the data deletion process. Some information may be retained as required by law for business records."
      }
    ]
  },
  {
    category: "Support & Contact",
    icon: MessageCircle,
    questions: [
      {
        question: "How can I contact you?",
        answer: "You can reach us via phone at +91 9147424608, email at leadcrestconsulting6@gmail.com, or through our website contact form. Our WhatsApp support is also available for quick queries. We typically respond within 24 hours."
      },
      {
        question: "What are your business hours?",
        answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM IST. For urgent matters, you can reach us via WhatsApp or email. We strive to accommodate sessions outside business hours when needed."
      },
      {
        question: "Do you offer ongoing support after completing a package?",
        answer: "Yes! All our packages include ongoing support even after completion. You get lifetime access to resources, exclusive content updates, and can always reach out for guidance. Premium package clients get extended 1:1 support periods."
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer: "Your satisfaction is our priority. If you're not satisfied within the first session, we offer a money-back guarantee. For ongoing concerns, we'll work with you to address issues and ensure you achieve your career goals."
      }
    ]
  }
];

interface FAQSectionProps {
  showTitle?: boolean;
  className?: string;
}

export default function FAQSection({ showTitle = true, className = "" }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeCategory, setActiveCategory] = useState<string>("Services & Pricing");

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeCategoryData = faqData.find(cat => cat.category === activeCategory);

  return (
    <section className={`py-24 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`} id="faq">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Got Questions?
              <span className="text-gradient-blue block">We've Got Answers</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our career services, booking process, pricing, and more. 
              Can't find what you're looking for? Contact us directly!
            </p>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {faqData.map((category) => (
                    <button
                      key={category.category}
                      onClick={() => setActiveCategory(category.category)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                        activeCategory === category.category
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                      data-testid={`category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{category.category}</span>
                    </button>
                  ))}
                </div>
                
                {/* Quick Contact */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  <h4 className="font-bold mb-3">Still have questions?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 9147424608</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="break-all">leadcrestconsulting6@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              {activeCategoryData && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <activeCategoryData.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{activeCategoryData.category}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {activeCategoryData.questions.map((faq, index) => {
                        const key = `${activeCategory}-${index}`;
                        const isOpen = openItems[key];
                        
                        return (
                          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                              onClick={() => toggleItem(activeCategory, index)}
                              className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                              data-testid={`faq-question-${index}`}
                            >
                              <span className="font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="pt-4 border-t border-gray-100">
                                  <p className="text-gray-700 leading-relaxed" data-testid={`faq-answer-${index}`}>
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Didn't find your answer?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get personalized answers to your career questions 
              during a free consultation call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919147424608" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                data-testid="button-call-now"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a 
                href="mailto:leadcrestconsulting6@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                data-testid="button-email-us"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}