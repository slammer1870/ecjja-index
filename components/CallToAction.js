import React from "react"

const CallToAction = () => (
    <div className="px-4 py-12 flex flex-col">
        <h3 className="text-5xl mb-12 font-light">
            How do I get started?
        </h3>
        <p className="mb-8">Click the button below and we will do the rest!</p>
        <a className="w-full max-w-screen-sm py-2 px-4 bg-blue-400 text-white text-center text-3xl mx-auto mb-8">
            Click here to sign up
        </a>
        <p>We value your data and privacy, your sign up details will never be used for anything other than contacting you for signing up.</p>
    </div>
)

export default CallToAction;