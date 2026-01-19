module.exports = {
  port: process.env.PORT || 5000,
  dbPath: process.env.DB_PATH || './database.sqlite',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpire: '30d',
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
  adminEmail: process.env.ADMIN_EMAIL || 'admin@yaleinfotech.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
};
