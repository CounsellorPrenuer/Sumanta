import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import manpreetImage from "@assets/Image_MANPREET KAUR_Counselors_1754240707994.jpeg";

export default function PremiumHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: "5000+", label: "Students Guided" },
    { icon: Award, value: "23+", label: "Years Experience" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  const highlights = [
    "Certified Career Counsellor (IAAP, APCDA, GCDA)",
    "Founder - CCC Education Foundation",
    "Mentoria Certified Partner",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{animationDelay: '4s'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              India's Leading Career Counsellor
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your
              <span className="text-gradient-blue block">Career Journey</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Get personalized career guidance from Manpreet Kaur, with 23+ years of experience helping students and professionals achieve their dreams.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('packages')}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="fade-in-up stagger-2 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Image */}
              <div className="premium-card p-8 relative z-10">
                <img 
                  src={manpreetImage}
                  alt="Manpreet Kaur - Career Counsellor" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -left-6 premium-card p-4 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">23+ Years</div>
                      <div className="text-sm text-gray-600">Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Floating Students Card */}
                <div className="absolute -top-6 -right-6 premium-card p-4 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">5000+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-5 -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}