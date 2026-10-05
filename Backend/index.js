import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 2000;
const adminEmail = process.env.ADMIN_MAIL;
const smtpUser = process.env.SMTP_USER || adminEmail;
const smtpPass = process.env.SMTP_PASS || process.env.ADMIN_PASSWORD;
const smtpPort = Number(process.env.SMTP_PORT) || 587;

if (!adminEmail || !smtpUser || !smtpPass) {
  throw new Error(
    "Email configuration is missing. Set ADMIN_MAIL, SMTP_USER, and SMTP_PASS.",
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.post("/user-details", async (req, res) => {
  const { name, email, location, budget, message } = req.body ?? {};

  const fields = { name, email, location, budget, message };
  if (
    Object.values(fields).some(
      (value) => typeof value !== "string" || value.trim() === "",
    ) ||
    name.trim().length > 200 ||
    email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    location.trim().length > 200 ||
    budget.trim().length > 200 ||
    message.trim().length > 5000
  ) {
    return res.status(400).json({ message: "Please provide valid form details." });
  }

  const contact = {
    name: name.trim(),
    email: email.trim(),
    location: location.trim(),
    budget: budget.trim(),
    message: message.trim(),
  };

  const details = [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Location: ${contact.location}`,
    `Budget: ${contact.budget}`,
    "",
    "Message:",
    contact.message,
  ].join("\n");

  try {
    await Promise.all([
      transporter.sendMail({
        from: { name: "Portfolio Contact", address: smtpUser },
        to: contact.email,
        subject: "Thanks for contacting me",
        text: `Hi ${contact.name},\n\nThanks for getting in touch. I received your message and will get back to you soon.\n\nYour message:\n${contact.message}`,
      }),
      transporter.sendMail({
        from: { name: "Portfolio Contact", address: smtpUser },
        to: adminEmail,
        replyTo: contact.email,
        subject: "New portfolio contact",
        text: details,
      }),
    ]);

    return res.status(200).json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Unable to send contact form emails:", error);
    return res.status(502).json({
      message: "We could not send your message right now. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact mail API listening on port ${port}`);
});
