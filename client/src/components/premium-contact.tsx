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
import manpreetImage from "@assets/Image_MANPREET KAUR_Counselors_1754240707994.jpeg";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export default function PremiumContact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: ""
      });
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
      details: "+91 98765 43210",
      subtext: "Mon-Fri: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "manpreet@ccceducation.org",
      subtext: "We reply within 24 hours",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Delhi, India",
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
            Ready to Transform
            <span className="text-gradient-blue block">Your Career?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your dream career. Book a free consultation with our expert career counsellor.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info & Expert Card */}
          <div className="lg:col-span-2 space-y-8">
            {/* Expert Card */}
            <div className="premium-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img 
                  src={manpreetImage}
                  alt="Manpreet Kaur" 
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Manpreet Kaur</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & Career Expert</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With 23+ years of experience, I personally review every consultation request to ensure you get the best guidance for your career journey.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="premium-card p-6 hover:shadow-xl transition-all duration-300 group">
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Book Your Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                    placeholder="your.email@example.com"
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
                  <Label htmlFor="serviceInterest" className="text-gray-700 font-medium">Service Interest *</Label>
                  <Select onValueChange={(value) => handleChange('serviceInterest', value)}>
                    <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl">
                      <SelectValue placeholder="Select the service you're interested in" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="career-counselling">Career Counselling</SelectItem>
                      <SelectItem value="psychometric-assessment">Psychometric Assessment</SelectItem>
                      <SelectItem value="foreign-admissions">Foreign Admissions</SelectItem>
                      <SelectItem value="cv-building">CV Building</SelectItem>
                      <SelectItem value="mentorship">Mentorship Program</SelectItem>
                      <SelectItem value="webinars">Career Webinars</SelectItem>
                      <SelectItem value="complete-package">Complete Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-200 rounded-xl resize-none"
                    placeholder="Tell us about your career goals, current situation, and how we can help you achieve success..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5" />
                      Send Message & Book Consultation
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center text-blue-700 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">Response Time:</span>
                  <span className="ml-1">We typically respond within 2-4 hours during business hours.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}