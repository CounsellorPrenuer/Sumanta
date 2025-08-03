import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-golden border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 glass-secondary px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6">
            <ArrowRight className="h-4 w-4" />
            Career Insights & Tips
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest{" "}
            <span className="text-gradient-primary">Insights</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with career trends, education insights, and professional guidance tips to accelerate your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.slice(0, 3).map((post, index) => (
            <article 
              key={post.id} 
              className="glass rounded-3xl overflow-hidden hover-lift border border-white/10 group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="glass-primary px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {post.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="text-primary hover:text-white font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button className="gradient-secondary text-white font-semibold px-8 py-4 text-lg h-auto rounded-2xl hover-glow border-0">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
