import { Star, Quote, ArrowRight } from "lucide-react";
import rajeshImage from "@assets/generated_images/Indian_male_executive_headshot_652ba8ab.png";
import priyaImage from "@assets/generated_images/Indian_female_professional_headshot_3e3ede1d.png";
import amitImage from "@assets/generated_images/Indian_IT_professional_headshot_5efbf5d0.png";
import snehaImage from "@assets/generated_images/Indian_female_marketing_professional_635466d7.png";
import vikashImage from "@assets/generated_images/Indian_male_consultant_headshot_be390604.png";
import ananyaImage from "@assets/generated_images/Indian_female_HR_executive_82c37ef9.png";

export default function PremiumTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Middle Management Professional | 85% Salary Increase",
      image: rajeshImage,
      content: "After 8 years in traditional IT, Sumanta helped me transition to Product Management with a focus on digital transformation. I went from ₹12 LPA to ₹22 LPA in just 6 months. The strategic career coaching was game-changing.",
      rating: 5,
      package: "Career Pivot Pro"
    },
    {
      name: "Priya Desai",
      role: "Fresher to Professional | Career Switcher",
      image: priyaImage,
      content: "From HR operations to Data Analytics - a complete 180° career change at age 32. Sumanta's structured approach helped me land my dream role with 70% salary hike. Best investment ever!",
      rating: 5,
      package: "Tech Transition"
    },
    {
      name: "Amit Kumar",
      role: "Senior Professional | ₹35 LPA",
      image: amitImage, 
      content: "Stuck at ₹18 LPA for 3 years, I was losing hope. Sumanta's cloud technology upskilling roadmap transformed everything. Now earning ₹35 LPA and loving what I do every day.",
      rating: 5,
      package: "Executive Growth"
    },
    {
      name: "Sneha Kapoor",
      role: "Middle Management Leader | Remote Teams",
      image: snehaImage,
      content: "Transitioned from offline marketing to leading digital teams remotely. 2x salary jump from ₹8 LPA to ₹16 LPA. Sumanta's guidance on digital tools and leadership made me indispensable.",
      rating: 5,
      package: "Digital Leader"
    },
    {
      name: "Vikash Sharma",
      role: "Senior Professional | Independent Consultant",
      image: vikashImage,
      content: "From corporate burnout to consulting freedom. Went from ₹15 LPA employee to ₹45 LPA consultant in 8 months. Sumanta showed me how to monetize my domain expertise.",
      rating: 5,
      package: "Entrepreneurial Leap"
    },
    {
      name: "Ananya Joshi",
      role: "Senior Professional | Leadership Transition",
      image: ananyaImage,
      content: "Promoted from middle management to executive leadership within 18 months. Sumanta's leadership coaching and strategic people management training made all the difference. Dream role achieved!",
      rating: 5,
      package: "Leadership Excellence"
    }
  ];

  return (
    <section className="pt-8 lg:pt-12 pb-12 lg:pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Transformations,
            <span className="text-gradient-blue block">Real Salary Growth</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Working professionals who pivoted careers, became AI-ready, and significantly increased their earnings with expert guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="premium-card p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-xs text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
                  {testimonial.package}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Community</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join 3,725+ working professionals who achieved career breakthroughs, AI readiness, and substantial salary increases.
            </p>
            <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors inline-flex items-center">
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}