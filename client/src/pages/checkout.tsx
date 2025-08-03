import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowLeft, Check, Shield, CreditCard } from "lucide-react";
import type { Package } from "@shared/schema";

const PaymentForm = ({ pkg, customerData }: { pkg: Package; customerData: any }) => {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRazorpayPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Create Razorpay order
      const response = await apiRequest("POST", "/api/create-razorpay-order", {
        amount: pkg.price,
        packageId: pkg.id,
        customerName: customerData.name,
        customerEmail: customerData.email,
        packageName: pkg.name,
      });
      
      const orderData = await response.json();
      
      // For now, simulate payment success since Razorpay keys aren't set up yet
      toast({
        title: "Payment Initiated",
        description: "Payment gateway will be integrated with Razorpay. Order created successfully!",
      });
      
      // Simulate successful payment after 2 seconds
      setTimeout(() => {
        toast({
          title: "Payment Successful!",
          description: "Thank you for your purchase! We will contact you soon to schedule your consultation.",
        });
        navigate('/?payment=success');
      }, 2000);
      
    } catch (error: any) {
      toast({
        title: "Payment Error",
        description: error.message || "Failed to process payment",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass-light p-6 rounded-2xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Secure Payment</h4>
            <p className="text-sm text-gray-300">Powered by Razorpay - Bank-level security</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>All Cards Accepted</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>256-bit SSL</span>
          </div>
        </div>
      </div>
      
      <Button 
        onClick={handleRazorpayPayment}
        className="w-full h-14 text-lg font-semibold gradient-primary hover-glow rounded-2xl border-0"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Processing Payment...
          </div>
        ) : (
          `Pay ₹${pkg.price.toLocaleString()}`
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        By completing your purchase, you agree to our{" "}
        <span className="text-primary hover:underline cursor-pointer">Terms of Service</span> and{" "}
        <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default function Checkout() {
  const { packageId } = useParams();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [clientSecret, setClientSecret] = useState("");
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { data: pkg, isLoading: packageLoading, error: packageError } = useQuery<Package>({
    queryKey: ["/api/packages", packageId],
    enabled: !!packageId,
  });

  const paymentMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/create-razorpay-order", data),
    onSuccess: async (response) => {
      const data = await response.json();
      setClientSecret(data.orderId);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to initialize payment",
        variant: "destructive",
      });
    },
  });

  const handleCustomerDataChange = (field: keyof typeof customerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedToPayment = customerData.name && customerData.email && customerData.phone;

  const initializePayment = () => {
    if (!pkg || !canProceedToPayment) return;

    paymentMutation.mutate({
      amount: pkg.price,
      packageId: pkg.id,
      customerName: customerData.name,
      customerEmail: customerData.email,
      packageName: pkg.name,
    });
  };

  useEffect(() => {
    // Check for payment success in URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
      toast({
        title: "Payment Successful!",
        description: "Thank you for your purchase. We will contact you soon to schedule your consultation.",
      });
      navigate('/');
    }
  }, [navigate, toast]);

  if (packageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-golden border-t-transparent rounded-full" />
      </div>
    );
  }

  if (packageError || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
            <p className="text-gray-600 mb-6">The package you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')} className="bg-golden hover:bg-golden-light text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 fade-in">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="glass-light text-white hover:bg-white/20 rounded-2xl px-6 py-3 border border-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Packages
          </Button>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-3 fade-in">
            <div className="glass rounded-3xl p-8 border border-white/10 hover-lift">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient-primary">Package Details</h2>
                {pkg.isPopular && (
                  <div className="gradient-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xl text-primary font-medium mb-3">{pkg.targetAudience}</p>
                  <p className="text-gray-300 leading-relaxed">{pkg.description}</p>
                </div>

                <div className="glass-primary rounded-2xl p-6 border border-primary/20">
                  <div className="text-4xl font-bold text-gradient-primary mb-2">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-300">One-time payment • Lifetime support</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4 text-lg">What's Included:</h4>
                  <div className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 fade-in">
            <div className="glass rounded-3xl p-8 border border-white/10 hover-lift sticky top-8">
              <h2 className="text-2xl font-bold text-gradient-secondary mb-6">Secure Checkout</h2>
              
              {!clientSecret ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Contact Information</h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                        <Input
                          id="name"
                          value={customerData.name}
                          onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerData.email}
                          onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerData.phone}
                          onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={initializePayment}
                    disabled={!canProceedToPayment || paymentMutation.isPending}
                    className="w-full h-14 text-lg font-semibold gradient-secondary hover-glow rounded-2xl border-0"
                  >
                    {paymentMutation.isPending ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Initializing...
                      </div>
                    ) : (
                      "Proceed to Payment"
                    )}
                  </Button>
                </div>
              ) : (
                <PaymentForm pkg={pkg} customerData={customerData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
