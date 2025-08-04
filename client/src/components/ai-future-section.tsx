import { AlertTriangle, TrendingUp, Brain, Shield, Zap, Target, Clock, CheckCircle, Cpu, Users, Briefcase, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

export default function AIFutureSection() {
  const automationAreas = [
    "HR",
    "Finance", 
    "Marketing",
    "Engineering"
  ];

  const leadcrestHelps = [
    {
      icon: Shield,
      title: "Audit your career's AI resilience",
      description: "Comprehensive assessment of your current role's future viability"
    },
    {
      icon: Target,
      title: "Map your transferrable value",
      description: "Identify skills and experiences that translate across industries"
    },
    {
      icon: TrendingUp,
      title: "Pivot without starting over",
      description: "Strategic career transitions that build on your existing foundation"
    },
    {
      icon: Briefcase,
      title: "Reposition for future-proof roles",
      description: "Position yourself in careers that thrive alongside AI"
    },
    {
      icon: BookOpen,
      title: "Gain lifetime mentorship via Mentoria",
      description: "Ongoing guidance through our comprehensive mentorship platform"
    }
  ];

  return (
    <section id="ai-impact-section" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-100 to-slate-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Headline with Animations */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full border-2 text-sm font-medium mb-12 shadow-lg fade-in-up-elegant" 
               style={{
                 background: 'rgba(255, 255, 255, 0.8)',
                 backdropFilter: 'blur(20px)',
                 borderColor: 'hsl(220, 91%, 70%)',
                 color: 'hsl(220, 91%, 25%)'
               }}>
            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: 'hsl(220, 91%, 50%)'}}></div>
            AI Impact Reality
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight fade-in-up-elegant stagger-delay-2" style={{color: 'hsl(220, 91%, 20%)'}}>
            The AI Shift Isn't Coming.
            <span className="block fade-in-up-elegant stagger-delay-3" style={{color: 'hsl(267, 47%, 25%)'}}>It's Here.</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-700 leading-relaxed">
            <p className="font-semibold text-2xl fade-in-up-elegant stagger-delay-4" style={{color: 'hsl(220, 91%, 25%)'}}>
              40% of roles are being redefined.
            </p>
            <p className="text-lg fade-in-up-elegant stagger-delay-5">
              Generic experience ≠ career security. <span className="font-semibold">Titles won't protect you, adaptability will.</span>
            </p>
          </div>
        </div>

        {/* Sophisticated Single-Column Flow */}
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* What's Changing - Enhanced with Animations */}
          <div className="relative">
            <div className="text-center mb-12 fade-in-up-elegant stagger-delay-6">
              <h3 className="text-4xl font-bold mb-4 elegant-underline" style={{color: 'hsl(220, 91%, 25%)'}}>
                What's Changing
              </h3>
              <div className="w-24 h-1 mx-auto rounded-full gradient-accent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Automation Impact */}
              <div className="group relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg card-lift-hover transition-all duration-500 fade-in-up-elegant stagger-delay-1">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{background: 'linear-gradient(135deg, hsl(220, 91%, 95%), hsl(220, 91%, 98%))'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-glow-hover transition-all duration-300" 
                       style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                    <Cpu className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{color: 'hsl(220, 91%, 50%)'}} />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-3 group-hover:text-opacity-80 transition-all duration-300" style={{color: 'hsl(220, 91%, 20%)'}}>
                    Widespread Automation
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Every department is being transformed - from HR recruiting to financial analysis, marketing campaigns to engineering tasks.
                  </p>
                </div>
              </div>

              {/* AI Literacy Demand */}
              <div className="group relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg card-lift-hover transition-all duration-500 fade-in-up-elegant stagger-delay-2">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{background: 'linear-gradient(135deg, hsl(267, 47%, 95%), hsl(267, 47%, 98%))'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-glow-hover transition-all duration-300" 
                       style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                    <Brain className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{color: 'hsl(267, 47%, 50%)'}} />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-3 group-hover:text-opacity-80 transition-all duration-300" style={{color: 'hsl(267, 47%, 25%)'}}>
                    AI Literacy Required
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Understanding and working alongside AI tools isn't optional anymore - it's becoming the baseline expectation.
                  </p>
                </div>
              </div>

              {/* New Success Metrics */}
              <div className="group relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg card-lift-hover transition-all duration-500 fade-in-up-elegant stagger-delay-3">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{background: 'linear-gradient(135deg, hsl(45, 93%, 95%), hsl(45, 93%, 98%))'}}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-glow-hover transition-all duration-300" 
                       style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                    <TrendingUp className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{color: 'hsl(45, 93%, 50%)'}} />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-3 group-hover:text-opacity-80 transition-all duration-300" style={{color: 'hsl(45, 93%, 35%)'}}>
                    Relevance &gt; Tenure
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Years of experience matter less than your ability to adapt, learn, and stay relevant in a rapidly changing landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Divider */}
          <div className="flex items-center justify-center fade-in-up-elegant stagger-delay-4">
            <div className="w-32 h-px gradient-accent"></div>
            <div className="mx-4 w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: 'hsl(267, 47%, 60%)'}}></div>
            <div className="w-32 h-px gradient-accent"></div>
          </div>

          {/* How Leadcrest Helps - Enhanced with Premium Animations */}
          <div className="relative">
            <div className="text-center mb-12 fade-in-up-elegant stagger-delay-5">
              <h3 className="text-4xl font-bold mb-4 elegant-underline" style={{color: 'hsl(267, 47%, 25%)'}}>
                How Leadcrest Helps You Navigate This
              </h3>
              <div className="w-24 h-1 mx-auto rounded-full gradient-accent"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadcrestHelps.map((item, index) => (
                <div key={index} 
                     className={`group relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg card-lift-hover transition-all duration-500 h-full fade-in-up-elegant stagger-delay-${index + 1}`}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{
                         background: index % 3 === 0 ? 'linear-gradient(135deg, hsl(220, 91%, 97%), hsl(220, 91%, 99%))' :
                                    index % 3 === 1 ? 'linear-gradient(135deg, hsl(267, 47%, 97%), hsl(267, 47%, 99%))' :
                                    'linear-gradient(135deg, hsl(45, 93%, 97%), hsl(45, 93%, 99%))'
                       }}></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 icon-glow-hover transition-all duration-300" 
                         style={{
                           background: index % 3 === 0 ? 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))' :
                                      index % 3 === 1 ? 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))' :
                                      'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))',
                           boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                         }}>
                      <item.icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" 
                                 style={{
                                   color: index % 3 === 0 ? 'hsl(220, 91%, 50%)' :
                                          index % 3 === 1 ? 'hsl(267, 47%, 50%)' :
                                          'hsl(45, 93%, 50%)'
                                 }} />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}