import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Award, Users, Globe, BookOpen } from "lucide-react";
import manpreetImage from "@assets/Image_MANPREET KAUR_Counselors_1754240707994.jpeg";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: Award, title: "Founder & Director", subtitle: "CCC Education Foundation (NGO)" },
    { icon: CheckCircle, title: "Certified Career Counsellor", subtitle: "IAAP, APCDA, GCDA" },
    { icon: Users, title: "Education & Career Coach", subtitle: "23+ Years Experience" },
    { icon: Globe, title: "Mentoria Certified", subtitle: "Counsellor & Partner" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <div className="glass rounded-3xl p-8 hover-lift border border-white/10">
              <img 
                src={manpreetImage}
                alt="Manpreet Kaur - Founder & Career Counselor" 
                className="rounded-2xl w-full object-cover aspect-[4/5] shadow-2xl"
              />
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 glass-primary px-4 py-2 rounded-full text-sm font-medium text-primary">
                  <BookOpen className="h-4 w-4" />
                  Since 2001 • 5000+ Students Guided
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 glass-secondary px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6">
              <Award className="h-4 w-4" />
              Meet Your Career Counselor
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Manpreet Kaur
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over two decades of experience in career counseling, admissions, and education guidance, Manpreet Kaur is a dedicated advocate for accessible global education. She has helped thousands of students navigate the complex world of higher education and career planning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-light rounded-2xl p-4 hover-lift border border-white/10 group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{achievement.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="gradient-secondary text-white font-semibold px-8 py-4 text-lg h-auto rounded-2xl hover-glow border-0 group"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
