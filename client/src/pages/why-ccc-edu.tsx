import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import BookCallModal from "@/components/book-call-modal";
import ResourceDownloadModal from "@/components/resource-download-modal";
import { Award, Users, Globe, CheckCircle, Star, TrendingUp, Brain, Heart, Target, Zap, Shield, Rocket, ArrowRight, Play, Quote, Trophy, Lightbulb, Clock, MessageSquare, Building2, Briefcase, ChevronRight } from "lucide-react";
import sumantaImage from "@assets/Image_Sumanta Chaudhuri_LCC_1754306082124.jpeg";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function WhyCCCEdu() {
  const [visibleSection, setVisibleSection] = useState<string>("");
  const [animatedStats, setAnimatedStats] = useState({
    professionals: 0,
    companies: 0,
    years: 0,
    success: 0
  });
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Animate counters
    const animateCounter = (target: number, key: keyof typeof animatedStats, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };

    setTimeout(() => {
      animateCounter(3725, 'professionals');
      animateCounter(150, 'companies');
      animateCounter(24, 'years');
      animateCounter(94, 'success');
    }, 1000);
  }, []);

  const heroStats = [
    {
      icon: Users,
      number: animatedStats.professionals,
      suffix: "+",
      label: "Professionals Transformed",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building2,
      number: animatedStats.companies,
      suffix: "+",
      label: "Corporate Partners",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      number: animatedStats.years,
      suffix: "+",
      label: "Years HR Leadership",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Target,
      number: animatedStats.success,
      suffix: "%",
      label: "Success Rate",
      color: "from-orange-500 to-red-600"
    }
  ];

  const uniqueAdvantages = [
    {
      icon: Brain,
      title: "Fortune 500 Leadership Experience",
      description: "Learn from someone who's been in the boardroom. 24+ years of HR leadership at Reliance and Vodafone provides unmatched industry insights.",
      features: ["Executive-level perspective", "Real corporate experience", "Industry network access"],
      gradient: "from-purple-600 to-pink-600",
      delay: "0ms"
    },
    {
      icon: Heart,
      title: "Personalized Professional Coaching",
      description: "Direct access to Sumanta Chaudhuri himself - not junior counselors. Get personalized strategies tailored to your career stage and unique challenges.",
      features: ["1:1 with founder", "Career stage-specific strategies", "Professional growth guidance"],
      gradient: "from-red-500 to-rose-600",
      delay: "200ms"
    },
    {
      icon: Shield,
      title: "Digital-Ready Career Future-Proofing",
      description: "Stay ahead of digital disruption with strategies for Freshers, Middle Management, and Senior Professionals that focus on adaptability and leadership.",
      features: ["Digital transformation readiness", "Career stage-specific guidance", "Technology adaptation strategies"],
      gradient: "from-green-500 to-teal-600",
      delay: "400ms"
    }
  ];


  const whyNotOthers = [
    {
      competitor: "Generic Career Coaching",
      problem: "Theoretical advice, no real corporate experience",
      ourSolution: "Fortune 500 HR leadership insights",
      icon: Building2
    },
    {
      competitor: "AI Career Tools",
      problem: "Lacks human judgment & contextual understanding",
      ourSolution: "Human-centered executive development",
      icon: Heart
    },
    {
      competitor: "Junior Career Counselors",
      problem: "Limited senior-level experience",
      ourSolution: "24+ years of C-suite interactions",
      icon: Trophy
    },
    {
      competitor: "One-time Consultations",
      problem: "No ongoing executive support",
      ourSolution: "Lifetime professional mentorship",
      icon: Shield
    }
  ];

  const corporateServices = [
    {
      icon: Users,
      title: "Corporate Parenting Wellbeing",
      description: "Support working parents with career mentorship for their children, wellbeing workshops, and diagnostic surveys.",
      features: ["Employee child mentorship", "Parenting stress management", "DEI strategy insights"]
    },
    {
      icon: Briefcase,
      title: "Executive Leadership Development",
      description: "Transform high-potential employees into effective leaders with Fortune 500-proven methodologies.",
      features: ["Leadership pipeline building", "Executive presence training", "Strategic thinking development"]
    },
    {
      icon: Target,
      title: "Organizational Career Architecture",
      description: "Design career progression frameworks that retain top talent and drive organizational success.",
      features: ["Career pathway design", "Succession planning", "Talent retention strategies"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Executive Assessment",
      description: "Comprehensive evaluation of your leadership potential, career goals, and market positioning using Fortune 500 frameworks.",
      icon: Brain,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "02", 
      title: "Strategic Career Architecture",
      description: "Create a personalized roadmap for executive advancement based on industry insights and market opportunities.",
      icon: Target,
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "03",
      title: "Executive Coaching Sessions",
      description: "1:1 coaching with Sumanta Chaudhuri to develop leadership presence, strategic thinking, and career acceleration.",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "04",
      title: "Ongoing Leadership Support",
      description: "Lifetime access to executive guidance, industry updates, and leadership development as you advance.",
      icon: Rocket,
      color: "from-orange-500 to-red-600"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                India's Premier Executive Career Transformation Platform
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up animation-delay-200">
              Why 3,725+ Professionals
              <span className="text-gradient-blue block">Choose Leadcrest Consulting?</span>
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
              While others offer generic advice, we provide <strong>Fortune 500 leadership insights</strong> and <strong>specialized mentorship for Middle Management and Mid Senior levels in Telecom, Retail, Pharma, FMCG, and Technology</strong> that actually accelerates careers.
            </p>

            {/* Animated Hero Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {heroStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="premium-card p-8 text-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">{stat.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              What Makes Us
              <span className="text-gradient-blue block">Completely Different?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              While others offer theoretical career advice, we provide Fortune 500-proven strategies from someone who's actually built and led teams at the highest levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {uniqueAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden"
                style={{ animationDelay: advantage.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                     style={{ background: `linear-gradient(135deg, ${advantage.gradient.split(' ')[1]}, ${advantage.gradient.split(' ')[3]})` }}></div>
                
                <div className="premium-card p-10 h-full hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${advantage.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{advantage.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{advantage.description}</p>
                  
                  <div className="space-y-4">
                    {advantage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${advantage.gradient} mr-4`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Not Others Comparison */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Why Not Others?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how we differ from typical career coaching and why professionals choose our Fortune 500-proven approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyNotOthers.map((comparison, index) => (
              <div key={index} className="premium-card p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <comparison.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{comparison.competitor}</h3>
                    <p className="text-red-600 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {comparison.problem}
                    </p>
                    <p className="text-green-600 font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Our Solution: {comparison.ourSolution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Corporate Solutions
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Extend our professional development expertise to your organization with comprehensive corporate services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="bg-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <ChevronRight className="w-4 h-4 mr-3 text-yellow-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => navigate('/corporate-parenting-wellbeing')}
              data-testid="button-explore-corporate"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore Corporate Services
            </button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our Proven
              <span className="text-gradient-blue block">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A systematic approach to executive development based on Fortune 500 leadership frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Accelerate
            <span className="block text-yellow-300">Your Executive Career?</span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join 3,725+ professionals who've transformed their careers with Fortune 500-proven strategies. Your next promotion is just a conversation away.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => setIsBookCallModalOpen(true)}
              data-testid="button-book-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book a Free Call
            </button>
            <button 
              onClick={() => setIsResourceModalOpen(true)}
              data-testid="button-download-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Executive Guide
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">3,725+</div>
              <div className="text-blue-100">Professionals Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">20+</div>
              <div className="text-blue-100">Years Fortune 500 Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">94%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      
      <BookCallModal 
        isOpen={isBookCallModalOpen} 
        onClose={() => setIsBookCallModalOpen(false)} 
      />
      
      <ResourceDownloadModal 
        isOpen={isResourceModalOpen} 
        onClose={() => setIsResourceModalOpen(false)} 
        resource={{
          id: "executive-guide",
          title: "Executive Career Acceleration Guide",
          description: "Fortune 500 proven strategies for executive career advancement and leadership development",
          type: "PDF Guide",
          downloadUrl: "/api/download/executive-guide"
        }}
      />
    </div>
  );
}