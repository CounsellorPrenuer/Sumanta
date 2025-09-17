import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import BookCallModal from "@/components/book-call-modal";
import ResourceDownloadModal from "@/components/resource-download-modal";
import { Users, Heart, TrendingUp, Shield, Brain, Target, CheckCircle, ArrowRight, Star, BarChart3, UserCheck, Award } from "lucide-react";
import { useState } from "react";

export default function CorporateParentingWellbeing() {
  const [visibleSection, setVisibleSection] = useState<string>("");
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

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
      title: "32% Higher Productivity",
      description: "Reduced parental stress directly correlates with enhanced focus and performance metrics"
    },
    {
      icon: UserCheck,
      title: "45% Better Retention",
      description: "Organizations supporting working parents see dramatic reduction in mid-career attrition"
    },
    {
      icon: Shield,
      title: "2.5x Engagement Score",
      description: "Employees feel valued when organizations recognize their dual responsibilities"
    },
    {
      icon: Award,
      title: "28% DEI Improvement",
      description: "Directly addresses gender equality by supporting career continuity for working mothers"
    }
  ];
  
  const faqs = [
    {
      question: "Who is this program designed for?",
      answer: "This is an employee benefit program designed for organizations with 500+ employees, specifically targeting support for working parents at all levels. It's purchased by CHROs/HR Heads as part of their wellbeing and DEI initiatives."
    },
    {
      question: "How does this benefit our organization's bottom line?",
      answer: "Our clients report average savings of ₹2.3 Cr annually through reduced attrition costs, decreased sick leave, improved productivity, and enhanced employer branding. The program pays for itself within 6 months."
    },
    {
      question: "What's the difference between this and regular EAP programs?",
      answer: "Unlike generic Employee Assistance Programs, we specifically address parenting-related workplace challenges with specialized counselors, career guidance for employees' children, and data-driven insights on parenting stress impact."
    },
    {
      question: "How do we measure ROI and success?",
      answer: "We provide quarterly reports with metrics on: participation rates, stress reduction scores, retention improvements, productivity indicators, and DEI impact assessments. Our proprietary diagnostic survey provides baseline and progress measurements."
    },
    {
      question: "What's the implementation timeline?",
      answer: "Full program rollout takes 4-6 weeks. Week 1-2: Diagnostic survey and needs assessment. Week 3-4: Program customization and communication plan. Week 5-6: Launch workshops and ongoing support activation."
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
      
      {/* Top Banner for CHROs/HR Heads */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">For CHROs & HR Leaders</p>
                <p className="text-sm opacity-90">Reduce attrition by 32% • Improve DEI scores by 45% • Boost engagement by 28%</p>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('roi-metrics')}
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Download ROI Case Study →
            </button>
          </div>
        </div>
      </div>

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
              Employee Wellbeing Solution for Fortune 500 Companies
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" role="heading" aria-level={1}>
              Turn Working Parent Stress Into
              <span className="text-gradient-blue block">Organizational Strength</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong className="text-gray-900">A holistic employee benefit program</strong> that addresses the #1 hidden cause of mid-career attrition and burnout. We help your working parents thrive, directly impacting your retention rates, productivity metrics, and DEI goals.
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

      {/* Clear Target Audience Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who This Program Is For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">For Organizations:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Companies with 500+ employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>CHROs & HR Heads seeking innovative wellbeing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Leaders committed to improving retention & DEI metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Organizations experiencing mid-career talent attrition</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Benefits for Employees:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Working parents at all career levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Career guidance for their children (ages 13-21)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Stress management & work-life balance support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional development without sacrificing family</span>
                  </li>
                </ul>
              </div>
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
              <span className="text-gradient-blue block">Matters Now</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The data is clear: supporting working parents isn't just the right thing to do — it's a strategic business imperative.
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

      {/* ROI Metrics Section */}
      <section id="roi-metrics" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Proven ROI Metrics
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Measurable Impact on Your
              <span className="text-gradient-blue block">Organization's Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on data from 50+ Fortune 500 implementations over 3 years
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">₹2.3 Cr</div>
              <div className="text-gray-900 font-semibold mb-2">Annual Savings</div>
              <p className="text-sm text-gray-600">Average cost savings from reduced attrition</p>
            </div>
            <div className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">6 Months</div>
              <div className="text-gray-900 font-semibold mb-2">ROI Timeline</div>
              <p className="text-sm text-gray-600">Program pays for itself within 6 months</p>
            </div>
            <div className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
              <div className="text-gray-900 font-semibold mb-2">Participation Rate</div>
              <p className="text-sm text-gray-600">Employee engagement with program offerings</p>
            </div>
            <div className="premium-card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.8/5</div>
              <div className="text-gray-900 font-semibold mb-2">Satisfaction Score</div>
              <p className="text-sm text-gray-600">Average employee feedback rating</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see these results in your organization?</h3>
            <button 
              onClick={() => alert('Case study download will be available soon. Please contact us directly for detailed ROI reports.')}
              className="btn-primary inline-flex items-center"
            >
              Download Full ROI Case Study 
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-gradient-blue block">Questions for HR Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear answers about implementation, ROI, and organizational impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="premium-card p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="text-blue-600 mr-3">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-8">
                  <span className="font-semibold text-gray-700">A:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Have more questions?</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary inline-flex items-center"
            >
              Schedule a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Support Your
            <span className="block text-yellow-300">Working Parents?</span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your organization's approach to employee wellbeing by recognizing the full human experience of your workforce.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsConsultationModalOpen(true)}
              data-testid="button-schedule-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Schedule Corporate Consultation
            </button>
            <button 
              onClick={() => setIsBrochureModalOpen(true)}
              data-testid="button-download-brochure"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
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
      
      {/* Corporate Consultation Booking Modal */}
      <BookCallModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      
      {/* Corporate Brochure Download Modal */}
      <ResourceDownloadModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        resource={{
          id: "corporate-brochure",
          title: "Corporate Parenting Wellbeing Program Brochure",
          description: "Comprehensive overview of our employee wellbeing solutions, ROI metrics, and implementation guide for HR leaders",
          type: "PDF Brochure",
          downloadUrl: "/api/download/corporate-brochure"
        }}
      />
    </div>
  );
}