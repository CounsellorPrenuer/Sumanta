// Local notification service that stores notifications and provides admin inbox functionality
// This works immediately without any external email service configuration

import { storage } from "./storage";
import { type InsertNotification } from "@shared/schema";
import sgMail from '@sendgrid/mail';

// Configuration
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ENABLE_SENDGRID = process.env.ENABLE_SENDGRID === 'true';
const ADMIN_EMAIL = 'leadcrestconsulting6@gmail.com';
const FROM_EMAIL = 'leadcrestconsulting6@gmail.com';

// Initialize SendGrid only if enabled
if (SENDGRID_API_KEY && ENABLE_SENDGRID) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('✅ SendGrid email service enabled');
} else {
  console.log('📧 Using local notification inbox (emails will be stored locally)');
}

interface NotificationData {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  type: 'contact' | 'booking' | 'payment' | 'resource_download';
  metadata?: Record<string, any>;
}

// Store notification locally
async function storeNotification(data: NotificationData): Promise<boolean> {
  try {
    const recipients = Array.isArray(data.to) ? data.to : [data.to];
    
    for (const recipient of recipients) {
      const notification: InsertNotification = {
        type: data.type,
        recipient: recipient,
        subject: data.subject,
        textContent: data.text,
        htmlContent: data.html,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
        isRead: false
      };
      
      await storage.createNotification(notification);
      console.log(`📥 Notification stored for ${recipient}: ${data.subject}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error storing notification:', error);
    return false;
  }
}

// Try to send via SendGrid if enabled, otherwise store locally
async function sendNotification(data: NotificationData): Promise<boolean> {
  // Always store locally for admin inbox
  await storeNotification(data);
  
  // If SendGrid is enabled and configured, try to send real email
  if (SENDGRID_API_KEY && ENABLE_SENDGRID) {
    try {
      const msg = {
        to: data.to,
        from: FROM_EMAIL,
        subject: data.subject,
        text: data.text,
        html: data.html
      };
      
      await sgMail.send(msg);
      console.log(`✅ Email sent via SendGrid to ${Array.isArray(data.to) ? data.to.join(', ') : data.to}`);
      return true;
    } catch (error: any) {
      console.error('SendGrid error (falling back to local storage):', error.message);
      // Email failed but notification is stored locally
      return true;
    }
  }
  
  // Notification stored successfully (no external email sent)
  return true;
}

// Contact form notification
export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  whoIsThisFor: string;
}): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Admin notification
  const adminNotification: NotificationData = {
    to: ADMIN_EMAIL,
    subject: `New Contact Form - ${data.name}`,
    text: `New Contact Form Submission\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCareer Stage: ${data.whoIsThisFor}\nTime: ${time}\n\nACTION REQUIRED: Please respond within 24 hours.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #D4AF37;">📧 New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Career Stage:</strong> ${data.whoIsThisFor}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        <p style="background: #fff3cd; padding: 10px; margin-top: 15px;">
          <strong>⚠️ ACTION REQUIRED:</strong> Please respond within 24 hours.
        </p>
      </div>`,
    type: 'contact',
    metadata: data
  };
  
  // User notification
  const userNotification: NotificationData = {
    to: data.email,
    subject: 'Thank you for contacting Leadcrest Consulting',
    text: `Dear ${data.name},\n\nThank you for reaching out to Leadcrest Consulting. We have received your inquiry and will get back to you within 24 hours.\n\nBest regards,\nThe Leadcrest Consulting Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
          <h2>Thank You for Contacting Us!</h2>
          <p>Dear ${data.name},</p>
          <p>We have received your inquiry and will get back to you within 24 hours.</p>
          <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #D4AF37;">Your Details:</h3>
            <p><strong>Career Stage:</strong> ${data.whoIsThisFor}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          <p>Best regards,<br><strong>The Leadcrest Consulting Team</strong></p>
        </div>
      </div>`,
    type: 'contact',
    metadata: data
  };
  
  // Send both notifications
  await sendNotification(adminNotification);
  await sendNotification(userNotification);
  
  return true;
}

// Booking notification
export async function sendBookingNotification(data: {
  fullName: string;
  email: string;
  mobile: string;
  packageName: string;
  bookingType: 'discovery_call' | 'investment';
  amount?: number;
  currentStage: string;
}): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const bookingTypeDisplay = data.bookingType === 'discovery_call' ? 'Discovery Call' : 'Program Investment';
  
  // Admin notification
  const adminNotification: NotificationData = {
    to: ADMIN_EMAIL,
    subject: `New ${bookingTypeDisplay} - ${data.fullName}`,
    text: `New ${bookingTypeDisplay} Booking\n\nName: ${data.fullName}\nMobile: ${data.mobile}\nEmail: ${data.email}\nPackage: ${data.packageName}\n${data.amount ? `Amount: ₹${data.amount.toLocaleString('en-IN')}` : ''}\nTime: ${time}\n\nACTION REQUIRED: Contact customer within 24 hours.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #D4AF37;">🎯 New ${bookingTypeDisplay} Booking</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Mobile:</strong> ${data.mobile}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Package:</strong> ${data.packageName}</p>
          ${data.amount ? `<p><strong>Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</p>` : ''}
          <p><strong>Time:</strong> ${time}</p>
        </div>
        <p style="background: #fff3cd; padding: 10px; margin-top: 15px;">
          <strong>⚠️ ACTION REQUIRED:</strong> Contact customer within 24 hours.
        </p>
      </div>`,
    type: 'booking',
    metadata: data
  };
  
  // User notification (if email provided)
  if (data.email && data.email.includes('@') && !data.email.includes('leadcrest-booking.com')) {
    const userNotification: NotificationData = {
      to: data.email,
      subject: `Booking Confirmation - ${data.packageName}`,
      text: `Dear ${data.fullName},\n\nYour ${data.bookingType === 'discovery_call' ? 'discovery call' : 'investment'} for ${data.packageName} has been confirmed.\n\n${data.amount ? `Amount: ₹${data.amount.toLocaleString('en-IN')}\n` : ''}Our team will contact you within 24 hours.\n\nBest regards,\nThe Leadcrest Consulting Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
            <h2 style="color: #28a745;">Booking Confirmed! ✅</h2>
            <p>Dear ${data.fullName},</p>
            <p>Your ${data.bookingType === 'discovery_call' ? 'discovery call' : 'investment'} has been confirmed.</p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #D4AF37;">Booking Details:</h3>
              <p><strong>Package:</strong> ${data.packageName}</p>
              ${data.amount ? `<p><strong>Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</p>` : ''}
            </div>
            <p>Our team will contact you within 24 hours.</p>
            <p>Best regards,<br><strong>The Leadcrest Consulting Team</strong></p>
          </div>
        </div>`,
      type: 'booking',
      metadata: data
    };
    
    await sendNotification(userNotification);
  }
  
  await sendNotification(adminNotification);
  return true;
}

// Payment notification
export async function sendPaymentNotification(data: {
  customerEmail: string;
  customerName: string;
  packageName: string;
  amount: number;
}): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Admin notification
  const adminNotification: NotificationData = {
    to: ADMIN_EMAIL,
    subject: `Payment Received - ${data.customerName}`,
    text: `Payment Received\n\nCustomer: ${data.customerName}\nEmail: ${data.customerEmail}\nPackage: ${data.packageName}\nAmount: ₹${data.amount.toLocaleString('en-IN')}\nTime: ${time}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #28a745;">💰 Payment Received</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Customer:</strong> ${data.customerName}</p>
          <p><strong>Email:</strong> ${data.customerEmail}</p>
          <p><strong>Package:</strong> ${data.packageName}</p>
          <p><strong>Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
      </div>`,
    type: 'payment',
    metadata: data
  };
  
  // Customer notification
  const userNotification: NotificationData = {
    to: data.customerEmail,
    subject: `Payment Confirmation - ${data.packageName}`,
    text: `Dear ${data.customerName},\n\nYour payment has been successfully processed!\n\nPackage: ${data.packageName}\nAmount: ₹${data.amount.toLocaleString('en-IN')}\n\nOur team will be in touch shortly.\n\nBest regards,\nThe Leadcrest Consulting Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
          <h2 style="color: #28a745;">Payment Successful! ✅</h2>
          <p>Dear ${data.customerName},</p>
          <p>Your payment has been successfully processed!</p>
          <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #D4AF37;">Payment Details:</h3>
            <p><strong>Package:</strong> ${data.packageName}</p>
            <p><strong>Amount:</strong> ₹${data.amount.toLocaleString('en-IN')}</p>
            <p><strong>Date:</strong> ${time}</p>
          </div>
          <p>Our team will be in touch shortly.</p>
          <p>Best regards,<br><strong>The Leadcrest Consulting Team</strong></p>
        </div>
      </div>`,
    type: 'payment',
    metadata: data
  };
  
  await sendNotification(adminNotification);
  await sendNotification(userNotification);
  return true;
}

// Resource download notification
export async function sendResourceDownloadNotification(data: {
  fullName: string;
  email: string;
  mobile: string;
  resourceTitle: string;
  currentStage: string;
}): Promise<boolean> {
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Admin notification
  const adminNotification: NotificationData = {
    to: ADMIN_EMAIL,
    subject: `Resource Download - ${data.resourceTitle}`,
    text: `Resource Download\n\nResource: ${data.resourceTitle}\nName: ${data.fullName}\nEmail: ${data.email}\nMobile: ${data.mobile}\nCareer Stage: ${data.currentStage}\nTime: ${time}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #D4AF37;">📥 Resource Download</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Resource:</strong> ${data.resourceTitle}</p>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile}</p>
          <p><strong>Career Stage:</strong> ${data.currentStage}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
      </div>`,
    type: 'resource_download',
    metadata: data
  };
  
  // User notification
  const userNotification: NotificationData = {
    to: data.email,
    subject: `Your Resource: ${data.resourceTitle}`,
    text: `Dear ${data.fullName},\n\nThank you for downloading "${data.resourceTitle}".\n\nWe hope you find this resource valuable!\n\nBest regards,\nThe Leadcrest Consulting Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h1 style="color: #D4AF37; text-align: center;">Leadcrest Consulting</h1>
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
          <h2>Thank You for Downloading!</h2>
          <p>Dear ${data.fullName},</p>
          <p>Thank you for your interest in our resource:</p>
          <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center;">
            <h3 style="color: #D4AF37;">"${data.resourceTitle}"</h3>
          </div>
          <p>We hope you find this resource valuable!</p>
          <p>Best regards,<br><strong>The Leadcrest Consulting Team</strong></p>
        </div>
      </div>`,
    type: 'resource_download',
    metadata: data
  };
  
  await sendNotification(adminNotification);
  await sendNotification(userNotification);
  return true;
}

// Get notification stats for admin
export async function getNotificationStats(): Promise<{
  total: number;
  unread: number;
  byType: Record<string, number>;
}> {
  const adminNotifications = await storage.getNotificationsByRecipient(ADMIN_EMAIL);
  const unreadCount = await storage.getUnreadNotificationCount(ADMIN_EMAIL);
  
  const byType: Record<string, number> = {};
  for (const notification of adminNotifications) {
    byType[notification.type] = (byType[notification.type] || 0) + 1;
  }
  
  return {
    total: adminNotifications.length,
    unread: unreadCount,
    byType
  };
}