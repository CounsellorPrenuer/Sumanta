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
    <section id="ai-impact-section" className="section-spacing bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Elegant Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Over <span className="font-semibold text-slate-800">40% of jobs</span> will be replaced or transformed by AI.
            <span className="block mt-4 text-2xl lg:text-3xl text-gray-600 font-light">
              Is your career ready?
            </span>
          </h2>

          {/* Elegant Stats */}
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-16">
            {dangerStats.map((item, index) => (
              <div 
                key={index} 
                className="stagger-fade-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-3">{item.stat}</div>
                  <div className="text-lg text-gray-600 leading-relaxed">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Key Insights */}
          <div className="space-y-8">
            <div className="stagger-fade-up stagger-1">
              <h3 className="text-2xl font-light text-gray-900 mb-4 leading-relaxed">
                85% of careers that will exist in 2030 haven't even been invented yet.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                The job market is evolving exponentially. New roles emerge while traditional ones vanish overnight.
              </p>
            </div>

            <div className="stagger-fade-up stagger-2">
              <h3 className="text-2xl font-light text-gray-900 mb-4 leading-relaxed">
                AI is automating everything from accounting to design to healthcare.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                No industry is immune. Traditional career paths are being disrupted faster than ever.
              </p>
            </div>

            <div className="stagger-fade-up stagger-3">
              <h3 className="text-2xl font-light text-gray-900 mb-4 leading-relaxed">
                Career choices that felt "safe" a decade ago may no longer exist.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Job security now demands adaptability, continuous learning, and strategic career planning.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 stagger-fade-up stagger-4 border border-slate-200">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                That's why career guidance can't be random.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                It must be future-ready, AI-aware, and tailored specifically to you.
              </p>
            </div>
          </div>

          {/* Right: Elegant Data Visualization */}
          <div className="space-y-8">
            {/* Minimalist Automation Overview */}
            <div className="premium-card p-8 bg-white stagger-fade-up stagger-2">
              <h3 className="text-2xl font-light text-gray-900 mb-8">Automation Impact by Field</h3>
              
              <div className="space-y-6">
                {automationProgress.map((item, index) => (
                  <div key={index} className="stagger-fade-up" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-gray-900">{item.field}</div>
                      <div className="text-sm text-gray-500">{item.progress}%</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-1000 ease-out"
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

            {/* Clean Future Skills */}
            <div className="premium-card p-8 bg-white stagger-fade-up stagger-3">
              <h3 className="text-2xl font-light text-gray-900 mb-8">Future-Proof Skills</h3>
              
              <div className="space-y-4">
                {aiResistantCareers.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 py-3 stagger-fade-up"
                    style={{animationDelay: `${index * 0.1 + 1}s`}}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg text-gray-700">{skill}</span>
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