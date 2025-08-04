import { CheckCircle, Phone, Clock, ArrowLeft, CreditCard } from 'lucide-react';
import { Link } from 'wouter';

export default function ThankYou() {
  const searchParams = new URLSearchParams(window.location.search);
  const type = searchParams.get('type');
  const amount = searchParams.get('amount');
  
  const isInvestment = type === 'investment';
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${isInvestment ? 'bg-amber-100' : 'bg-green-100'} rounded-full mb-4`}>
              {isInvestment ? (
                <CreditCard className="w-10 h-10 text-amber-600" />
              ) : (
                <CheckCircle className="w-10 h-10 text-green-600" />
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isInvestment ? 'Payment Successful!' : 'Thank You for Your Interest!'}
            </h1>
            <p className="text-lg text-gray-600">
              {isInvestment 
                ? `Your investment of ₹${amount ? parseInt(amount).toLocaleString() : 'XX,XXX'} has been processed successfully. Welcome to your career transformation journey!`
                : 'Your discovery call request has been successfully submitted.'
              }
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What happens next?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Review Your Information</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Our team will review your details and understand your career goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We'll Call You</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Sumanta or one of our expert counselors will call you within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Discovery Session</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We'll schedule a personalized career clarity session at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Need immediate assistance?</h3>
            </div>
            <p className="text-amber-100 mb-4">
              Feel free to reach out to us directly if you have any urgent questions.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-200" />
              <span className="text-sm text-amber-100">
                Available Monday to Friday, 9 AM - 6 PM IST
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <p className="text-sm text-gray-500">
              Meanwhile, explore our <Link href="/blogs-resources" className="text-amber-600 hover:text-amber-700 font-medium">career resources</Link> to get started on your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}