import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, phone, city, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // e.g. your.email@gmail.com
      pass: process.env.EMAIL_PASSWORD, // App Password (not your real password)
    },
  });

  const mailOptions = {
    from: `"Shab e Abi Talib Website" <${process.env.EMAIL_USERNAME}>`,
    to: "shabeabitalib@gmail.com",
    subject: "New Join Us Form Submission",
    text: `
        A new member has requested to join:

        👤 Name: ${name}
        📞 Phone: ${phone}
        🏙 City: ${city}
        📝 Message: ${message}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
