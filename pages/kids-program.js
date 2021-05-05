import React from "react";
import Image from "next/image";

export default function KidsProgram() {
  return (
    <div>
      <section>
        <div className="container py-12 mx-auto flex flex-col">
          <h1 className="text-5xl px-4 md:px-0 font-light tracking-wider uppercase md:mb-8 md:text-3xl lg:text-5xl mb-12 md:text-center">
            Kid's Program
          </h1>
          <div className="lg:w-4/6 mx-auto">
            <div className="h-auto overflow-hidden">
              <Image
                src="/kids1.jpeg"
                width={1080}
                height={720}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 z-0">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src="/testimonial3.png"
                    width={120}
                    height={120}
                    className="rounded-full z-10"
                  />{" "}
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Marcus Phelan
                  </h2>
                  <div className="w-36 h-1 bg-gray-400 mt-2 mb-4" />
                  <p className="text-base">
                    Head Instructor of our Kid's and Teen's Program
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 p-4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Our kids program caters to 3 different age groups. 5-7 years
                  old, 8-11 and finally our Teens Class from 11-15. Led by
                  European Champion Marcus Phelan, our Kids programs will
                  develop numerous qualities in your child. Their fitness,
                  ability to defend themselves, their confidence, balance and
                  coordination and much more. Jiu Jitsu is a fantastic
                  alternative to the standard team based sports offered in
                  schools. Your child will learn from one of the best Jiu Jitsu
                  athletes in the country in a fun, safe and professional
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-4 pb-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Our class option
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              We cater for a range of age groups.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  5-7 Years old
                </h2>
                <p className="leading-relaxed text-base">
                  The objective of this class is fun. Marcus has designed plenty
                  of games, coordination drills and grappling basics to keep the
                  kids focused, engaged and enjoying themselves!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  8-11 Years old
                </h2>
                <p className="leading-relaxed text-base">
                  Still using fun and games, the goal of this class is to
                  develop further your childs motor skills and build some
                  strength and fitness. This age group focuses on building good,
                  safe grappling skills that will carry them through to the Teen
                  and adult age groups.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  11-15 Teens Class
                </h2>
                <p className="leading-relaxed text-base">
                  tructured much more similarly to an adults class. Our Teens
                  Class has multiple elements from fitness, strength and
                  gymnastic based warm ups, to clear and concise technical
                  instruction and controlled sparring to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 md:px-0 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact us to enroll your Child
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Fill in the form below and we will get back to you as soon as
              possible!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex justify-center items-center w-full mx-auto text-white text-center bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
