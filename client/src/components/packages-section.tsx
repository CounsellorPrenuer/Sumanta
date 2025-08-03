import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLocation } from "wouter";
import type { Package } from "@shared/schema";

export default function PackagesSection() {
  const [, navigate] = useLocation();
  
  const { data: packages, isLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const handlePackageSelect = (packageId: string) => {
    navigate(`/checkout/${packageId}`);
  };

  if (isLoading) {
    return (
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-golden border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass-secondary px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6">
            <Badge className="w-4 h-4" />
            Choose Your Perfect Package
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tailored Solutions for{" "}
            <span className="text-gradient-primary">Every Journey</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Packages designed for different stages of your educational and professional journey, from career discovery to achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`glass rounded-3xl p-8 hover-lift border transition-all duration-300 group fade-in ${
                pkg.isPopular 
                  ? 'border-primary/30 ring-2 ring-primary/20 relative' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-gradient-primary text-5xl font-bold mb-3">
                  ₹{pkg.price.toLocaleString()}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 font-medium">{pkg.targetAudience}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePackageSelect(pkg.id)}
                className={`w-full h-12 font-semibold rounded-2xl border-0 transition-all ${
                  pkg.isPopular 
                    ? 'gradient-primary text-black hover-glow' 
                    : 'glass-light text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Choose {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
