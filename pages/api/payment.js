const stripe = require("stripe")(process.env.STRIPE_SK);
const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  const { name, email, size, } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      mode: "payment",
      success_url: `https://www.ecjja.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "https://www.ecjja.com/",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "ECJJA 8 Week Beginner Course - July 2021",
              images: [
                "https://res.cloudinary.com/dmoomgx4p/image/upload/v1624269694/ECJJA_BLACK_b6s03s.png",
              ],
            },
            unit_amount: 22000,
          },
          quantity: 1,
        },
      ],
    });
    if (session) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const message = {
        from: "info@ecjja.com",
        to: "hello@sammcnally.dev",
        subject: `New checkout initiated from ${email}`,
        text: `${name} has just initiated a checkout session for the next beginner's course. Their Gi size is ${size}. You will receive a confirmation email in this thread once their payment has been approved.`,
        replyTo: email,
      };
     await sgMail.send(message);
    }

    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
