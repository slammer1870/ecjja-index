import React from "react";
import Image from "next/image";

const About = () => (
  <content>
    <section className="px-4 py-12">
      <div className="md:flex md:justify-between">
        <div className="hidden md:block aspect-w-16 aspect-h-9 md:w-6/12 md:pb-56 lg:pb-96 ">
          <Image
            src="/teaching.jpeg"
            alt="Darragh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <card className="flex flex-col relative md:w-5/12 lg:w-1/2 lg:pl-14 xl:pl-32">
          <h3 className="text-5xl mb-8 font-light text-left md:mb-4 md:text-3xl xl:text-5xl xl:mb-10">
            Who we are
          </h3>
          <div className="w-10/12 h-full bg-gray-200 p-5 lg:h-full">
            <div className="w-10/12 font-light lg:pr-2 2xl:pr-4">
              <p className="mb-8 md:text-xs md:mb-4 lg:text-base lg:mb-10 xl:text-lg">
                We are a team of professional athletes led by Brazilian Jiu
                Jitsu Black Belt, Darragh O’Conaill.
              </p>
              <p className="md:text-xs lg:text-base xl:text-lg">
                ECJJA is home to some of the best BJJ Athletes in Europe,
                located in Monkstown, South County Dublin.
              </p>
            </div>
          </div>
          <div className="w-4/12 right-0 bottom-0 absolute flex">
            <Image src="/darragh.png" alt="Darragh" width={269} height={441} />
          </div>
        </card>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="md:flex md:justify-between">
        <div className="md:w-5/12">
          <h3 className="text-5xl mb-8 font-light md:text-3xl md:mb-4 xl:text-5xl xl:mb-10">
            What you will learn
          </h3>
          <p className="mb-8 md:text-sm md:mb-4 lg:text-base xl:text-lg">
            Our mission is to teach you the Art of Brazilian Jiu Jitsu.
          </p>
          <div className="hidden md:block md:text-sm lg:text-base xl:text-lg">
            <p className="mb-8 md:mb-4">
              Upon beginning training with us you will start in our beginner’s
              program. Here you will learn the basic techniques and strategies
              of grappling
            </p>
            <p>
              As you progress in your journey you will move on to our
              fundamentals and advanced programs over time.
            </p>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-8 md:mb-0 md:w-6/12 md:pb-56 lg:pb-96 ">
          <Image
            src="/teaching1.jpeg"
            alt="Darragh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:hidden">
          <p className="mb-8">
            Upon beginning training with us you will start in our beginner’s
            program. Here you will learn the basic techniques and strategies of
            grappling
          </p>
          <p>
            As you progress in your journey you will move on to our fundamentals
            and advanced programs over time.
          </p>
        </div>
      </div>
    </section>
    <section className="py-12 px-4">
      <h3 className="text-5xl mb-8 font-light md:hidden">
        What if I am out of shape?
      </h3>
      <div className="md:flex md:justify-between">
        <div className="aspect-w-16 aspect-h-9 mb-8 md:mb-0 md:w-6/12 md:pb-56 lg:pb-96 ">
          <Image
            src="/happy.jpeg"
            alt="Darragh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:w-5/12">
          <h3 className="hidden md:block text-3xl mb-4 font-light xl:text-5xl xl:mb-10">
            What if I am out of shape?
          </h3>
          <p className="mb-4 md:text-sm lg:text-base xl:text-lg">
            The beautiful thing about Jiu Jitsu is that it requires
            <span className="font-bold">
              &nbsp; no prior experience or level of fitness to get started.
            </span>
          </p>
          <p className="md:text-sm lg:text-base xl:text-lg">
            Our beginner’s program runs in cycles which mean that every group
            starts at the same time, from the same place. You will be in a group
            of people with the exact same level of experience as you!
          </p>
        </div>
      </div>
    </section>
  </content>
);

export default About;
