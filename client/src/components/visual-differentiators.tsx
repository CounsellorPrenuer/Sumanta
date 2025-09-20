import { useState } from "react";
import { Brain, Shield, TrendingUp, Users, Target, Sparkles, ChevronRight, Zap, Cpu, LineChart, Award, Briefcase, Globe } from "lucide-react";

export default function VisualDifferentiators() {
  const [activeTab, setActiveTab] = useState(0);

  const differentiators = [
    {
      id: 0,
      title: "Fortune 500 Insights",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      description: "Learn from global corporate leaders",
      visual: {
        icon: Globe,
        stats: ["24+ Years Experience", "500+ C-Suite Connections", "15 Industries"],
        features: [
          "Executive mindset coaching",
          "Board-level thinking",
          "Strategic decision frameworks",
          "Global best practices"
        ]
      },
      benefits: [
        { icon: Award, text: "Think like a CEO" },
        { icon: Users, text: "Build executive presence" },
        { icon: Target, text: "Fast-track promotions" }
      ]
    },
    {
      id: 1,
      title: "Data-Driven Approach",
      icon: LineChart,
      color: "from-green-500 to-emerald-500",
      description: "Decisions backed by analytics & science",
      visual: {
        icon: Brain,
        stats: ["95% Success Rate", "3,725+ Careers", "42 Assessment Tools"],
        features: [
          "Psychometric profiling",
          "Market demand analysis",
          "Salary benchmarking",
          "Success probability scoring"
        ]
      },
      benefits: [
        { icon: Target, text: "Eliminate guesswork" },
        { icon: LineChart, text: "Track measurable progress" },
        { icon: Sparkles, text: "Predictive career modeling" }
      ]
    },
    {
      id: 2,
      title: "Holistic Life Integration",
      icon: Users,
      color: "from-orange-500 to-red-500",
      description: "Balance ambition with wellbeing",
      visual: {
        icon: Heart,
        stats: ["360° Life View", "Work-Life Harmony", "Mental Wellness"],
        features: [
          "Family dynamics consideration",
          "Stress management techniques",
          "Purpose alignment",
          "Sustainable success planning"
        ]
      },
      benefits: [
        { icon: Users, text: "Strengthen relationships" },
        { icon: Sparkles, text: "Find meaningful work" },
        { icon: Shield, text: "Prevent burnout" }
      ]
    }
  ];

  const activeDiff = differentiators[activeTab];

  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Performance optimized: removed expensive blur-3xl effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            What Makes Us Different
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Four Pillars of <span className="text-gradient-blue">Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique approach combines cutting-edge technology, corporate wisdom, and human-centered coaching
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {differentiators.map((diff, index) => (
            <button
              key={diff.id}
              onClick={() => setActiveTab(index)}
              className={`
                relative p-6 rounded-2xl border-2 transition-all duration-300 group
                ${activeTab === index 
                  ? 'bg-white border-blue-400 shadow-xl scale-105' 
                  : 'bg-white/70 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }
              `}
            >
              <div className={`
                w-14 h-14 rounded-xl bg-gradient-to-r ${diff.color} 
                flex items-center justify-center mb-4 mx-auto
                ${activeTab === index ? 'animate-pulse-soft' : 'group-hover:animate-pulse-soft'}
              `}>
                <diff.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className={`
                font-semibold text-lg mb-2 
                ${activeTab === index ? 'text-gray-900' : 'text-gray-700'}
              `}>
                {diff.title}
              </h3>
              
              <p className="text-sm text-gray-600 line-clamp-2">
                {diff.description}
              </p>

              {activeTab === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Visual Infographic */}
            <div className={`p-12 bg-gradient-to-br ${activeDiff.color} relative overflow-hidden`}>
              {/* Decorative Elements */}
              {/* Performance optimized: removed expensive blur effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full opacity-40"></div>
              
              <div className="relative z-10">
                {/* Main Icon */}
                <div className="w-24 h-24 bg-white/30 rounded-2xl flex items-center justify-center mb-8">
                  <activeDiff.visual.icon className="w-12 h-12 text-white" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeDiff.visual.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/30 rounded-xl p-4 text-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl font-bold text-white">{stat.split(' ')[0]}</div>
                      <div className="text-xs text-white/80">{stat.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {activeDiff.visual.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/20 rounded-lg p-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ChevronRight className="w-5 h-5 text-white/90" />
                      <span className="text-white/90 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Benefits & Details */}
            <div className="p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeDiff.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeDiff.description}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800">Key Benefits</h4>
                {activeDiff.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${activeDiff.color} flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button 
                  onClick={() => {
                    const element = document.getElementById('packages');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`
                    w-full py-4 px-8 rounded-xl font-semibold text-white
                    bg-gradient-to-r ${activeDiff.color}
                    hover:shadow-xl transform hover:scale-105 transition-all duration-300
                    flex items-center justify-center gap-3 group
                  `}
                  data-testid={`button-learn-more-${activeDiff.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>Learn More About {activeDiff.title}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {differentiators.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeTab === index 
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

// Add missing Heart import
import { Heart } from "lucide-react";