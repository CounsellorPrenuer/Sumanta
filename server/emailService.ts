// Email notification service using SendGrid
// Reference: javascript_sendgrid integration

import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key if available
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = 'leadcrestconsulting6@gmail.com';
// IMPORTANT: Change this to your verified sender email in SendGrid
// This must be an email you've verified in SendGrid -> Settings -> Sender Authentication
const FROM_EMAIL = 'leadcrestconsulting6@gmail.com'; // Using admin email as sender (must be verified in SendGrid)

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

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

interface ResourceDownloadData {
  fullName: string;
  email: string;
  mobile: string;
  resourceTitle: string;
  currentStage: string;
}

// Helper function to send emails
async function sendEmail(to: string | string[], subject: string, text: string, html: string): Promise<boolean> {
  if (!SENDGRID_API_KEY) {
    console.log('⚠️  SendGrid not configured. Email would have been sent to:', to);
    console.log('Subject:', subject);
    console.log('Content:', text);
    return false;
  }

  try {
    const msg = {
      to: Array.isArray(to) ? to : [to],
      from: FROM_EMAIL,
      subject: subject,
      text: text,
      html: html
    };
    
    await sgMail.send(msg);
    console.log(`✅ Email sent successfully to ${Array.isArray(to) ? to.join(', ') : to}`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    if (error.response) {
      console.error('SendGrid Error Details:', error.response.body);
      if (error.code === 403) {
        console.error('\n⚠️  IMPORTANT: SendGrid 403 Error - This usually means:');
        console.error('1. You need to verify your sender email address in SendGrid');
        console.error('2. Go to SendGrid Dashboard -> Settings -> Sender Authentication');
        console.error(`3. Add and verify the email: ${FROM_EMAIL}`);
        console.error('4. Or use Single Sender Verification for quick testing\n');
      }
    }
    return false;
  }
}

export async function sendContactNotificationEmail(data: ContactEmailData): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Email content for admin
  const adminSubject = `New Contact Form Submission - ${data.name}`;
  const adminText = `
NEW CONTACT FORM SUBMISSION

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Career Stage: ${data.whoIsThisFor}
Time: ${time}

ACTION REQUIRED: Please respond to this inquiry within 24 hours.
`;
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">📧 New Contact Form Submission</h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Career Stage:</strong> ${data.whoIsThisFor}</p>
        <p><strong>Submitted at:</strong> ${time}</p>
      </div>
      <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
        <strong>⚠️ ACTION REQUIRED:</strong> Please respond to this inquiry within 24 hours.
      </div>
    </div>
  `;
  
  // Email content for user
  const userSubject = 'Thank you for contacting Leadcrest Consulting';
  const userText = `
Dear ${data.name},

Thank you for reaching out to Leadcrest Consulting. We have received your inquiry and appreciate your interest in our services.

Our team will review your message and get back to you within 24 hours.

Your submission details:
- Career Stage: ${data.whoIsThisFor}
- Contact Email: ${data.email}
- Contact Phone: ${data.phone}

If you have any urgent questions, please don't hesitate to call us directly.

Best regards,
The Leadcrest Consulting Team
`;
  
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
        <h2 style="color: #333;">Thank You for Contacting Us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your inquiry and appreciate your interest in our services. Our team will review your message and get back to you within 24 hours.</p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #D4AF37;">Your Submission Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 5px 0;"><strong>Career Stage:</strong> ${data.whoIsThisFor}</li>
            <li style="padding: 5px 0;"><strong>Email:</strong> ${data.email}</li>
            <li style="padding: 5px 0;"><strong>Phone:</strong> ${data.phone}</li>
          </ul>
        </div>
        
        <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
        
        <p style="margin-top: 30px;">Best regards,<br>
        <strong>The Leadcrest Consulting Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
        <p>© 2024 Leadcrest Consulting. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Log for debugging
  console.log('\n========================================');
  console.log('📧 NEW CONTACT FORM SUBMISSION');
  console.log('========================================');
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Phone: ${data.phone}`);
  console.log(`Career Stage: ${data.whoIsThisFor}`);
  console.log(`Time: ${time}`);
  console.log('========================================\n');
  
  // Send emails to both admin and user
  const adminEmailSent = await sendEmail(ADMIN_EMAIL, adminSubject, adminText, adminHtml);
  const userEmailSent = await sendEmail(data.email, userSubject, userText, userHtml);
  
  return adminEmailSent && userEmailSent;
}

