const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables

const app = express();  // Fixed this line by calling express() instead of express

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create the transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // App password (not the normal password)
  },
});

// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Mail options - sending email to the specified recipient (Company)
  const mailOptionsToCompany = {
    from: `"${name}" <${email}>`,  // Dynamically set the 'from' field with the user's name and email
    to: process.env.RECIPIENT_EMAIL, // Your recipient email address (the company email)
    subject: `📬 New Message from ${name} - ${email}`,  // Enhanced subject with emoji
    text: `
      Hi there,

      You've received a new contact form submission from:

      🌟 **Name**: ${name}
      📧 **Email**: ${email}

      Here’s what they had to say:
      
      ✉️ **Message**:
      ${message}

      ————
      This message was sent via your Portfolio contact form.
      Best regards,
      Your Team
    `,
    replyTo: email,  // Ensures replies go to the user's email
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px;">
          <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 35px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-size: 16px;">
            
            <h2 style="color: #5c6bc0; text-align: center; font-size: 24px; margin-bottom: 20px;">💌 You've Got a New Message!</h2>
            
            <p style="color: #333; line-height: 1.6; text-align: center;">A new submission has arrived through your website's contact form. Below are the details:</p>

            <div style="background-color: #f1f1f1; border-radius: 8px; padding: 20px; margin-top: 20px;">
              <h3 style="color: #3f51b5; font-size: 18px; margin-bottom: 10px;">Submission Details</h3>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #333;"><span style="color: #4CAF50;">Name:</span></td>
                  <td style="padding: 12px; color: #555;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #333;"> <span style="color: #4CAF50;">Email:</span></td>
                  <td style="padding: 12px; color: #555;"><a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #333;"><span style="color: #4CAF50;">Message:</span></td>
                  <td style="padding: 12px; color: #555;">"${message}"</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">This message was sent via your Portfolio's contact form.</p>
            
            <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #bbb;">
              <p>🚀 Powered by Majestics Softs</p>
            </footer>
            
          </div>
        </body>
      </html>
    `
  };

 // Mail options - sending confirmation email to the user (Confirmation Email)
 const mailOptionsToUser = {
  from: `"Majestics Dev Team" <${process.env.EMAIL_USER}>`, // Custom name with the email address
  to: email,                   // User's email address
  subject: 'Your Message Has Been Delivered!',
  html: `
    <html>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 30px;">
    <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); font-size: 16px; line-height: 1.5; transition: all 0.3s ease;">
      
      <!-- Header -->
      <h2 style="color: #4CAF50; text-align: center; font-size: 28px; font-weight: bold; margin-bottom: 30px;">
        💌 Your Message Has Been Delivered!
      </h2>

      <!-- Message Body -->
      <p style="color: #555; text-align: center; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
        Dear <strong>${name}</strong>,
      </p>
      <p style="color: #555; text-align: center; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Thank you for reaching out to us! We have successfully received your message and sent it to the appropriate team members. Your inquiry is important to us, and we want to assure you that we will get back to you as soon as possible with a response.
      </p>
      
      <p style="color: #555; text-align: center; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
        Our team is currently reviewing your message and will reach out within the next 24-48 hours. In the meantime, feel free to explore more about our services or check out our FAQs for immediate answers.
      </p>

      <!-- Animated Checkmark Icon -->
      <div style="text-align: center; margin-bottom: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="60" height="60" viewBox="0 0 24 24" stroke="currentColor" style="color: #4CAF50; animation: bounce 0.8s infinite;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <!-- Message Summary -->
      <div style="background-color: #f1f3f8; padding: 20px; border-radius: 8px; margin-top: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #007bff; font-size: 18px; margin-bottom: 12px; text-align: center;">Message Summary</h3>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="font-weight: bold; color: #333; padding: 8px; border-bottom: 1px solid #eee;">Name:</td>
            <td style="padding: 8px; color: #555; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #333; padding: 8px; border-bottom: 1px solid #eee;">Email:</td>
            <td style="padding: 8px; color: #555; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #333; padding: 8px; border-bottom: 1px solid #eee;">Message:</td>
            <td style="padding: 8px; color: #555; border-bottom: 1px solid #eee;">"${message}"</td>
          </tr>
        </table>
      </div>

      <!-- Additional Info -->
      <p style="color: #555; text-align: center; font-size: 16px; line-height: 1.6; margin-top: 20px;">
        If you have any urgent questions or would like to follow up on your inquiry, please do not hesitate to reach out to us directly by replying to this email. Our team is here to assist you and ensure that you get the help you need.
      </p>

      <p style="color: #555; text-align: center; font-size: 16px; line-height: 1.6; margin-top: 20px;">
        You can also check out our <a href="https://www.yourwebsite.com" style="color: #007bff;">website</a> for more details on our services or find helpful resources in our <a href="https://www.yourwebsite.com/faq" style="color: #007bff;">FAQs</a> section.
      </p>

      <!-- Call-to-Action Button -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:contact@yourcompany.com" style="background-color: #007bff; color: white; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
          Contact Us Again
        </a>
      </div>

      <!-- Footer -->
      <footer style="text-align: center; font-size: 12px; color: #aaa; margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px;">
        <p style="margin: 0;">&copy; 2024 Majestics Softs | All Rights Reserved</p>
        <p style="margin: 0;">🚀 Powered by <strong>Majestics Softs</strong></p>
      </footer>

    </div>
  </body>
</html>
  `
};


  try {
    // Send email to the company (recipient)
    await transporter.sendMail(mailOptionsToCompany);
    // Send confirmation email to the user
    await transporter.sendMail(mailOptionsToUser);
    res.status(200).json({ message: 'Your message has been sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
