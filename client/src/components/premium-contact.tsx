import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import CalendlyScheduler from "@/components/calendly-scheduler";
import sumantaImage from "@assets/Image_Sumanta Chaudhuri_LCC_1754306082124.jpeg";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  whoIsThisFor: string;
}

export default function PremiumContact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showScheduler, setShowScheduler] = useState(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    whoIsThisFor: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      // Show scheduler instead of clearing form
      setShowScheduler(true);
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: () => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9147424608",
      subtext: "Mon-Fri: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "leadcrestconsulting6@gmail.com",
      subtext: "We reply within 24 hours",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kolkata, India",
      subtext: "By appointment only",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-6">
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Worried about your career
            <span className="text-gradient-blue block">being replaced by AI?</span>
          </h2>
          

          
          <p className="text-2xl font-semibold text-gray-900 mt-6">
            Book a free 10-minute call with Leadcrest Consulting's expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="premium-card p-6 hover:shadow-xl transition-all duration-300 group" data-testid={`contact-info-${info.title.toLowerCase().replace(' ', '-')}`}>
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {info.title}
                    </div>
                    <div className="text-gray-700 font-medium">{info.details}</div>
                    <div className="text-sm text-gray-500">{info.subtext}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free Call Form or Scheduler */}
          <div className="lg:col-span-3">
            {showScheduler ? (
              <CalendlyScheduler 
                userName={formData.name}
                userEmail={formData.email}
                userPhone={formData.phone}
              />
            ) : (
            <div className="premium-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                    placeholder="Enter your full name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                    placeholder="+91 9147424608"
                    required
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="whoIsThisFor" className="text-gray-700 font-medium">Who is this for? *</Label>
                  <Select onValueChange={(value) => handleChange('whoIsThisFor', value)}>
                    <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl bg-white" data-testid="select-who-is-this-for">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl bg-white border border-gray-200 shadow-lg z-50">
                      <SelectItem value="college" className="hover:bg-gray-100 focus:bg-gray-100">College Graduates</SelectItem>
                      <SelectItem value="working-professional" className="hover:bg-gray-100 focus:bg-gray-100">Working Professionals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 sticky bottom-4 lg:static"
                  disabled={contactMutation.isPending}
                  data-testid="button-book-free-call"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Booking Your Call...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5" />
                      Book My Free Call →
                    </div>
                  )}
                </Button>
              </form>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}