import { CheckCircle, Brain, Users, Map, Shield, Briefcase, ArrowRight, Sparkles } from "lucide-react";

export default function RoadmapSection() {
  const roadmapSteps = [
    {
      step: "01",
      title: "Take India's Most Reliable Psychometric Assessment",
      description: "that measures your core interests, personality traits and abilities",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      step: "02",
      title: "1:1 Counselling with a globally certified expert",
      description: "to build your AI-Proof Career Action Plan",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      step: "03",
      title: "Receive Your Career Roadmap",
      description: "aligned with your interests, strengths, and the future of work",
      icon: Map,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200"
    },
    {
      step: "04",
      title: "Get Lifetime Access to Mentoria's AI-proof Career Platform",
      description: "with ongoing support and career evolution tools",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      step: "05",
      title: "Get support in College Admission Planning",
      description: "Internship and Job Applications, CV Building and more",
      icon: Briefcase,
      color: "from-teal-500 to-blue-600",
      bgColor: "from-teal-50 to-blue-50",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-80 h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Premium Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-600 text-sm font-medium mb-12 shadow-sm breath-animation">
            <Sparkles className="w-4 h-4 mr-3" />
            Our Proven Process
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight luxury-text">
            We don't give advice.
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
              We build your roadmap.
            </span>
          </h2>
        </div>

        {/* Roadmap Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 lg:space-y-16">
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className={`stagger-fade-up floating-card magnetic-card ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center gap-12 lg:gap-16`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Step Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl breath-animation`}>
                      {step.step}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight luxury-text">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Step Visual */}
                <div className="flex-shrink-0">
                  <div className={`premium-card w-80 h-80 bg-gradient-to-br ${step.bgColor} ${step.borderColor} border rounded-3xl p-12 subtle-glow floating-card magnetic-card`}>
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center breath-animation`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Step {step.step}
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow (except for last step) */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-80">
                    <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center breath-animation">
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <div className="premium-card bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 max-w-4xl mx-auto text-white stagger-fade-up floating-card magnetic-card subtle-glow">
            <h3 className="text-3xl lg:text-4xl font-medium mb-6 luxury-text">
              Apply. Plan. Evolve.
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're 14 or 44.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-4 border-white flex items-center justify-center breath-animation"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-medium">Trusted by 50,000+ students</div>
                <div className="text-sm text-gray-400">Across 15+ countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}