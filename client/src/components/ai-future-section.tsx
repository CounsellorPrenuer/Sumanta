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
    { field: "Data Entry", progress: 95, risk: "Critical" },
    { field: "Bookkeeping", progress: 92, risk: "Critical" },
    { field: "Translation", progress: 90, risk: "Critical" },
    { field: "Tax Preparation", progress: 88, risk: "Critical" },
    { field: "Basic Accounting", progress: 85, risk: "Critical" },
    { field: "Telemarketing", progress: 82, risk: "Critical" },
    { field: "Customer Service", progress: 80, risk: "Critical" },
    { field: "Proofreading", progress: 78, risk: "High" },
    { field: "Content Writing", progress: 75, risk: "High" },
    { field: "Legal Research", progress: 75, risk: "High" },
    { field: "Data Analysis", progress: 72, risk: "High" },
    { field: "Software Engineering", progress: 70, risk: "High" },
    { field: "Market Research", progress: 70, risk: "High" },
    { field: "Social Media Management", progress: 68, risk: "High" },
    { field: "Financial Analysis", progress: 65, risk: "High" },
    { field: "Recruitment", progress: 65, risk: "High" },
    { field: "Graphic Design", progress: 63, risk: "High" },
    { field: "Video Production", progress: 60, risk: "High" },
    { field: "Quality Assurance", progress: 58, risk: "Medium" },
    { field: "Video Editing", progress: 57, risk: "Medium" },
    { field: "Web Design", progress: 55, risk: "Medium" },
    { field: "Medical Diagnosis", progress: 55, risk: "Medium" },
    { field: "Inventory Management", progress: 53, risk: "Medium" },
    { field: "Email Marketing", progress: 52, risk: "Medium" },
    { field: "Photo Editing", progress: 50, risk: "Medium" },
    { field: "Administrative Support", progress: 48, risk: "Medium" },
    { field: "Interior Design", progress: 45, risk: "Medium" },
    { field: "Technical Writing", progress: 42, risk: "Low" },
    { field: "Project Management", progress: 40, risk: "Low" },
    { field: "Sales Consulting", progress: 38, risk: "Low" }
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

        {/* Sophisticated Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Column 1: Future Career Insights */}
          <div className="space-y-8">
            <div className="premium-card bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 border border-blue-200 rounded-3xl p-10 stagger-fade-up floating-card magnetic-card subtle-glow">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 breath-animation">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline space-x-4 mb-4">
                    <div className="text-6xl lg:text-7xl font-extralight text-gray-800 tracking-tighter animate-number luxury-text">85%</div>
                    <div className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-100 rounded-full">2030 Prediction</div>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 luxury-text">Future Career Revolution</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    of careers that will exist in 2030 haven't been invented yet. The job market is evolving exponentially faster than any historical precedent.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-3xl p-8 stagger-fade-up stagger-2 floating-card magnetic-card subtle-glow">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 breath-animation">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 luxury-text">Future-Proof Strategy</h3>
                <p className="text-lg text-emerald-700 font-medium leading-relaxed">
                  Strategic, AI-aware career guidance tailored to your unique profile and goals.
                </p>
              </div>

              <div className="space-y-4">
                {aiResistantCareers.slice(0, 4).map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 border border-emerald-200 rounded-xl p-4 stagger-fade-up floating-card magnetic-card"
                    style={{animationDelay: `${index * 0.1 + 0.6}s`}}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full breath-animation"></div>
                      <span className="text-base font-medium text-gray-800">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Dynamic Industry Disruption */}
          <div className="space-y-8">
            <div className="premium-card bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-3 floating-card magnetic-card subtle-glow">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-medium text-gray-900 luxury-text">AI Automation Risk</h3>
                <div className="px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-700 rounded-full text-sm font-medium">
                  Live Analysis
                </div>
              </div>
              
              {/* Scrolling Industries List */}
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 space-y-4 animate-scroll">
                  {[...automationProgress, ...automationProgress].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 stagger-fade-up floating-card"
                      style={{animationDelay: `${(index % automationProgress.length) * 0.05}s`}}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          item.risk === 'Critical' ? 'bg-red-500' : 
                          item.risk === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                        } breath-animation`}></div>
                        <span className="font-medium text-gray-900">{item.field}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-bold text-gray-700 animate-number">{item.progress}%</div>
                        <div className="w-16 bg-slate-200 rounded-full h-2 premium-progress">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                              item.risk === 'Critical' ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                              item.risk === 'High' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 
                              'bg-gradient-to-r from-yellow-400 to-yellow-600'
                            }`}
                            style={{width: `${item.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Gradient fade at top and bottom */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="premium-card bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white stagger-fade-up stagger-4 floating-card magnetic-card subtle-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 breath-animation">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Get personalized guidance that's designed for the AI-driven future of work.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-medium breath-animation">
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