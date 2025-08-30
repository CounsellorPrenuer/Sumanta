import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Phone } from "lucide-react";
import { useState } from "react";
import heroImage from "@assets/u1461628488_A_confident_mid-career_Indian_professional_male_o_5df951ce-73bd-414a-b228-c9ccf52f9fa6_2_1754302685222.png";
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
    "24+ Years Leading Teams in Fortune 500 (Telecom & Retail)",
    "Specialized in Senior Executive Transitions (VP/Director Level)",
    "Industry Focus: Telecom, Retail, Pharma, FMCG, Technology",
  ];

  return (
    <>
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-violet-50/40">
      {/* Modern Light Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-yellow-50/20"></div>
      
      {/* Subtle static background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10" style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))'}}></div>
      <div className="absolute top-32 right-16 w-80 h-80 rounded-full opacity-8" style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 90%))'}}></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-12" style={{background: 'linear-gradient(135deg, hsl(45, 93%, 85%), hsl(45, 93%, 90%))'}}></div>
      
      {/* Subtle geometric accent elements */}
      <div className="absolute top-40 left-1/4 w-8 h-8 rotate-45 opacity-20" style={{background: 'hsl(220, 91%, 70%)'}}></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full opacity-25" style={{background: 'hsl(267, 47%, 70%)'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rotate-12 opacity-30" style={{background: 'hsl(45, 93%, 65%)'}}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(220, 91%, 50%) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="mt-4"></div>

            {/* Premium Inspiring Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border-2 text-sm font-semibold glass-premium shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default slide-in-up" 
                 style={{borderColor: 'hsl(45, 93%, 60%)', color: 'hsl(220, 91%, 25%)', animationDelay: '0.2s', marginBottom: '3rem'}}>
              <div className="w-2 h-2 rounded-full mr-3 pulse-soft" style={{backgroundColor: 'hsl(45, 93%, 60%)'}}></div>
              Helping you navigate career paths in an AI world
            </div>

            {/* Premium Animated Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8" style={{marginTop: '2rem'}}>
              <span className="slide-in-up block" style={{color: 'hsl(220, 91%, 20%)', animationDelay: '0.4s'}}>Redefining</span>
              <span className="text-shimmer block" style={{animationDelay: '0.6s'}}>Career Trajectory</span>
              <span className="slide-in-up block" style={{color: 'hsl(267, 47%, 25%)', animationDelay: '0.8s'}}>with Clarity</span>
            </h1>

            {/* Premium Subheadline */}
            <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed font-medium slide-in-up" style={{animationDelay: '1s'}}>
              For VPs, Directors, and Senior Managers in <span className="font-semibold text-gray-900">Telecom, Retail, Pharma, FMCG, FMCD, and Technology</span> sectors.
              <br />
              <span className="text-gradient-blue font-semibold">Fortune 500 insights and executive-level mentorship to accelerate your leadership journey.</span>
            </p>



            {/* Premium Magnetic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 slide-in-up" style={{animationDelay: '1.2s'}}>
              <button 
                onClick={() => scrollToSection('packages')}
                className="group relative px-10 py-5 rounded-2xl font-semibold text-white overflow-hidden button-magnetic"
                style={{background: 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%)), linear-gradient(135deg, hsl(220, 91%, 45%), hsl(267, 47%, 45%))'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <span className="tracking-wide">Discover Your Path</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </div>
              </button>
              
              <button 
                onClick={() => setIsCallModalOpen(true)}
                className="relative group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Phone className="relative w-6 h-6 animate-pulse" />
                <span className="relative tracking-wide">Free Career Clarity Call</span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"></div>
              </button>
            </div>

            {/* Elegant Stats */}
            <div className="grid grid-cols-3 gap-6 slide-in-up mb-8" style={{animationDelay: '1.4s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
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
            
            {/* Why 3725+ Professionals Chose LCC */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 slide-in-up" style={{animationDelay: '1.5s'}}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Why 3725+ Professionals Chose Leadcrest Consulting
              </h3>
              <p className="text-gray-700 mb-4">
                We provide <span className="font-semibold text-blue-600">executive-level mentorship</span> for professionals at all levels in <span className="font-semibold">Telecom, Retail, Pharma, FMCG, FMCD, Technology</span> and other related sectors.
              </p>
              <div className="space-y-2">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Elegant Static Image */}
          <div className="fade-in-up stagger-2 relative slide-in-up" style={{animationDelay: '1.6s'}}>
            <div className="relative max-w-lg mx-auto">
              {/* Elegant Glass Image Container */}
              <div className="relative p-6 glass-premium rounded-3xl shadow-2xl border border-white/50">
                <img 
                  src={heroImage}
                  alt="Confident mid-career professional on transformative career pathway with futuristic technology" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Elegant Success Card */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/70 cursor-default">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" 
                         style={{background: 'linear-gradient(135deg, hsl(267, 47%, 85%), hsl(267, 47%, 75%))'}}>
                      <Award className="w-7 h-7" style={{color: 'hsl(267, 47%, 50%)'}} aria-label="Award icon" />
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
                      <TrendingUp className="w-7 h-7" style={{color: 'hsl(45, 93%, 50%)'}} aria-label="Growth trend icon" />
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