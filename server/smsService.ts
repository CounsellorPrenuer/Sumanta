import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const adminPhoneNumber = process.env.ADMIN_PHONE_NUMBER || '+911234567890'; // Default admin phone

// Create Twilio client only if credentials are provided
const twilioClient = accountSid && authToken ? twilio(accountSid, authToken) : null;

interface ContactSMSData {
  name: string;
  email: string;
  phone: string;
  whoIsThisFor: string;
}

interface BookingSMSData {
  fullName: string;
  mobile: string;
  packageName: string;
  bookingType: 'discovery_call' | 'investment';
  amount?: number;
  currentStage: string;
}

interface PaymentSMSData {
  customerName: string;
  packageName: string;
  amount: number;
  status: 'completed' | 'failed';
}

// Helper function to format phone numbers to E.164 format
function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, '');
  
  // If the number doesn't start with country code, assume it's Indian (+91)
  if (!cleaned.startsWith('91') && cleaned.length === 10) {
    cleaned = '91' + cleaned;
  }
  
  // Add the + prefix
  return '+' + cleaned;
}

// Send SMS to admin when a new contact form is submitted
export async function sendContactNotificationSMS(data: ContactSMSData): Promise<boolean> {
  try {
    const message = `New Contact Form:
Name: ${data.name}
Phone: ${data.phone}
Stage: ${data.whoIsThisFor}
Email: ${data.email}`;

    console.log('\n📱 Sending SMS notification to admin...');
    
    if (!twilioClient || !twilioPhoneNumber) {
      console.log('⚠️  Twilio not configured. SMS notification skipped.');
      console.log('SMS Content:', message);
      return false;
    }

    const sms = await twilioClient.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: formatPhoneNumber(adminPhoneNumber)
    });

    console.log(`✅ SMS sent successfully! Message SID: ${sms.sid}`);
    return true;
  } catch (error) {
    console.error('❌ Error sending SMS:', error);
    return false;
  }
}

// Send SMS confirmation to customer for bookings
export async function sendBookingConfirmationSMS(data: BookingSMSData): Promise<boolean> {
  try {
    const customerMessage = data.bookingType === 'discovery_call' 
      ? `Hi ${data.fullName}, your discovery call for ${data.packageName} has been booked. We'll contact you within 24 hours. - Leadcrest Consulting`
      : `Hi ${data.fullName}, thank you for investing in ${data.packageName} (₹${data.amount?.toLocaleString('en-IN')}). Our team will reach out soon. - Leadcrest Consulting`;

    const adminMessage = `New ${data.bookingType === 'discovery_call' ? 'Discovery Call' : 'Investment'} Booking:
Name: ${data.fullName}
Mobile: ${data.mobile}
Package: ${data.packageName}
${data.amount ? `Amount: ₹${data.amount.toLocaleString('en-IN')}` : ''}`;

    console.log('\n📱 Sending booking SMS notifications...');
    
    if (!twilioClient || !twilioPhoneNumber) {
      console.log('⚠️  Twilio not configured. SMS notifications skipped.');
      console.log('Customer SMS:', customerMessage);
      console.log('Admin SMS:', adminMessage);
      return false;
    }

    // Send to customer
    try {
      const customerSMS = await twilioClient.messages.create({
        body: customerMessage,
        from: twilioPhoneNumber,
        to: formatPhoneNumber(data.mobile)
      });
      console.log(`✅ Customer SMS sent! SID: ${customerSMS.sid}`);
    } catch (error) {
      console.error('⚠️  Could not send SMS to customer:', error);
    }

    // Send to admin
    try {
      const adminSMS = await twilioClient.messages.create({
        body: adminMessage,
        from: twilioPhoneNumber,
        to: formatPhoneNumber(adminPhoneNumber)
      });
      console.log(`✅ Admin SMS sent! SID: ${adminSMS.sid}`);
    } catch (error) {
      console.error('⚠️  Could not send SMS to admin:', error);
    }

    return true;
  } catch (error) {
    console.error('❌ Error in SMS service:', error);
    return false;
  }
}

// Send SMS notification for payment status
export async function sendPaymentStatusSMS(data: PaymentSMSData): Promise<boolean> {
  try {
    const adminMessage = data.status === 'completed'
      ? `💰 Payment Received!\nCustomer: ${data.customerName}\nPackage: ${data.packageName}\nAmount: ₹${data.amount.toLocaleString('en-IN')}`
      : `⚠️ Payment Failed\nCustomer: ${data.customerName}\nPackage: ${data.packageName}\nAmount: ₹${data.amount.toLocaleString('en-IN')}`;

    console.log('\n📱 Sending payment SMS notification...');
    
    if (!twilioClient || !twilioPhoneNumber) {
      console.log('⚠️  Twilio not configured. SMS notification skipped.');
      console.log('SMS Content:', adminMessage);
      return false;
    }

    const sms = await twilioClient.messages.create({
      body: adminMessage,
      from: twilioPhoneNumber,
      to: formatPhoneNumber(adminPhoneNumber)
    });

    console.log(`✅ Payment SMS sent! SID: ${sms.sid}`);
    return true;
  } catch (error) {
    console.error('❌ Error sending payment SMS:', error);
    return false;
  }
}

// Send custom SMS to any number
export async function sendCustomSMS(to: string, message: string): Promise<boolean> {
  try {
    console.log('\n📱 Sending custom SMS...');
    
    if (!twilioClient || !twilioPhoneNumber) {
      console.log('⚠️  Twilio not configured. SMS not sent.');
      console.log(`To: ${to}`);
      console.log(`Message: ${message}`);
      return false;
    }

    const sms = await twilioClient.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: formatPhoneNumber(to)
    });

    console.log(`✅ Custom SMS sent! SID: ${sms.sid}`);
    return true;
  } catch (error) {
    console.error('❌ Error sending custom SMS:', error);
    return false;
  }
}

// Bulk SMS sending for marketing campaigns
export async function sendBulkSMS(numbers: string[], message: string): Promise<{ sent: number; failed: number; results: Array<{ number: string; status: string; error?: string }> }> {
  const results: Array<{ number: string; status: string; error?: string }> = [];
  let sent = 0;
  let failed = 0;

  if (!twilioClient || !twilioPhoneNumber) {
    console.log('⚠️  Twilio not configured. Bulk SMS not sent.');
    return { sent: 0, failed: numbers.length, results: numbers.map(n => ({ number: n, status: 'failed', error: 'Twilio not configured' })) };
  }

  for (const number of numbers) {
    try {
      const sms = await twilioClient.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: formatPhoneNumber(number)
      });
      
      results.push({ number, status: 'sent' });
      sent++;
      console.log(`✅ SMS sent to ${number}: ${sms.sid}`);
    } catch (error: any) {
      results.push({ number, status: 'failed', error: error.message });
      failed++;
      console.error(`❌ Failed to send to ${number}:`, error.message);
    }
  }

  console.log(`\n📊 Bulk SMS Summary: Sent: ${sent}, Failed: ${failed}`);
  return { sent, failed, results };
}