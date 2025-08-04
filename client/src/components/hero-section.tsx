import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users, TrendingUp } from "lucide-react";
import manpreetImage from "@assets/Image_MANPREET KAUR_Counselors_1754240707994.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: "3725+", label: "Professionals Guided" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Star, value: "15+", label: "Certifications" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-indigo-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 glass-primary px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <Star className="h-4 w-4" />
              India's Leading Career Counselor
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Shape Your Career with{" "}
              <span className="text-gradient-primary">Expert Guidance</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              With over 23 years of experience, I help students and professionals discover their true potential and navigate successful career paths through personalized counseling and mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button 
                onClick={() => scrollToSection('packages')} 
                className="gradient-primary text-black font-semibold px-8 py-4 text-lg h-auto rounded-2xl hover-glow border-0 group"
              >
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                className="glass-light text-white hover:bg-white/20 px-8 py-4 text-lg h-auto rounded-2xl border border-white/20"
              >
                Learn More About Me
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-light rounded-2xl p-4 text-center hover-lift border border-white/10">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative fade-in">
            <div className="relative z-10">
              {/* Main image with glassmorphism frame */}
              <div className="glass rounded-3xl p-6 hover-lift">
                <img 
                  src={manpreetImage}
                  alt="Manpreet Kaur - Career Counselor" 
                  className="rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 glass-primary rounded-2xl p-4 border border-primary/20 floating">
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                  <div className="text-sm font-semibold text-white">Certified</div>
                  <div className="text-xs text-gray-300">IAAP, APCDA</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-secondary rounded-2xl p-4 border border-purple-500/20 floating" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <Users className="h-6 w-6 text-purple-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-white">Mentoria</div>
                  <div className="text-xs text-gray-300">Certified</div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
