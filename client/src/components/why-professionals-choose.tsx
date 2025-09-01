import { Users, Briefcase, TrendingUp, Award, Building2, Globe } from "lucide-react";

export default function WhyProfessionalsChoose() {
  const industries = [
    { name: "Telecom", icon: "📡" },
    { name: "Retail", icon: "🛍️" },
    { name: "Pharma", icon: "💊" },
    { name: "FMCG", icon: "📦" },
    { name: "FMCD", icon: "🏭" },
    { name: "Technology", icon: "💻" },
  ];

  const reasons = [
    {
      icon: Award,
      title: "Executive-Level Mentorship",
      description: "Direct guidance from Fortune 500 HR leadership, not junior counselors",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "All Career Stages",
      description: "From Freshers to Senior Professionals, tailored for your journey",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Briefcase,
      title: "Industry-Specific Expertise",
      description: "Deep understanding of sector-specific challenges and opportunities",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Success Track Record",
      description: "95% success rate with measurable career advancement outcomes",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50/50 to-indigo-50">
      <div className="container-custom">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border border-blue-300 text-blue-700 font-semibold mb-6">
            <Users className="w-5 h-5 mr-2" />
            Trusted by 3725+ Professionals
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why 3725+ Professionals Chose
            <span className="text-gradient-blue block mt-2">Leadcrest Consulting</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We provide <span className="font-bold text-blue-600">executive-level mentorship</span> for <span className="font-bold">Freshers, Middle Management, and Senior Professionals</span> in{" "}
            <span className="font-bold">Telecom, Retail, Pharma, FMCG, FMCD, Technology</span> and other related sectors.
          </p>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-semibold text-gray-800">{industry.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="premium-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3,725+</div>
              <div className="text-sm text-gray-600">Professionals Guided</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}