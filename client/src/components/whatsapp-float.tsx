import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "919828096408"; // WhatsApp format without + and spaces
  const message = encodeURIComponent("Hi! I'm interested in career counselling sessions. Can you help me with guidance?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-float-button"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 text-white" />
        
        {/* Floating Animation Rings */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-sm font-medium">Chat with Sumanta on WhatsApp</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );
}