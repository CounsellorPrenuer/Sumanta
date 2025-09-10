import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key if available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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

export async function sendContactNotificationEmail(data: ContactEmailData): Promise<boolean> {
  // If SendGrid is not configured, log the details instead
  if (!process.env.SENDGRID_API_KEY) {
    console.log('📧 Contact Form Submission (Email service not configured):');
    console.log('To: leadcrestconsulting6@gmail.com');
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`For: ${data.whoIsThisFor}`);
    console.log('---');
    return true;
  }

  try {
    const msg = {
      to: 'leadcrestconsulting6@gmail.com',
      from: 'noreply@leadcrestconsulting.com', // This should be a verified sender
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            
            <p style="margin: 10px 0;">
              <strong>Name:</strong> ${data.name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong>Email:</strong> 
              <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong>Phone:</strong> 
              <a href="tel:${data.phone}" style="color: #2563eb;">${data.phone}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong>Career Stage:</strong> ${data.whoIsThisFor}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="font-size: 12px; color: #6b7280;">
            This email was sent from the Leadcrest Consulting website contact form.
            <br>
            Reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Career Stage: ${data.whoIsThisFor}
        
        Please respond to this inquiry within 24 hours.
      `
    };

    await sgMail.send(msg);
    console.log('✅ Contact notification email sent to leadcrestconsulting6@gmail.com');
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    // Don't throw error - still save the submission even if email fails
    return false;
  }
}

export async function sendBookingConfirmationEmail(data: BookingConfirmationData): Promise<boolean> {
  // Create email address from mobile number if not provided
  const userEmail = data.email || `${data.mobile}@leadcrest-booking.com`;
  
  // If SendGrid is not configured, log the details instead
  if (!process.env.SENDGRID_API_KEY) {
    console.log('📧 Booking Confirmation Email (Email service not configured):');
    console.log(`To: ${userEmail}`);
    console.log(`Name: ${data.fullName}`);
    console.log(`Package: ${data.packageName}`);
    console.log(`Type: ${data.bookingType}`);
    if (data.amount) {
      console.log(`Amount: ₹${data.amount}`);
    }
    console.log('---');
    return true;
  }

  try {
    // Format career stage for display
    const careerStageMap: Record<string, string> = {
      'class8-9': 'Class 8-9',
      'class10-12': 'Class 10-12',
      'graduates': 'College Graduates',
      'professionals': 'Working Professionals'
    };
    const displayStage = careerStageMap[data.currentStage] || data.currentStage;

    // Create different email content based on booking type
    const isDiscoveryCall = data.bookingType === 'discovery_call';
    const subject = isDiscoveryCall 
      ? `Welcome to Leadcrest Consulting - Discovery Call Scheduled`
      : `Payment Confirmed - Welcome to ${data.packageName}`;

    const nextStepsHtml = isDiscoveryCall
      ? `
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
          <ol style="color: #374151; line-height: 1.8;">
            <li><strong>Confirmation Call:</strong> Our team will contact you within 24 hours at ${data.mobile} to confirm your appointment.</li>
            <li><strong>Discovery Session:</strong> During our 30-minute call, we'll discuss your career goals and how we can help.</li>
            <li><strong>Personalized Roadmap:</strong> We'll create a customized career plan tailored to your aspirations.</li>
            <li><strong>Next Steps:</strong> Based on your needs, we'll recommend the best program for your career growth.</li>
          </ol>
        </div>
      `
      : `
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">Your Journey Begins Now!</h3>
          <ol style="color: #374151; line-height: 1.8;">
            <li><strong>Welcome Call:</strong> Our team will contact you within 24 hours at ${data.mobile} to welcome you to the program.</li>
            <li><strong>Psychometric Assessment:</strong> We'll schedule your comprehensive assessment to understand your strengths and interests.</li>
            <li><strong>Personalized Sessions:</strong> Your one-on-one career coaching sessions will be scheduled at your convenience.</li>
            <li><strong>24/7 Support:</strong> You'll receive ongoing support throughout your career transformation journey.</li>
          </ol>
        </div>
      `;

    const paymentDetailsHtml = data.amount 
      ? `
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Payment Details</h3>
          <table style="width: 100%; color: #374151;">
            <tr>
              <td style="padding: 8px 0;"><strong>Package:</strong></td>
              <td style="padding: 8px 0;">${data.packageName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Amount Paid:</strong></td>
              <td style="padding: 8px 0;">₹${data.amount.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Status:</strong></td>
              <td style="padding: 8px 0; color: #059669;">✓ Payment Successful</td>
            </tr>
          </table>
        </div>
      `
      : '';

    const msg = {
      to: userEmail,
      from: 'noreply@leadcrestconsulting.com', // This should be a verified sender
      cc: 'leadcrestconsulting6@gmail.com', // CC to admin
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Welcome to Leadcrest Consulting</h1>
            <p style="color: #fef3c7; margin: 10px 0 0 0; font-size: 16px;">From Confusion to Clarity. From Interest to Impact.</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 30px;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Dear ${data.fullName},</h2>
            
            <p style="color: #374151; line-height: 1.6; font-size: 16px;">
              ${isDiscoveryCall 
                ? "Thank you for scheduling your discovery call with Leadcrest Consulting! We're excited to help you navigate your career journey."
                : `Congratulations on taking the first step towards transforming your career! Your investment in the <strong>${data.packageName}</strong> program has been confirmed.`
              }
            </p>
            
            <!-- Booking Details -->
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h3 style="color: #92400e; margin-top: 0;">Your Registration Details</h3>
              <table style="width: 100%; color: #374151;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Mobile:</strong></td>
                  <td style="padding: 8px 0;">${data.mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Career Stage:</strong></td>
                  <td style="padding: 8px 0;">${displayStage}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Program:</strong></td>
                  <td style="padding: 8px 0;">${data.packageName}</td>
                </tr>
              </table>
            </div>
            
            ${paymentDetailsHtml}
            
            ${nextStepsHtml}
            
            <!-- Important Information -->
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Important Information</h3>
              <ul style="color: #374151; line-height: 1.8;">
                <li>Keep your phone handy - we'll call you at <strong>${data.mobile}</strong></li>
                <li>Check your email regularly for updates and resources</li>
                <li>Prepare any questions you have about your career goals</li>
                ${!isDiscoveryCall ? '<li>Your program materials will be shared after the welcome call</li>' : ''}
              </ul>
            </div>
            
            <!-- Why Choose Leadcrest -->
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Why 3,725+ Professionals Trust Leadcrest</h3>
              <ul style="color: #6b7280; line-height: 1.8;">
                <li>24+ years of industry experience</li>
                <li>95% success rate in career transformations</li>
                <li>Personalized psychometric assessments</li>
                <li>One-on-one career coaching sessions</li>
                <li>Lifetime career support</li>
              </ul>
            </div>
            
            <!-- Contact Information -->
            <div style="margin-top: 30px; padding: 20px; background-color: #eff6ff; border-radius: 8px;">
              <h3 style="color: #1e40af; margin-top: 0;">Need Help?</h3>
              <p style="color: #374151; margin: 10px 0;">
                <strong>Phone:</strong> <a href="tel:+919147424608" style="color: #2563eb;">+91 9147424608</a><br>
                <strong>Email:</strong> <a href="mailto:leadcrestconsulting6@gmail.com" style="color: #2563eb;">leadcrestconsulting6@gmail.com</a><br>
                <strong>WhatsApp:</strong> <a href="https://wa.me/919147424608" style="color: #2563eb;">Click to Chat</a>
              </p>
            </div>
            
            <!-- Footer -->
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
              Thank you for choosing Leadcrest Consulting. We're committed to helping you achieve your career goals and create the future you deserve.
            </p>
            
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
              This is an automated confirmation email. Please do not reply to this email directly. 
              For any queries, contact us at the phone number or email provided above.
            </p>
          </div>
        </div>
      `,
      text: `
        Welcome to Leadcrest Consulting
        
        Dear ${data.fullName},
        
        ${isDiscoveryCall 
          ? "Thank you for scheduling your discovery call with Leadcrest Consulting!"
          : `Congratulations! Your investment in the ${data.packageName} program has been confirmed.`
        }
        
        YOUR REGISTRATION DETAILS:
        Name: ${data.fullName}
        Mobile: ${data.mobile}
        Career Stage: ${displayStage}
        Program: ${data.packageName}
        ${data.amount ? `Amount Paid: ₹${data.amount.toLocaleString('en-IN')}` : ''}
        
        WHAT HAPPENS NEXT:
        ${isDiscoveryCall
          ? `1. Our team will contact you within 24 hours at ${data.mobile}
        2. We'll discuss your career goals during our 30-minute discovery call
        3. We'll create a personalized career roadmap for you
        4. We'll recommend the best program for your career growth`
          : `1. Our team will contact you within 24 hours at ${data.mobile}
        2. We'll schedule your psychometric assessment
        3. Your one-on-one coaching sessions will be scheduled
        4. You'll receive ongoing support throughout your journey`
        }
        
        NEED HELP?
        Phone: +91 9147424608
        Email: leadcrestconsulting6@gmail.com
        WhatsApp: https://wa.me/919147424608
        
        Thank you for choosing Leadcrest Consulting!
        
        ---
        This is an automated confirmation email.
      `
    };

    await sgMail.send(msg);
    console.log(`✅ Booking confirmation email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    // Don't throw error - still save the booking even if email fails
    return false;
  }
}