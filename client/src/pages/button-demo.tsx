import { useState } from 'react';
import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";

export default function ButtonDemo() {
  // State for the color-changing div
  const [backgroundColor, setBackgroundColor] = useState('#3b82f6');
  
  // State for toggling text visibility
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  // State for click counter
  const [clickCount, setClickCount] = useState(0);

  // Function to generate random color
  const generateRandomColor = () => {
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#06b6d4', '#0ea5e9', '#3b82f6',
      '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
      '#f43f5e', '#64748b', '#6b7280', '#374151', '#1f2937'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Button 1: Change Color function
  const handleColorChange = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);
  };

  // Button 2: Toggle Text function
  const handleToggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  // Button 3: Count Clicks function
  const handleCountClicks = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PremiumNavigation />
      
      {/* Main Content */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Interactive Button Demo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Three functional buttons that demonstrate JavaScript interactivity: 
              Color changing, text toggling, and click counting.
            </p>
          </div>

          {/* Button Demonstrations */}
          <div className="space-y-12">
            
            {/* Button 1: Change Color */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Change Color Button</h2>
              <p className="text-gray-600 mb-6">
                Click the button below to change the background color of the box to a random color.
              </p>
              
              {/* Color-changing div */}
              <div 
                className="w-full h-32 rounded-xl mb-6 transition-all duration-300 ease-in-out flex items-center justify-center"
                style={{ backgroundColor }}
                data-testid="color-changing-div"
              >
                <span className="text-white font-semibold text-lg drop-shadow-md">
                  This box changes color!
                </span>
              </div>
              
              <button
                onClick={handleColorChange}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
                data-testid="change-color-button"
              >
                Change Color
              </button>
            </div>

            {/* Button 2: Toggle Text */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toggle Text Button</h2>
              <p className="text-gray-600 mb-6">
                Click the button below to show or hide a secret message.
              </p>
              
              {/* Hidden/Visible message */}
              <div className="mb-6 min-h-[60px] flex items-center">
                {isTextVisible && (
                  <div 
                    className="bg-green-50 border border-green-200 rounded-lg p-4 w-full animate-fade-in"
                    data-testid="hidden-message"
                  >
                    <p className="text-green-800 font-medium">
                      🎉 Congratulations! You found the hidden message! This text was hidden and is now visible. 
                      Click the button again to hide it.
                    </p>
                  </div>
                )}
                {!isTextVisible && (
                  <div className="text-gray-400 italic" data-testid="no-message">
                    Hidden message is not visible. Click the button to reveal it!
                  </div>
                )}
              </div>
              
              <button
                onClick={handleToggleText}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
                data-testid="toggle-text-button"
              >
                {isTextVisible ? 'Hide Text' : 'Show Text'}
              </button>
            </div>

            {/* Button 3: Count Clicks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Count Clicks Button</h2>
              <p className="text-gray-600 mb-6">
                Click the button below to increment the counter. Each click increases the count by one.
              </p>
              
              {/* Click counter display */}
              <div className="mb-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-800 mb-2" data-testid="click-counter">
                    {clickCount}
                  </div>
                  <div className="text-purple-600">
                    {clickCount === 0 ? 'No clicks yet' : 
                     clickCount === 1 ? '1 click' : 
                     `${clickCount} clicks`}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handleCountClicks}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
                  data-testid="count-clicks-button"
                >
                  Click Me! (+1)
                </button>
                
                {/* Reset button for better UX */}
                <button
                  onClick={() => setClickCount(0)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
                  data-testid="reset-counter-button"
                >
                  Reset Counter
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Interactive Features Summary</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">🎨 Color Changer</div>
                <div className="opacity-90">Random background colors using JavaScript</div>
              </div>
              <div>
                <div className="font-semibold mb-2">👁️ Text Toggle</div>
                <div className="opacity-90">Show/hide content with state management</div>
              </div>
              <div>
                <div className="font-semibold mb-2">🔢 Click Counter</div>
                <div className="opacity-90">Interactive counter with real-time updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}