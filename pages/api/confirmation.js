const stripe = require("stripe")(process.env.STRIPE_SK);
const sgMail = require("@sendgrid/mail");
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { checkout_session } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(checkout_session);
    if (session) {

      const message = {
        from: "info@ecjja.com",
        to: "info@ecjja.com",
        subject: `New checkout initiated from ${session.customer_email}`,
        text: `${session.customer_email} has just confimered their payment `,
        replyTo: session.customer_email,
      };
      await sgMail.send(message);
      
      const response = await mailchimp.lists.updateListMemberTags(
        process.env.NEWSLETTER_AUDIENCE_ID,
        session.customer_email,
        { tags: [{ name: "July Beginners Course 2021", status: "active" }] }
      );
    }

    return res.status(201).json(session);
  } catch (error) {
    const message = {
        from: "info@ecjja.com",
        to: "hello@sammcnally.dev",
        subject: `Confrimation falied`,
        text: `Payment confimaiton failed ${error.message}`,
        replyTo: "info@ecjja.com",
      };
      await sgMail.send(message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
