const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

  const { name, email, text } = req.body;

  const sender = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: "info@ecjja.com",
    to: "marcus@ecjja.com",
    subject: `New message from ${sender}`,
    text,
    replyTo: sender,
  };

  try {
    await sgMail.send(message);
    return res.status(201).json({ error: "" });
  } catch (error) {
    const message = {
      from: "info@ecjja.com",
      to: "hello@sammcnally.dev",
      subject: `Contact form falied`,
      text: `Contact form failed ${error.message}`,
      replyTo: "info@ecjja.com",
    };
    await sgMail.send(message);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};