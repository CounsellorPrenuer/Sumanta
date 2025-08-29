import { useState, useEffect } from "react";
import { Cookie, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const essentialCheckbox = document.getElementById("essential-cookies") as HTMLInputElement;
    const analyticsCheckbox = document.getElementById("analytics-cookies") as HTMLInputElement;
    const marketingCheckbox = document.getElementById("marketing-cookies") as HTMLInputElement;
    const preferencesCheckbox = document.getElementById("preferences-cookies") as HTMLInputElement;

    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true, // Always true
      analytics: analyticsCheckbox?.checked || false,
      marketing: marketingCheckbox?.checked || false,
      preferences: preferencesCheckbox?.checked || false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowDetails(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t-2 border-blue-500 shadow-2xl animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">We value your privacy</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. 
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-blue-600 hover:text-blue-700 font-medium ml-1 underline"
                >
                  Learn more
                </button>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={acceptEssentialOnly}
                className="border-gray-300 hover:bg-gray-50"
              >
                Essential Only
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowDetails(!showDetails)}
                className="border-gray-300 hover:bg-gray-50"
              >
                Preferences
              </Button>
              <Button
                onClick={acceptAllCookies}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </Button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Detailed Preferences */}
          {showDetails && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-base font-semibold text-gray-900 mb-4">Cookie Preferences</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Essential Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="essential-cookies"
                    checked={true}
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential-cookies" className="font-medium text-gray-900 cursor-not-allowed">
                      Essential Cookies
                      <span className="ml-2 text-xs text-gray-500">(Always On)</span>
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="analytics-cookies"
                    defaultChecked={true}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics-cookies" className="font-medium text-gray-900 cursor-pointer">
                      Analytics Cookies
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="marketing-cookies"
                    defaultChecked={false}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing-cookies" className="font-medium text-gray-900 cursor-pointer">
                      Marketing Cookies
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Used to deliver relevant advertisements and track campaigns.
                    </p>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="preferences-cookies"
                    defaultChecked={true}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="preferences-cookies" className="font-medium text-gray-900 cursor-pointer">
                      Preference Cookies
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Remember your settings and preferences for a better experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <a 
                  href="/privacy-policy" 
                  className="text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>
                <Button
                  onClick={savePreferences}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
}