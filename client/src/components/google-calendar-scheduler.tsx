import { Calendar, Clock, Video, ExternalLink } from "lucide-react";

interface GoogleCalendarSchedulerProps {
  userName: string;
  userEmail: string;
  userPhone: string;
}

export default function GoogleCalendarScheduler({ 
  userName,
  userEmail,
  userPhone
}: GoogleCalendarSchedulerProps) {
  
  // Generate Google Calendar event link
  const generateGoogleCalendarLink = () => {
    const eventTitle = encodeURIComponent("Career Discovery Call - Leadcrest Consulting");
    const eventDetails = encodeURIComponent(
      `Career Discovery Call with ${userName}\n\n` +
      `Contact Details:\n` +
      `Email: ${userEmail}\n` +
      `Phone: ${userPhone}\n\n` +
      `Meeting Agenda:\n` +
      `- Understanding your career goals\n` +
      `- Discussing current challenges\n` +
      `- Exploring how Leadcrest can help\n` +
      `- Q&A session\n\n` +
      `Meeting Link: Will be sent via email confirmation`
    );
    
    // Calculate dates for next weekday 10am-10:30am
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    
    const endTime = new Date(tomorrow);
    endTime.setMinutes(30);
    
    const startDate = tomorrow.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = endTime.toISOString().replace(/-|:|\.\d\d\d/g, '');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=${startDate}/${endDate}&location=Online+Video+Call`;
    
    return googleCalendarUrl;
  };

  const openGoogleCalendar = () => {
    window.open(generateGoogleCalendarLink(), '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mt-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Alternative: Use Google Calendar</h4>
          <p className="text-sm text-gray-600">Add directly to your calendar and we'll confirm</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-700 mb-3">
          Click below to add a tentative meeting to your Google Calendar. 
          Our team will review and send you a confirmation with the final meeting link.
        </p>
        
        <button
          onClick={openGoogleCalendar}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2v14c0 .55.45 1 1 1h5v-2H7V5h10v7h2V2l-1.5 1.5zM23 13v5c0 1.11-.89 2-2 2h-1v-2h1v-5h2zm-4 2h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
          </svg>
          Add to Google Calendar
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>30 min</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-3 h-3" />
          <span>Video call</span>
        </div>
        <div className="text-green-600 font-medium">
          ✓ We'll confirm within 24 hours
        </div>
      </div>
    </div>
  );
}