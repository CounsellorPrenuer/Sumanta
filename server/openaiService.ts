import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface BlogGenerationRequest {
  topic: string;
  keywords?: string[];
  tone?: 'professional' | 'casual' | 'educational' | 'conversational';
  length?: 'short' | 'medium' | 'long';
  category?: string;
}

export interface GeneratedBlogContent {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
}

export async function generateBlogPost(request: BlogGenerationRequest): Promise<GeneratedBlogContent> {
  try {
    const { topic, keywords = [], tone = 'professional', length = 'medium', category = 'Career Development' } = request;
    
    // Generate word count based on length
    const wordCounts = {
      short: '800-1000 words',
      medium: '1500-2000 words', 
      long: '2500-3000 words'
    };
    
    const keywordText = keywords.length > 0 ? `Keywords to include: ${keywords.join(', ')}` : '';
    
    const prompt = `Write a comprehensive blog post for Leadcrest Consulting, a career counseling and education guidance company with 24+ years of experience.

Topic: ${topic}
${keywordText}
Tone: ${tone}
Length: ${wordCounts[length]}
Category: ${category}

The blog should be written from the perspective of Sumanta Chaudhuri, the founder with extensive leadership experience at global MNCs including Reliance Industries Ltd, Vodafone, and Aircel.

Please respond with a JSON object containing:
{
  "title": "Engaging, SEO-friendly title",
  "excerpt": "Compelling 2-3 sentence summary",
  "content": "Full blog post content in HTML format with proper headings, paragraphs, lists, and formatting. Include practical advice, examples, and actionable insights.",
  "category": "${category}",
  "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}

Make sure the content is:
- Professionally written and engaging
- Includes practical career advice
- Has proper HTML formatting with h2, h3 headings
- Contains actionable insights and tips
- References modern career challenges and digital transformation
- Maintains a helpful, expert tone throughout`;

    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: "You are an expert content writer specializing in career development and professional growth. Write comprehensive, valuable blog posts that help professionals advance their careers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 4000
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    // Validate the response has required fields
    if (!result.title || !result.excerpt || !result.content) {
      throw new Error('AI response missing required fields');
    }

    return {
      title: result.title,
      excerpt: result.excerpt,
      content: result.content,
      category: result.category || category,
      imageUrl: result.imageUrl || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    };

  } catch (error: any) {
    console.error('AI blog generation error:', error);
    throw new Error(`Failed to generate blog post: ${error.message}`);
  }
}

export async function improveBlogContent(existingContent: string, improvements: string): Promise<string> {
  try {
    const prompt = `Improve the following blog post content based on these specific requests: ${improvements}

Current content:
${existingContent}

Please respond with the improved content in HTML format, maintaining the original structure but incorporating the requested improvements.`;

    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: "You are an expert content editor. Improve blog posts while maintaining their core message and structure."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 3000
    });

    return response.choices[0].message.content || existingContent;

  } catch (error: any) {
    console.error('AI content improvement error:', error);
    throw new Error(`Failed to improve content: ${error.message}`);
  }
}