import { AlertTriangle, TrendingUp, Brain, Shield, Zap, Target, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function AIFutureSection() {
  const [counters, setCounters] = useState({ jobs: 0, careers: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          setTimeout(() => {
            setCounters({ jobs: 40, careers: 85 });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('ai-impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const dangerStats = [
    {
      icon: AlertTriangle,
      stat: `${counters.jobs}%`,
      description: "of jobs will be replaced or transformed by AI",
      color: "text-red-600 bg-red-50 border-red-200",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      icon: Clock,
      stat: `${counters.careers}%`,
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
    <section id="ai-impact-section" className="section-spacing bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-20 parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-25 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300 rounded-full filter blur-3xl opacity-10 parallax-fast"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60 parallax-fast"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50 parallax-medium"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-70 parallax-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Dramatic Headline */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 border-2 border-red-200 text-red-700 text-sm font-bold mb-8 danger-pulse">
            <AlertTriangle className="w-5 h-5 mr-3" />
            CAREER DISRUPTION ALERT
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Over <span className="relative">
              <span className="gradient-text-animate">{counters.jobs}% of jobs</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            </span> will be replaced or transformed by AI.
            <span className="block mt-6 text-4xl lg:text-5xl font-bold text-slate-700 typewriter-effect">
              Is your career ready?
            </span>
          </h2>

          {/* Danger vs Solution Stats */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Danger Zone */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">⚠️ The Danger Zone</h3>
              {dangerStats.map((item, index) => (
                <div 
                  key={index} 
                  className={`premium-card p-6 border-2 ${item.color} bg-gradient-to-br ${item.bgGradient} stagger-fade-up danger-pulse`}
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-black mb-1">{item.stat}</div>
                      <div className="text-sm font-medium leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution Zone */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ The Solution</h3>
              {solutionStats.map((item, index) => (
                <div 
                  key={index} 
                  className={`premium-card p-6 border-2 ${item.color} bg-gradient-to-br ${item.bgGradient} stagger-fade-up success-glow`}
                  style={{animationDelay: `${index * 0.3 + 0.6}s`}}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-black mb-1">{item.stat}</div>
                      <div className="text-sm font-medium leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Key Insights */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 stagger-fade-up stagger-1">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    85% of careers that will exist in 2030 haven't even been invented yet.
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The job market is evolving exponentially. New roles emerge while traditional ones vanish overnight.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 stagger-fade-up stagger-2">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    AI is automating everything from accounting to design to healthcare.
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    No industry is immune. Traditional career paths are being disrupted faster than ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 stagger-fade-up stagger-3">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Career choices that felt "safe" a decade ago may no longer exist.
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Job security now demands adaptability, continuous learning, and strategic career planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white stagger-fade-up stagger-4 success-glow">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    That's why career guidance can't be random.
                  </h3>
                  <p className="text-green-100 text-lg font-medium leading-relaxed">
                    It must be future-ready, AI-aware, and tailored specifically to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Automation Dashboard */}
          <div className="space-y-8">
            {/* Automation Risk Meter */}
            <div className="premium-card p-8 bg-white stagger-fade-up stagger-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Automation Risk Dashboard</h3>
                <div className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                  LIVE DATA
                </div>
              </div>
              
              <div className="space-y-4">
                {automationProgress.map((item, index) => (
                  <div key={index} className="stagger-fade-up" style={{animationDelay: `${index * 0.1 + 1}s`}}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900">{item.field}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        item.risk === 'Critical' ? 'bg-red-600' : 
                        item.risk === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                      }`}>
                        {item.risk} Risk
                      </div>
                    </div>
                    <div className="progress-bar h-3">
                      <div 
                        className={`progress-fill h-full ${item.color}`}
                        style={{
                          animationDelay: `${index * 0.1 + 1}s`
                        } as any}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-600 mt-1">{item.progress}% Automated</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI-Resistant Careers */}
            <div className="premium-card p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 stagger-fade-up stagger-3 success-glow">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                🛡️ AI-Resistant Career Skills
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {aiResistantCareers.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 border border-green-300 rounded-xl p-4 text-center slide-in-scale"
                    style={{animationDelay: `${index * 0.1 + 1.5}s`}}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-semibold">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-600 text-white rounded-xl text-center">
                <div className="font-bold text-lg">Ready to Future-Proof Your Career?</div>
                <div className="text-sm text-green-100 mt-1">Get AI-aware guidance tailored to you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}