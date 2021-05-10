import React from "react";
import Link from "next/link"

const Features = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 pt-12 pb-24 mx-auto">
      <h1 className="text-5xl md:text-3xl xl:text-5xl font-light text-center text-gray-900 mb-20">
        Our program options
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/2 lg:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Adult Beginners
            </h2>
            <p className="leading-relaxed text-base">
              Our Adult Beginners program runs on an 8 week cycle. In this program we cover the basic techniques of Brazilian Jiu Jitsu. When you sign up to the beginner's program you will recieve a training uniform. 
            </p>
            <Link href="adults-program">
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a></Link>
          </div>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Adult Advanced
            </h2>
            <p className="leading-relaxed text-base">
              Our Advanced class is where our more experienced students train. ECJJA is a world class academy hosting multiple World and European Champions. In there classes you will get to train alonside top level athletes with expert instruction!
            </p>
            <Link href="adults-program">
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a></Link>
          </div>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Kids Program
            </h2>
            <p className="leading-relaxed text-base">
              Our Kid's program is structured to introduce children to Jiu Jitsu through fun and games. We cater for ages from 5 - 11 years old. Jiu Jitsu teaches children the principles of discipline while improving their overall health and fitness.
            </p>
            <Link href="kids-program">
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a></Link>
          </div>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Teen's Program
            </h2>
            <p className="leading-relaxed text-base">
              Our Teen's program is structured similarly to our Adult's programs but tailored specifially to appeal to teenagers. In this program we teach Teens all aspects of Jiu Jitsu as well as giving them the option to compete in Jiu Jitsu tournaments.
            </p>
            <Link href="kids-program">
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
