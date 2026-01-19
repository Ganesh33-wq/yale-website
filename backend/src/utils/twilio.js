const config = require('../config/config');

let twilioClient = null;

// Initialize Twilio client
try {
  if (config.twilioAccountSid && config.twilioAuthToken) {
    const twilio = require('twilio');
    twilioClient = twilio(config.twilioAccountSid, config.twilioAuthToken);
  }
} catch (error) {
  console.warn('⚠️  Twilio not configured. SMS features will be disabled.');
}

// Send SMS function
const sendSMS = async (message, to = '+916383277904') => {
  if (!twilioClient) {
    console.log('📱 SMS (disabled):', message);
    return { success: false, message: 'Twilio not configured' };
  }

  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: config.twilioPhoneNumber,
      to: to,
    });

    console.log('✅ SMS sent:', result.sid);
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('❌ SMS Error:', error.message);
    throw error;
  }
};

module.exports = { sendSMS };
