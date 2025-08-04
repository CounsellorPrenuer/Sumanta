import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import { MessageCircle, Brain, FileText, Users, CheckCircle, ArrowRight, Clock, Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Book Free Consultation",
      description: "Schedule a complimentary 30-minute session to understand your career goals and challenges.",
      details: [
        "Share your current situation and aspirations",
        "Discuss your educational background",
        "Identify key career concerns and questions",
        "Get an overview of our services"
      ],
      duration: "30 minutes",
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: "02",
      icon: Brain,
      title: "Psychometric Assessment",
      description: "Complete scientific assessments to understand your personality, interests, and natural aptitudes.",
      details: [
        "DMIT (Dermatoglyphics Multiple Intelligence Test)",
        "Personality profiling and behavioral analysis",
        "Interest and aptitude assessments",
        "Learning style identification"
      ],
      duration: "2-3 hours",
      color: "from-purple-500 to-indigo-600"
    },
    {
      number: "03",
      icon: FileText,
      title: "Detailed Analysis",
      description: "Our experts analyze your assessment results and create a comprehensive career profile.",
      details: [
        "In-depth analysis of assessment results",
        "Identification of strengths and growth areas",
        "Career compatibility analysis",
        "Personalized recommendations preparation"
      ],
      duration: "2-3 days",
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "04",
      icon: Users,
      title: "Expert Counseling",
      description: "Meet with our certified counselors for personalized guidance and career roadmap creation.",
      details: [
        "One-on-one session with certified counselor",
        "Detailed explanation of assessment results",
        "Career options exploration and discussion",
        "Action plan and next steps guidance"
      ],
      duration: "60-90 minutes",
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Scientific Approach",
      description: "Evidence-based assessments and data-driven recommendations for accurate career guidance."
    },
    {
      icon: Star,
      title: "Personalized Solutions",
      description: "Tailored advice based on your unique personality, interests, and career aspirations."
    },
    {
      icon: Clock,
      title: "Time-Efficient Process",
      description: "Streamlined approach that respects your time while providing comprehensive guidance."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Guidance from certified professionals with 23+ years of industry experience."
    }
  ];

  const packages = [
    {
      name: "Quick Start",
      price: "₹2,999",
      features: ["Free consultation", "Basic psychometric test", "Career report", "Email support"],
      popular: false
    },
    {
      name: "Complete Guidance",
      price: "₹9,999",
      features: ["Everything in Quick Start", "DMIT assessment", "Expert counseling session", "Career roadmap", "3 months support"],
      popular: true
    },
    {
      name: "Premium Package",
      price: "₹19,999",
      features: ["Everything in Complete", "Foreign admission guidance", "CV building", "Mock interviews", "6 months support"],
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
              How Our Process
              <span className="text-gradient-blue block">Works</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Our proven 4-step methodology combines scientific assessment with expert guidance to help you discover and achieve your ideal career path.
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

      <Footer />
    </div>
  );
}