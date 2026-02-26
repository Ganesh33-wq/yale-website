EMAIL IMPLEMENTATION SETUP GUIDE
=================================

INSTALLATION
============
Nodemailer has already been installed via: npm install nodemailer


EMAIL CONFIGURATION
===================
Your email settings are configured in: backend/config/email.js

Current Settings:
- EMAIL_HOST: smtp.gmail.com
- EMAIL_PORT: 587
- EMAIL_USE_TLS: True (uses STARTTLS)
- EMAIL_HOST_USER: yaleitskillhubmohan@gmail.com
- EMAIL_HOST_PASSWORD: gzvp tkek ncnm icxd
- DEFAULT_FROM_EMAIL: yaleitskillhubmohan@gmail.com
- ADMIN_EMAILS: admin@yaleinfotech.com, yaleitskillhubmohan@gmail.com


FILE STRUCTURE
==============
backend/
├── config/
│   └── email.js              [Email credentials and configuration]
├── utils/
│   └── emailService.js       [Email sending functions]
├── templates/
│   └── emailTemplates.js     [HTML email templates]
└── controllers/
    └── formController.js     [Updated with email sending]


FORMS WITH EMAIL FUNCTIONALITY
==============================

1. CONTACT FORM (/api/contact)
   - When user submits:
     * Sends confirmation email to user
     * Sends notification email to admin
   - User gets: Confirmation that message was received
   - Admin gets: Full submission details

2. COURSE INQUIRY (/api/course-inquiry)
   - When user submits:
     * Sends confirmation email to user
     * Sends notification email to admin
   - User gets: Course details and next steps
   - Admin gets: Inquiry with user contact information

3. SYLLABUS DOWNLOAD (/api/syllabus-download)
   - When user submits:
     * Sends syllabus download link to user email
   - User gets: Email with syllabus download link

4. INTERNSHIP APPLICATION (/api/internship-application)
   - When user submits:
     * Sends confirmation email to user
     * Sends notification email to admin
   - User gets: Application confirmation
   - Admin gets: Full application details


HOW TO TEST
===========

1. Start your backend server:
   npm start

2. Check console logs for email service initialization:
   Should see: "Email service ready: true"

3. Submit a test form from frontend

4. Check:
   - Frontend: Success message displays
   - Backend Console: Email logs show delivery
   - Gmail: Check inbox and spam folder for test emails


TROUBLESHOOTING
===============

If emails are not being sent:

1. Check Console Logs:
   - Look for "Error sending..." messages
   - These won't block the form submission (intentional)

2. Gmail 2FA Issues:
   - If 2FA is enabled, must use App Password
   - App Password provided is already set: gzvp tkek ncnm icxd

3. SMTP Connection Issues:
   - Verify port 587 is open on your network
   - Check firewall settings
   - Try less secure apps: https://myaccount.google.com/lesssecureapps

4. Email Not in Inbox:
   - Check spam/junk folder
   - Email may be filtered by Gmail

5. Testing Without Sending:
   - Email sending is non-blocking
   - Form submits successfully even if email fails
   - Check logs to see if email was attempted


IMPORTANT NOTES
===============

1. Email sending is asynchronous and non-blocking
   - Form saves to database first
   - Email sends in background
   - User doesn't wait for email to be sent

2. Email failures don't affect form submission
   - Form saves successfully even if email fails
   - Errors are logged to console only

3. No emojis, unicode, or special symbols in console logs
   - All console messages are plain text for clarity

4. Admin notifications go to both:
   - admin@yaleinfotech.com
   - yaleitskillhubmohan@gmail.com

5. All emails use HTML templates for professional appearance
   - Responsive design
   - Branded with Yale Infotech colors
   - Contact information included


CUSTOMIZATION
==============

To customize emails:

1. Edit templates: backend/templates/emailTemplates.js
2. Edit configuration: backend/config/email.js
3. Change admin emails list for notifications
4. Modify HTML styling in template functions


PRODUCTION CONSIDERATIONS
==========================

1. Store credentials in environment variables (not hardcoded)
2. Use Gmail App Passwords for enhanced security
3. Consider using Mailgun, SendGrid for high volume
4. Add email rate limiting
5. Implement email verification
6. Monitor bounce rates
7. Set up proper SPF/DKIM/DMARC records


DATABASE SYNC
=============

Forms are saved to database AND emails are sent:
1. Data saved to SQLite database immediately
2. Confirmation emails sent to users
3. Admin notification emails sent to administrators
4. Admin dashboard shows all submissions


NEXT STEPS
==========

1. Test each form submission
2. Verify emails arrive in inbox
3. Check admin email notifications
4. Customize email content if needed
5. Deploy to production
