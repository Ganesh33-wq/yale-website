// Email Configuration
export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER || 'yaleitskillhub.dharshni@gmail.com',
    pass: process.env.EMAIL_PASS || 'gnmw dqjn hset kacr'
  },
  from: process.env.EMAIL_USER || 'yaleitskillhub.dharshni@gmail.com'
};

export const adminEmails = [
  // Add admin emails here if needed
  // Example: 'admin@yaleinfotech.com'
];

export const companyName = 'Yale Infotech';
export const companyWebsite = 'https://www.yaleinfotech.com';
export const companyPhone = '+91 6383277904';
