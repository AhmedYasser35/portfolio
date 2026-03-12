"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
    const gmailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;

    if (!gmailRegex.test(email.toLowerCase())) {
      return {
        success: false,
        error: "ACCESS_DENIED: Only Gmail accounts allowed.",
      };
    }
  // 1. Create the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2. Setup the "Identity" of the email you'll receive
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `PORTFOLIO_CONTACT: Message from ${name}`,
    text: `Sender: ${name} <${email}>\n\nPayload:\n${message}`,
    html: `
      <div style="font-family: monospace; background: #050505; color: #10b981; padding: 20px; border: 1px solid #10b981;">
        <h2 style="border-bottom: 1px solid #10b981; padding-bottom: 10px;">// INCOMING_TRANSMISSION</h2>
        <p><strong>SENDER:</strong> ${name}</p>
        <p><strong>EMAIL:</strong> ${email}</p>
        <p style="margin-top: 20px; color: #ffffff;"><strong>MESSAGE_BODY:</strong></p>
        <p style="color: #ffffff;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { success: false };
  }
}
