import React, { useState } from "react";
import Image from "next/image";

import Form from "../components/Form";

export default function AdultsProgram() {
  const [video, setVideo] = useState();

  const handleVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  return (
    <div>
      <main>
        <section className="pt-12">
          <div className="px-4">
            <h1 className="text-5xl font-light tracking-wider uppercase md:mb-8 md:text-3xl lg:text-5xl mb-12 md:text-center">
              Adult's Program
            </h1>
          </div>
          <div className="max-w-screen-md mx-auto" onClick={handleVideo}>
            <div className="bg-video bg-cover aspect-w-16 aspect-h-9">
              <Image
                src="/videoscreenshot.png"
                layout="fill"
                objectFit="cover"
              />
              <div className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="178"
                  height="45"
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
        </section>
        <section>
          <div className="container px-4 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium  mb-1">
                EAST COAST JIU JITSU ACADEMY
              </h2>
              <h1 className="sm:text-3xl text-2xl font-regular mb-4 text-gray-900">
                About our Adult's Program
              </h1>
              <p className="lg:w-2/3 mx-auto">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Form />
        <section className="py-12 px-4 md:px-0">
          <h1 class="text-3xl font-regular title-font text-gray-900 mb-12 text-center">
            What others have had to say
          </h1>
          <div className="flex flex-wrap justify-around ">
            <card className="w-80 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
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
                  <h3 className="text-2xl font-light my-4">Web Developer</h3>
                </div>
              </div>
            </card>
            <card className="w-80 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
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
                  “My Jiu Jitsu has improved a lot training at ECJJA. I love
                  Reverse De La Riva.”
                </h3>
                <div className="bottom-0 absolute">
                  <h3 className="text-2xl font-bold my-4">Emily Manning</h3>
                  <h3 className="text-2xl font-light my-4">BJJ Purple Belt</h3>
                </div>
              </div>
            </card>
            <card className="w-80 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
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
                  <h3 className="text-2xl font-light my-4">BJJ Black Belt</h3>
                </div>
              </div>
            </card>
          </div>
        </section>
      </main>
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
}