export async function sendBookingConfirmationEmail(data: BookingConfirmationData): Promise<boolean> {
  const careerStageMap: Record<string, string> = {
    'class8-9': 'Class 8-9',
    'class10-12': 'Class 10-12',
    'graduates': 'College Graduates',
    'professionals': 'Working Professionals'
  };
  const displayStage = careerStageMap[data.currentStage] || data.currentStage;
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const bookingTypeDisplay = data.bookingType === 'discovery_call' ? 'Discovery Call' : 'Program Investment';
  
  // Email content for admin
  const adminSubject = `New ${bookingTypeDisplay} - ${data.fullName}`;
  const adminText = `
NEW ${bookingTypeDisplay.toUpperCase()} BOOKING

Name: ${data.fullName}
Mobile: ${data.mobile}
Email: ${data.email || 'Not provided'}
Career Stage: ${displayStage}
Package: ${data.packageName}
${data.amount ? `Amount: ₹${data.amount.toLocaleString('en-IN')}` : ''}
Time: ${time}

ACTION REQUIRED: Contact customer within 24 hours.
`;
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
        🎯 New ${bookingTypeDisplay} Booking
      </h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Mobile:</strong> <a href="tel:${data.mobile}">${data.mobile}</a></p>
        <p><strong>Email:</strong> ${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : 'Not provided'}</p>
        <p><strong>Career Stage:</strong> ${displayStage}</p>
        <p><strong>Package:</strong> ${data.packageName}</p>
        ${data.amount ? `<p><strong>Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</p>` : ''}
        <p><strong>Booking Time:</strong> ${time}</p>
      </div>
      <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
        <strong>⚠️ ACTION REQUIRED:</strong> Contact customer within 24 hours.
      </div>
    </div>
  `;
  
  // Email content for user (only if email is provided)
  const userSubject = `Booking Confirmation - ${data.packageName}`;
  const userText = `
Dear ${data.fullName},

Thank you for booking ${data.bookingType === 'discovery_call' ? 'a discovery call' : 'your investment'} with Leadcrest Consulting!

Your Booking Details:
- Package: ${data.packageName}
- Career Stage: ${displayStage}
${data.amount ? `- Investment Amount: ₹${data.amount.toLocaleString('en-IN')}` : ''}

What happens next?
Our team will contact you within 24 hours to ${data.bookingType === 'discovery_call' ? 'schedule your discovery call' : 'guide you through the next steps'}.

If you have any questions, feel free to reach out to us.

Best regards,
The Leadcrest Consulting Team
`;
  
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
        <h2 style="color: #333;">Booking Confirmed! ✅</h2>
        <p>Dear ${data.fullName},</p>
        <p>Thank you for ${data.bookingType === 'discovery_call' ? 'booking a discovery call' : 'your investment'} with Leadcrest Consulting!</p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #D4AF37;">Your Booking Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 5px 0;"><strong>Package:</strong> ${data.packageName}</li>
            <li style="padding: 5px 0;"><strong>Career Stage:</strong> ${displayStage}</li>
            ${data.amount ? `<li style="padding: 5px 0;"><strong>Investment Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</li>` : ''}
          </ul>
        </div>
        
        <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2e7d32;">What happens next?</h3>
          <p>Our team will contact you within 24 hours to ${data.bookingType === 'discovery_call' ? 'schedule your discovery call' : 'guide you through the next steps'}.</p>
        </div>
        
        <p>If you have any questions, feel free to reach out to us.</p>
        
        <p style="margin-top: 30px;">Best regards,<br>
        <strong>The Leadcrest Consulting Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
        <p>© 2024 Leadcrest Consulting. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Log for debugging
  console.log('\n========================================');
  console.log('🎯 NEW BOOKING REGISTRATION');
  console.log('========================================');
  console.log(`Type: ${bookingTypeDisplay}`);
  console.log(`Name: ${data.fullName}`);
  console.log(`Mobile: ${data.mobile}`);
  console.log(`Email: ${data.email || 'Not provided'}`);
  console.log(`Career Stage: ${displayStage}`);
  console.log(`Package: ${data.packageName}`);
  if (data.amount) {
    console.log(`Amount: ₹${data.amount.toLocaleString('en-IN')}`);
  }
  console.log(`Time: ${time}`);
  console.log('========================================\n');
  
  // Send email to admin
  const adminEmailSent = await sendEmail(ADMIN_EMAIL, adminSubject, adminText, adminHtml);
  
  // Send email to user only if email is provided
  let userEmailSent = true;
  if (data.email && data.email.includes('@') && !data.email.includes('leadcrest-booking.com')) {
    userEmailSent = await sendEmail(data.email, userSubject, userText, userHtml);
  }
  
  return adminEmailSent && userEmailSent;
}

export async function sendResourceDownloadEmail(data: ResourceDownloadData): Promise<boolean> {
  const careerStageMap: Record<string, string> = {
    'class8-9': 'Class 8-9',
    'class10-12': 'Class 10-12',
    'graduates': 'College Graduates',
    'professionals': 'Working Professionals'
  };
  const displayStage = careerStageMap[data.currentStage] || data.currentStage;
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Email content for admin
  const adminSubject = `Resource Download - ${data.resourceTitle}`;
  const adminText = `
NEW RESOURCE DOWNLOAD

Resource: ${data.resourceTitle}
Name: ${data.fullName}
Email: ${data.email}
Mobile: ${data.mobile}
Career Stage: ${displayStage}
Time: ${time}

This user has shown interest in your resources. Consider following up.
`;
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
        📥 New Resource Download
      </h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Resource:</strong> ${data.resourceTitle}</p>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Mobile:</strong> <a href="tel:${data.mobile}">${data.mobile}</a></p>
        <p><strong>Career Stage:</strong> ${displayStage}</p>
        <p><strong>Download Time:</strong> ${time}</p>
      </div>
      <div style="background: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <strong>💡 TIP:</strong> This user has shown interest in your resources. Consider following up with relevant offerings.
      </div>
    </div>
  `;
  
  // Email content for user
  const userSubject = `Your Resource: ${data.resourceTitle}`;
  const userText = `
Dear ${data.fullName},

Thank you for your interest in our resource: "${data.resourceTitle}"

You should have access to download this resource. If you encounter any issues accessing it, please don't hesitate to contact us.

We hope you find this resource valuable for your career journey!

We also offer personalized career consultation services that might interest you. Our team can help you navigate your career path more effectively.

Best regards,
The Leadcrest Consulting Team
`;
  
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
        <h2 style="color: #333;">Thank You for Downloading!</h2>
        <p>Dear ${data.fullName},</p>
        <p>Thank you for your interest in our resource:</p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center;">
          <h3 style="color: #D4AF37;">"${data.resourceTitle}"</h3>
        </div>
        
        <p>You should have access to download this resource. If you encounter any issues accessing it, please don't hesitate to contact us.</p>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #856404;">💡 Did you know?</h3>
          <p>We also offer personalized career consultation services that might interest you. Our team can help you navigate your career path more effectively.</p>
        </div>
        
        <p>We hope you find this resource valuable for your career journey!</p>
        
        <p style="margin-top: 30px;">Best regards,<br>
        <strong>The Leadcrest Consulting Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
        <p>© 2024 Leadcrest Consulting. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Log for debugging
  console.log('\n========================================');
  console.log('📥 NEW RESOURCE DOWNLOAD');
  console.log('========================================');
  console.log(`Resource: ${data.resourceTitle}`);
  console.log(`Name: ${data.fullName}`);
  console.log(`Email: ${data.email}`);
  console.log(`Mobile: ${data.mobile}`);
  console.log(`Career Stage: ${displayStage}`);
  console.log(`Time: ${time}`);
  console.log('========================================\n');
  
  // Send emails to both admin and user
  const adminEmailSent = await sendEmail(ADMIN_EMAIL, adminSubject, adminText, adminHtml);
  const userEmailSent = await sendEmail(data.email, userSubject, userText, userHtml);
  
  return adminEmailSent && userEmailSent;
}

