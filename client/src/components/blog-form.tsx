import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Sparkles, Save, Wand2 } from 'lucide-react';
import type { BlogPost } from '@shared/schema';

interface BlogFormProps {
  blog?: BlogPost | null;
  onClose: () => void;
}

interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
}

const categories = [
  'Career Development',
  'Leadership',
  'Digital Transformation',
  'Professional Growth',
  'Education Guidance',
  'Industry Insights',
  'Mentorship',
  'Skills Development'
];

const tones = [
  { value: 'professional', label: 'Professional' },
  { value: 'conversational', label: 'Conversational' },
  { value: 'educational', label: 'Educational' },
  { value: 'casual', label: 'Casual' }
];

const lengths = [
  { value: 'short', label: 'Short (800-1000 words)' },
  { value: 'medium', label: 'Medium (1500-2000 words)' },
  { value: 'long', label: 'Long (2500-3000 words)' }
];

export default function BlogForm({ blog, onClose }: BlogFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<BlogFormData>({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    category: blog?.category || 'Career Development',
    imageUrl: blog?.imageUrl || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  });

  // AI Generation form
  const [aiForm, setAiForm] = useState({
    topic: '',
    keywords: '',
    tone: 'professional',
    length: 'medium',
    category: 'Career Development'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [improvementRequest, setImprovementRequest] = useState('');

  const createBlogMutation = useMutation({
    mutationFn: (data: BlogFormData) => apiRequest('POST', '/api/blog-posts', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      toast({
        title: "Blog Created",
        description: "Your blog post has been created successfully.",
      });
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Creation Failed",
        description: error.message || "Failed to create blog post.",
        variant: "destructive",
      });
    }
  });

  const updateBlogMutation = useMutation({
    mutationFn: (data: BlogFormData) => apiRequest('PUT', `/api/blog-posts/${blog?.id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      toast({
        title: "Blog Updated",
        description: "Your blog post has been updated successfully.",
      });
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Update Failed", 
        description: error.message || "Failed to update blog post.",
        variant: "destructive",
      });
    }
  });

  const generateBlogMutation = useMutation({
    mutationFn: (data: typeof aiForm) => apiRequest('POST', '/api/generate-blog', data),
    onSuccess: (response: any) => {
      setFormData({
        title: response.title,
        excerpt: response.excerpt,
        content: response.content,
        category: response.category,
        imageUrl: response.imageUrl
      });
      toast({
        title: "Blog Generated! ✨",
        description: "AI has generated your blog post. Review and edit as needed.",
      });
      setIsGenerating(false);
    },
    onError: (error: any) => {
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate blog post.",
        variant: "destructive",
      });
      setIsGenerating(false);
    }
  });

  const improveBlogMutation = useMutation({
    mutationFn: () => apiRequest('POST', '/api/improve-blog', { 
      content: formData.content, 
      improvements: improvementRequest 
    }),
    onSuccess: (response: any) => {
      setFormData(prev => ({ ...prev, content: response.content }));
      toast({
        title: "Content Improved! ✨",
        description: "AI has improved your blog content.",
      });
      setIsImproving(false);
      setImprovementRequest('');
    },
    onError: (error: any) => {
      toast({
        title: "Improvement Failed",
        description: error.message || "Failed to improve content.",
        variant: "destructive",
      });
      setIsImproving(false);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blog) {
      updateBlogMutation.mutate(formData);
    } else {
      createBlogMutation.mutate(formData);
    }
  };

  const handleGenerate = () => {
    if (!aiForm.topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for blog generation.",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    const keywords = aiForm.keywords.split(',').map(k => k.trim()).filter(k => k);
    generateBlogMutation.mutate({
      topic: aiForm.topic,
      tone: aiForm.tone as any,
      length: aiForm.length as any,
      category: aiForm.category,
      keywords
    });
  };

  const handleImprove = () => {
    if (!improvementRequest.trim()) {
      toast({
        title: "Instructions Required",
        description: "Please describe how you want to improve the content.",
        variant: "destructive",
      });
      return;
    }
    
    setIsImproving(true);
    improveBlogMutation.mutate();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              data-testid="button-close-blog-form"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* AI Generation Section */}
          {!blog && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">AI Blog Generation</h3>
              </div>
              <p className="text-gray-600 mb-4">Generate a professional blog post using AI based on your topic and preferences.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="ai-topic">Topic *</Label>
                  <Input
                    id="ai-topic"
                    value={aiForm.topic}
                    onChange={(e) => setAiForm(prev => ({ ...prev, topic: e.target.value }))}
                    placeholder="e.g., How to transition to leadership roles"
                    data-testid="input-ai-topic"
                  />
                </div>
                <div>
                  <Label htmlFor="ai-keywords">Keywords (comma separated)</Label>
                  <Input
                    id="ai-keywords"
                    value={aiForm.keywords}
                    onChange={(e) => setAiForm(prev => ({ ...prev, keywords: e.target.value }))}
                    placeholder="e.g., leadership, career growth, management"
                    data-testid="input-ai-keywords"
                  />
                </div>
                <div>
                  <Label htmlFor="ai-tone">Tone</Label>
                  <Select value={aiForm.tone} onValueChange={(value) => setAiForm(prev => ({ ...prev, tone: value }))}>
                    <SelectTrigger data-testid="select-ai-tone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map(tone => (
                        <SelectItem key={tone.value} value={tone.value}>{tone.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ai-length">Length</Label>
                  <Select value={aiForm.length} onValueChange={(value) => setAiForm(prev => ({ ...prev, length: value }))}>
                    <SelectTrigger data-testid="select-ai-length">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {lengths.map(length => (
                        <SelectItem key={length.value} value={length.value}>{length.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-purple-600 hover:bg-purple-700"
                data-testid="button-generate-blog"
              >
                {isGenerating ? (
                  <>
                    <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Blog Post
                  </>
                )}
              </Button>
            </div>
          )}

          {/* AI Content Improvement */}
          {formData.content && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <Wand2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">AI Content Improvement</h3>
              </div>
              <p className="text-gray-600 mb-4">Improve existing content with specific instructions.</p>
              
              <div className="flex gap-2 mb-4">
                <Input
                  value={improvementRequest}
                  onChange={(e) => setImprovementRequest(e.target.value)}
                  placeholder="e.g., Make it more engaging, add more examples, improve SEO"
                  className="flex-1"
                  data-testid="input-improvement-request"
                />
                <Button
                  onClick={handleImprove}
                  disabled={isImproving}
                  className="bg-blue-600 hover:bg-blue-700"
                  data-testid="button-improve-content"
                >
                  {isImproving ? (
                    <>
                      <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                      Improving...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Improve
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Manual Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                  data-testid="input-blog-title"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger data-testid="select-blog-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                required
                data-testid="textarea-blog-excerpt"
              />
            </div>

            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                placeholder="https://images.unsplash.com/..."
                data-testid="input-blog-image-url"
              />
            </div>

            <div>
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                rows={15}
                className="font-mono text-sm"
                placeholder="Enter your blog content in HTML format..."
                required
                data-testid="textarea-blog-content"
              />
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <Button
                type="submit"
                disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
                className="bg-golden hover:bg-golden/90"
                data-testid="button-save-blog"
              >
                <Save className="w-4 h-4 mr-2" />
                {blog ? 'Update' : 'Create'} Blog Post
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                data-testid="button-cancel-blog"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}