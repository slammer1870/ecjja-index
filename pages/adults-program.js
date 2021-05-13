import React, { useState } from "react";
import Image from "next/image";

import Form from "../components/Form";

export default function AdultsProgram() {
  return (
    <div>
      <main>
        <section className="pt-12">
          <div className="px-4">
            <h1 className="text-5xl font-light tracking-wider uppercase md:mb-8 md:text-3xl lg:text-5xl mb-12 md:text-center">
              Adult's Program
            </h1>
          </div>
          <div className="max-w-screen-md mx-auto">
            <div className="bg-video bg-cover aspect-w-16 aspect-h-9">
              <Image
                src="/adults.jpg"
                layout="fill"
                objectFit="cover"
              />
              <div className="w-full h-full bg-black opacity-40 flex justify-center items-center">
                
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-4 pt-12 mx-auto">
            <div className="flex flex-col md:text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium  mb-1">
                EAST COAST JIU JITSU ACADEMY
              </h2>
              <h1 className="text-3xl font-regular mb-4 text-gray-900">
                About our Adult's Program
              </h1>
              <p className="lg:w-2/3 mx-auto md:text-lg">
                ECJJA is not your typical Jiu Jitsu academy. Here our mission is
                to provide you or your child with world-class Jiu Jitsu
                instruction. We pride ourselves on an environment that is warm
                and welcoming to everyone. Wether your goals are to compete and
                win a world title or simply get fit and fall in love with a new
                hobby, we can help you reach them. Our members come from all
                walks of life ranging between 5 and 65.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Beginner's Course
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Begin your Jiu Jitsu journey in our renowned Beginner's
                  Classes. Get to grips with the basics in a class designed
                  specifically for people new to the sport.
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Mixed Levels Classes
                </h2>
                <p className="text-base mb-4">
                  Our Mixed Levels classes are where you will head after our
                  Beginners Program. Expand your technical knowledge and
                  physical abilities while you progress through the belt ranks.
                  <br />
                  <br />
                  Train alongside European and World Champions!
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Nogi Classes
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Jiu Jitsu can be practiced with the Kimono (Gi) and without
                  (NoGi). A faster paced version of Jiu Jitsu with some
                  different techniques in play, we have classes specifically for
                  Nogi training.
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Open Mat
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Open mat is one of our members favourite times in the week.
                  Every Saturday and Sunday from 1-3pm the mat is free for all
                  students to use as they wish.
                  <br />
                  <br />
                  Practice some techniques you learned during the week, do some
                  sparring, or just chill and hang out! Always a good vibe and a
                  packed mat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Form />
        <section className="text-gray-600 body-font mb-24">
          <div className="container px-4 pt-6 pb-6 mx-auto">
            <div className="md:text-center mb-20">
              <h1 className="text-2xl md:text-3xl font-medium title-font text-gray-900 mb-4">
                Some information about our memberships
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Remember we said ECJJA is not your typical Jiu Jitsu academy?
                Heres some reasons why.
              </p>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 lg:w-1/4 flex flex-col items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    No sign up fees
                  </h2>
                  <p className="leading-relaxed text-base">
                    Enrol in a Beginners Course or make a monthly membership.
                    Simple. No extra fees or charges.
                  </p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 flex flex-col items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    ECJJA Online
                  </h2>
                  <p className="leading-relaxed text-base">
                    As part of this very site we have an online learning
                    platform that you will gain access to with your membership
                    for no extra cost. Review techniques from or expand your
                    learning from home.
                  </p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 flex flex-col items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    No uniform policies
                  </h2>
                  <p className="leading-relaxed text-base">
                    Many Jiu Jitsu academies force students to wear a particular
                    colour uniform or specific patches. Here you can wear what
                    you gi like.
                  </p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 flex flex-col items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    No dated traditions
                  </h2>
                  <p className="leading-relaxed text-base">
                    Here you will not be made bow to picture, line up in order
                    of rank or be told who you can and cannot train with. We
                    focus on the things that really matter, like your progress
                    and enjoyment!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-24 px-4 md:px-0">
          <h1 class="text-3xl md:text-4xl font-regular title-font text-gray-900 mb-12 md:text-center">
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
    </div>
  );
}
