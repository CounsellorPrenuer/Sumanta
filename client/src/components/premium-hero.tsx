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
    { icon: Users, value: "5000+", label: "Students Guided" },
    { icon: Award, value: "23+", label: "Years Experience" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  const highlights = [
    "Certified Career Counsellor (IAAP, APCDA, GCDA)",
    "Founder - Leadcrest Consulting",
    "Mentoria Certified Partner",
  ];

  return (
    <>
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 parallax-slow" style={{backgroundColor: 'hsl(220, 91%, 75%)'}}></div>
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 parallax-medium" style={{backgroundColor: 'hsl(267, 47%, 75%)'}}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-15 parallax-fast" style={{backgroundColor: 'hsl(45, 93%, 75%)'}}></div>
      
      {/* Additional floating elements for depth */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full opacity-40 parallax-fast" style={{backgroundColor: 'hsl(220, 91%, 55%)'}}></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 rounded-full opacity-30 parallax-medium" style={{backgroundColor: 'hsl(267, 47%, 55%)'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full opacity-35 parallax-slow" style={{backgroundColor: 'hsl(45, 93%, 65%)'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Don't Let AI
              <span className="block text-gradient-brand">Decide Your Career.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Discover your best-fit career path, one that AI won't replace. With expert-led counselling, assessments, and lifelong mentorship from Leadcrest Consulting.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: 'hsl(var(--gold))'}} />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('packages')}
                className="btn-primary group inline-flex items-center justify-center button-hover-effect"
              >
                Find My Career Path
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsCallModalOpen(true)}
                className="btn-secondary group inline-flex items-center justify-center button-hover-effect"
              >
                <Play className="mr-2 w-5 h-5" />
                Book a Free Career Clarity Call
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{backgroundColor: 'hsl(var(--cobalt-light))'}}>
                    <stat.icon className="w-6 h-6" style={{color: 'hsl(var(--cobalt))'}} />
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
              {/* Main Image with glow effect */}
              <div className="premium-card p-8 relative z-10 hero-image-glow">
                <img 
                  src={heroImage}
                  alt="Confident students with AI technology background - Future-ready careers" 
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating AI-Proof Card */}
                <div className="absolute -bottom-6 -left-6 premium-card p-4 bg-white floating-card">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: 'hsl(var(--violet-light))'}}>
                      <Award className="w-6 h-6" style={{color: 'hsl(var(--violet))'}} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AI-Proof</div>
                      <div className="text-sm text-gray-600">Career Paths</div>
                    </div>
                  </div>
                </div>

                {/* Floating Future-Ready Card */}
                <div className="absolute -top-6 -right-6 premium-card p-4 bg-white floating-card" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: 'hsl(var(--gold-light))'}}>
                      <TrendingUp className="w-6 h-6" style={{color: 'hsl(var(--gold))'}} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Future</div>
                      <div className="text-sm text-gray-600">Ready Skills</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Background Decorations */}
              <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full opacity-8 -z-10 parallax-medium bg-cobalt-gradient"></div>
              <div className="absolute -bottom-4 -right-4 w-96 h-96 rounded-full opacity-5 -z-20 parallax-slow bg-gold-gradient"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 rounded-full opacity-15 parallax-fast bg-violet-gradient"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 rounded-full opacity-12 parallax-medium bg-brand-gradient"></div>
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