import { Brain, MessageCircle, Users, Video, Globe, FileText, ArrowRight } from "lucide-react";

export default function PremiumServices() {
  const services = [
    {
      icon: Brain,
      title: "Psychometric Assessment",
      description: "Scientific personality and aptitude analysis for informed career decisions.",
      features: ["DMIT Analysis", "Interest Profiling", "Skill Assessment"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: MessageCircle,
      title: "1-on-1 Career Counselling",
      description: "Personalized guidance sessions with expert career strategists.",
      features: ["Goal Setting", "Career Roadmap", "Industry Insights"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Foreign Admissions",
      description: "Complete support for international university applications.",
      features: ["University Selection", "Application Prep", "Visa Guidance"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: FileText,
      title: "Professional CV Building",
      description: "ATS-optimized resumes that get you noticed by recruiters.",
      features: ["ATS Optimization", "Industry Templates", "LinkedIn Profile"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Mentorship Platform",
      description: "Connect with industry experts for ongoing career guidance.",
      features: ["Expert Network", "Monthly Sessions", "Progress Tracking"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Video,
      title: "Career Webinars",
      description: "Regular sessions on industry trends and career opportunities.",
      features: ["Live Sessions", "Expert Speakers", "Q&A Sessions"],
      color: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Comprehensive Career Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for 
            <span className="text-gradient-blue block">Career Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From scientific assessments to personalized guidance, we provide a complete ecosystem of career development services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="premium-card p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-blue-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students and professionals who have achieved their career goals with our guidance.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}