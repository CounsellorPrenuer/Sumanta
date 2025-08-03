import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 12 Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e134?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Manpreet ma'am helped me understand my strengths and choose the right engineering stream. Her guidance was invaluable for my JEE preparation strategy.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "The career transition guidance helped me switch from IT to product management. The CV building and interview prep were excellent.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Class 10 Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Thanks to the psychometric assessment, I discovered my passion for design. Now I'm confidently pursuing my creative career path.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass-primary px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            <Quote className="h-4 w-4" />
            Student Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-gradient-secondary">Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from students and professionals whose careers we've transformed through personalized guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass rounded-3xl p-8 hover-lift border border-white/10 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-yellow-400 rounded-full flex items-center justify-center">
                    <Quote className="h-3 w-3 text-black" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex text-primary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
