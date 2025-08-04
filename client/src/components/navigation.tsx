import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Logo_Sumanta Chaudhuri_LCC_1754301451067.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <img 
              src={logoImage} 
              alt="Leadcrest Consulting Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <span className="text-xl font-bold text-white">Leadcrest Consulting</span>
              <p className="text-xs text-gray-300 hidden sm:block">Redefining Career Trajectory with Clarity</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-primary px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('resources')} 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-xl font-medium transition-all hover:bg-white/10"
              >
                Resources
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="gradient-primary text-black font-semibold px-6 py-2 rounded-xl hover-glow ml-4 border-0"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="glass-dark px-4 py-6 space-y-2 border-t border-white/10">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-3 text-white font-medium rounded-xl hover:bg-white/10"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('resources')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10"
            >
              Resources
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full mt-4 gradient-primary text-black font-semibold rounded-xl border-0"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
