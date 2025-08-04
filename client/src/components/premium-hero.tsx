import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import heroImage from "@assets/u1461628488_A_confident_Indian_teenager_and_a_young_working_p_fc0605c0-993f-461b-9d1f-6e3cd4f8277a_3_1754292533173.png";
import BookCallModal from "./book-call-modal";

export default function PremiumHero() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: "3725+", label: "Professionals Guided" },
    { icon: Award, value: "24+", label: "Years of HR Leadership Experience" },
    { icon: TrendingUp, value: "94%", label: "Success Rate" },
  ];

  const highlights = [
    "Certified Career Counsellor (IAAP, APCDA, GCDA)",
    "Founder - Leadcrest Consulting",
    "Mentoria Certified Partner",
  ];

  return (
    <>
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-violet-50/40">
      {/* Modern Light Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-yellow-50/20"></div>
      
      {/* Soft floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10 animate-pulse" style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))'}}></div>
      <div className="absolute top-32 right-16 w-80 h-80 rounded-full opacity-8 animate-pulse" style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))', animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-12 animate-pulse" style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))', animationDelay: '2s'}}></div>
      
      {/* Geometric accent elements */}
      <div className="absolute top-40 left-1/4 w-8 h-8 rotate-45 opacity-20" style={{background: 'hsl(220, 91%, 70%)'}}></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full opacity-25" style={{background: 'hsl(267, 47%, 70%)'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rotate-12 opacity-30" style={{background: 'hsl(45, 93%, 65%)'}}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(220, 91%, 50%) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            

            {/* Inspiring Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border-2 text-sm font-semibold mb-8 bg-white/80 backdrop-blur-sm shadow-lg" style={{borderColor: 'hsl(45, 93%, 60%)', color: 'hsl(220, 91%, 25%)'}}>
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: 'hsl(45, 93%, 60%)'}}></div>
              Transforming Careers Since 2001
            </div>

            {/* Main Headline - More dynamic */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span style={{color: 'hsl(220, 91%, 20%)'}}>Redefining</span>
              <br />
              <span className="text-gradient-brand">Career Trajectory</span>
              <br />
              <span style={{color: 'hsl(267, 47%, 25%)'}}>with Clarity</span>
            </h1>

            {/* Subheadline - More inspiring */}
            <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed font-medium">
              For professionals at a crossroads, in role, identity, or purpose.
              <br />
              <span className="text-gradient-blue font-semibold">Leadcrest helps you realign your career to who you are and where the world is going.</span>
            </p>



            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button 
                onClick={() => scrollToSection('packages')}
                className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{background: 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <span>Discover Your Path</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => setIsCallModalOpen(true)}
                className="group px-8 py-4 rounded-2xl font-semibold bg-white border-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{borderColor: 'hsl(45, 93%, 60%)', color: 'hsl(220, 91%, 25%)'}}
              >
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full mr-3 flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor: 'hsl(45, 93%, 90%)'}}>
                    <Play className="w-4 h-4" style={{color: 'hsl(45, 93%, 50%)'}} />
                  </div>
                  <span>Free Career Clarity Call</span>
                </div>
              </button>
            </div>

            {/* Modern Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                       style={{
                         background: index === 0 ? 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))' :
                                     index === 1 ? 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))' :
                                     'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))'
                       }}>
                    <stat.icon className="w-7 h-7" 
                               style={{
                                 color: index === 0 ? 'hsl(220, 91%, 50%)' :
                                        index === 1 ? 'hsl(267, 47%, 50%)' :
                                        'hsl(45, 93%, 50%)'
                               }} />
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{color: 'hsl(220, 91%, 25%)'}}>{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Modern Image */}
          <div className="fade-in-up stagger-2 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Modern Image Container */}
              <div className="relative p-6 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
                <img 
                  src={heroImage}
                  alt="Confident students with AI technology background - Future-ready careers" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Modern Floating Success Card */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 75%))'}}>
                      <Award className="w-7 h-7" style={{color: 'hsl(267, 47%, 50%)'}} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">AI-Proof</div>
                      <div className="text-sm font-medium" style={{color: 'hsl(267, 47%, 60%)'}}>Career Paths</div>
                    </div>
                  </div>
                </div>

                {/* Modern Floating Growth Card */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 75%))'}}>
                      <TrendingUp className="w-7 h-7" style={{color: 'hsl(45, 93%, 50%)'}} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Future</div>
                      <div className="text-sm font-medium" style={{color: 'hsl(45, 93%, 60%)'}}>Ready Skills</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-20" style={{background: 'linear-gradient(135deg, hsl(220, 91%, 80%), hsl(220, 91%, 85%))'}}></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-15" style={{background: 'linear-gradient(135deg, hsl(45, 93%, 80%), hsl(45, 93%, 85%))'}}></div>
              <div className="absolute top-1/3 -right-12 w-24 h-24 rounded-full opacity-25" style={{background: 'linear-gradient(135deg, hsl(267, 47%, 80%), hsl(267, 47%, 85%))'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <BookCallModal 
      isOpen={isCallModalOpen} 
      onClose={() => setIsCallModalOpen(false)} 
    />
    </>
  );
}