import React from "react";
import Image from "next/image";

export const Hero = () => (
  <div className="md:flex md:py-36 md:justify-between">
    <div className="p-4 mb-8 md:w-1/2 md:p-0 md:pr-2 xl:pr-6">
      <h1 className="text-5xl font-light tracking-wider uppercase md:mb-8 md:text-3xl lg:text-5xl">
        East Coast Jiu Jitsu Academy
      </h1>
      <div className="hidden md:block">
        <h3 className="text-4xl font-thin md:mb-8 md:text-xl lg:text-4xl">
          Brazilian Jiu Jitsu in South Dublin
        </h3>
        <button className="text-2xl border py-2 px-8 uppercase md:text-sm lg:text-xl">
          Join Now
        </button>
      </div>
    </div>
    <div className="aspect-w-16 aspect-h-9 h-1/3 md:w-1/2 md:pb-56 lg:pb-96">
      <Image src="/academypic.jpeg" layout="fill" objectFit="cover" />
      <div className="w-full h-full bg-black opacity-40 flex justify-center items-center">
        <button className="text-white border py-2 px-4 uppercase md:hidden">
          Join Now
        </button>
      </div>
    </div>
    <div className="p-4 mt-8 md:hidden">
      <h3 className="text-4xl font-thin">
        Brazilian Jiu Jitsu in South Dublin
      </h3>
    </div>
  </div>
);

export default Hero;
