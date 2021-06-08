import React from "react";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="flex justify-between mb-32">
        <card className="flex flex-col mx-auto bg-white z-0 md:w-6/12 md:mr-7 xl:mr-12">
          <div className="flex justify-center">
            <Image
              src="/dave.png"
              alt="Dave testimonial"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
            <h3 className="text-xl font-thin pt-20 h-76">
              “When I was looking to take up Jiu-Jitsu I wanted it all, great
              facilities, great teammates and most of all an instructor that
              genuinely cared about the development of his students. Thankfully
              I found all of that in ECJJA and haven’t looked back since!”
            </h3>
            <div className="">
              <h3 className="text-xl font-bold mb-4">David Phelan</h3>
              <h3 className="text-xl font-light">Recruitment Consultant</h3>
            </div>
          </div>
        </card>
        <card className="hidden md:block flex flex-col bg-white z-0 md:w-6/12 md:ml-7 lg:mr-7 xl:mx-12">
          <div className="flex justify-center">
            <Image
              src="/rioghnach.png"
              alt="Rioghnach testimonial"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
            <h3 className="text-xl font-thin pt-20 h-76">
              “For a person who has never played a sport before, I really feel
              that with ECJJA I’ve found the right activity and place to do it
              in. BJJ is a perfect balance as it stimulates you physically and
              mentally, but also simultaneously provides a social outlet. At
              ECJJA I’ve always felt that both my coaches and teammates want to
              see me succeed and thus are constantly helping and pushing me.”
            </h3>
            <div className="">
              <h3 className="text-xl font-bold mb-4">Ríoghnach O' Leary</h3>
              <h3 className="text-xl font-light">Psychologist</h3>
            </div>
          </div>
        </card>
        <card className="hidden xl:block flex flex-col bg-white z-0 md:w-6/12 lg:ml-7 xl:ml-12">
          <div className="flex justify-center">
            <Image
              src="/sam.png"
              alt="Sam testimonial"
              width={120}
              height={120}
              className="rounded-full z-10"
            />
          </div>
          <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
            <h3 className="text-xl font-thin pt-20 h-76">
              “I was lucky enough to choose East Coast Jiu Jitsu Academy to
              train in when I started BJJ. It has become a driving force in my
              life, giving me the initiative to achieve and improve. The sport
              itself is addictive but the atmosphere in the gym and the training
              partners are what make us a team. Darragh constantly looks to
              improve himself and his team, always teaching new techniques and
              keeping a strong focus on self improvement for every individual!”
            </h3>
            <div className="">
              <h3 className="text-xl font-bold mb-4">Sam Mc Nally</h3>
              <h3 className="text-xl font-light">BJJ Black Belt</h3>
            </div>
          </div>
        </card>
      </div>
      <Link href="/adults-program">
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
          <p className="border-b border-gray-800">
            See more of our client testimonials
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Testimonials;
