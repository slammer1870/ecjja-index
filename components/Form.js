import React, {useState} from "react";

const Form = () => {
  const [message, setMessage] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/signup", {
      body: JSON.stringify({
        email: e.target.email.value,
        name: e.target.name.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    //e.target.message.value = "THANKS";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };
  return (
    <section className="text-gray-600 body-font" id="signup">
      <div className="container px-4 py-16 mx-auto flex flex-wrap items-center md:px-0">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Ready to get started?{" "}
            <span className="font-light">
              Enter your details and we will do the rest!
            </span>
          </h1>
          <p className="leading-relaxed mt-4">
            We value your data and privacy. The information you provide us will
            never be used for anything other than contacting you to get started.
          </p>
        </div>
        <form onSubmit={signup} className="lg:w-2/6 md:w-1/2 bg-gray-100 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign up with ECJJA
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <input
              type="checkbox"
              id="gdpr"
              name="gdpr"
              className="mr-2"
              required
            />
            <label className="text-xs text-gray-500 mt-3" for="gdpr">
              I consent to ECJJA's{" "}
              <span className="underline">terms of service</span>
            </label>
          </div>
          <button type="submit" className="text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 text-lg">
            Get me started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
