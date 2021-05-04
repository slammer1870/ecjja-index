import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="flex justify-between mb-32">
        <card className="flex flex-col mx-auto bg-white z-0 md:w-6/12 md:mr-7 lg:3/12 xl:mr-12">
          <div className="flex justify-center">
            <Image
              src="/testimonial1.png"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full h-96 relative">
            <h3 className="text-2xl font-thin pt-20">
              “Training at ECJJA is a good buzz and I enjoy it a lot. OSS”
            </h3>
            <div className="bottom-0 absolute">
              <h3 className="text-2xl font-bold my-4">Sam Mc Nally</h3>
              <h3 className="text-2xl font-light my-4">
                Web Developer
              </h3>
            </div>
          </div>
        </card>
        <card className="hidden md:block flex flex-col bg-white z-0 md:w-6/12 md:ml-7 lg:3/12 lg:mr-7 xl:mx-12">
          <div className="flex justify-center ">
            <Image
              src="/testimonial2.png"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full h-96 relative">
            <h3 className="text-2xl font-thin pt-20">
              “My Jiu Jitsu has improved a lot training at ECJJA. I love Reverse De La Riva.”
            </h3>
            <div className="bottom-0 absolute">
              <h3 className="text-2xl font-bold my-4">Emily Manning</h3>
              <h3 className="text-2xl font-light my-4">
                BJJ Purple Belt
              </h3>
            </div>
          </div>
        </card>
        <card className="hidden lg:block flex flex-col bg-white z-0 md:w-6/12 lg:3/12 lg:ml-7 xl:ml-12">
          <div className="flex justify-center ">
            <Image
              src="/testimonial3.png"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full h-96 relative">
            <h3 className="text-2xl font-thin pt-20">
              “Hit you with those two points boi, don't sleep on me.”
            </h3>
            <div className="bottom-0 absolute">
              <h3 className="text-2xl font-bold my-4">Marcus Phelan</h3>
              <h3 className="text-2xl font-light my-4">
                BJJ Black Belt
              </h3>
            </div>
          </div>
        </card>
      </div>
      <div className="flex items-center justify-center mx-auto lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.967"
          height="10.217"
          viewBox="0 0 27.967 10.217"
          className="mr-2"
        >
          <line
            id="Line_4"
            data-name="Line 4"
            x2="19"
            transform="translate(0 4.992)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
          <g
            id="Polygon_1"
            data-name="Polygon 1"
            transform="translate(27.772 0.228) rotate(90)"
            fill="#fff"
          >
            <path
              d="M 9.150241851806641 8.5 L 0.8497577905654907 8.5 L 5 1.029564023017883 L 9.150241851806641 8.5 Z"
              stroke="none"
            />
            <path
              d="M 5 2.059127807617188 L 1.699515342712402 8 L 8.300484657287598 8 L 5 2.059127807617188 M 5 0 L 10 9 L 0 9 L 5 0 Z"
              stroke="none"
              fill="#707070"
            />
          </g>
        </svg>
        <p className="border-b border-gray-800">See more of our client testimonials</p>
      </div>
    </section>
  );
};

export default Testimonials;
