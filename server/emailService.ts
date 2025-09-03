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