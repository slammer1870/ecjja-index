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
              Adults Program
            </h1>
          </div>
          <div className="max-w-screen-md mx-auto">
            <div className="bg-video bg-cover aspect-w-16 aspect-h-9">
              <Image src="/adults.jpg" alt="Adult's Program" layout="fill" objectFit="cover" />
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
                About our Adults Program
              </h1>
              <p className="lg:w-2/3 mx-auto md:text-lg">
                ECJJA is not your typical Jiu Jitsu academy. Here our mission is
                to provide you or your child with world-class Jiu Jitsu
                instruction. We pride ourselves on an environment that is warm
                and welcoming to everyone. Whether your goals are to compete and
                win a world title or simply get fit and fall in love with a new
                hobby, we can help you reach them. Our members come from all
                walks of life ranging between 5 and 65.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Beginners Course
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Begin your Jiu Jitsu journey in our renowned Beginners
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
                    Enroll in a Beginners Course or make a monthly membership.
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
                    colour uniform or specific patches. Here you can wear whatever gi like.
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
          <div className="flex flex-wrap justify-around xl:justify-between">
            <card className="md:w-72 lg:w-80 2xl:w-96 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
              <div className="flex justify-center">
                <Image
                  src="/dave.png"
                  alt="Dave"
                  width={120}
                  height={120}
                  className="rounded-full z-10"
                />
              </div>
              <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
                <h3 className="text-xl font-thin pt-20 h-76">
                  “When I was looking to take up Jiu Jitsu I wanted it all,
                  great facilities, great teammates and most of all an
                  instructor that genuinely cared about the development of his
                  students. Thankfully I found all of that in ECJJA and haven’t
                  looked back since!”
                </h3>
                <div className="">
                  <h3 className="text-xl font-bold mb-4">David Phelan</h3>
                  <h3 className="text-xl font-light">Recruitment Consultant</h3>
                </div>
              </div>
            </card>
            <card className="md:w-72 lg:w-80 2xl:w-96 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
              <div className="flex justify-center">
                <Image
                  src="/rioghnach.png"
                  alt="Rioghnach"
                  width={120}
                  height={120}
                  className="rounded-full z-10"
                />
              </div>
              <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
                <h3 className="text-xl font-thin pt-20 h-76">
                  “For a person who has never played a sport before, I really
                  feel that with ECJJA I’ve found the right activity and place
                  to do it in. BJJ is a perfect balance as it stimulates you
                  physically and mentally, but also simultaneously provides a
                  social outlet. At ECJJA I’ve always felt that both my coaches
                  and teammates want to see me succeed and thus are constantly
                  helping and pushing me.”
                </h3>
                <div className="">
                  <h3 className="text-xl font-bold mb-4">Ríoghnach O' Leary</h3>
                  <h3 className="text-xl font-light">Psychologist</h3>
                </div>
              </div>
            </card>
            <card className="md:w-72 lg:w-80 2xl:w-96 flex flex-col mx-auto md:mx-0 mb-24 bg-white z-0 ">
              <div className="flex justify-center">
                <Image
                  src="/sam.png"
                  alt="Sam"
                  width={120}
                  height={120}
                  className="rounded-full z-10"
                />
              </div>
              <div className="bg-gray-100 p-6 -mt-16 min-h-full relative flex flex-col justify-between">
                <h3 className="text-xl font-thin pt-20 h-76">
                  “I was lucky enough to choose East Coast Jiu Jitsu Academy to
                  train in when I started BJJ. It has become a driving force in
                  my life, giving me the initiative to achieve and improve. The
                  sport itself is addictive but the atmosphere in the gym and
                  the training partners are what make us a team. Darragh
                  constantly looks to improve himself and his team, always
                  teaching new techniques and keeping a strong focus on self
                  improvement for every individual!”
                </h3>
                <div className="">
                  <h3 className="text-xl font-bold mb-4">Sam Mc Nally</h3>
                  <h3 className="text-xl font-light">BJJ Black Belt</h3>
                </div>
              </div>
            </card>
          </div>
        </section>
      </main>
    </div>
  );
}
