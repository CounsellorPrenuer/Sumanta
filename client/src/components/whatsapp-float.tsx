import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "919147424608"; // WhatsApp format without + and spaces
  const message = encodeURIComponent("Hi! I'm interested in career counselling sessions. Can you help me with guidance?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    // Use window.location.href to avoid opening blank tabs
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-float-button"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
        
        {/* Subtle glow effect instead of animation */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
        
        {/* Small notification dot - static, not animated */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-sm font-medium">Chat with Sumanta on WhatsApp</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );
}