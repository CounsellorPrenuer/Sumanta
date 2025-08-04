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
        {/* New Headline */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full border-2 text-sm font-medium mb-12 shadow-lg" 
               style={{
                 background: 'rgba(255, 255, 255, 0.8)',
                 backdropFilter: 'blur(20px)',
                 borderColor: 'hsl(220, 91%, 70%)',
                 color: 'hsl(220, 91%, 25%)'
               }}>
            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: 'hsl(220, 91%, 50%)'}}></div>
            AI Impact Reality
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight" style={{color: 'hsl(220, 91%, 20%)'}}>
            The AI Shift Isn't Coming.
            <span className="block" style={{color: 'hsl(267, 47%, 25%)'}}>It's Here.</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-700 leading-relaxed">
            <p className="font-semibold text-2xl" style={{color: 'hsl(220, 91%, 25%)'}}>
              40% of roles are being redefined.
            </p>
            <p className="text-lg">
              Generic experience ≠ career security. <span className="font-semibold">Titles won't protect you, adaptability will.</span>
            </p>
          </div>
        </div>

        {/* New Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Column 1: What's Changing */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-xl" 
                 style={{borderColor: 'hsl(220, 91%, 85%)'}}>
              <h3 className="text-3xl font-bold mb-6" style={{color: 'hsl(220, 91%, 25%)'}}>
                What's Changing:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))'}}>
                    <Cpu className="w-6 h-6" style={{color: 'hsl(220, 91%, 50%)'}} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: 'hsl(220, 91%, 20%)'}}>
                      Automation across HR, Finance, Marketing, Engineering
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {automationAreas.map((area, index) => (
                        <span key={index} 
                              className="px-3 py-1 rounded-full text-sm font-medium border"
                              style={{
                                backgroundColor: 'hsl(220, 91%, 95%)',
                                borderColor: 'hsl(220, 91%, 80%)',
                                color: 'hsl(220, 91%, 30%)'
                              }}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))'}}>
                    <Brain className="w-6 h-6" style={{color: 'hsl(267, 47%, 50%)'}} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: 'hsl(267, 47%, 25%)'}}>
                      Demand for AI literacy and reinvention
                    </h4>
                    <p className="text-gray-600">
                      Continuous learning and adaptation becoming core job requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))'}}>
                    <TrendingUp className="w-6 h-6" style={{color: 'hsl(45, 93%, 50%)'}} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: 'hsl(45, 93%, 35%)'}}>
                      Relevance &gt; Tenure
                    </h4>
                    <p className="text-gray-600">
                      Future value determined by adaptability, not years of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: How Leadcrest Helps */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-xl" 
                 style={{borderColor: 'hsl(267, 47%, 85%)'}}>
              <h3 className="text-3xl font-bold mb-8" style={{color: 'hsl(267, 47%, 25%)'}}>
                Leadcrest Helps You:
              </h3>
              
              <div className="space-y-6">
                {leadcrestHelps.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                         style={{
                           background: index % 3 === 0 ? 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))' :
                                      index % 3 === 1 ? 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))' :
                                      'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))'
                         }}>
                      <item.icon className="w-6 h-6" 
                                 style={{
                                   color: index % 3 === 0 ? 'hsl(220, 91%, 50%)' :
                                          index % 3 === 1 ? 'hsl(267, 47%, 50%)' :
                                          'hsl(45, 93%, 50%)'
                                 }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}