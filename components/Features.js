import React from "react";
import Link from "next/link"

const Features = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 pt-6 pb-24 mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium md:text-center text-gray-900 mb-12">
        Our program options
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/2 xl:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
              Adult Beginners
            </h2>
            <p className="leading-relaxed text-base">
              Our Adult Beginners program runs on an 8 week cycle. In this program we cover the basic techniques of Brazilian Jiu Jitsu. When you sign up to the beginners program you will receive a training uniform. 
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
        <div className="p-4 md:w-1/2 xl:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
              Adult Advanced
            </h2>
            <p className="leading-relaxed text-base">
              Our Advanced class is where our more experienced students train. ECJJA is a world class academy hosting multiple World and European Champions. In these classes you will get to train alonside top level athletes with expert instruction!
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
        <div className="p-4 md:w-1/2 xl:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
              Kids Program
            </h2>
            <p className="leading-relaxed text-base">
              Our Kids program is structured to introduce children to Jiu Jitsu through fun and games. We cater for ages from 5 - 11 years old. Jiu Jitsu teaches children the principles of discipline while improving their overall health and fitness.
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
        <div className="p-4 md:w-1/2 xl:w-1/4 flex">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
              Teen's Program
            </h2>
            <p className="leading-relaxed text-base">
              Our Teens program is structured similarly to our Adults programs but tailored specifially to for teens. In this program we teach Teens all aspects of Jiu Jitsu as well as giving them the option to compete in Jiu Jitsu tournaments.
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
