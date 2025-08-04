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
    <section id="about" className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-600 text-sm font-medium mb-12 shadow-sm breath-animation">
              <Award className="w-4 h-4 mr-3" />
              Led by India's Most Trusted Career Architect
            </div>

            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight luxury-text">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                Manpreet Kaur
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over <strong>23 years of experience</strong>, Manpreet Kaur has guided <strong>5,000+ students and professionals</strong> across India and abroad. She's a certified career counsellor (IAAP, APCDA, GCDA), founder of CCC Education Foundation (NGO), and a Mentoria-certified partner.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <p className="text-lg font-medium text-gray-900 italic">
                "My mission: Make every individual career-ready — not just for today, but for the next decade."
              </p>
            </div>

            {/* Mini Credentials Bar */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">IAAP, APCDA, GCDA</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl">
                <Brain className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">5,000+ Lives</div>
                  <div className="text-xs text-gray-600">Transformed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl">
                <HandHeart className="w-6 h-6 text-emerald-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">NGO</div>
                  <div className="text-xs text-gray-600">Founder</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">AI-Skilling</div>
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
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative premium-card overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 floating-card magnetic-card subtle-glow">
                <img 
                  src={manpreetImage} 
                  alt="Manpreet Kaur - Career Counselor and Founder"
                  className="w-full h-96 object-cover object-center rounded-2xl shadow-xl"
                />
                
                {/* Overlay badge */}
                <div className="absolute top-12 right-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg breath-animation">
                  23+ Years Experience
                </div>
                
                {/* Bottom credentials */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">5,000+</div>
                    <div className="text-sm text-gray-600">Professionals Guided</div>
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