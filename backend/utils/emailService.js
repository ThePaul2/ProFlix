import nodemailer from 'nodemailer';
import mailgun from 'mailgun-js'

const mg = mailgun({ apiKey: '135295508ec23dbfc6b3b6c114f35923-f68a26c9-66c0fa3c', domain: 'sandbox215c79a7b4aa460caa7047dde7f63b4c.mailgun.org' });

// Function to send reset password email
async function sendResetPasswordEmail(email, resetToken) {
    try {
      // Create nodemailer transporter using Mailgun's SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'postmaster@sandbox215c79a7b4aa460caa7047dde7f63b4c.mailgun.org',
          pass: '451f964993683c6fa85632e961c786a0-f68a26c9-90dc1aad',
        },
      });
  
      // Define email options
      const mailOptions = {
        from: 'E-Cinema Support <postmaster@sandbox215c79a7b4aa460caa7047dde7f63b4c.mailgun.org>',
        to: email,
        subject: 'Password Reset',
        html: `<p>You have requested a password reset. Click <a href="http://localhost:3000/reset-password/${email}">here</a> to reset your password.</p>`,
    };
  
      // Send email using nodemailer
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send reset password email');
    }
  }
  async function sendRegistrationConfirmationEmail(email) {
    try {
      const mailOptions = {
        from: 'E-Cinema Support <postmaster@sandbox215c79a7b4aa460caa7047dde7f63b4c.mailgun.org>',
        to: email,
        subject: 'Registration Confirmation',
        html: `<p>You have successfully registered with E-Cinema. Welcome aboard!</p>`,
      };
  
      // Send email using Mailgun
      const info = await mg.messages().send(mailOptions);
      console.log('Email sent:', info);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send registration confirmation email');
    }
  }
  
  
  export { sendResetPasswordEmail, sendRegistrationConfirmationEmail };