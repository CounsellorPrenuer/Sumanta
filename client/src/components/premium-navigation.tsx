import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLocation } from "wouter";
import logoImage from "@assets/Logo_Sumanta Chaudhuri_LCC_1754301451067.png";
import BookCallModal from "./book-call-modal";

export default function PremiumNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Why Leadcrest", href: "/why-ccc-edu" },
    { name: "Corporate Parenting Wellbeing", href: "/corporate-parenting-wellbeing" },
    { name: "Blogs/Resources", href: "/blogs-resources" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="Leadcrest Consulting" 
                className="h-16 w-16 object-contain"
              />
              <div className="text-left">
                <div className="font-bold text-lg text-gray-900">Leadcrest Consulting</div>
                <div className="text-xs text-gray-500 -mt-1">From Confusion to Clarity. From Interest to Impact.</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 font-medium transition-colors duration-200"
                  style={{color: 'hsl(var(--foreground))'}}
                  onMouseEnter={(e) => e.target.style.color = 'hsl(var(--cobalt))'}
                  onMouseLeave={(e) => e.target.style.color = 'hsl(var(--foreground))'}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setIsCallModalOpen(true)}
                className="relative group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Phone className="relative w-4 h-4 animate-pulse" />
                <span className="relative">Book A Free Call</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-200 rounded-b-2xl">
              <div className="py-6 px-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCallModalOpen(true);
                  }}
                  className="relative group w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Book A Free Call</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookCallModal 
        isOpen={isCallModalOpen} 
        onClose={() => setIsCallModalOpen(false)} 
      />
    </>
  );
}