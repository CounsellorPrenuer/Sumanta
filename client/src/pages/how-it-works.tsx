import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { MessageCircle, Target, TrendingUp, Users, CheckCircle, ArrowRight, Clock, Star, Award, Briefcase } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Executive Discovery Call",
      description: "Confidential 60-minute consultation to assess your leadership journey, career aspirations, and strategic challenges.",
      details: [
        "Current role assessment and leadership positioning",
        "Career trajectory analysis and growth barriers",
        "Executive presence evaluation and development needs",
        "Compensation optimization and market positioning",
        "Strategic goal setting and success metrics definition"
      ],
      duration: "60 minutes",
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: "02",
      icon: Target,
      title: "Leadership Assessment & Market Analysis",
      description: "Comprehensive evaluation of your executive capabilities combined with strategic market intelligence for optimal positioning.",
      details: [
        "360-degree leadership competency assessment",
        "Executive presence and communication style analysis",
        "Industry positioning and competitive landscape review",
        "Compensation benchmarking and market value analysis",
        "Network strength evaluation and expansion strategy"
      ],
      duration: "5-7 days",
      color: "from-purple-500 to-indigo-600"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Strategic Career Roadmap Development",
      description: "Creation of a comprehensive executive development plan with specific milestones, timelines, and success metrics.",
      details: [
        "Personalized career advancement strategy",
        "Executive presence development framework",
        "Networking and relationship building blueprint",
        "Compensation negotiation strategy and timeline",
        "Leadership skill enhancement priorities"
      ],
      duration: "3-5 days",
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "04",
      icon: Users,
      title: "Executive Coaching & Implementation",
      description: "Ongoing strategic coaching with Sumanta Chaudhuri to execute your career advancement plan and achieve measurable results.",
      details: [
        "Monthly 1:1 executive coaching sessions",
        "Real-time strategic guidance and decision support",
        "Network introduction facilitation and relationship coaching",
        "Interview preparation and executive positioning",
        "Continuous progress tracking and strategy optimization"
      ],
      duration: "3-12 months",
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Fortune 500 Proven Methods",
      description: "Strategies developed and tested in senior HR roles at Reliance and Vodafone with measurable results."
    },
    {
      icon: TrendingUp,
      title: "Guaranteed ROI Focus",
      description: "Clients achieve 70-85% salary increases on average with strategic positioning and negotiation expertise."
    },
    {
      icon: Clock,
      title: "Executive-Level Efficiency", 
      description: "Streamlined process designed for busy executives with maximum impact in minimum time investment."
    },
    {
      icon: Users,
      title: "Exclusive Access & Network",
      description: "Direct access to Sumanta's 20+ years of Fortune 500 relationships and industry connections."
    }
  ];

  const packages = [
    {
      name: "Executive Assessment",
      price: "₹25,000",
      features: ["Executive discovery call", "Leadership competency assessment", "Market positioning analysis", "Strategic career roadmap", "2 follow-up sessions"],
      popular: false
    },
    {
      name: "Strategic Advancement",
      price: "₹75,000",
      features: ["Everything in Executive Assessment", "3-month coaching program", "Network introduction facilitation", "Compensation negotiation support", "Executive presence coaching"],
      popular: true
    },
    {
      name: "C-Suite Acceleration",
      price: "₹1,50,000",
      features: ["Everything in Strategic Advancement", "6-month intensive coaching", "Board readiness preparation", "Personal brand development", "Ongoing strategic advisory"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Executive Coaching
              <span className="text-gradient-blue block">Methodology</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Our proven 4-phase strategic framework combines Fortune 500 insights with personalized coaching to accelerate your executive career and achieve significant compensation increases.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-gray-200 mr-4">{step.number}</div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {step.duration}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="premium-card p-8 text-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="mt-8">
                        <ArrowRight className="w-8 h-8 text-gray-300 mx-auto" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures you get accurate, actionable guidance that leads to real career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="premium-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the package that best fits your needs and budget. All packages include our proven methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`premium-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105' : 'bg-gray-900 hover:bg-gray-800 text-white hover:shadow-xl hover:scale-105'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards discovering your ideal career path. Book your free consultation today.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors text-lg">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Executive Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results achieved by executives who have worked with Sumanta Chaudhuri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Average Salary Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,725+</div>
              <div className="text-gray-600">Executives Coached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Promotion Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Months Average Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="premium-card p-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Executive Career?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join 3,725+ successful executives who have transformed their careers with Sumanta's proven methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  window.location.href = 'mailto:sumantaunstoppable@gmail.com?subject=Executive Coaching Discovery Call Request&body=Hello Sumanta,%0D%0A%0D%0AI am interested in scheduling an executive discovery call to discuss my career advancement goals. Please let me know your availability.%0D%0A%0D%0AThank you.';
                }}
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                data-testid="button-schedule-discovery-call"
              >
                Schedule Discovery Call
              </button>
              <button 
                onClick={() => {
                  window.open('https://wa.me/919828096408?text=Hello%20Sumanta,%20I%20am%20interested%20in%20your%20executive%20coaching%20services.%20Could%20we%20schedule%20a%20consultation?', '_blank');
                }}
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
                data-testid="button-whatsapp-contact"
              >
                WhatsApp: +91 9828096408
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}