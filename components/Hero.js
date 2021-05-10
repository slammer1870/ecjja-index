import React, { useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [video, setVideo] = useState();

  const handleVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  return (
    <div className="md:flex md:py-36 md:justify-between">
      <div className="p-4 mb-8 md:w-1/2 md:p-0 md:pr-2 xl:pr-6">
        <h1 className="text-5xl font-light tracking-wider uppercase md:mb-8 md:text-3xl lg:text-5xl">
          East Coast Jiu Jitsu Academy
        </h1>
        <div className="hidden md:block">
          <h3 className="text-4xl font-thin md:mb-8 md:text-xl lg:text-4xl">
            Brazilian Jiu Jitsu in South Dublin
          </h3>
          <a
            href="#signup"
            className="text-2xl border py-2 px-8 uppercase md:text-sm lg:text-xl"
          >
            Join Now
          </a>
        </div>
      </div>
      <div
        className="aspect-w-16 aspect-h-9 h-1/3 md:w-1/2 md:pb-56 lg:pb-96"
        onClick={handleVideo}
      >
        <Image src="/academypic.jpeg" layout="fill" objectFit="cover" />
        <div className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center mx-auto">
          <div className="w-48 h-auto xl:w-56">
            <svg
              xmlns="http://www.w3.org/2000/svg"
  
              viewBox="0 0 178 45"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="22.5"
                cy="22.5"
                r="22.5"
                fill="#bcbcbc"
              />
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="154"
                height="29"
                rx="10"
                transform="translate(24 9)"
                fill="#bcbcbc"
              />
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M7.928,0l7.928,14.636H0Z"
                transform="translate(32.845 15.739) rotate(90)"
                fill="#f4f1f7"
              />
              <text
                id="Watch_the_video_2_minutes_"
                data-name="Watch the video (2 minutes)"
                transform="translate(45 18)"
                fill="#f4f1f7"
                font-size="10"
                font-family="HelveticaNeue-Light, Helvetica Neue"
                font-weight="300"
              >
                <tspan x="0" y="8">
                  Watch the video (2 minutes)
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 mt-8 md:hidden">
        <h3 className="text-4xl font-thin">
          Brazilian Jiu Jitsu in South Dublin
        </h3>
      </div>
      {video && (
        <div className="flex p-4 top-0 left-0 w-screen h-screen fixed bg-black bg-opacity-90 z-10 ">
          <button
            className="w-screen h-screen absolute"
            onClick={handleVideo}
          ></button>
          <div className="w-full max-w-screen-md bg-white md:p-0 mx-auto my-auto z-20 relative">
            <div class="aspect-w-16 aspect-h-9 mx-auto max-w-screen-md opacity-100">
              <iframe
                src="https://www.youtube.com/embed/Vzo8tv2B4nU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
