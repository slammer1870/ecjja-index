const stripe = require("stripe")(process.env.STRIPE_SK);
const sgMail = require("@sendgrid/mail");
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { price, name, email, size } = req.body;

  const testPriceOption = {
    "beginners-course": "price_1JtcI3L1Vq7u95DfVaWLPyuU",
    "t-shirt": "price_1JtcIJL1Vq7u95DfwHCgHtj4",
    "1-private-lesson:": "price_1JtcIXL1Vq7u95DfRvHHD3Qs",
    "t-shirt-1-private-lesson": "price_1JtcIqL1Vq7u95DfpOxn6PQB",
    "3-private-lessons": "price_1JtcJIL1Vq7u95DfnS2hmVWJ",
    "t-shirt-3-private-lessons": "price_1JtcJUL1Vq7u95Df9pphk0kz",
    "teens-course": "price_1KHQxOL1Vq7u95DfCDCxO8jl",
  };

  const priceID = testPriceOption[price];

  const BASE_URL = req.headers.origin || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      mode: "payment",
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "https://www.ecjja.com/",
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          price: priceID,
          quantity: 1,
        },
      ],
    });

    /*if (session) {
      const message = {
        from: "info@ecjja.com",
        to: "info@ecjja.com",
        subject: `New checkout initiated from ${email}`,
        text: `${name} has just initiated a checkout session for the next beginner's course. Their Gi size is ${size}. You will receive a confirmation email in this thread once their payment has been approved.`,
        replyTo: email,
      };
      await sgMail.send(message);
      try {
        const response = await mailchimp.lists.getListMember(
          process.env.NEWSLETTER_AUDIENCE_ID,
          email
        );
      } catch (error) {
        await mailchimp.lists.addListMember(
          process.env.NEWSLETTER_AUDIENCE_ID,
          {
            email_address: email,
            status: "subscribed",
          }
        );
      }

      return res.status(200).json({ id: session.id });
    }*/
    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    const message = {
      from: "info@ecjja.com",
      to: "hello@sammcnally.dev",
      subject: `Urgent notification`,
      text: `EJJCA Payment Failed ${error.message} for user ${email}`,
      replyTo: "info@ecjja.com",
    };
    await sgMail.send(message);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
