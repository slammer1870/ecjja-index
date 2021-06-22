import mailchimp from "@mailchimp/mailchimp_marketing";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.NEWSLETTER_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    const message = {
      from: "info@ecjja.com",
      to: "hello@sammcnally.dev",
      subject: `Newsletter falied`,
      text: `Newsletter sign up failed ${error.message}`,
      replyTo: "info@ecjja.com",
    };
    await sgMail.send(message);
    const text = JSON.parse(error.response.text);
    if (text.title == "Member Exists") {
      return res
        .status(400)
        .json({ error: "It looks like you are already subscribed!" });
    } else {
      return res
        .status(500)
        .json({
          error: "Oops! Something went wrong. Contact info@ecjja.com for help.",
        });
    }
  }
};
