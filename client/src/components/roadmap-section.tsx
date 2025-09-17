import { CheckCircle, Brain, Users, Map, Shield, Briefcase, ArrowDown, Sparkles, Target, User, FileText, Heart, TrendingUp, Globe } from "lucide-react";

export default function RoadmapSection() {
  const serviceItems = [
    {
      icon: Brain,
      title: "Psychometric Assessment + Career Mapping",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Career Pivot Strategy + AI Skill Alignment",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileText,
      title: "Resume + LinkedIn Optimization",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Life Coaching for Energy & Focus",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Senior Transition Coaching",
      color: "from-teal-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Mentoria Platform Access (Lifetime)",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Performance optimized: removed expensive blur-3xl and animate-pulse effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-blue-100/15 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-indigo-100/25 to-cyan-100/20 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-100/15 to-pink-100/10 rounded-full opacity-20"></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute top-40 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Sophisticated Headline */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          {/* Elegant Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-50/80 to-blue-50/80 
                         backdrop-blur-sm border border-purple-200/50 text-purple-700 text-sm font-medium mb-12 
                         shadow-sm hover:shadow-md transition-all duration-300 breath-animation">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mr-3 animate-pulse"></div>
            Premium Career Transformation
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-10 leading-tight luxury-text stagger-fade-up">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium 
                           hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-500">
              Career Guidance
            </span>
            <br />
            <span className="text-gray-700 font-light">for the</span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium ml-3">
              Modern Professional
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light stagger-fade-up" 
             style={{animationDelay: '0.2s'}}>
            Designed for <span className="font-medium text-gray-800">mid-career professionals</span>, 
            <span className="font-medium text-gray-800"> functional leaders</span>, and 
            <span className="font-medium text-gray-800"> C-suite talent</span> seeking clarity, confidence, 
            and direction in the age of transition.
          </p>
        </div>

        {/* Elegant Services Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceItems.map((service, index) => (
              <div
                key={index}
                className="group relative premium-card bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-10 
                          hover:shadow-2xl hover:shadow-purple-100/50 hover:-translate-y-2 hover:border-purple-200/80
                          transition-all duration-500 ease-out floating-card magnetic-card stagger-fade-up overflow-hidden"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/30 opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Service Content */}
                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon Container with Enhanced Animation */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center 
                                 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 
                                 transition-all duration-500 ease-out breath-animation`}>
                    <service.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Subtle Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-md opacity-0 
                                   group-hover:opacity-30 transition-opacity duration-500 scale-110`}></div>
                  </div>
                  
                  {/* Service Title */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mt-3 flex-shrink-0 
                                     group-hover:scale-150 transition-transform duration-300"></div>
                      <h3 className="text-xl font-semibold text-gray-900 leading-relaxed luxury-text
                                   group-hover:text-purple-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Elegant Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent 
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
              </div>
            ))}
          </div>
          
          {/* Premium Call-to-Action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-white/90 to-slate-50/90 
                           backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 breath-animation">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Comprehensive career transformation designed for senior professionals
              </span>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" 
                   style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}