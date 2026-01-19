const { sendSMS } = require('../utils/twilio');

// Contact form handler
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, courseInterest, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Send SMS notification (optional)
    try {
      const smsMessage = courseInterest 
        ? `New contact form submission from ${name}. Email: ${email}, Interest: ${courseInterest}`
        : `New contact form submission from ${name}. Email: ${email}`;
      await sendSMS(smsMessage);
    } catch (smsError) {
      console.error('SMS Error:', smsError.message);
      // Don't fail the request if SMS fails
    }

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      courseInterest: courseInterest || 'N/A',
      subject: subject || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    });

    // Here you can add email sending or database storage logic

    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing contact form',
      error: error.message,
    });
  }
};

// Course inquiry handler
exports.submitCourseInquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Send SMS notification
    try {
      await sendSMS(`Course inquiry for ${course} from ${name}. Phone: ${phone}`);
    } catch (smsError) {
      console.error('SMS Error:', smsError.message);
    }

    res.json({
      success: true,
      message: 'Your inquiry has been submitted successfully! We will contact you soon.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing course inquiry',
      error: error.message,
    });
  }
};

// Internship inquiry handler
exports.submitInternshipInquiry = async (req, res) => {
  try {
    const { name, email, phone, domain, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !domain) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Send SMS notification
    try {
      await sendSMS(`Internship inquiry for ${domain} from ${name}. Phone: ${phone}`);
    } catch (smsError) {
      console.error('SMS Error:', smsError.message);
    }

    res.json({
      success: true,
      message: 'Your internship inquiry has been submitted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing internship inquiry',
      error: error.message,
    });
  }
};

// Syllabus download handler
exports.downloadSyllabus = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Send SMS notification
    try {
      await sendSMS(`Syllabus download request for ${course} from ${name}. Phone: ${phone}`);
    } catch (smsError) {
      console.error('SMS Error:', smsError.message);
    }

    res.json({
      success: true,
      message: 'Syllabus will be sent to your email shortly!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing syllabus request',
      error: error.message,
    });
  }
};
