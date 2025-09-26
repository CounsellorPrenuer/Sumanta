import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SEOMeta from "@/components/seo-meta";
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import { useLocation } from "wouter";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const post = blogPosts?.find(p => p.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <PremiumNavigation />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <PremiumNavigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <button 
            onClick={() => navigate("/blogs-resources")}
            className="btn-primary"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const estimatedReadTime = Math.ceil(post.content.length / 1000); // rough estimate

  return (
    <div className="min-h-screen">
      <SEOMeta 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, executive coaching, career development, leadership`}
        article={true}
        publishedTime={post.publishedAt ? post.publishedAt.toString() : undefined}
      />
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate("/blogs-resources")}
              className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Executive Insights
            </button>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              {post.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" role="heading" aria-level={1}>
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">Sumanta Chaudhuri</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'Recently Published'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{estimatedReadTime} min read</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                data-testid="button-share-article"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-12 relative overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get personalized executive coaching and strategic career guidance from Sumanta Chaudhuri.
              </p>
              <button 
                onClick={() => {
                  // Scroll to contact section or open booking modal
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    alert('Ready to accelerate your career? Contact Sumanta at leadcrestconsulting6@gmail.com or call +91 9147424608 to schedule your executive consultation.');
                  }, 500);
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                data-testid="button-schedule-consultation"
              >
                Schedule Executive Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}