import { Star, Quote, ArrowRight } from "lucide-react";

export default function PremiumTestimonials() {
  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "The psychometric assessment completely changed my perspective. I discovered my true passion for technology and landed my dream job at Google. Manpreet ma'am's guidance was invaluable.",
      rating: 5,
      package: "Ascend Plus"
    },
    {
      name: "Priya Patel",
      role: "Medical Student, AIIMS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2b5?w=400&h=400&fit=crop&crop=face",
      content: "From confusion to clarity - that's my journey with CCC Education. The personalized counseling sessions helped me choose medicine over engineering, and I couldn't be happier.",
      rating: 5,
      package: "Achieve"
    },
    {
      name: "Rahul Kumar",
      role: "MBA at Wharton",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", 
      content: "The foreign admissions support was exceptional. From university selection to visa guidance, every step was handled professionally. Now studying at my dream business school!",
      rating: 5,
      package: "Ascend Plus"
    },
    {
      name: "Sneha Agarwal",
      role: "Marketing Manager at Unilever",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The CV building service was a game-changer. My new resume got me interviews at top companies. The professional guidance transformed my career trajectory completely.",
      rating: 5,
      package: "Ascend"
    },
    {
      name: "Vikash Singh",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      content: "The mentorship platform connected me with industry experts who guided me through my transition from mechanical engineering to data science. Truly life-changing experience.",
      rating: 5,
      package: "Discover"
    },
    {
      name: "Ananya Gupta",
      role: "Chartered Accountant",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      content: "The career webinars provided insights into industry trends that helped me make informed decisions. The expert guidance gave me confidence in my chosen path.",
      rating: 5,
      package: "Achieve"
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
            Transforming Lives,
            <span className="text-gradient-blue block">Creating Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students and professionals who achieved their career dreams with our guidance.
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
              Be part of our growing community of successful professionals who transformed their careers with expert guidance.
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