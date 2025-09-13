import nodemailer from 'nodemailer';

// Create Gmail transporter with the provided app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stationmaster12342@gmail.com', // Your Gmail account
    pass: process.env.GMAIL_APP_PASSWORD || ''
  }
});

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
  try {
    const mailOptions = {
      from: 'stationmaster12342@gmail.com',
      to: 'leadcrestconsulting6@gmail.com',
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

    await transporter.sendMail(mailOptions);
    console.log('✅ Contact notification email sent to leadcrestconsulting6@gmail.com');
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    // Still log to console as backup
    console.log('\n========================================');
    console.log('📧 NEW CONTACT FORM SUBMISSION (Email failed, logged as backup)');
    console.log('Admin Email: leadcrestconsulting6@gmail.com');
    console.log('========================================');
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Career Stage: ${data.whoIsThisFor}`);
    console.log(`Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('========================================\n');
    return false;
  }
}

export async function sendBookingConfirmationEmail(data: BookingConfirmationData): Promise<boolean> {
  const careerStageMap: Record<string, string> = {
    'class8-9': 'Class 8-9',
    'class10-12': 'Class 10-12',
    'graduates': 'College Graduates',
    'professionals': 'Working Professionals'
  };
  const displayStage = careerStageMap[data.currentStage] || data.currentStage;
  
  try {
    const mailOptions = {
      from: 'stationmaster12342@gmail.com',
      to: 'leadcrestconsulting6@gmail.com',
      subject: `New Booking: ${data.fullName} - ${data.packageName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Booking Registration</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Booking Details:</h3>
            
            <table style="width: 100%; color: #374151;">
              <tr>
                <td style="padding: 8px 0;"><strong>Type:</strong></td>
                <td style="padding: 8px 0;">${data.bookingType === 'discovery_call' ? 'Discovery Call' : 'Program Investment'}</td>
              </tr>
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
                <td style="padding: 8px 0;"><strong>Package:</strong></td>
                <td style="padding: 8px 0;">${data.packageName}</td>
              </tr>
              ${data.amount ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Amount:</strong></td>
                <td style="padding: 8px 0;">₹${data.amount.toLocaleString('en-IN')}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Action Required:</strong> Please contact ${data.fullName} within 24 hours at ${data.mobile}.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="font-size: 12px; color: #6b7280;">
            This email was sent from the Leadcrest Consulting website booking system.
          </p>
        </div>
      `,
      text: `
        New Booking Registration
        
        Type: ${data.bookingType === 'discovery_call' ? 'Discovery Call' : 'Program Investment'}
        Name: ${data.fullName}
        Mobile: ${data.mobile}
        Career Stage: ${displayStage}
        Package: ${data.packageName}
        ${data.amount ? `Amount: ₹${data.amount.toLocaleString('en-IN')}` : ''}
        
        Please contact ${data.fullName} within 24 hours at ${data.mobile}.
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Booking notification email sent to leadcrestconsulting6@gmail.com');
    return true;
  } catch (error) {
    console.error('Error sending booking notification email:', error);
    // Still log to console as backup
    console.log('\n========================================');
    console.log('🎯 NEW BOOKING REGISTRATION (Email failed, logged as backup)');
    console.log('Admin Email: leadcrestconsulting6@gmail.com');
    console.log('========================================');
    console.log(`Type: ${data.bookingType === 'discovery_call' ? 'DISCOVERY CALL' : 'PROGRAM INVESTMENT'}`);
    console.log(`Name: ${data.fullName}`);
    console.log(`Mobile: ${data.mobile}`);
    console.log(`Career Stage: ${displayStage}`);
    console.log(`Package: ${data.packageName}`);
    if (data.amount) {
      console.log(`Amount: ₹${data.amount.toLocaleString('en-IN')}`);
    }
    console.log(`Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('========================================');
    console.log('ACTION REQUIRED: Contact customer within 24 hours');
    console.log('========================================\n');
    return false;
  }
}