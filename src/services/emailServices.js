import { EMAIL_ADDR, EMAIL_PASSWORD } from '../config/constants';

const nodemailer = require('nodemailer');

export async function sendMail(recipientAddr, title, messageBody) {
  let success;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDR,
      pass: EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: `ITARJ Notifications <${EMAIL_ADDR}>`,
    to: recipientAddr,
    subject: title,
    html: messageBody // html body
  };

  const info = await transporter.sendMail(mailOptions);

  if (!info) {
    console.log('error in transporter.sendMail(mailOptions)');
    success = false;
  } else {
    console.log(`Email sent: ${info.response}`);
    success = true;
  }

  return success;
}
