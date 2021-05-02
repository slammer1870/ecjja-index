import React from "react";

const CallToAction = () => (
  <div className="px-4 py-12 md:w-96 lg:w-full mx-auto flex flex-col xl:max-w-screen-sm">
    <h3 className="text-5xl mb-8 font-light md:text-3xl xl:text-5xl xl:mb-10">
      How do I get started?
    </h3>
    <a className="w-full mx-auto py-2 px-4 bg-blue-400 text-white text-center text-xl mb-8 md:text-xl">
      Click here to sign up
    </a>
    <p className="xl:text-xl">
      We value your data and privacy, your sign up details will never be used
      for anything other than contacting you for signing up.
    </p>
  </div>
);

export default CallToAction;
