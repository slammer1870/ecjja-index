import React from "react";
import Image from "next/image";

export const Hero = () => (
  <div className="w-screen">
    <div className="p-4 mb-8">
      <h1 className="text-5xl font-light tracking-wider uppercase">East Coast Jiu Jitsu Academy</h1>
    </div>
    <div className="bg-academy bg-cover aspect-w-16 aspect-h-9 h-1/3">
      <div className="w-full h-full bg-black opacity-40 flex justify-center items-center">
        <button className="text-white border py-2 px-4 uppercase">
          Join Now
        </button>
      </div>
    </div>
    <div className="p-4 mt-8">
    <h3 className="text-4xl font-thin">
      Brazilian Jiu Jitsu in South Dublin
    </h3>
    </div>
  </div>
);

export default Hero;
