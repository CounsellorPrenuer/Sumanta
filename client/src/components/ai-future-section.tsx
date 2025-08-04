import { AlertTriangle, TrendingUp, Brain, Shield, Zap, Target, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function AIFutureSection() {
  const [counters, setCounters] = useState({ jobs: 40, careers: 85 });

  const dangerStats = [
    {
      icon: AlertTriangle,
      stat: "40%",
      description: "of jobs will be replaced or transformed by AI",
      color: "text-red-600 bg-red-50 border-red-200",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      icon: Clock,
      stat: "85%",
      description: "of careers in 2030 haven't been invented yet",
      color: "text-orange-600 bg-orange-50 border-orange-200",
      bgGradient: "from-orange-50 to-yellow-50"
    }
  ];

  const solutionStats = [
    {
      icon: Shield,
      stat: "AI-Proof",
      description: "Future-ready career guidance",
      color: "text-green-600 bg-green-50 border-green-200",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Target,
      stat: "Tailored",
      description: "Personalized for your unique profile",
      color: "text-blue-600 bg-blue-50 border-blue-200",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  const automationProgress = [
    { field: "Accounting", progress: 85, risk: "High", color: "bg-red-500" },
    { field: "Data Entry", progress: 95, risk: "Critical", color: "bg-red-600" },
    { field: "Customer Service", progress: 70, risk: "High", color: "bg-orange-500" },
    { field: "Design", progress: 60, risk: "Medium", color: "bg-yellow-500" },
    { field: "Healthcare", progress: 45, risk: "Medium", color: "bg-yellow-400" },
    { field: "Marketing", progress: 55, risk: "Medium", color: "bg-orange-400" },
  ];

  const aiResistantCareers = [
    "Creative Strategy",
    "Human Psychology", 
    "Complex Problem Solving",
    "Emotional Intelligence",
    "Innovation Leadership",
    "Ethical Decision Making"
  ];

  return (
    <section id="ai-impact-section" className="section-spacing bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-30 parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full filter blur-3xl opacity-40 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-100 to-slate-100 rounded-full filter blur-3xl opacity-20 parallax-fast"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Premium Headline */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 text-slate-600 text-sm font-medium mb-12 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            The Future of Work
          </div>

          <h2 className="text-5xl lg:text-7xl font-extralight text-gray-900 mb-16 leading-[1.1] tracking-tight">
            Over <span className="relative font-medium text-slate-800">
              40% of jobs
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full opacity-30"></div>
            </span> will be transformed by AI.
            <span className="block mt-8 text-3xl lg:text-4xl text-gray-500 font-light">
              Is your career ready?
            </span>
          </h2>
        </div>

        {/* Revolutionary Three-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Column 1: Key Statistics */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="text-7xl lg:text-8xl font-extralight text-gray-800 mb-4 tracking-tighter">85%</div>
              <div className="text-xl text-gray-600 leading-relaxed font-light">
                of careers that will exist in 2030 haven't been invented yet
              </div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            <div className="premium-card bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-3xl p-8 stagger-fade-up floating-card">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Market Evolution</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The pace of career transformation is accelerating beyond historical precedent.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Industry Impact */}
          <div className="space-y-8">
            <div className="premium-card bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-2 floating-card">
              <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Automation Risk by Industry</h3>
              
              <div className="space-y-6">
                {automationProgress.slice(0, 4).map((item, index) => (
                  <div key={index} className="stagger-fade-up" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-gray-900">{item.field}</div>
                      <div className="text-sm font-medium text-gray-500">{item.progress}%</div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-gray-400 to-slate-600 transition-all duration-1000 ease-out"
                        style={{
                          width: `${item.progress}%`,
                          transitionDelay: `${index * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-3xl p-8 stagger-fade-up stagger-3 floating-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">AI Disruption</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Traditional career paths across industries are being fundamentally restructured by artificial intelligence.
              </p>
            </div>
          </div>

          {/* Column 3: The Solution */}
          <div className="space-y-8">
            <div className="premium-card bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-3xl p-8 stagger-fade-up stagger-4 floating-card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Future-Proof Strategy</h3>
                <p className="text-lg text-emerald-700 font-medium leading-relaxed">
                  Strategic, AI-aware career guidance tailored to your unique profile and goals.
                </p>
              </div>

              <div className="space-y-4">
                {aiResistantCareers.slice(0, 4).map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 border border-emerald-200 rounded-xl p-4 stagger-fade-up"
                    style={{animationDelay: `${index * 0.1 + 1}s`}}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-base font-medium text-gray-800">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white stagger-fade-up stagger-5 floating-card">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Get personalized guidance that's designed for the AI-driven future of work.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-medium">
                  <Target className="w-4 h-4 mr-2" />
                  Strategic Career Planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}