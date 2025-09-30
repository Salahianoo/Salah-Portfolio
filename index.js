import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 3005;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Project routes
app.get("/projects/flutter", (req, res) => {
  res.render("projects/flutter.ejs");
});

app.get("/projects/python", (req, res) => {
  res.render("projects/python.ejs");
});

app.get("/projects/ecommerce", (req, res) => {
  res.render("projects/ecommerce.ejs");
});

app.get("/projects/blog", (req, res) => {
  res.render("projects/blog.ejs");
});

// Contact form submission route
app.post("/contact", async (req, res) => {
  try {
    const { from_name, from_email, subject, message } = req.body;
    
    console.log('Contact form submission received:', {
      name: from_name,
      email: from_email,
      subject: subject,
      message: message,
      timestamp: new Date().toISOString()
    });
    
    // Debug environment variables
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set',
      NODE_ENV: process.env.NODE_ENV
    });
    
    // Create nodemailer transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'salahshadi2005@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'bvur sdmu stjl mczl' // Replace with your 16-character Gmail app password
      }
    });
    
    // Email to you (the actual message)
    const mailToYou = {
      from: `"${from_name}" <salahshadi2005@gmail.com>`,
      to: 'salahshadi2005@gmail.com',
      replyTo: from_email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `
    };

    // Confirmation email to the client
    const mailToClient = {
      from: '"Salah Shadi" <salahshadi2005@gmail.com>',
      to: from_email,
      subject: `Thanks for contacting me!`,
      html: `
        <h3>Hi ${from_name},</h3>
        <p>Thanks for contacting me through my portfolio. I've received your message:</p>
        <blockquote style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
          <strong>Subject:</strong> ${subject}<br><br>
          <strong>Message:</strong> ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>I'll review it shortly and get back to you at ${from_email}.</p>
        <p>If your note is time-sensitive, please reply with "URGENT" in the subject.</p>
        <br>
        <p>Best,<br>Salah</p>
      `
    };
    
    // Send both emails with individual error handling
    try {
      // Send message to you first
      console.log('Sending message to you...');
      const resultToYou = await transporter.sendMail(mailToYou);
      console.log('✅ Email sent to you successfully:', resultToYou.messageId);
    } catch (error) {
      console.error('❌ Failed to send email to you:', error.message);
      // Continue to try sending confirmation to client
    }

    try {
      // Send confirmation to client
      console.log('Sending confirmation to client...');
      const resultToClient = await transporter.sendMail(mailToClient);
      console.log('✅ Confirmation sent to client successfully:', resultToClient.messageId);
    } catch (error) {
      console.error('❌ Failed to send confirmation to client:', error.message);
    }
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again.' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
