import React, { useState } from "react";
import Image from "next/image";
import VideoGrid from "../components/VideoGrid";
import VideoPlayer from "../components/VideoPlayer";
import { getPosts, getCategories } from "../lib/api";

export default function EcjjaOnline({ posts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].title);

  return (
    <div>
      <section className="text-gray-600 body-font pt-12">
        <div className="container mx-auto flex p-4 md:px-0 md:flex-row flex-col items-start">
          <div className="lg:flex-grow md:w-1/2 xl:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl mb-4 font-medium text-gray-900">
              ECJJA Online
            </h1>
            <p className="mb-8 leading-relaxed">
              Coming soon. Subscribe to our newsletter below and we will notify
              you when we're online
            </p>
            {/*<div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 text-lg">
                Submit
              </button>
  </div>*/}
            <h1 className="title-font text-2xl mb-4 font-medium text-gray-900">
              Check out our preview content
            </h1>
            <div className="w-full">
              <div className="flex mb-4">
                <label for="series" className="mr-2">
                  Choose a series:
                </label>

                <select
                  name="series"
                  id="series"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option value={category.title}>{category.title}</option>
                  ))}
                </select>
              </div>
              <grid className="grid xl:grid-cols-2 gap-1">
                {posts
                  .filter((post) =>
                    post.categories.some((el) => el.title === selectedCategory)
                  )
                  .map((post) => (
                    <VideoPlayer video={post} />
                  ))}
              </grid>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              src="/competition.jpeg"
              width={1080}
              height={1350}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const categories = await getCategories();

  return {
    props: {
      posts: posts.posts,
      categories: categories.categories,
    },
  };
}
