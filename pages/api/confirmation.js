const stripe = require("stripe")(process.env.STRIPE_SK);

export default async (req, res) => {
  const { checkout_session } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(checkout_session);
    if (session) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const message = {
        from: "info@ecjja.com",
        to: "hello@sammcnally.dev",
        subject: `New checkout initiated from ${session.customer_email}`,
        text: `${session.customer_email} has just confimered their payment `,
        replyTo: session.customer_email,
      };
      await sgMail.send(message);
    }

    return res.status(201).json(session);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
