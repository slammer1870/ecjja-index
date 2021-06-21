import Image from "next/image";

const CourseProduct = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-6 lg:py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src="/beginners.jpg"
              width={400}
              height={400}
              alt="beginners"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center"
            />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              EAST COAST JIU JITSU ACADEMY
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              8 Week Beginners Course - July 2021
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Timetable
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                FAQs
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Start Date</span>
              <span className="ml-auto text-gray-900">5th of July 2021</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Duration</span>
              <span className="ml-auto text-gray-900">8 Weeks</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Training Uniform</span>
              <span className="ml-auto text-gray-900">Included</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProduct;
