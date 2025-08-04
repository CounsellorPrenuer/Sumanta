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
          
          {/* Impact Statistics - Eye-catching Numbers */}
          <div className="relative fade-in-up-elegant stagger-delay-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: 'hsl(220, 91%, 30%)'}}>
                  85%
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Jobs will be transformed by 2030
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: 'hsl(267, 47%, 35%)'}}>
                  2.4x
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Faster skill obsolescence rate
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: 'hsl(45, 93%, 45%)'}}>
                  18M
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  New AI-related jobs by 2025
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: 'hsl(220, 91%, 30%)'}}>
                  60%
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Professionals need reskilling
                </p>
              </div>
            </div>
          </div>
          
          {/* What's Changing - Enhanced with Animations */}
          <div className="relative">
            <div className="text-center mb-12 fade-in-up-elegant stagger-delay-1">
              <h3 className="text-4xl font-bold mb-4 elegant-underline" style={{color: 'hsl(220, 91%, 25%)'}}>
                What's Changing
              </h3>
              <div className="w-24 h-1 mx-auto rounded-full gradient-accent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Automation Impact */}
              <div className="group relative bg-white/90 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up-elegant stagger-delay-1">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300" 
                     style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                  <Cpu className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" style={{color: 'hsl(220, 91%, 50%)'}} />
                </div>
                <h4 className="text-xl font-bold text-center mb-3 transition-all duration-300" style={{color: 'hsl(220, 91%, 20%)'}}>
                  Widespread Automation
                </h4>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Every department is being transformed - from HR recruiting to financial analysis, marketing campaigns to engineering tasks.
                </p>
              </div>

              {/* AI Literacy Demand */}
              <div className="group relative bg-white/90 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up-elegant stagger-delay-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300" 
                     style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                  <Brain className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" style={{color: 'hsl(267, 47%, 50%)'}} />
                </div>
                <h4 className="text-xl font-bold text-center mb-3 transition-all duration-300" style={{color: 'hsl(267, 47%, 25%)'}}>
                  AI Literacy Required
                </h4>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Understanding and working alongside AI tools isn't optional anymore - it's becoming the baseline expectation.
                </p>
              </div>

              {/* New Success Metrics */}
              <div className="group relative bg-white/90 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up-elegant stagger-delay-3">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300" 
                     style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))', boxShadow: '0 8px 32px rgba(0,0,0,0.1)'}}>
                  <TrendingUp className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" style={{color: 'hsl(45, 93%, 50%)'}} />
                </div>
                <h4 className="text-xl font-bold text-center mb-3 transition-all duration-300" style={{color: 'hsl(45, 93%, 35%)'}}>
                  Relevance &gt; Tenure
                </h4>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Years of experience matter less than your ability to adapt, learn, and stay relevant in a rapidly changing landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Divider */}
          <div className="flex items-center justify-center fade-in-up-elegant stagger-delay-4">
            <div className="w-32 h-px gradient-accent"></div>
            <div className="mx-4 w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: 'hsl(267, 47%, 60%)'}}></div>
            <div className="w-32 h-px gradient-accent"></div>
          </div>

          {/* Success Stories Preview */}
          <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 fade-in-up-elegant stagger-delay-5">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3" style={{color: 'hsl(267, 47%, 25%)'}}>
                Real Career Transformations
              </h3>
              <p className="text-gray-600">See how professionals pivoted successfully</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-white/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))'}}>
                    <span className="text-sm font-bold" style={{color: 'hsl(220, 91%, 50%)'}}>SP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Software Engineer</div>
                    <div className="text-sm text-gray-600">→ AI Product Manager</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Leadcrest helped me identify transferable skills and position myself for AI leadership roles."
                </p>
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border border-white/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))'}}>
                    <span className="text-sm font-bold" style={{color: 'hsl(267, 47%, 50%)'}}>RK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marketing Manager</div>
                    <div className="text-sm text-gray-600">→ Growth Strategy Lead</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "The career audit revealed opportunities I never considered. Now I'm future-proof."
                </p>
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border border-white/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))'}}>
                    <span className="text-sm font-bold" style={{color: 'hsl(45, 93%, 50%)'}}>AM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">HR Specialist</div>
                    <div className="text-sm text-gray-600">→ People Analytics Lead</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Discovered how to leverage my people skills in the data-driven world."
                </p>
              </div>
            </div>
          </div>

          {/* How Leadcrest Helps - Enhanced with Premium Animations */}
          <div className="relative">
            <div className="text-center mb-12 fade-in-up-elegant stagger-delay-6">
              <h3 className="text-4xl font-bold mb-4 elegant-underline" style={{color: 'hsl(267, 47%, 25%)'}}>
                How Leadcrest Helps You Navigate This
              </h3>
              <div className="w-24 h-1 mx-auto rounded-full gradient-accent"></div>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Our proven methodology combines 24+ years of HR leadership with AI-age career strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadcrestHelps.map((item, index) => (
                <div key={index} 
                     className={`group relative bg-white/90 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full fade-in-up-elegant stagger-delay-${index + 1}`}>
                  <div className="h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300" 
                         style={{
                           background: index % 3 === 0 ? 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))' :
                                      index % 3 === 1 ? 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))' :
                                      'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))',
                           boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                         }}>
                      <item.icon className="w-7 h-7 group-hover:scale-105 transition-transform duration-300" 
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

          {/* Call-to-Action Section */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center fade-in-up-elegant stagger-delay-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't Wait for Disruption
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every month you delay is another month your competition gets ahead. 
                Start your AI-proof career transformation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                        style={{
                          background: 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))',
                          color: 'white'
                        }}>
                  Get Your Career Audit
                </button>
                <div className="text-center sm:text-left">
                  <div className="text-white font-semibold">Free 30-min Discovery Call</div>
                  <div className="text-gray-400 text-sm">No commitment. Just clarity.</div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  3725+ Professionals Guided
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  94% Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}