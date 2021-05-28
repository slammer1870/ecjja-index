const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, text } = req.body;

  const sender = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: "info@ecjja.com",
    to: "hello@sammcnally.dev",
    subject: `[TEST]New message from ${sender}`,
    text,
    replyTo: sender,
  };

  try {
    await sgMail.send(message);
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