export async function sendPaymentConfirmationEmail(customerEmail: string, customerName: string, packageName: string, amount: number): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Email content for admin
  const adminSubject = `Payment Received - ${customerName}`;
  const adminText = `
PAYMENT RECEIVED

Customer: ${customerName}
Email: ${customerEmail}
Package: ${packageName}
Amount: ₹${amount.toLocaleString('en-IN')}
Time: ${time}

Payment has been successfully processed.
`;
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #28a745; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
        💰 Payment Received
      </h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
        <p><strong>Package:</strong> ${packageName}</p>
        <p><strong>Amount:</strong> ₹${amount.toLocaleString('en-IN')}</p>
        <p><strong>Payment Time:</strong> ${time}</p>
      </div>
      <div style="background: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin: 20px 0;">
        <strong>✅ STATUS:</strong> Payment has been successfully processed.
      </div>
    </div>
  `;
  
  // Email content for customer
  const userSubject = `Payment Confirmation - ${packageName}`;
  const userText = `
Dear ${customerName},

Your payment has been successfully processed!

Payment Details:
- Package: ${packageName}
- Amount: ₹${amount.toLocaleString('en-IN')}
- Transaction Date: ${time}

Thank you for your investment in your career growth. Our team will be in touch with you shortly to begin your journey with Leadcrest Consulting.

