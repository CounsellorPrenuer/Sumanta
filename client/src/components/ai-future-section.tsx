import { AlertTriangle, TrendingUp, Brain, Shield } from "lucide-react";

export default function AIFutureSection() {
  const stats = [
    {
      icon: AlertTriangle,
      stat: "40%",
      description: "of jobs will be replaced or transformed by AI",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: TrendingUp,
      stat: "85%",
      description: "of careers in 2030 haven't been invented yet",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Brain,
      stat: "Multiple",
      description: "industries being automated daily",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Shield,
      stat: "Future-Ready",
      description: "guidance is the only solution",
      color: "text-green-600 bg-green-100"
    }
  ];

  const automatedFields = [
    "Accounting",
    "Design", 
    "Healthcare",
    "Marketing",
    "Data Entry",
    "Customer Service"
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl parallax-medium"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Over <span className="gradient-text-animate">40% of jobs</span> will be replaced or transformed by AI.
            <span className="block mt-4 text-3xl lg:text-4xl font-semibold text-gray-700">
              Is your career ready?
            </span>
          </h2>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((item, index) => (
              <div 
                key={index} 
                className="premium-card p-6 text-center floating-card hover:shadow-xl transition-all duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    85% of careers that will exist in 2030 haven't even been invented yet.
                  </h3>
                  <p className="text-gray-600">
                    The job market is evolving faster than ever. New roles emerge while others disappear.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI is automating everything from accounting to design to healthcare.
                  </h3>
                  <p className="text-gray-600">
                    Traditional career paths are being disrupted across all industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Career choices that felt "safe" a decade ago may no longer exist.
                  </h3>
                  <p className="text-gray-600">
                    Job security now requires adaptability and future-focused planning.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      That's why career guidance can't be random.
                    </h3>
                    <p className="text-gray-700 font-medium">
                      It must be future-ready, AI-aware, and tailored to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Automated Fields */}
          <div className="fade-in-up stagger-2">
            <div className="premium-card p-8 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Fields Being Automated Right Now
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {automatedFields.map((field, index) => (
                  <div 
                    key={index}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 text-center floating-card"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-red-600 font-semibold">{field}</div>
                    <div className="text-xs text-red-500 mt-1">At Risk</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                <div className="text-green-700 font-semibold">The Solution?</div>
                <div className="text-sm text-green-600 mt-1">AI-Resistant Career Planning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}