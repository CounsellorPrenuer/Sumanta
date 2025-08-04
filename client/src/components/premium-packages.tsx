import { useQuery } from "@tanstack/react-query";
import { Check, Star, Crown, Zap, Target, GraduationCap, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import type { Package } from "@shared/schema";
import { BookingPopup } from "./booking-popup";

type AgeGroup = 'graduates' | 'professionals';

interface AgeGroupCategory {
  id: AgeGroup;
  name: string;
  description: string;
  icon: any;
  gradient: string;
}

export default function PremiumPackages() {
  const [, navigate] = useLocation();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>('graduates');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  
  const { data: packages, isLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const ageGroups: AgeGroupCategory[] = [
    {
      id: 'graduates',
      name: 'College Graduates',
      description: 'Job readiness & skill development',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'professionals',
      name: 'Working Professionals',
      description: 'Career pivots & upskilling',
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  // Filter packages based on selected age group
  const getFilteredPackages = () => {
    if (!packages) return [];
    
    // Map packages to age groups based on their targetAudience field
    return packages.filter(pkg => {
      const audience = pkg.targetAudience.toLowerCase();
      
      switch (selectedAgeGroup) {
        case 'graduates':
          return audience.includes('college graduates');
        case 'professionals':
          return audience.includes('working professionals');
        default:
          return true;
      }
    });
  };

  const filteredPackages = getFilteredPackages();

  const handlePackageSelect = (packageId: string) => {
    navigate(`/checkout/${packageId}`);
  };

  const getPackageIcon = (name: string) => {
    if (name.toLowerCase().includes('premium') || name.toLowerCase().includes('complete')) return Crown;
    if (name.toLowerCase().includes('advance') || name.toLowerCase().includes('explore')) return Zap;
    return Target;
  };

  const getPackageGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-cyan-600",
      "from-purple-500 to-indigo-600", 
      "from-emerald-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-rose-600",
      "from-amber-500 to-yellow-600"
    ];
    return gradients[index % gradients.length];
  };

  if (isLoading) {
    return (
      <section id="packages" className="pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="pt-12 lg:pt-16 pb-8 lg:pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Choose Your Success Path
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Career
            <span className="text-gradient-blue block">Clarity Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            From college graduation to professional pivots, we've built a future-ready package for every career stage.
          </p>
        </div>

        {/* Age Group Selector */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {ageGroups.map((group) => {
              const IconComponent = group.icon;
              const isSelected = selectedAgeGroup === group.id;
              
              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedAgeGroup(group.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 group hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {/* Selection indicator */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${group.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                      isSelected ? 'shadow-lg' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className={`font-semibold mb-2 ${
                      isSelected ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {group.name}
                    </div>
                    
                    <div className={`text-sm ${
                      isSelected ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {group.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Packages */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Packages for {ageGroups.find(g => g.id === selectedAgeGroup)?.name}
          </h3>
          <p className="text-gray-600">
            {ageGroups.find(g => g.id === selectedAgeGroup)?.description}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.length > 0 ? filteredPackages.map((pkg, index) => {
            const IconComponent = getPackageIcon(pkg.name);
            const gradient = getPackageGradient(index);
            
            return (
              <div 
                key={pkg.id} 
                className={`premium-card hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden fade-in-up ${
                  pkg.isPopular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Package Icon & Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className={`text-4xl font-bold text-gradient-blue mb-2`}>
                      ₹{pkg.price.toLocaleString()}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-gray-600 font-medium">{pkg.targetAudience}</p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="ml-3 text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setIsBookingPopupOpen(true);
                    }}
                    className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 ${
                      pkg.isPopular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white hover:shadow-xl hover:scale-105'
                    }`}
                    data-testid={`button-select-package-${pkg.id}`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            );
          }) : (
            <div className="col-span-full text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Packages Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're preparing specialized packages for {ageGroups.find(g => g.id === selectedAgeGroup)?.name.toLowerCase()}. 
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary"
              >
                Get Notified When Available
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="premium-card p-8 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Money Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3725+</div>
                <div className="text-gray-600">Professional Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Popup */}
      {selectedPackage && (
        <BookingPopup
          isOpen={isBookingPopupOpen}
          onClose={() => {
            setIsBookingPopupOpen(false);
            setSelectedPackage(null);
          }}
          package={selectedPackage}
          selectedStage={selectedAgeGroup}
        />
      )}
    </section>
  );
}