import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { Award, Users, Globe, BookOpen, CheckCircle, Star, TrendingUp, Brain, Heart, Target, Zap, Shield, Rocket, ArrowRight, Play, Quote, Trophy, Lightbulb, Clock, MessageSquare } from "lucide-react";
import sumantaImage from "@assets/Image_Sumanta Chaudhuri_LCC_1754306082124.jpeg";
import { useState, useEffect } from "react";

export default function WhyCCCEdu() {
  const [visibleSection, setVisibleSection] = useState<string>("");
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    countries: 0,
    years: 0,
    success: 0
  });

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
      animateCounter(5000, 'students');
      animateCounter(15, 'countries');
      animateCounter(23, 'years');
      animateCounter(95, 'success');
    }, 1000);
  }, []);

  const heroStats = [
    {
      icon: Users,
      number: animatedStats.students,
      suffix: "+",
      label: "Lives Transformed",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      number: animatedStats.countries,
      suffix: "+",
      label: "Countries Reached",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      number: animatedStats.years,
      suffix: "+",
      label: "Years of Excellence",
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
      title: "AI-Resistant Career Science",
      description: "While AI changes jobs, we help you develop AI-proof skills and identify future-ready careers that machines cannot replace.",
      features: ["Human-centric skills focus", "Future job market analysis", "AI impact assessment"],
      gradient: "from-purple-600 to-pink-600",
      delay: "0ms"
    },
    {
      icon: Heart,
      title: "Personalized 1:1 Mentorship",
      description: "Unlike generic online courses, get personal attention from Sumanta Chaudhuri himself - not junior counselors or chatbots.",
      features: ["Direct founder access", "Personalized action plans", "Unlimited follow-ups"],
      gradient: "from-red-500 to-rose-600",
      delay: "200ms"
    },
    {
      icon: Shield,
      title: "Lifetime Success Guarantee",
      description: "We don't abandon you after payment. Enjoy lifetime support until you achieve your career dreams - that's our commitment.",
      features: ["Lifetime access", "Ongoing support", "Success guarantee"],
      gradient: "from-green-500 to-teal-600",
      delay: "400ms"
    }
  ];

  const transformationStories = [
    {
      name: "Arjun Sharma",
      before: "Confused Engineering Student",
      after: "Software Engineer at Google",
      story: "From being lost in engineering to landing his dream job at Google within 6 months of our guidance.",
      package: "Ascend Plus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Patel", 
      before: "Uncertain About Stream",
      after: "Medical Student at AIIMS",
      story: "Chose medicine over engineering after our psychometric assessment revealed her true calling.",
      package: "Achieve",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2b5?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rahul Kumar",
      before: "Working Professional",
      after: "MBA at Wharton",
      story: "Transitioned from a dead-end job to studying at his dream business school in the USA.",
      package: "Ascend Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const whyNotOthers = [
    {
      competitor: "Generic Online Courses",
      problem: "One-size-fits-all approach",
      ourSolution: "Personalized 1:1 guidance",
      icon: MessageSquare
    },
    {
      competitor: "AI Career Tools",
      problem: "Lacks human empathy & context",
      ourSolution: "Human-centered counseling",
      icon: Heart
    },
    {
      competitor: "Junior Counselors",
      problem: "Limited experience",
      ourSolution: "23+ years of expertise",
      icon: Trophy
    },
    {
      competitor: "One-time Consultations",
      problem: "No ongoing support",
      ourSolution: "Lifetime guidance",
      icon: Shield
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Deep Discovery",
      description: "Comprehensive psychometric assessment to understand your unique personality, interests, and potential.",
      icon: Brain,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "02", 
      title: "Strategic Planning",
      description: "Create a personalized roadmap aligned with your strengths and future market opportunities.",
      icon: Target,
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "03",
      title: "Expert Guidance",
      description: "1:1 sessions with Sumanta Chaudhuri to refine your path and overcome specific challenges.",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "04",
      title: "Continuous Support",
      description: "Lifetime access to guidance, updates, and support as your career evolves.",
      icon: Rocket,
      color: "from-orange-500 to-red-600"
    }
  ];



  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section with Floating Elements */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Floating Background Elements */}
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
                India's #1 Career Transformation Platform
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up animation-delay-200">
              Why 5,000+ Students
              <span className="text-gradient-blue block">Choose Leadcrest Consulting?</span>
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
              While others offer generic advice, we provide <strong>AI-resistant career science</strong> and <strong>lifetime mentorship</strong> that actually transforms lives.
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
              While everyone else focuses on outdated career advice, we've built the only AI-resistant career transformation system in India.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {uniqueAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden"
                style={{ animationDelay: advantage.delay }}
              >
                {/* Animated Background */}
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

      {/* Why Not Others Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Why Not Choose
              <span className="text-red-600 block">Anyone Else?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you get with others vs. what you get with Leadcrest Consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyNotOthers.map((item, index) => (
              <div key={index} className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="font-bold text-gray-900 mb-4">{item.competitor}</h3>
                <div className="bg-red-50 p-4 rounded-xl mb-4">
                  <p className="text-red-700 text-sm font-medium">❌ {item.problem}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-green-700 text-sm font-medium">✅ {item.ourSolution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Real People,
              <span className="text-gradient-blue block">Real Transformations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just testimonials - they're proof that our system works
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {transformationStories.map((story, index) => (
              <div key={index} className="premium-card p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group">
                <div className="relative mb-8">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="bg-red-50 px-4 py-2 rounded-lg mb-4">
                    <span className="text-red-700 text-sm font-medium">Before: {story.before}</span>
                  </div>
                  <div className="bg-green-50 px-4 py-2 rounded-lg">
                    <span className="text-green-700 text-sm font-medium">After: {story.after}</span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-600 italic leading-relaxed pl-6">{story.story}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {story.package} Package
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Our Proven
              <span className="text-gradient-blue block">4-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same system that has transformed 5,000+ careers
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                )}

                <div className="premium-card p-8 text-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 relative z-10">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Manpreet Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Meet Your Mentor
              </div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Why Sumanta Chaudhuri
                <span className="text-gradient-blue block">Personally Guides You</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong>Unlike other platforms that assign you to junior counselors</strong>, Sumanta Chaudhuri - with 23+ years of experience - personally reviews every case and provides direct guidance.
                </p>
                <p>
                  He has helped over <strong>5,000 students and professionals</strong> navigate career transitions, from confused teenagers to working professionals seeking career pivots.
                </p>
                <p>
                  <strong>His unique approach?</strong> He doesn't just give you a career list - he helps you build AI-resistant skills and identifies opportunities that will thrive in the future job market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">23+</div>
                  <div className="text-gray-700 font-medium">Years of Experience</div>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
                  <div className="text-gray-700 font-medium">Lives Transformed</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img 
                    src={sumantaImage}
                    alt="Sumanta Chaudhuri"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">5,000+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Transform
            <span className="block text-yellow-300">Your Career?</span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join 5,000+ successful students and professionals who chose Leadcrest Consulting for their career transformation. 
            <strong> Don't wait - your dream career starts today.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
              Book Free Discovery Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Our Packages
            </button>
          </div>

          <p className="text-sm opacity-75 mt-8">
            ⏰ Limited slots available - 23 years of expertise waiting for you
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}