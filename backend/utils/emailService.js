// Email Service using Nodemailer
import nodemailer from 'nodemailer';
import { emailConfig, adminEmails } from '../config/email.js';

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email service error:', error);
  } else {
    console.log('Email service ready:', success);
  }
});

export const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.log('Email send error:', error);
    return { success: false, error: error.message };
  }
};

export const sendContactConfirmation = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.contactConfirmation(data);
  
  const mailOptions = {
    from: emailConfig.from,
    to: data.email,
    subject: template.subject,
    html: template.html
  };
  
  return sendEmail(mailOptions);
};

export const sendContactAdminNotification = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.contactAdminNotification(data);
  
  for (const adminEmail of adminEmails) {
    const mailOptions = {
      from: emailConfig.from,
      to: adminEmail,
      subject: template.subject,
      html: template.html
    };
    
    await sendEmail(mailOptions);
  }
  
  return { success: true };
};

export const sendCourseInquiryConfirmation = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.courseInquiryConfirmation(data);
  
  const mailOptions = {
    from: emailConfig.from,
    to: data.email,
    subject: template.subject,
    html: template.html
  };
  
  return sendEmail(mailOptions);
};

export const sendCourseInquiryAdminNotification = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.courseInquiryAdminNotification(data);
  
  for (const adminEmail of adminEmails) {
    const mailOptions = {
      from: emailConfig.from,
      to: adminEmail,
      subject: template.subject,
      html: template.html
    };
    
    await sendEmail(mailOptions);
  }
  
  return { success: true };
};

export const sendSyllabusDownloadEmail = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.syllabusDownloadEmail(data);
  
  const mailOptions = {
    from: emailConfig.from,
    to: data.email,
    subject: template.subject,
    html: template.html
  };
  
  return sendEmail(mailOptions);
};

export const sendInternshipApplicationConfirmation = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.internshipApplicationConfirmation(data);
  
  const mailOptions = {
    from: emailConfig.from,
    to: data.email,
    subject: template.subject,
    html: template.html
  };
  
  return sendEmail(mailOptions);
};

export const sendInternshipApplicationAdminNotification = async (data) => {
  const { emailTemplates } = await import('../templates/emailTemplates.js');
  const template = emailTemplates.internshipApplicationAdminNotification(data);
  
  for (const adminEmail of adminEmails) {
    const mailOptions = {
      from: emailConfig.from,
      to: adminEmail,
      subject: template.subject,
      html: template.html
    };
    
    await sendEmail(mailOptions);
  }
  
  return { success: true };
};
