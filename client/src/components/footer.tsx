import { Mail, Phone, MapPin, Heart } from "lucide-react";
import logoImage from "@assets/logo (6)_1754240707993.png";

export default function Footer() {
  return (
    <footer className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by Manpreet Kaur, CCC Education Foundation is dedicated to providing comprehensive career guidance and educational support to students and professionals worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>manpreet@ccceducation.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-primary transition-colors">Career Counselling</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Psychometric Assessment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Foreign Admissions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">CV Building</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mentorship Platform</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by CCC Education Foundation</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 CCC Education Foundation. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">
              In partnership with <span className="text-primary font-medium">Mentoria</span> for enhanced career guidance services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}