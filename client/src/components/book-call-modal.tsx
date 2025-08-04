import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Phone, Calendar, User } from "lucide-react";

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
        title: "Call Booked Successfully!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            Book A Free Call
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center text-blue-700 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-medium">Free 30-minute consultation</span>
            </div>
            <p className="text-blue-600 text-sm">
              Get personalized career guidance from our expert counselors. No cost, no commitment.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div>
              <Label htmlFor="background" className="text-gray-700 font-medium">Current Background *</Label>
              <Select onValueChange={(value) => handleChange('background', value)}>
                <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl">
                  <SelectValue placeholder="Select your current background" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="student-8-9">Student in Class 8-9</SelectItem>
                  <SelectItem value="student-10-12">Student in Class 10-12</SelectItem>
                  <SelectItem value="college-graduate">College Graduate</SelectItem>
                  <SelectItem value="working-professional">Working Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              disabled={bookCallMutation.isPending}
            >
              {bookCallMutation.isPending ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Booking Call...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Book My Free Call
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center text-green-700 text-sm">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium">What happens next:</span>
            </div>
            <ul className="mt-2 text-green-600 text-sm space-y-1">
              <li>• We'll call you within 24 hours</li>
              <li>• Schedule your 30-minute consultation</li>
              <li>• Discuss your career goals and challenges</li>
              <li>• Get personalized recommendations</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}