If you have any questions about your payment or next steps, please don't hesitate to contact us.

Best regards,
The Leadcrest Consulting Team
`;
  
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
        <h2 style="color: #28a745;">Payment Successful! ✅</h2>
        <p>Dear ${customerName},</p>
        <p>Your payment has been successfully processed!</p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #D4AF37;">Payment Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 5px 0;"><strong>Package:</strong> ${packageName}</li>
            <li style="padding: 5px 0;"><strong>Amount:</strong> ₹${amount.toLocaleString('en-IN')}</li>
            <li style="padding: 5px 0;"><strong>Transaction Date:</strong> ${time}</li>
          </ul>
        </div>
        
        <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2e7d32;">What's Next?</h3>
          <p>Our team will be in touch with you shortly to begin your journey with Leadcrest Consulting.</p>
        </div>
        
        <p>Thank you for your investment in your career growth!</p>
        
        <p>If you have any questions about your payment or next steps, please don't hesitate to contact us.</p>
        
        <p style="margin-top: 30px;">Best regards,<br>
        <strong>The Leadcrest Consulting Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
        <p>This is a payment confirmation email. Please keep it for your records.</p>
        <p>© 2024 Leadcrest Consulting. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Log for debugging
  console.log('\n========================================');
  console.log('💰 PAYMENT CONFIRMATION');
  console.log('========================================');
  console.log(`Customer: ${customerName}`);
  console.log(`Email: ${customerEmail}`);
  console.log(`Package: ${packageName}`);
  console.log(`Amount: ₹${amount.toLocaleString('en-IN')}`);
  console.log(`Time: ${time}`);
  console.log('========================================\n');
  
  // Send emails to both admin and customer
  const adminEmailSent = await sendEmail(ADMIN_EMAIL, adminSubject, adminText, adminHtml);
  const userEmailSent = await sendEmail(customerEmail, userSubject, userText, userHtml);
  
  return adminEmailSent && userEmailSent;
}