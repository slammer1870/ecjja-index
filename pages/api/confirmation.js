const stripe = require("stripe")(process.env.STRIPE_SK);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default async (req, res) => {
  const { checkout_session } = req.body;

  console.log("checkout session is", checkout_session)

  try {
    const session = await stripe.checkout.sessions.retrieve(checkout_session);
    const message = {
        from: "info@ecjja.com",
        to: "hello@sammcnally.dev",
        subject: `New checkout initiated from ${email}`,
        text: `${name} has just initiated a checkout session for the next beginner's course. Their Gi size is ${size}. You will receive a confirmation email in this thread once their payment has been approved.`,
        replyTo: email,
      };
     await sgMail.send(message);

    return res.status(201).json( session );
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};
