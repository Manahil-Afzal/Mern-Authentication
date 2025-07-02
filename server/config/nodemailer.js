import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com', // ✅ Correct SMTP host for Brevo
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL, // ✅ Your Brevo-verified email
    pass: process.env.SMTP_PASS     // ✅ Your SMTP API key
  }
});

export default transporter;
