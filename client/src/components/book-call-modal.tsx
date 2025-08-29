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

          {/* What You'll Get vs What's Not Included */}
          <div className="px-8 pb-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* What You'll Get */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">What You'll Get (Free)</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700"><strong>10-min focused discussion</strong> about your career situation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700"><strong>Actionable roadmap</strong> with 2-3 immediate next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700"><strong>Expert assessment</strong> of your primary career challenge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700"><strong>Personalized guidance</strong> based on your background</span>
                  </li>
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-5 border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-gray-900">Not Included (Paid Only)</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 line-through">Full psychometric assessment & detailed report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 line-through">60-90 minute deep-dive counseling session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 line-through">Career compatibility analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 line-through">Ongoing mentorship support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call Summary Box */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-5 text-white shadow-2xl mt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Quick & Valuable</h3>
                  <p className="text-blue-100 text-sm">Get clarity in just 10 minutes - no strings attached!</p>
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
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Your 10-Minute Call Timeline</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center font-bold text-amber-700">1</div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold">Minutes 0-3: Quick Introduction</span>
                    <p className="text-xs text-gray-600">We'll understand your current situation & immediate concerns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center font-bold text-amber-700">2</div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold">Minutes 3-7: Problem Diagnosis</span>
                    <p className="text-xs text-gray-600">We'll identify your core career challenge & its root causes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center font-bold text-amber-700">3</div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold">Minutes 7-10: Action Plan</span>
                    <p className="text-xs text-gray-600">You'll get 2-3 specific steps to implement immediately</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/80 rounded-xl border border-amber-200">
                <p className="text-sm text-gray-700 text-center">
                  <strong>⏰ We'll call within 4 hours • 📞 100% Free • 🎯 Results-focused</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}