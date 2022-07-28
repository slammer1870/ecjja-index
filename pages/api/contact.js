const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, tel, text, exp } = req.body;

  const sender =
    name && email && tel ? `${name}, <${email}>, ${tel}` : `${name || email}`;

  const subject = exp
    ? `New contact form submission from ${sender} - No Previous Experience`
    : `New contact form submission from ${sender}`;

  const message = {
    from: process.env.SENDGRID_FROM,
    to: process.env.SENDGRID_TO,
    subject: subject,
    text,
    replyTo: email,
  };

  try {
    await sgMail.send(message);
    return res.status(201).json({ error: "" });
  } catch (error) {
    const message = {
      from: process.env.SENDGRID_FROM,
      to: "hello@sammcnally.dev",
      subject: `Contact form falied`,
      text: `Contact form failed ${error.message}`,
      replyTo: "info@ecjja.com",
    };
    await sgMail.send(message);

    return res.status(500).json({ error: error.message || error.toString() });
  }
};
