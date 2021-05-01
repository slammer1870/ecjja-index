import React from "react";
import Image from "next/image";

const About = () => (
  <content>
    <section className="px-4 py-12">
      <h3 className="text-5xl mb-8 font-light text-left w-10/12">What we do</h3>
      <card className="flex relative">
        <div className="w-10/12 h-72 bg-gray-200 p-5">
          <div className="w-10/12">
            <p className="mb-8">
              We are a team of professional athletes led by Brazilian Jiu Jitsu
              Black Belt, Darragh O’Conaill.
            </p>
            <p>
              ECJJA is home to some of the best BJJ Athletes in Europe, located
              in Monkstown, South County Dublin.
            </p>
          </div>
        </div>
        <div className="w-4/12 right-0 bottom-0 absolute flex">
          <Image src="/darragh.png" alt="Darragh" width={269} height={441} />
        </div>
      </card>
    </section>
    <section className="py-12 px-4">
      <h3 className="text-5xl mb-8 font-light">What you will learn</h3>
      <p className="mb-8">
        Our mission is to teach you the Art of Brazilian Jiu Jitsu.
      </p>
      <div className="aspect-w-16 aspect-h-9 mb-8 ">
        <Image src="/teaching1.jpeg" alt="Darragh" layout="fill" objectFit="cover" />
      </div>
      <p className="mb-8">
        Upon beginning training with us you will start in our beginner’s
        program. Here you will learn the basic techniques and strategies of
        grappling
      </p>
      <p>
        As you progress in your journey you will move on to our fundamentals and
        advanced programs over time.
      </p>
    </section>
    <section className="py-12 px-4">
      <h3 className="text-5xl mb-8 font-light">What if I am out of shape?</h3>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <Image src="/happy.jpeg" alt="Darragh" layout="fill" />
      </div>
      <p className="mb-8">
        The beautiful thing about Jiu Jitsu is that it requires
        <span className="font-bold">
          no prior experience or level of fitness to get started.
        </span>
      </p>
      <p>
        Our beginner’s program runs in cycles which mean that every group starts
        at the same time, from the same place. You will be in a group of people
        with the exact same level of experience as you!
      </p>
    </section>
  </content>
);

export default About;
