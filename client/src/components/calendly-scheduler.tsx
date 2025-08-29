import { useEffect } from "react";
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react";
import GoogleCalendarScheduler from "./google-calendar-scheduler";

interface CalendlySchedulerProps {
  url?: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
}

export default function CalendlyScheduler({ 
  url = "https://calendly.com/leadcrestconsulting/discovery-call",
  userName,
  userEmail,
  userPhone = ""
}: CalendlySchedulerProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: `${url}?name=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}`,
        text: 'Schedule Your Discovery Call',
        color: '#2563eb',
        textColor: '#ffffff',
        branding: false
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Thank You for Reaching Out!</h3>
          <p className="text-gray-600">Your information has been received successfully</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Our team will review your information</p>
              <p className="text-sm text-gray-600">We'll prepare personalized insights for your consultation</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">We'll contact you within 24 hours</p>
              <p className="text-sm text-gray-600">To understand your needs and schedule your consultation</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">3</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Begin your career transformation journey</p>
              <p className="text-sm text-gray-600">With expert guidance tailored to your goals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" />
          <h4 className="text-lg font-semibold">Want to Schedule Now?</h4>
        </div>
        
        <p className="text-blue-50 mb-4">
          Skip the wait! Book your discovery call directly and secure your preferred time slot.
        </p>

        <button
          onClick={openCalendly}
          className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Schedule Your Discovery Call
          <span className="ml-1">→</span>
        </button>

        <div className="flex items-center gap-6 mt-4 text-sm text-blue-100">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>30 minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <Video className="w-4 h-4" />
            <span>Video call</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Free consultation</span>
          </div>
        </div>
      </div>

      {/* Google Calendar Alternative */}
      <GoogleCalendarScheduler 
        userName={userName}
        userEmail={userEmail}
        userPhone={userPhone}
      />

      {/* Alternative Contact Methods */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">
          Prefer direct contact? You can also:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:sumantaunstoppable@gmail.com?subject=Discovery Call Request&body=Name: ${userName}%0AEmail: ${userEmail}%0APhone: ${userPhone}%0A%0AI would like to schedule a discovery call.`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Email us directly
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <a
            href="tel:+919828096408"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Call +91 9828096408
          </a>
        </div>
      </div>
    </div>
  );
}