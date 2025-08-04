import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Phone, Calendar, User, Clock, Target, Sparkles, CheckCircle2, Star, ArrowRight } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CallBookingData {
  name: string;
  phone: string;
  background: string;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<CallBookingData>({
    name: "",
    phone: "",
    background: ""
  });

  const bookCallMutation = useMutation({
    mutationFn: (data: CallBookingData) => 
      apiRequest("POST", "/api/book-call", data),
    onSuccess: () => {
      toast({
        title: "Discovery Call Booked! 🎉",
        description: "We'll call you within 4 hours for your 10-minute career clarity session.",
      });
      setFormData({ name: "", phone: "", background: "" });
      onClose();
    },
    onError: () => {
      toast({
        title: "Failed to Book Call",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (field: keyof CallBookingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.background) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book your free call.",
        variant: "destructive",
      });
      return;
    }
    bookCallMutation.mutate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] bg-white/95 backdrop-blur-xl border-0 shadow-3xl rounded-3xl overflow-hidden">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 opacity-60"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 overflow-y-auto max-h-[85vh] modal-scroll">
          {/* Header Section */}
          <DialogHeader className="p-8 pb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                      Free Discovery Call
                    </DialogTitle>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">Trusted by 3,725+ professionals</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100/80 rounded-xl transition-colors"
                data-testid="button-close-modal"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </DialogHeader>

          {/* Value Proposition */}
          <div className="px-8 pb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">10-Minute Discovery Call</h3>
                  <p className="text-blue-100 text-sm">Understand your top career challenges</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <Target className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Identify Key Challenges</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <User className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Personal Assessment</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Next Steps Plan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-800 font-semibold text-sm mb-3 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl text-lg font-medium bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-800 font-semibold text-sm mb-3 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl text-lg font-medium bg-white/80 backdrop-blur-sm"
                    placeholder="+91 98765 43210"
                    required
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="background" className="text-gray-800 font-semibold text-sm mb-3 block">
                  Current Background *
                </Label>
                <Select onValueChange={(value) => handleChange('background', value)}>
                  <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl text-lg font-medium bg-white/80 backdrop-blur-sm">
                    <SelectValue placeholder="Select your current background" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2 shadow-2xl">
                    <SelectItem value="student-8-9" className="text-lg py-3">Student in Class 8-9</SelectItem>
                    <SelectItem value="student-10-12" className="text-lg py-3">Student in Class 10-12</SelectItem>
                    <SelectItem value="college-graduate" className="text-lg py-3">College Graduate</SelectItem>
                    <SelectItem value="working-professional" className="text-lg py-3">Working Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                disabled={bookCallMutation.isPending}
                data-testid="button-book-call"
              >
                {bookCallMutation.isPending ? (
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking Your Call...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6" />
                    <span>Book My Free Discovery Call</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* What Happens Next */}
          <div className="px-8 pb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">What Happens Next?</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">We'll call you within 4 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">10-minute focused discussion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Identify your top career challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Get clear next steps</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/60 rounded-xl border border-green-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>100% Free • No Sales Pitch • Genuine Help</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}