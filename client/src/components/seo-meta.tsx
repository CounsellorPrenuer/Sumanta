import { useEffect } from 'react';

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  article?: boolean;
  author?: string;
  publishedTime?: string;
}

export default function SEOMeta({ 
  title, 
  description, 
  keywords,
  ogImage = '/og-image.jpg',
  article = false,
  author = 'Sumanta Chaudhuri',
  publishedTime
}: SEOMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Leadcrest Consulting`;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || 'executive coaching, career counseling, leadership development' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: article ? 'article' : 'website' },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: ogImage }
    ];
    
    if (article) {
      metaTags.push(
        { property: 'article:author', content: author },
        { property: 'article:published_time', content: publishedTime || new Date().toISOString() }
      );
    }
    
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.name = name;
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.content = content;
    });
    
    // Add schema.org structured data for articles
    if (article) {
      const existingScript = document.querySelector('script[data-schema="article"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": author
        },
        "datePublished": publishedTime || new Date().toISOString(),
        "publisher": {
          "@type": "Organization",
          "name": "Leadcrest Consulting",
          "logo": {
            "@type": "ImageObject",
            "url": "https://leadcrestconsulting.com/logo.png"
          }
        }
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'article');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      // Reset title on unmount
      document.title = 'Leadcrest Consulting - Executive Career Coaching & Leadership Development';
    };
  }, [title, description, keywords, ogImage, article, author, publishedTime]);
  
  return null;
}