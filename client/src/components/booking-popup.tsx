import { useState } from 'react';
import { X, User, Phone, GraduationCap, Calendar, CreditCard } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import type { Package } from '@shared/schema';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  package: Package;
  selectedStage: string;
}

const stageLabels = {
  'graduates': 'College Graduate / Fresh Graduate',
  'earlycareer': 'Early Career Professional (0-5 years)',
  'midcareer': 'Mid-Career Professional (5-15 years)',
  'senior': 'Senior Professional (15+ years)'
};

const stageIcons = {
  'graduates': '👨‍🎓',
  'earlycareer': '💼',
  'midcareer': '📊',
  'senior': '🏆'
};

export function BookingPopup({ isOpen, onClose, package: pkg, selectedStage }: BookingPopupProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const createBookingMutation = useMutation({
    mutationFn: async (bookingData: any) => {
      const response = await apiRequest('POST', '/api/bookings', bookingData);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.bookingType === 'discovery_call') {
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        // Redirect to Razorpay payment
        initiatePayment(data.booking);
      }
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const initiatePayment = async (booking: any) => {
    try {
      // Create Razorpay order with real API
      const orderResponse = await apiRequest('POST', '/api/create-razorpay-order', {
        amount: pkg.price,
        packageId: pkg.id,
        customerName: fullName,
        customerEmail: `${mobile}@ccc-booking.com`,
        packageName: pkg.name
      });
      
      const orderData = await orderResponse.json();
      
      // Real Razorpay integration with live keys from server response
      const options = {
        key: orderData.key || 'rzp_test_your_key_here',
        amount: orderData.amount,
        currency: orderData.currency,
        name: orderData.name,
        description: orderData.description,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // Payment successful - verify on backend
          try {
            const verifyResponse = await apiRequest('POST', '/api/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
            
            const verifyResult = await verifyResponse.json();
            
            if (verifyResult.success) {
              toast({
                title: "Payment Successful! 🎉",
                description: "Thank you for your investment. You'll receive program details shortly.",
              });
              onClose();
              
              // Redirect to success page
              setTimeout(() => {
                window.location.href = '/thank-you?type=investment&amount=' + pkg.price;
              }, 2000);
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast({
              title: "Payment Verification Failed",
              description: "Please contact support with your payment details.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: orderData.prefill.name,
          email: orderData.prefill.email,
          contact: mobile,
        },
        theme: orderData.theme,
        modal: {
          ondismiss: function() {
            toast({
              title: "Payment Cancelled",
              description: "You can try again anytime.",
              variant: "destructive",
            });
            setIsSubmitting(false);
          }
        }
      };

      // Load Razorpay script dynamically and open payment
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        };
        script.onerror = () => {
          toast({
            title: "Payment Gateway Error",
            description: "Failed to load payment gateway. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        };
        document.body.appendChild(script);
      }
      
    } catch (error) {
      console.error('Payment setup error:', error);
      toast({
        title: "Payment Setup Failed",
        description: "Unable to initialize payment. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleBookingSubmit = (bookingType: 'discovery_call' | 'investment') => {
    if (!fullName.trim() || !mobile.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{10}$/.test(mobile.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const bookingData = {
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      currentStage: selectedStage,
      packageId: pkg.id,
      packageName: pkg.name,
      bookingType,
      amount: bookingType === 'investment' ? pkg.price : null,
      status: 'pending',
      paymentStatus: bookingType === 'investment' ? 'pending' : null
    };

    createBookingMutation.mutate(bookingData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Book Your Career Journey</h3>
              <p className="text-sm text-gray-600 mt-1">Get started with {pkg.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              data-testid="button-close-popup"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Package Info */}
        <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">{stageIcons[selectedStage as keyof typeof stageIcons]}</div>
            <div>
              <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
              <p className="text-sm text-gray-600">{stageLabels[selectedStage as keyof typeof stageLabels]}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-amber-600">₹{pkg.price.toLocaleString()}</span>
            {pkg.isPopular && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                Most Popular
              </span>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Enter your full name"
              data-testid="input-full-name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Mobile Number *
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Enter your 10-digit mobile number"
              data-testid="input-mobile"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Current Stage
            </label>
            <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {stageLabels[selectedStage as keyof typeof stageLabels]}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-100 space-y-3">
          <button
            onClick={() => handleBookingSubmit('discovery_call')}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
            data-testid="button-book-discovery-call"
          >
            <Calendar className="w-4 h-4" />
            {isSubmitting ? 'Booking...' : 'Book A Discovery Call'}
          </button>
          
          <button
            onClick={() => handleBookingSubmit('investment')}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-lg transition-all"
            data-testid="button-invest-programme"
          >
            <CreditCard className="w-4 h-4" />
            {isSubmitting ? 'Processing...' : 'Invest In The Programme'}
          </button>
        </div>

        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            Your information is secure and will only be used to contact you about your career journey.
          </p>
        </div>
      </div>
    </div>
  );
}