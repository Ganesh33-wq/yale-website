// Email Templates
export const emailTemplates = {
  
  // Contact Form Confirmation Email
  contactConfirmation: (data) => ({
    subject: 'We Received Your Message - Yale Infotech',
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #007bff; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .btn { background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>We have received your message and appreciate you reaching out to Yale Infotech. Our team will review your inquiry and get back to you as soon as possible.</p>
              <h3>Your Message Details:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
              <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message || 'N/A'}</p>
              <p>We typically respond within 24-48 hours. If your matter is urgent, please call us at +91 6383277904.</p>
            </div>
            <div class="footer">
              <p>Yale Infotech | Coimbatore | www.yaleinfotech.com</p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Contact Form Admin Notification
  contactAdminNotification: (data) => ({
    subject: `New Contact Form Submission - ${data.name}`,
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border: 1px solid #ddd; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 8px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; width: 30%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <table>
                <tr>
                  <td class="label">Name:</td>
                  <td>${data.name}</td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td>${data.phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Subject:</td>
                  <td>${data.subject || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Message:</td>
                  <td>${data.message || 'N/A'}</td>
                </tr>
              </table>
            </div>
            <div class="footer">
              <p>Yale Infotech Admin Dashboard</p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Course Inquiry Confirmation Email
  courseInquiryConfirmation: (data) => ({
    subject: 'Course Inquiry Received - Yale Infotech',
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #007bff; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Your Course Inquiry Has Been Received</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>Thank you for your interest in our ${data.course} course. We are excited about the possibility of helping you learn new skills.</p>
              <h3>Inquiry Details:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Course Interest:</strong> ${data.course || 'N/A'}</p>
              <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
              <p>Our team will contact you shortly with more details about the course, batch timings, and enrollment process. If you have any immediate questions, feel free to call us at +91 6383277904.</p>
            </div>
            <div class="footer">
              <p>Yale Infotech | Coimbatore | www.yaleinfotech.com</p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Course Inquiry Admin Notification
  courseInquiryAdminNotification: (data) => ({
    subject: `New Course Inquiry - ${data.course} from ${data.name}`,
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border: 1px solid #ddd; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 8px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; width: 30%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Course Inquiry</h2>
            </div>
            <div class="content">
              <table>
                <tr>
                  <td class="label">Name:</td>
                  <td>${data.name}</td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td>${data.phone}</td>
                </tr>
                <tr>
                  <td class="label">Course:</td>
                  <td>${data.course}</td>
                </tr>
                <tr>
                  <td class="label">Message:</td>
                  <td>${data.message || 'N/A'}</td>
                </tr>
              </table>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Syllabus Download Email
  syllabusDownloadEmail: (data) => ({
    subject: 'Your Course Syllabus - Yale Infotech',
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #17a2b8; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #17a2b8; }
            .btn { background-color: #17a2b8; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 15px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Your Course Syllabus is Ready</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>Thank you for downloading the syllabus for ${data.course}. We are delighted that you are interested in learning with us.</p>
              <p>The syllabus provides detailed information about the course curriculum, learning outcomes, and course structure.</p>
              <p><strong>Course:</strong> ${data.course}</p>
              <p>If you have any questions about the course content or would like to enroll, please feel free to contact us.</p>
              <a href="https://www.yaleinfotech.com/contact" class="btn">Get in Touch</a>
              <p>Contact: +91 6383277904</p>
            </div>
            <div class="footer">
              <p>Yale Infotech | Coimbatore | www.yaleinfotech.com</p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Internship Application Confirmation
  internshipApplicationConfirmation: (data) => ({
    subject: 'Internship Application Received - Yale Infotech',
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #ffc107; color: #333; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #ffc107; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Your Internship Application Has Been Received</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>Thank you for applying for the internship program at Yale Infotech. We have received your application and will review it carefully.</p>
              <h3>Application Summary:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>College:</strong> ${data.college || 'N/A'}</p>
              <p><strong>Department:</strong> ${data.department || 'N/A'}</p>
              <p><strong>Program:</strong> ${data.program || 'N/A'}</p>
              <p><strong>Duration:</strong> ${data.duration || 'N/A'}</p>
              <p>We will get back to you with the next steps within 2-3 business days. Thank you for your interest in Yale Infotech.</p>
            </div>
            <div class="footer">
              <p>Yale Infotech | Coimbatore | www.yaleinfotech.com</p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Internship Application Admin Notification
  internshipApplicationAdminNotification: (data) => ({
    subject: `New Internship Application - ${data.name}`,
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border: 1px solid #ddd; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 8px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; width: 30%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Internship Application Received</h2>
            </div>
            <div class="content">
              <table>
                <tr>
                  <td class="label">Name:</td>
                  <td>${data.name}</td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td>${data.phone}</td>
                </tr>
                <tr>
                  <td class="label">College:</td>
                  <td>${data.college || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">City:</td>
                  <td>${data.city || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Department:</td>
                  <td>${data.department || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Program:</td>
                  <td>${data.program || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Duration:</td>
                  <td>${data.duration || 'N/A'}</td>
                </tr>
                <tr>
                  <td class="label">Number of Students:</td>
                  <td>${data.students || 1}</td>
                </tr>
                <tr>
                  <td class="label">Hostel Required:</td>
                  <td>${data.hostel ? 'Yes' : 'No'}</td>
                </tr>
              </table>
            </div>
          </div>
        </body>
      </html>
    `
  })
};
