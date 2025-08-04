import { useQuery } from "@tanstack/react-query";
import { Check, Star, Crown, Zap, Target } from "lucide-react";
import { useLocation } from "wouter";
import type { Package } from "@shared/schema";

export default function PremiumPackages() {
  const [, navigate] = useLocation();
  
  const { data: packages, isLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

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
      <section id="packages" className="section-spacing">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="section-spacing">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Choose Your Success Path
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Career
            <span className="text-gradient-blue block">Clarity Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From stream selection to global admissions to professional pivots, we've built a future-ready package for every stage.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => {
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
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 ${
                      pkg.isPopular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            );
          })}
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
                <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}