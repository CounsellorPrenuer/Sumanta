import { ExternalLink, Users, Building2, GraduationCap, Play } from "lucide-react";
import mentoriaLogo from "@assets/Mentoria Logo 2024_1754300562202.png";

export default function MentoriaSection() {
  const stats = [
    {
      icon: Users,
      number: "3,50,000+",
      label: "Students and Professionals Mentored",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building2,
      number: "240+",
      label: "Corporate Partners",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: GraduationCap,
      number: "350+",
      label: "Schools and College Partners",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Play,
      number: "1000+",
      label: "Hours of Career Webinars",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Powered by Mentoria's
            <span className="text-gradient-blue block">Career Discovery Platform</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every Leadcrest Consulting plan includes lifetime access to Mentoria: India's most trusted platform for career discovery, mentorship, and lifelong upskilling.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="premium-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-gray-600 font-medium text-sm leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mentoria Logo & Link */}
        <div className="text-center">
          <a 
            href="https://www.mentoria.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            data-testid="mentoria-link"
          >
            <img 
              src={mentoriaLogo} 
              alt="Mentoria Logo" 
              className="h-12 w-auto object-contain"
            />
            
            <div className="text-left">
              <div className="text-gray-600 text-sm">
                Career Discovery Platform
              </div>
            </div>
            
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-2" />
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            Click to explore Mentoria's comprehensive career platform
          </p>
        </div>
      </div>
    </section>
  );
}