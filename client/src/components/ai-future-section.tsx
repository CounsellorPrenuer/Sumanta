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
        {/* Sophisticated Headline */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-slate-700 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4 mr-2 text-blue-600" />
            Career Future Insights
          </div>

          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Over <span className="relative font-semibold text-slate-800">
              40% of jobs
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </span> will be replaced or transformed by AI.
            <span className="block mt-4 text-2xl lg:text-3xl text-gray-600 font-light">
              Is your career ready?
            </span>
          </h2>

          {/* Beautiful Stats Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {dangerStats.map((item, index) => (
              <div 
                key={index} 
                className="premium-card bg-white/80 backdrop-blur-sm border border-slate-200 p-8 rounded-3xl stagger-fade-up floating-card"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">{item.stat}</div>
                  <div className="text-lg text-gray-600 leading-relaxed">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sophisticated Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Elegant Key Insights */}
          <div className="space-y-8">
            <div className="premium-card bg-white/60 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-1 floating-card">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 leading-relaxed">
                    The job market is evolving exponentially.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    New roles emerge while traditional ones vanish overnight. The pace of change is unprecedented.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card bg-white/60 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-2 floating-card">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 leading-relaxed">
                    No industry is immune to automation.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From accounting to creative fields, AI is transforming how work gets done across all sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card bg-white/60 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-3 floating-card">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 leading-relaxed">
                    Job security now demands strategic planning.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Adaptability and continuous learning are essential for long-term career sustainability.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-3xl p-8 stagger-fade-up stagger-4 floating-card">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    That's why career guidance can't be random.
                  </h3>
                  <p className="text-lg text-emerald-700 font-medium leading-relaxed">
                    It must be future-ready, AI-aware, and tailored specifically to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Beautiful Data Visualization */}
          <div className="space-y-8">
            {/* Sophisticated Automation Dashboard */}
            <div className="premium-card bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 stagger-fade-up stagger-2 floating-card">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-medium text-gray-900">Automation Impact</h3>
                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  Live Analysis
                </div>
              </div>
              
              <div className="space-y-6">
                {automationProgress.map((item, index) => (
                  <div key={index} className="stagger-fade-up" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-gray-900">{item.field}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.risk === 'Critical' ? 'bg-red-100 text-red-700' : 
                        item.risk === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.progress}% Risk
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                          item.risk === 'Critical' ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                          item.risk === 'High' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 
                          'bg-gradient-to-r from-yellow-400 to-yellow-600'
                        }`}
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

            {/* Elegant Future Skills */}
            <div className="premium-card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 stagger-fade-up stagger-3 floating-card">
              <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                Future-Proof Career Skills
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {aiResistantCareers.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 border border-green-200 rounded-xl p-4 stagger-fade-up floating-card"
                    style={{animationDelay: `${index * 0.1 + 1}s`}}
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-lg font-medium text-gray-800">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white text-center">
                <div className="text-xl font-semibold mb-2">Ready to Future-Proof Your Career?</div>
                <div className="text-green-100">Get AI-aware guidance tailored specifically to you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}