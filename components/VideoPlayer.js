import { useState } from "react";
import Image from "next/image";
import { createTumbnail, createEmbed } from "../utils/urls";

const VideoPlayer = ({ video }) => {
  const [active, setActive] = useState();

  const handleActive = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div>
      <div
        onClick={handleActive}
        className="aspect-w-16 aspect-h-9 w-auto relative z-0"
      >
        <Image
          src={createTumbnail(video.url)}
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-gray-900 bg-opacity-40 hover:bg-opacity-0 w-full h-full z-10 absolute top-0 left-0 text-white p-4">
          <div className="flex w-full h-full justify-center items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-12 h-12 stroke-2"
              viewBox="0 0 105 105"
            >
              <g
                id="Polygon_3"
                data-name="Polygon 3"
                transform="translate(70 22) rotate(90)"
                fill="none"
              >
                <path d="M22,0,44,38H0Z" />
                <path
                  d="M 22 7.983467102050781 L 6.937797546386719 34 L 37.06220245361328 34 L 22 7.983467102050781 M 22 0 L 44 38 L 0 38 L 22 0 Z"
                  fill="currentColor"
                />
              </g>
              <g
                id="Ellipse_1"
                data-name="Ellipse 1"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="44" cy="44" r="44" />
                <circle cx="44" cy="44" r="42" fill="none" />
              </g>
            </svg>

            <div className="bottom-0 absolute w-full">
              <h1 className="text-xl font-light text-white min-h-32 p-2">
                {video.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div className="flex p-4 top-0 left-0 w-full h-full fixed bg-black bg-opacity-90 z-10 ">
          <button
            className="w-screen h-screen absolute"
            onClick={handleActive}
          ></button>
          <div className="w-full max-w-screen-md bg-white md:p-0 mx-auto my-auto z-20 relative">
            <div class="aspect-w-16 aspect-h-9 mx-auto max-w-screen-md opacity-100">
              <iframe
                src={createEmbed(video.url)}
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

export default VideoPlayer;
