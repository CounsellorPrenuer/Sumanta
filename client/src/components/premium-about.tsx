import { Award, Users, Globe, BookOpen, ArrowRight, Play } from "lucide-react";

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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Meet Your Career Expert
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Manpreet Kaur
              <span className="text-gradient-gold block text-3xl lg:text-4xl mt-2">
                Founder & Director
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in career counseling, Manpreet Kaur has dedicated her life to helping students and professionals discover their true potential and achieve remarkable success in their chosen fields.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                View Success Stories
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="fade-in-up stagger-2">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="premium-card p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    {achievement.subtitle}
                  </div>
                  
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="premium-card p-8 mt-8 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                  Every student has unique potential. My mission is to help them discover it and channel it towards a fulfilling career that makes a difference.
                </p>
                <div className="text-sm font-semibold text-gray-900">- Manpreet Kaur</div>
                <div className="text-xs text-gray-600">Founder, CCC Education Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}