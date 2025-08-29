import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, TrendingUp, Users, Briefcase, Brain, Sparkles } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  // Define categories with icons and colors
  const categories = [
    { name: "All", icon: Sparkles, color: "from-purple-500 to-pink-500", count: blogPosts?.length || 0 },
    { name: "Executive Coaching", icon: TrendingUp, color: "from-blue-500 to-cyan-500", count: 0 },
    { name: "Corporate Wellness", icon: Users, color: "from-green-500 to-emerald-500", count: 0 },
    { name: "Mid-Career Transitions", icon: Briefcase, color: "from-orange-500 to-red-500", count: 0 },
    { name: "Leadership Development", icon: Brain, color: "from-purple-500 to-indigo-500", count: 0 },
  ];

  // Count posts per category
  if (blogPosts) {
    blogPosts.forEach(post => {
      const category = categories.find(cat => 
        post.category?.toLowerCase().includes(cat.name.toLowerCase().split(' ')[0]) ||
        (cat.name === "Executive Coaching" && post.category === "Career Development") ||
        (cat.name === "Corporate Wellness" && post.category === "Career Transition") ||
        (cat.name === "Mid-Career Transitions" && post.category === "Interview Preparation") ||
        (cat.name === "Leadership Development" && post.category === "Career Development")
      );
      if (category && category.name !== "All") {
        category.count++;
      }
    });
  }

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts?.filter(post => {
        if (selectedCategory === "Executive Coaching") {
          return post.category === "Career Development";
        } else if (selectedCategory === "Corporate Wellness") {
          return post.category === "Career Transition";
        } else if (selectedCategory === "Mid-Career Transitions") {
          return post.category === "Interview Preparation";
        } else if (selectedCategory === "Leadership Development") {
          return post.category === "Career Development";
        }
        return post.category?.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]);
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
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center gap-2 glass-secondary px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6">
            <ArrowRight className="h-4 w-4" />
            Career Insights & Tips
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" role="heading" aria-level={2}>
            Latest{" "}
            <span className="text-gradient-primary">Insights</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with career trends, education insights, and professional guidance tips to accelerate your journey.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="mb-12 fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Filter className="h-5 w-5 text-purple-400" />
              Filter by Category
            </h3>
            <div className="text-sm text-gray-400">
              {filteredPosts?.length || 0} articles found
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.name;
              
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`
                    group relative px-5 py-3 rounded-2xl font-medium transition-all duration-300
                    ${isActive 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                      : 'glass hover:scale-105 text-gray-300 hover:text-white border border-white/10'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${isActive ? 'animate-pulse' : ''}`} />
                    <span>{category.name}</span>
                    <span className={`
                      ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/10 text-gray-400'
                      }
                    `}>
                      {category.count}
                    </span>
                  </div>
                  
                  {isActive && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-30 blur-xl -z-10`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts?.slice(0, 6).map((post, index) => (
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
