//import mailchimp from "@mailchimp/mailchimp_marketing";
const sgMail = require("@sendgrid/mail");

//mailchimp.setConfig({
//  apiKey: process.env.MAILCHIMP_API_KEY,
//  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
//});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email } = req.body;

  const sender = name && email ? `${name} <${email}>` : `${name || email}`;

  const message = {
    from: "info@ecjja.com",
    to: "info@ecjja.com",
    subject: `New message from ${sender}`,
    text: `${name} has just registered interest in signing up for the next beginner's course. Click "reply" to this email to reply to ${email}`,
    replyTo: sender,
  };

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    //const mail = await mailchimp.lists.addListMember(
    //  process.env.BEGINNERS_AUDIENCE_ID,
    //  {
    //    email_address: email,
    //    status: "subscribed",
    //  }
    //);

    await sgMail.send(message);
    return res.status(201).json({ error: "" });
  } catch (error) {
      console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
