import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { Users, Heart, TrendingUp, Shield, Brain, Target, CheckCircle, ArrowRight, Star, BarChart3, UserCheck, Award } from "lucide-react";
import { useState } from "react";

export default function CorporateParentingWellbeing() {
  const [visibleSection, setVisibleSection] = useState<string>("");

  const whyMattersStats = [
    {
      icon: TrendingUp,
      stat: "1 in 2",
      description: "working parents in India report chronic stress",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Users,
      stat: "Leading Cause",
      description: "Parenting pressure drives mid-career female attrition",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      stat: "Often Ignored",
      description: "DEI and wellbeing efforts miss life-stage realities",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const offerings = [
    {
      title: "Career Mentorship for Employees' Children",
      description: "Comprehensive career guidance for the next generation",
      features: [
        "Psychometric assessments",
        "1-on-1 counselling with certified experts", 
        "Lifetime mentorship platform access",
        "Ideal for employees who have children aged 13–21"
      ],
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      highlight: "Next Generation Support"
    },
    {
      title: "Parenting Wellbeing Workshops",
      description: "Empowering parents to thrive professionally and personally",
      features: [
        "Managing stress, guilt, and emotional fatigue",
        "Balancing ambition and caregiving",
        "Reframing parenting in the age of AI",
        "Delivered virtually or in-person"
      ],
      icon: Heart,
      color: "from-purple-500 to-pink-600",
      highlight: "Wellbeing Focus"
    },
    {
      title: "Parenting Diagnostic Survey (proprietary)",
      description: "Data-driven insights for strategic wellbeing initiatives",
      features: [
        "Measure parenting-related stress, burnout, and work-life conflict",
        "Segment data by gender, role, geography, tenure",
        "Use insights to co-create DEI + wellbeing strategy"
      ],
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      highlight: "Proprietary Tool"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Reduced stress leads to enhanced focus and performance"
    },
    {
      icon: UserCheck,
      title: "Improve Retention",
      description: "Support working parents to reduce costly turnover"
    },
    {
      icon: Shield,
      title: "Enhance Emotional Safety",
      description: "Create inclusive environments that recognize life realities"
    },
    {
      icon: Award,
      title: "Strengthen DEI Impact",
      description: "Address overlooked barriers to professional advancement"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Corporate Wellbeing Innovation
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Support the Parent.
              <span className="text-gradient-blue block">Strengthen the Professional.</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Today's employees aren't just professionals, they're also parents navigating academic anxiety, teenage uncertainty, and home-life overload. At Leadcrest, we partner with organizations to improve wellbeing, inclusion, and engagement by supporting this overlooked demographic: <strong>working parents</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('offerings')}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group inline-flex items-center justify-center"
              >
                Schedule Corporate Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why This
              <span className="text-gradient-blue block">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By supporting employees as parents, you support them as humans, boosting productivity, retention, and emotional safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whyMattersStats.map((item, index) => (
              <div key={index} className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-4">{item.stat}</div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section id="offerings" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Offerings
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="text-gradient-blue block">Parenting Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three specialized solutions designed to support your employees as both professionals and parents.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="premium-card p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Highlight badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {offering.highlight}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${offering.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {offering.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Support Your
            <span className="block text-yellow-300">Working Parents?</span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your organization's approach to employee wellbeing by recognizing the full human experience of your workforce.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
              Schedule Corporate Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Our Corporate Brochure
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">3,725+</div>
              <div className="text-blue-100">Professionals Already Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">20+</div>
              <div className="text-blue-100">Years HR Leadership Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-blue-100">Confidential & Professional</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}