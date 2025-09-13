// Simple notification service that logs registration details
// In production, these would be sent to leadcrestconsulting6@gmail.com

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  whoIsThisFor: string;
}

interface BookingConfirmationData {
  fullName: string;
  email: string;
  mobile: string;
  packageName: string;
  bookingType: 'discovery_call' | 'investment';
  amount?: number;
  currentStage: string;
}

export async function sendContactNotificationEmail(data: ContactEmailData): Promise<boolean> {
  // Log notification for admin
  console.log('\n========================================');
  console.log('📧 NEW CONTACT FORM SUBMISSION');
  console.log('Admin Email: leadcrestconsulting6@gmail.com');
  console.log('========================================');
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Phone: ${data.phone}`);
  console.log(`Career Stage: ${data.whoIsThisFor}`);
  console.log(`Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
  console.log('========================================\n');
  
  // In production, this would send an actual email to leadcrestconsulting6@gmail.com
  // For now, the admin can check the server logs for new registrations
  
  return true;
}

export async function sendBookingConfirmationEmail(data: BookingConfirmationData): Promise<boolean> {
  const careerStageMap: Record<string, string> = {
    'class8-9': 'Class 8-9',
    'class10-12': 'Class 10-12',
    'graduates': 'College Graduates',
    'professionals': 'Working Professionals'
  };
  const displayStage = careerStageMap[data.currentStage] || data.currentStage;
  
  // Log notification for admin
  console.log('\n========================================');
  console.log('🎯 NEW BOOKING REGISTRATION');
  console.log('Admin Email: leadcrestconsulting6@gmail.com');
  console.log('========================================');
  console.log(`Type: ${data.bookingType === 'discovery_call' ? 'DISCOVERY CALL' : 'PROGRAM INVESTMENT'}`);
  console.log(`Name: ${data.fullName}`);
  console.log(`Mobile: ${data.mobile}`);
  console.log(`Email: ${data.email || 'Not provided'}`);
  console.log(`Career Stage: ${displayStage}`);
  console.log(`Package: ${data.packageName}`);
  if (data.amount) {
    console.log(`Amount: ₹${data.amount.toLocaleString('en-IN')}`);
  }
  console.log(`Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
  console.log('========================================');
  console.log('ACTION REQUIRED: Contact customer within 24 hours');
  console.log('========================================\n');
  
  // In production, this would send an actual email to leadcrestconsulting6@gmail.com
  // For now, the admin can check the server logs for new registrations
  
  return true;
}