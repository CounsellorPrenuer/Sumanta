import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContactSubmission) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" role="heading" aria-level={2}>
            Start Your{" "}
            <span className="text-gradient-primary">Journey Today</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Get in touch for a personalized consultation and take the first step towards success.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 fade-in">
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="glass-light rounded-2xl p-6 hover-lift border border-white/10 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                    <Phone className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">Phone</div>
                    <div className="text-gray-300">+91 9147424608</div>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-6 hover-lift border border-white/10 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">Email</div>
                    <div className="text-gray-300">leadcrestconsulting6@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-6 hover-lift border border-white/10 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">Office</div>
                    <div className="text-gray-300">Kolkata, India</div>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-6 hover-lift border border-white/10 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <Clock className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">Hours</div>
                    <div className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 fade-in">
            <div className="glass rounded-3xl p-8 hover-lift border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Schedule a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="serviceInterest" className="text-gray-300">Service Interest</Label>
                  <Select onValueChange={(value) => handleChange('serviceInterest', value)}>
                    <SelectTrigger className="glass-light border-white/20 text-white rounded-xl h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
                      <SelectItem value="career-counselling">Career Counselling</SelectItem>
                      <SelectItem value="psychometric-assessment">Psychometric Assessment</SelectItem>
                      <SelectItem value="foreign-admissions">Foreign Admissions</SelectItem>
                      <SelectItem value="cv-building">CV Building</SelectItem>
                      <SelectItem value="mentorship">Mentorship Program</SelectItem>
                      <SelectItem value="webinars">Career Webinars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className="glass-light border-white/20 text-white placeholder:text-gray-400 rounded-xl"
                    placeholder="Tell us about your career goals and how we can help..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold gradient-primary text-black hover-glow rounded-2xl border-0"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
