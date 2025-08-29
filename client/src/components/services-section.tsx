import { Brain, MessageCircle, Users, Video, Globe, FileText } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Psychometric Assessments",
      description: "Scientific assessments to understand your personality, interests, and aptitudes for informed career decisions.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: MessageCircle,
      title: "Career Counselling",
      description: "Personalized one-on-one sessions to explore career options and create actionable plans for your future.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Mentorship Platform",
      description: "Life-long access to expert mentorship and knowledge gateway for continuous career growth.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Video,
      title: "Career Webinars",
      description: "Regular webinars covering industry trends, career opportunities, and professional development.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Foreign Admissions",
      description: "Complete assistance with international university applications and admission processes.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: FileText,
      title: "CV Building & Career Readiness",
      description: "Professional resume building and career readiness programs for working professionals.",
      gradient: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass-primary px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            <Brain className="h-4 w-4" />
            Comprehensive Career Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" role="heading" aria-level={2}>
            Everything You Need to{" "}
            <span className="text-gradient-secondary">Succeed</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From psychometric assessments to career planning, I offer a complete suite of services to guide your educational and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass rounded-3xl p-8 hover-lift border border-white/10 group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
