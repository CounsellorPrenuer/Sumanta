import { Mail, Phone, MapPin, Heart } from "lucide-react";
import logoImage from "@assets/logo (6)_1754240707993.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logoImage} 
                alt="CCC Education Foundation" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">CCC Education Foundation</h3>
                <p className="text-gray-400 text-sm">Empowering Futures Through Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Founded by Manpreet Kaur, CCC Education Foundation is dedicated to providing comprehensive career guidance and educational support to students and professionals worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>+91 9815299446</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>manpreet@ccceducation.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Career Counselling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Psychometric Assessment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Foreign Admissions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  CV Building
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Mentorship Platform
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#about')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#packages')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Mentoria</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 CCC Education Foundation. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              In partnership with <span className="text-blue-400 font-medium">Mentoria</span> for enhanced career guidance services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}