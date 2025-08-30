import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { BookingPopup } from "@/components/booking-popup";
import ResourceDownloadModal from "@/components/resource-download-modal";
import { Calendar, User, ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react";
import type { BlogPost, Resource } from "@shared/schema";

export default function BlogsResources() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const { data: blogPosts, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const { data: resources, isLoading: resourcesLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'guide': return BookOpen;
      case 'template': return FileText;
      case 'video': return Video;
      case 'tool': return Download;
      default: return Download;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'guide': return 'from-blue-500 to-cyan-600';
      case 'template': return 'from-green-500 to-emerald-600';
      case 'video': return 'from-purple-500 to-indigo-600';
      case 'tool': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  if (blogLoading || resourcesLoading) {
    return (
      <div className="min-h-screen">
        <PremiumNavigation />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Executive Insights &
              <span className="text-gradient-blue block">Professional Resources</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Access Fortune 500-proven strategies, leadership insights, and comprehensive resources designed to accelerate your executive career and organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Executive Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic leadership insights, career advancement strategies, and corporate transformation guidance from 24+ years of Fortune 500 experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((post, index) => (
              <article 
                key={post.id} 
                className="premium-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold text-sm px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Sumanta Chaudhuri
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recently Published'}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = `/blog/${post.id}`}
                    className="text-blue-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Development Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools, assessments, and frameworks designed to accelerate your leadership journey and organizational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources?.map((resource, index) => {
              const IconComponent = getResourceIcon(resource.type);
              const colorGradient = getResourceColor(resource.type);
              
              return (
                <div 
                  key={resource.id} 
                  className="premium-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                    {resource.type}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <button 
                    onClick={() => {
                      setSelectedResource(resource);
                      setIsDownloadModalOpen(true);
                    }}
                    className="w-full btn-primary group-hover:scale-105 transition-transform"
                    data-testid={`button-download-${resource.id}`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {resource.type}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Newsletter Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="premium-card p-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Executive Leadership Insights</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join 3,725+ professionals receiving exclusive leadership strategies, Fortune 500 insights, and career advancement resources from Sumanta Chaudhuri.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Weekly</div>
                <div className="text-blue-100 text-sm">Leadership Insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Monthly</div>
                <div className="text-blue-100 text-sm">Career Strategy Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Exclusive</div>
                <div className="text-blue-100 text-sm">Executive Resources</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                data-testid="input-newsletter-email"
              />
              <button 
                onClick={() => setIsCallModalOpen(true)}
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                data-testid="button-newsletter-subscribe"
              >
                Join Leaders
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              Used by executives at Fortune 500 companies • Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      
      {/* Booking Modal */}
      <BookingPopup 
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        package={{
          id: "discover",
          name: "Discover",
          price: 550,
          description: "Free consultation to understand your needs",
          features: ["Free consultation", "Career assessment"],
          targetAudience: "All professionals",
          isPopular: false
        }}
        selectedStage="professionals"
      />

      {/* Resource Download Modal */}
      <ResourceDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => {
          setIsDownloadModalOpen(false);
          setSelectedResource(null);
        }}
        resource={selectedResource}
      />
    </div>
  );
}