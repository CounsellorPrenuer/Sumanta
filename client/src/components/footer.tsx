import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/Logo_Sumanta Chaudhuri_LCC_1754301451067.png";

export default function Footer() {
  const [location, navigate] = useLocation();

  const handleServiceNavigation = (serviceName: string) => {
    console.log(`Footer: Navigating to packages for ${serviceName}`);
    console.log(`Current location: ${location}`);
    navigate('/?section=packages');
  };

  return (
    <footer className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, hsl(var(--cobalt)), hsl(var(--violet)), hsl(var(--gold)))'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logoImage} 
                alt="Leadcrest Consulting" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Leadcrest Consulting</h3>
                <p className="text-gray-400 text-sm">Redefining Career Trajectory with Clarity</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Founded by Sumanta Chaudhuri, Leadcrest Consulting is dedicated to providing comprehensive career guidance and educational support to professionals worldwide, including corporate wellbeing solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--cobalt))'}}>
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>+91 9147424608</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--violet))'}}>
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>leadcrestconsulting6@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--gold))'}}>
                  <MapPin className="h-4 w-4 text-gray-900" />
                </div>
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleServiceNavigation('Career Counselling')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  data-testid="link-career-counselling"
                >
                  Career Counselling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNavigation('Psychometric Assessment')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  data-testid="link-psychometric-assessment"
                >
                  Psychometric Assessment
                </button>
              </li>

              <li>
                <button 
                  onClick={() => handleServiceNavigation('CV Building')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  data-testid="link-cv-building"
                >
                  CV Building
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNavigation('Mentorship Platform')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  data-testid="link-mentorship-platform"
                >
                  Mentorship Platform
                </button>
              </li>
              <li>
                <Link 
                  href="/corporate-parenting-wellbeing"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-corporate-parenting"
                >
                  Corporate Parenting Wellbeing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/why-ccc-edu"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNavigation('Packages')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  data-testid="link-packages"
                >
                  Packages
                </button>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/how-it-works"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-success-stories"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="/corporate-parenting-wellbeing"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left block"
                  data-testid="link-corporate-services"
                >
                  Corporate Services
                </Link>
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
              © 2025 Leadcrest Consulting. All rights reserved.
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