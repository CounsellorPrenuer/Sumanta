import { Award, Users, Globe, BookOpen, ArrowRight, Play, GraduationCap, Brain, HandHeart, Lightbulb } from "lucide-react";
import manpreetImage from "@assets/Image_MANPREET KAUR_Counselors_1754240707994.jpeg";

export default function PremiumAbout() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: Award,
      title: "23+ Years",
      subtitle: "Professional Experience",
      description: "Over two decades of dedicated service in career counseling and education guidance."
    },
    {
      icon: Users,
      title: "5000+",
      subtitle: "Students Guided",
      description: "Successfully mentored thousands of students towards their dream careers."
    },
    {
      icon: Globe,
      title: "15+",
      subtitle: "Countries Reached",
      description: "Helping students secure admissions in top universities worldwide."
    },
    {
      icon: BookOpen,
      title: "95%",
      subtitle: "Success Rate",
      description: "Exceptional track record in helping students achieve their career goals."
    }
  ];

  const certifications = [
    "Certified Career Counsellor (IAAP)",
    "Accredited Professional (APCDA)", 
    "Global Career Development (GCDA)",
    "Mentoria Certified Partner"
  ];

  return (
    <section id="about" className="pt-24 lg:pt-32 pb-12 lg:pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="fade-in-up relative">
            {/* Floating background orbs */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-16 -right-12 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-indigo-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-600 text-sm font-medium mb-12 shadow-lg hover:shadow-xl transition-all duration-300 breath-animation magnetic-card">
                <Award className="w-4 h-4 mr-3 animate-pulse" />
                Led by India's Most Trusted Career Architect
              </div>

              <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight luxury-text relative">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium animate-gradient-x hover:scale-105 transition-transform duration-500 inline-block">
                  Manpreet Kaur
                </span>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-indigo-600/5 blur-xl -z-10 animate-pulse"></div>
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over <strong>23 years of experience</strong>, Manpreet Kaur has guided <strong>5,000+ students and professionals</strong> across India and abroad. She's a certified career counsellor (IAAP, APCDA, GCDA), founder of Leadcrest Consulting (NGO), and a Mentoria-certified partner.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 magnetic-card relative overflow-hidden">
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-blue-200/30 to-transparent rounded-full blur-xl"></div>
              
              <p className="text-lg font-medium text-gray-900 italic relative z-10">
                <span className="text-2xl text-blue-600 mr-2">"</span>
                My mission: Make every individual career-ready — not just for today, but for the next decade.
                <span className="text-2xl text-blue-600 ml-2">"</span>
              </p>
            </div>

            {/* Mini Credentials Bar - Enhanced */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="group flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 magnetic-card hover:border-purple-300">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">IAAP, APCDA, GCDA</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 magnetic-card hover:border-blue-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">5,000+ Lives</div>
                  <div className="text-xs text-gray-600">Transformed</div>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 magnetic-card hover:border-emerald-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">NGO</div>
                  <div className="text-xs text-gray-600">Founder</div>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 magnetic-card hover:border-orange-300">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-orange-700 transition-colors">AI-Skilling</div>
                  <div className="text-xs text-gray-600">Advocate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('packages')}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Find My Career Path
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Book a Free Career Clarity Call
              </button>
            </div>
          </div>

          {/* Right Content - Beautiful Image */}
          <div className="fade-in-up stagger-2 relative">
            <div className="relative">
              {/* Enhanced background decorative elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full opacity-60 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-300/25 to-indigo-300/25 rounded-full opacity-40 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/10 to-blue-200/10 rounded-full blur-3xl animate-spin-slow"></div>
              
              {/* Main image container with enhanced effects */}
              <div className="relative premium-card overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 border-2 border-blue-100 floating-card magnetic-card subtle-glow hover:border-purple-200 transition-colors duration-500 group">
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={manpreetImage} 
                    alt="Manpreet Kaur - Career Counselor and Founder"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
                
                {/* Enhanced overlay badge */}
                <div className="absolute top-12 right-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-5 py-3 rounded-full text-sm font-medium shadow-xl breath-animation hover:shadow-2xl transition-shadow duration-300 group-hover:scale-105">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>23+ Years Experience</span>
                  </div>
                </div>
                
                {/* Enhanced bottom credentials */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 magnetic-card">
                  <div className="text-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">5,000+</div>
                    <div className="text-sm text-gray-600 font-medium">Professionals Guided</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}