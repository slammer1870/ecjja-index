import Image from "next/image";
import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import SizingChart from "../components/SizingChart";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

const CourseProduct = () => {
  const [modal, setModal] = useState();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stripe = await stripePromise;

    const res = await fetch(`/api/payment`, {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        name: e.target.name.value,
        size: e.target.size.value,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    const session = await res.json();

    if (session.error) {
      //If there was an error, update the message in state.
      setLoading(false);
      setMessage("Oops, something went wrong! Please contact info@ecjja.com");

      return;
    }
    //working
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    setLoading(false);
  };

  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="px-5 py-6 lg:py-24 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <Image
            src="/beginners.jpg"
            width={600}
            height={600}
            alt="beginners"
            className="w-full h-64 object-cover object-center"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              EAST COAST JIU JITSU ACADEMY
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              8 Week Beginners Course - July 2021
            </h1>
            <p className="leading-relaxed mb-4">
              This course begins on the 5th of July and runs for 8 weeks. We
              have classes at 6pm every Monday and Wednesday, 7:30pm Tuesday and
              Thursday and 12pm Saturday and Sunday. One enrolled you are free
              to attend as many sessions as you like per week. Upon enrolling
              you will also recieve a training uniform included with your
              purchase.
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
            <form onSubmit={handleSubmit}>
              <h3 className="text-gray-900 text-2xl font-medium mb-2">
                Enter your details below to enroll in this course
              </h3>
              <div className="pb-1">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-1">
                  <span className="text-sm text-gray-600">
                    Training Uniform Size - Not sure what size you are?{" "}
                    <a
                      className="text-gray-900 underline"
                      onClick={handleModal}
                    >
                      Click here
                    </a>
                  </span>
                  <div className="relative mt-1">
                    <select
                      id="size"
                      name="size"
                      className="w-full border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      <option>A0</option>
                      <option>A1</option>
                      <option>A2</option>
                      <option>A3</option>
                      <option>A4</option>
                      <option>
                        I'm really not sure (we'll size you up at the academy)
                      </option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex border-t pt-4 mt-4 border-gray-200">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €180.00
                </span>
                <button
                  type="submit"
                  className="flex w-36 items-center justify-center ml-auto text-white bg-blue-500 border-0 py-2 focus:outline-none hover:bg-blue-600"
                >
                  {!message && loading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 31 31.157"
                      className="w-4 h-4 my-1 animate-spin mx-auto"
                    >
                      <g id="loading" transform="translate(0 0.02)">
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M1158.538,469.08a18.162,18.162,0,0,1,.71,2.747,2.926,2.926,0,0,0,.173.972v.292a.166.166,0,0,0,0,.219v1.824a.166.166,0,0,0,0,.219v.365a5.1,5.1,0,0,0-.236,1.292c-.141.807-.43,1.57-.648,2.354-.179,0-.209-.137-.235-.271a1.834,1.834,0,0,1-.019-.365v-9.017a1.834,1.834,0,0,1,.019-.365C1158.328,469.22,1158.359,469.083,1158.538,469.08Z"
                          transform="translate(-1128.421 -458.665)"
                          fill="#6f7173"
                        />
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M955.214,328.209h-.73a.374.374,0,0,1-.106-.261q-.027-.792,0-1.585a.406.406,0,0,1,.106-.263h.8a.229.229,0,0,1,.039.126v1.505A.669.669,0,0,1,955.214,328.209Z"
                          transform="translate(-939.385 -326.119)"
                          fill="#a7a9ac"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M965.912,328.19v-1.7c0-.115-.04-.244.073-.338.134-.09.3.023.438-.073h.219a.622.622,0,0,1,.109.444c.006.577-.014,1.154.033,1.73Z"
                          transform="translate(-950.083 -326.1)"
                          fill="#a4a6a9"
                        />
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M945.017,326.1v2.108l-.57.014a.151.151,0,0,1-.234-.134,5.151,5.151,0,0,1,.073-1.988h.073a.56.56,0,0,0,.438,0Z"
                          transform="translate(-929.918 -326.119)"
                          fill="#abadaf"
                        />
                        <path
                          id="Path_5"
                          data-name="Path 5"
                          d="M976.086,328.275c-.142-.09-.146-.228-.146-.377.005-.6,0-1.2,0-1.8h.219c.146.16.371.011.525.139a5.772,5.772,0,0,0,.055,2.112Z"
                          transform="translate(-959.386 -326.119)"
                          fill="#a1a3a6"
                        />
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M938,326.1v1.813c0,.128-.038.28.159.309a1.66,1.66,0,0,1-.671.065.4.4,0,0,1-.105-.261q-.027-.79,0-1.58a.352.352,0,0,1,.106-.26l.073-.085Z"
                          transform="translate(-923.626 -326.119)"
                          fill="#aeb0b2"
                        />
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M947.438,326.1a.33.33,0,0,1-.438,0Z"
                          transform="translate(-932.558 -326.119)"
                          fill="#babcbe"
                        />
                        <path
                          id="Path_8"
                          data-name="Path 8"
                          d="M967.438,326.1c-.127.136-.292.047-.438.073V326.1Z"
                          transform="translate(-951.098 -326.119)"
                          fill="#b6b8ba"
                        />
                        <path
                          id="Path_9"
                          data-name="Path 9"
                          d="M1172.945,552.219c-.111-.073-.089-.146,0-.219Z"
                          transform="translate(-1141.945 -535.534)"
                          fill="#a8aaad"
                        />
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M1172.945,524.269c-.089-.073-.111-.146,0-.219Z"
                          transform="translate(-1141.945 -509.623)"
                          fill="#a8aaad"
                        />
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M1143.517,437.012a5.563,5.563,0,0,1,.657,1.314,1.408,1.408,0,0,0-.015.609q-.008,5.482,0,10.965a1.42,1.42,0,0,0,.015.609,6.579,6.579,0,0,1-.781,1.536c-.26-.079-.195-.305-.2-.479-.01-1.262-.008-2.525,0-3.787a10.843,10.843,0,0,1,.036-1.664,18.51,18.51,0,0,0,0-3.383c-.062-1.743-.023-3.487-.032-5.231a.9.9,0,0,1,.058-.428C1143.312,436.962,1143.385,436.847,1143.517,437.012Z"
                          transform="translate(-1114.421 -428.86)"
                          fill="#727376"
                        />
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M1155,468.187c-.179-.034-.134-.177-.134-.292v-11.6c0-.112-.045-.255.134-.292a7.819,7.819,0,0,1,.365.949c-.146.073-.139.212-.139.347v9.589c0,.135-.012.273.137.347A7.2,7.2,0,0,1,1155,468.187Z"
                          transform="translate(-1125.252 -446.539)"
                          fill="#707274"
                        />
                        <path
                          id="Path_13"
                          data-name="Path 13"
                          d="M1134.061,562.8c.135,1.84.06,3.682.082,5.523,0,.138-.058.292.082.408a3.813,3.813,0,0,1-.677,1.088c-.286-.085-.246-.333-.245-.536,0-1.16-.035-2.321.021-3.48A20.3,20.3,0,0,0,1134.061,562.8Z"
                          transform="translate(-1105.255 -545.546)"
                          fill="#747678"
                        />
                        <path
                          id="Path_14"
                          data-name="Path 14"
                          d="M1135.262,423.209c-.284-.065-.207.153-.208.284-.006.811,0,1.622,0,2.433,0,.787,0,1.574,0,2.361a2.037,2.037,0,0,1-.085.642,23.031,23.031,0,0,0-.647-2.728c-.087-1.225-.03-2.453-.034-3.679,0-.191-.022-.43.263-.482A5.249,5.249,0,0,1,1135.262,423.209Z"
                          transform="translate(-1106.166 -415.057)"
                          fill="#747578"
                        />
                        <path
                          id="Path_15"
                          data-name="Path 15"
                          d="M1125.03,407.946c-.174.127-.156.314-.156.5v3.2a.807.807,0,0,1-.073.46l-.741-1.721a1.72,1.72,0,0,1-.033-.721c0-.79-.009-1.578.005-2.368,0-.171-.066-.4.214-.457A4.941,4.941,0,0,1,1125.03,407.946Z"
                          transform="translate(-1096.645 -400.967)"
                          fill="#76787a"
                        />
                        <path
                          id="Path_16"
                          data-name="Path 16"
                          d="M1114.322,395.876c-.146.088-.1.234-.1.361v2.142a3.607,3.607,0,0,1-.084,1.043q-.4-.67-.794-1.339c-.079-.9-.031-1.81-.027-2.715,0-.161.01-.357.259-.358A4.762,4.762,0,0,1,1114.322,395.876Z"
                          transform="translate(-1086.72 -390)"
                          fill="#797a7d"
                        />
                        <path
                          id="Path_17"
                          data-name="Path 17"
                          d="M1125.872,604c.134.1.085.244.085.371q.006,1.586,0,3.174a.571.571,0,0,0,.138.471,3.013,3.013,0,0,1-.584.8c-.242-.023-.241-.219-.241-.379,0-1.041-.052-2.083.03-3.123Z"
                          transform="translate(-1097.804 -583.739)"
                          fill="#76787a"
                        />
                        <path
                          id="Path_18"
                          data-name="Path 18"
                          d="M1116.879,622a.809.809,0,0,1,.073.46v2.659c0,.146-.03.3.136.384a3.19,3.19,0,0,1-.649.8c-.277.043-.241-.181-.248-.324-.026-.494-.019-.99-.007-1.484a6.9,6.9,0,0,1,.037-1.333Q1116.551,622.584,1116.879,622Z"
                          transform="translate(-1089.382 -600.426)"
                          fill="#787a7c"
                        />
                        <path
                          id="Path_19"
                          data-name="Path 19"
                          d="M772.067,577.448c-.033.282.182.52.146.8-.061.628-.024,1.258-.03,1.888-.007.752,0,1.5-.007,2.255,0,.166.051.373-.182.453a1.443,1.443,0,0,1-.365-.657,1.007,1.007,0,0,1-.113-.49v-3.632a.787.787,0,0,1,.066-.39C771.687,577.5,771.806,577.321,772.067,577.448Z"
                          transform="translate(-769.879 -559.085)"
                          fill="#eff0f0"
                        />
                        <path
                          id="Path_20"
                          data-name="Path 20"
                          d="M1085.49,368.82a3.643,3.643,0,0,1,.73.584,1.112,1.112,0,0,1,.11.49c0,.6,0,1.21,0,1.814,0,.189.02.4-.2.511l-.8-.8a22.489,22.489,0,0,1-.02-2.262A.328.328,0,0,1,1085.49,368.82Z"
                          transform="translate(-1060.755 -365.721)"
                          fill="#808184"
                        />
                        <path
                          id="Path_21"
                          data-name="Path 21"
                          d="M1096.81,379.6a.827.827,0,0,0,.083-.456c0-.786,0-1.572.007-2.358a4.2,4.2,0,0,1,.8.73c.064.857.033,1.715.012,2.572a.457.457,0,0,1-.174.383Z"
                          transform="translate(-1071.436 -373.11)"
                          fill="#7d7f81"
                        />
                        <path
                          id="Path_22"
                          data-name="Path 22"
                          d="M1099.235,651.256a3.659,3.659,0,0,1-.685.628c-.167-.028-.211-.164-.219-.292a22.363,22.363,0,0,1,0-2.245.626.626,0,0,1,.09-.236l.736-.931a.341.341,0,0,1,.1.263C1099.259,649.38,1099.3,650.318,1099.235,651.256Z"
                          transform="translate(-1072.82 -624.695)"
                          fill="#7c7e81"
                        />
                        <path
                          id="Path_23"
                          data-name="Path 23"
                          d="M766.519,572.751c-.342.02-.438.227-.438.536.005,1.4,0,2.8,0,4.207a2.685,2.685,0,0,1-.511-.949c-.073-1.043-.019-2.086-.035-3.13a1.247,1.247,0,0,1,.575-1,.257.257,0,0,1,.334-.028Z"
                          transform="translate(-764.331 -554.387)"
                          fill="#f2f2f3"
                        />
                        <path
                          id="Path_24"
                          data-name="Path 24"
                          d="M1109.969,641.791a.807.807,0,0,1-.085-.421q.006-1.327,0-2.655l.506-.745a5.011,5.011,0,0,1,.073,1.369c.013.485,0,.968.005,1.453,0,.12-.061.282.141.319A3.792,3.792,0,0,1,1109.969,641.791Z"
                          transform="translate(-1083.554 -615.23)"
                          fill="#7a7c7e"
                        />
                        <path
                          id="Path_25"
                          data-name="Path 25"
                          d="M782.865,607.677a2.775,2.775,0,0,1-.438-.584c-.091-1.289-.032-2.58-.028-3.868,0-.133-.016-.347.245-.287.037.409.331.714.438,1.095-.093.16-.026.331-.028.5-.01.88,0,1.76-.008,2.64C783.045,607.354,783.078,607.565,782.865,607.677Z"
                          transform="translate(-779.947 -582.746)"
                          fill="#ebebec"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M760.882,570a1.123,1.123,0,0,0-.8.944c0,.919,0,1.837,0,2.756a.812.812,0,0,1-.073.458,3.8,3.8,0,0,1-.438-1.095c-.06-.748-.037-1.5-.025-2.246a1.193,1.193,0,0,1,1.265-1.037Z"
                          transform="translate(-758.767 -552.005)"
                          fill="#f4f5f5"
                        />
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M1084.33,668.147l.568-.557a.48.48,0,0,1,.18.417,14.316,14.316,0,0,1-.037,2.238,1.645,1.645,0,0,1-.548.449c-.168.073-.244-.042-.251-.167a12.108,12.108,0,0,1,.019-2.253.3.3,0,0,1,.069-.127Z"
                          transform="translate(-1059.744 -642.689)"
                          fill="#808284"
                        />
                        <path
                          id="Path_28"
                          data-name="Path 28"
                          d="M778.7,590.012c-.219.047-.14.228-.141.355-.006,1.114,0,2.229,0,3.343a.809.809,0,0,1-.073.459l-.365-.584c.12-.107.073-.25.073-.377,0-1.241,0-2.481,0-3.717,0-.182-.018-.365.146-.5Q778.518,589.5,778.7,590.012Z"
                          transform="translate(-776.002 -569.825)"
                          fill="#ededee"
                        />
                        <path
                          id="Path_29"
                          data-name="Path 29"
                          d="M1106.85,389.765a15.832,15.832,0,0,0,.077-2.461.941.941,0,0,1,.084-.494,3.035,3.035,0,0,1,.584.6c-.19.082-.156.252-.156.4v2.247a.78.78,0,0,1-.073.421Z"
                          transform="translate(-1080.743 -382.398)"
                          fill="#7b7c7f"
                        />
                        <path
                          id="Path_30"
                          data-name="Path 30"
                          d="M1018.44,711.422l.73-.282a1.045,1.045,0,0,1,.109.591q.007.611,0,1.221a.543.543,0,0,1-.107.371,2.508,2.508,0,0,1-.73.232.3.3,0,0,1-.1-.219,16.661,16.661,0,0,1,0-1.686A.375.375,0,0,1,1018.44,711.422Z"
                          transform="translate(-998.671 -683.061)"
                          fill="#929497"
                        />
                        <path
                          id="Path_31"
                          data-name="Path 31"
                          d="M793.809,631.854c-.172-.146-.375-.268-.438-.511a7.287,7.287,0,0,1-.036-1.335c-.011-.555-.017-1.111.007-1.665.006-.151-.052-.395.25-.359l.438.73a8.977,8.977,0,0,0-.029,1.23c-.009.5.008,1-.008,1.494C793.988,631.591,794.05,631.8,793.809,631.854Z"
                          transform="translate(-790.094 -605.971)"
                          fill="#e6e7e8"
                        />
                        <path
                          id="Path_32"
                          data-name="Path 32"
                          d="M1048.624,347a1.774,1.774,0,0,1,.579.292,15.485,15.485,0,0,1,0,2.422l-.73-.438a.534.534,0,0,1-.108-.339c-.005-.511-.015-1.016.006-1.523C1048.374,347.239,1048.382,347.042,1048.624,347Z"
                          transform="translate(-1026.516 -345.493)"
                          fill="#8a8c8e"
                        />
                        <path
                          id="Path_33"
                          data-name="Path 33"
                          d="M990.576,329a2.243,2.243,0,0,1,.807.146,11.367,11.367,0,0,0-.055,1.727.851.851,0,0,1-.038.39l-.73-.15a.366.366,0,0,1-.179-.37c-.012-.471-.015-.944,0-1.415C990.388,329.195,990.362,329.018,990.576,329Z"
                          transform="translate(-972.763 -328.807)"
                          fill="#9b9da0"
                        />
                        <path
                          id="Path_34"
                          data-name="Path 34"
                          d="M810.876,657.31a1.093,1.093,0,0,1-.506-.444.641.641,0,0,1-.047-.387c.017-.674-.005-1.348.013-2.021,0-.181-.025-.405.253-.438l.506.584c-.063.73-.011,1.465-.033,2.2C811.056,656.987,811.095,657.2,810.876,657.31Z"
                          transform="translate(-805.847 -630.109)"
                          fill="#dfe0e1"
                        />
                        <path
                          id="Path_35"
                          data-name="Path 35"
                          d="M1049.417,696.495l.584-.355c.207.1.172.3.178.477.018.593-.028,1.186.041,1.777a2.635,2.635,0,0,1-.725.365c-.156,0-.17-.128-.175-.228a15.886,15.886,0,0,1,0-1.846A.36.36,0,0,1,1049.417,696.495Z"
                          transform="translate(-1027.385 -669.155)"
                          fill="#898b8e"
                        />
                        <path
                          id="Path_36"
                          data-name="Path 36"
                          d="M1064.383,355a2.016,2.016,0,0,1,.58.352,20.124,20.124,0,0,1,.011,2.317.258.258,0,0,1-.1.19l-.666-.484a7.059,7.059,0,0,1-.028-1.254,5.784,5.784,0,0,1,.006-.794C1064.2,355.195,1064.171,355.02,1064.383,355Z"
                          transform="translate(-1041.174 -352.91)"
                          fill="#85878a"
                        />
                        <path
                          id="Path_37"
                          data-name="Path 37"
                          d="M800,641.179c.123-.1.073-.247.073-.374,0-.8,0-1.592,0-2.388,0-.146-.026-.3.146-.377l.438.657c-.067.824-.012,1.65-.035,2.475,0,.187.036.4-.181.515C800.266,641.54,800.065,641.42,800,641.179Z"
                          transform="translate(-796.285 -615.295)"
                          fill="#e3e4e5"
                        />
                        <path
                          id="Path_38"
                          data-name="Path 38"
                          d="M838.7,682.94a2.084,2.084,0,0,1,.5.373,15.813,15.813,0,0,1,.028,2.11.291.291,0,0,1-.172.3l-.511-.3a.7.7,0,0,1-.113-.41c0-.528-.012-1.057.006-1.586C838.442,683.228,838.42,683,838.7,682.94Z"
                          transform="translate(-831.905 -656.919)"
                          fill="#d3d5d6"
                        />
                        <path
                          id="Path_39"
                          data-name="Path 39"
                          d="M964.456,724.125a2.408,2.408,0,0,1,.73-.055.4.4,0,0,1,.107.3q.02.72,0,1.44a.473.473,0,0,1-.106.3h0c-.829.118-.852.1-.852-.707v-.9A.566.566,0,0,1,964.456,724.125Z"
                          transform="translate(-948.627 -695.041)"
                          fill="#a4a6a8"
                        />
                        <path
                          id="Path_40"
                          data-name="Path 40"
                          d="M847,690.417a6.359,6.359,0,0,0,.073-1.481c.027-.309-.079-.628.068-.927a3,3,0,0,1,.593.431,16.249,16.249,0,0,1,.017,1.949.462.462,0,0,1-.169.384A2.015,2.015,0,0,1,847,690.417Z"
                          transform="translate(-839.855 -661.619)"
                          fill="#d0d2d4"
                        />
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M822.052,670.054c-.219-.054-.334-.255-.506-.376a.687.687,0,0,1-.114-.376c0-.641-.012-1.281.005-1.921,0-.173-.005-.381.257-.4a2.535,2.535,0,0,1,.511.511c-.073.683-.021,1.367-.039,2.051C822.162,669.719,822.2,669.908,822.052,670.054Z"
                          transform="translate(-816.147 -642.123)"
                          fill="#dadcdd"
                        />
                        <path
                          id="Path_42"
                          data-name="Path 42"
                          d="M749.528,565.753a9.711,9.711,0,0,1-.43-1.817c-.049-.209.136-.333.263-.446a2.382,2.382,0,0,1,1.477-.511c.211-.013.268.122.292.292a1.888,1.888,0,0,1-.679.247.907.907,0,0,0-.75,1.014c-.007.292.009.584-.007.876C749.69,565.542,749.733,565.714,749.528,565.753Z"
                          transform="translate(-749.09 -545.711)"
                          fill="#fafafa"
                        />
                        <path
                          id="Path_43"
                          data-name="Path 43"
                          d="M1063.425,687.451l.511-.371a.346.346,0,0,1,.164.306,11.779,11.779,0,0,1-.039,2.092,1.131,1.131,0,0,1-.479.3c-.18.007-.23-.135-.24-.26a10.622,10.622,0,0,1,0-1.908.388.388,0,0,1,.079-.162Z"
                          transform="translate(-1040.372 -660.757)"
                          fill="#86888a"
                        />
                        <path
                          id="Path_44"
                          data-name="Path 44"
                          d="M789.7,618.758c-.219.047-.141.227-.142.355-.007.86,0,1.721,0,2.582a.768.768,0,0,1-.073.422.9.9,0,0,1-.365-.438.805.805,0,0,0,.073-.456V618.44c0-.151-.043-.323.146-.41Z"
                          transform="translate(-786.199 -596.745)"
                          fill="#e8e9ea"
                        />
                        <path
                          id="Path_45"
                          data-name="Path 45"
                          d="M1009.9,715v2.133a1.078,1.078,0,0,1-.5.135.15.15,0,0,1-.233-.136,4.831,4.831,0,0,1,.073-1.924A2.4,2.4,0,0,1,1009.9,715Z"
                          transform="translate(-990.13 -686.639)"
                          fill="#95979a"
                        />
                        <path
                          id="Path_46"
                          data-name="Path 46"
                          d="M755.09,569.49a1.66,1.66,0,0,0,.066-.88c-.043-1.224.292-1.4,1.539-1.6v.219a1.9,1.9,0,0,0-1.072.63.531.531,0,0,0-.1.415q0,.93,0,1.86c0,.128.049.271-.073.378A4.016,4.016,0,0,1,755.09,569.49Z"
                          transform="translate(-754.652 -549.449)"
                          fill="#f7f7f7"
                        />
                        <path
                          id="Path_47"
                          data-name="Path 47"
                          d="M1001.957,333.116a9.849,9.849,0,0,1-.061-1.989c0-.088.082-.109.154-.127a1.569,1.569,0,0,1,.651.146,9.711,9.711,0,0,0-.052,1.419.948.948,0,0,1-.18.687Z"
                          transform="translate(-983.428 -330.661)"
                          fill="#989a9d"
                        />
                        <path
                          id="Path_48"
                          data-name="Path 48"
                          d="M1041.191,343.255a.513.513,0,0,0-.153.46v1.813a2.4,2.4,0,0,1-.584-.3.4.4,0,0,1-.1-.265c-.017-.556-.019-1.113,0-1.669a.329.329,0,0,1,.179-.331A2.067,2.067,0,0,1,1041.191,343.255Z"
                          transform="translate(-1019.083 -341.748)"
                          fill="#8c8e91"
                        />
                        <path
                          id="Path_49"
                          data-name="Path 49"
                          d="M956.215,724.92c0,.531.015,1.062-.006,1.592-.012.292.073.429.38.387a2.493,2.493,0,0,1,.365,0,5.319,5.319,0,0,1-1.391.056.4.4,0,0,1-.109-.3q-.02-.719,0-1.438a.453.453,0,0,1,.1-.295Z"
                          transform="translate(-940.387 -695.835)"
                          fill="#a7a9ac"
                        />
                        <path
                          id="Path_50"
                          data-name="Path 50"
                          d="M1077.929,675.22v2.244c0,.129-.029.278.166.3a1.945,1.945,0,0,1-.62.424c-.115-.005-.142-.1-.146-.177a15.494,15.494,0,0,1,.015-2.278Z"
                          transform="translate(-1053.343 -649.762)"
                          fill="#828487"
                        />
                        <path
                          id="Path_51"
                          data-name="Path 51"
                          d="M1079.031,364.1a.887.887,0,0,0-.081.494v1.71a.731.731,0,0,1-.082.385l-.43-.38a.827.827,0,0,1-.115-.452c0-.535-.007-1.069,0-1.605a.55.55,0,0,1,.192-.523C1078.652,363.909,1078.912,363.908,1079.031,364.1Z"
                          transform="translate(-1054.296 -361.003)"
                          fill="#828486"
                        />
                        <path
                          id="Path_52"
                          data-name="Path 52"
                          d="M866.392,700.81a1.882,1.882,0,0,1,.584.3.758.758,0,0,1,.112.416c0,.46.007.922,0,1.386a.472.472,0,0,1-.18.452l-.584-.279a2.736,2.736,0,0,1-.037-.929c-.019-.325-.01-.652,0-.978A.45.45,0,0,1,866.392,700.81Z"
                          transform="translate(-857.708 -673.485)"
                          fill="#c8cacc"
                        />
                        <path
                          id="Path_53"
                          data-name="Path 53"
                          d="M1033.075,340.15A1.872,1.872,0,0,0,1033,341c-.012.47,0,.941,0,1.411l-.657-.3a12.647,12.647,0,0,1-.027-1.945c0-.109.012-.253.19-.245C1032.672,340.065,1032.924,339.979,1033.075,340.15Z"
                          transform="translate(-1011.627 -338.935)"
                          fill="#8e9093"
                        />
                        <path
                          id="Path_54"
                          data-name="Path 54"
                          d="M875.06,707.22a9.381,9.381,0,0,0,.073-1.776c.008-.158,0-.316,0-.474a3.725,3.725,0,0,1,.745.358,12.524,12.524,0,0,0-.055,1.638c-.007.176.03.375-.177.48Z"
                          transform="translate(-865.867 -677.341)"
                          fill="#c5c7c9"
                        />
                        <path
                          id="Path_55"
                          data-name="Path 55"
                          d="M1041.788,701v1.892c0,.128-.049.271.073.375a1.186,1.186,0,0,1-.495.223c-.136.061-.231-.011-.238-.128a5.275,5.275,0,0,1,.073-2.056Z"
                          transform="translate(-1019.757 -673.661)"
                          fill="#8c8e91"
                        />
                        <path
                          id="Path_56"
                          data-name="Path 56"
                          d="M1025.149,337.26c-.137.094-.09.238-.092.365,0,.481,0,.962,0,1.442a.644.644,0,0,1-.073.384l-.511-.212a.526.526,0,0,1-.113-.371c-.006-.482-.012-.964,0-1.446.005-.142-.039-.332.188-.371A1.578,1.578,0,0,1,1025.149,337.26Z"
                          transform="translate(-1004.266 -336.27)"
                          fill="#919396"
                        />
                        <path
                          id="Path_57"
                          data-name="Path 57"
                          d="M1017.106,334.824c-.125.1-.073.247-.073.374-.005.6,0,1.21,0,1.815l-.657-.226a10.037,10.037,0,0,1-.01-1.948c.007-.128.085-.232.25-.165A1.022,1.022,0,0,1,1017.106,334.824Z"
                          transform="translate(-996.822 -334.047)"
                          fill="#939598"
                        />
                        <path
                          id="Path_58"
                          data-name="Path 58"
                          d="M894.192,336.208a1.849,1.849,0,0,1-.657.219c-.135.006-.163-.1-.169-.191a11.178,11.178,0,0,1,.01-1.829.394.394,0,0,1,.081-.159,2.123,2.123,0,0,1,.584-.158c.136.137.1.315.109.481C894.165,335.118,894.124,335.665,894.192,336.208Z"
                          transform="translate(-882.808 -333.525)"
                          fill="#bec0c2"
                        />
                        <path
                          id="Path_59"
                          data-name="Path 59"
                          d="M883.07,712.007a9.39,9.39,0,0,0,.073-1.771c.01-.134-.057-.308.162-.346a1.616,1.616,0,0,1,.574.226,13.158,13.158,0,0,0-.045,1.583c-.006.193,0,.39-.179.523Z"
                          transform="translate(-873.293 -681.902)"
                          fill="#c2c4c6"
                        />
                        <path
                          id="Path_60"
                          data-name="Path 60"
                          d="M923.5,328.142a1.427,1.427,0,0,1,.584-.08.621.621,0,0,1,.108.444c0,.324.009.649,0,.973a.869.869,0,0,0,.2.632,4.283,4.283,0,0,1-.891.146.31.31,0,0,1-.1-.225q-.039-.83,0-1.662a.341.341,0,0,1,.1-.228Z"
                          transform="translate(-910.661 -327.934)"
                          fill="#b2b4b7"
                        />
                        <path
                          id="Path_61"
                          data-name="Path 61"
                          d="M910.15,332.36a1.427,1.427,0,0,1-.587.146c-.158,0-.169-.131-.171-.23a11.8,11.8,0,0,1,.025-1.88,2.69,2.69,0,0,1,.652-.146,1.108,1.108,0,0,1,.107.632A13.506,13.506,0,0,1,910.15,332.36Z"
                          transform="translate(-897.67 -329.966)"
                          fill="#b8babc"
                        />
                        <path
                          id="Path_62"
                          data-name="Path 62"
                          d="M903.489,332.21a8.539,8.539,0,0,1,.073,1.661c.012.151-.061.318.073.449a1.2,1.2,0,0,1-.511.146c-.2-.031-.146-.189-.146-.312v-1.8Z"
                          transform="translate(-891.742 -331.783)"
                          fill="#bbbdbf"
                        />
                        <path
                          id="Path_63"
                          data-name="Path 63"
                          d="M940.5,724.035a2.5,2.5,0,0,1,.817.061,4.246,4.246,0,0,0-.112,1.7c0,.167.23.173.239.335a3.284,3.284,0,0,1-.944-.061.438.438,0,0,1-.109-.3q-.018-.72,0-1.44A.426.426,0,0,1,940.5,724.035Z"
                          transform="translate(-926.426 -695.012)"
                          fill="#acaeb1"
                        />
                        <path
                          id="Path_64"
                          data-name="Path 64"
                          d="M909.049,720.78a1.662,1.662,0,0,1-.584-.135.446.446,0,0,1-.109-.3c-.012-.485-.021-.971,0-1.459.01-.187.045-.387.326-.285a1.771,1.771,0,0,1,.591.146,4.354,4.354,0,0,0-.121,1.489C909.148,720.42,909.195,720.619,909.049,720.78Z"
                          transform="translate(-896.723 -689.949)"
                          fill="#b8babd"
                        />
                        <path
                          id="Path_65"
                          data-name="Path 65"
                          d="M1001.965,717.85c0,.584,0,1.168.005,1.751,0,.127-.042.282.158.312a1.559,1.559,0,0,1-.657.15c-.155.008-.176-.117-.182-.219a11.944,11.944,0,0,1,0-1.648.353.353,0,0,1,.1-.189A1.641,1.641,0,0,1,1001.965,717.85Z"
                          transform="translate(-982.858 -689.281)"
                          fill="#989a9d"
                        />
                        <path
                          id="Path_66"
                          data-name="Path 66"
                          d="M1059.383,351.32c-.139.111-.073.266-.085.4a10,10,0,0,1-.086,1.97l-.355-.242a6.818,6.818,0,0,1-.066-1.644,1.412,1.412,0,0,1,.073-.778A1.948,1.948,0,0,1,1059.383,351.32Z"
                          transform="translate(-1036.175 -349.229)"
                          fill="#888a8c"
                        />
                        <path
                          id="Path_67"
                          data-name="Path 67"
                          d="M984.573,328.082c-.029.05-.083.1-.08.15a10.246,10.246,0,0,0,.063,1.962l-.438-.073c-.126-.073-.229-.134-.223-.321.018-.506.007-1.013.006-1.519,0-.124-.007-.25.161-.271A1,1,0,0,1,984.573,328.082Z"
                          transform="translate(-966.761 -327.889)"
                          fill="#9ea0a3"
                        />
                        <path
                          id="Path_68"
                          data-name="Path 68"
                          d="M925.077,724.035a1.389,1.389,0,0,1-.584-.08.468.468,0,0,1-.109-.3q-.02-.73,0-1.454a.39.39,0,0,1,.11-.3,1.7,1.7,0,0,1,.584.086.669.669,0,0,1,.112.376c0,.447.009.893,0,1.339A.441.441,0,0,1,925.077,724.035Z"
                          transform="translate(-911.584 -693.036)"
                          fill="#b2b4b6"
                        />
                        <path
                          id="Path_69"
                          data-name="Path 69"
                          d="M918.581,720.983v2.054a1.96,1.96,0,0,1-.584-.088v-1.605c0-.181-.015-.377.228-.433C918.349,720.924,918.479,720.89,918.581,720.983Z"
                          transform="translate(-905.672 -692.118)"
                          fill="#b5b7b9"
                        />
                        <path
                          id="Path_70"
                          data-name="Path 70"
                          d="M934,725.138V723.09c.182.123.393.014.584.073V725.2A1.267,1.267,0,0,1,934,725.138Z"
                          transform="translate(-920.506 -694.139)"
                          fill="#afb1b4"
                        />
                        <path
                          id="Path_71"
                          data-name="Path 71"
                          d="M873.214,343.475l-.657.3a.3.3,0,0,1-.178-.292c-.029-.568-.022-1.136,0-1.7a.517.517,0,0,1,.1-.267l.511-.215a.572.572,0,0,1,.106.446q.009.6,0,1.2a1.65,1.65,0,0,0,.119.528Z"
                          transform="translate(-863.364 -340.209)"
                          fill="#c6c8ca"
                        />
                        <path
                          id="Path_72"
                          data-name="Path 72"
                          d="M806.07,649.992a.756.756,0,0,0,.073-.423v-2.189c0-.146-.028-.3.146-.379l.365.511c-.171.079-.146.234-.146.378,0,.631,0,1.263,0,1.9a1.936,1.936,0,0,1-.073.572A1.131,1.131,0,0,1,806.07,649.992Z"
                          transform="translate(-801.912 -623.601)"
                          fill="#e2e3e4"
                        />
                        <path
                          id="Path_73"
                          data-name="Path 73"
                          d="M829.976,676.553c0-.749,0-1.5,0-2.249,0-.122-.052-.282.146-.314a.866.866,0,0,1,.292.285.881.881,0,0,1,.112.451c0,.531.005,1.062,0,1.592a.559.559,0,0,1-.185.521A.747.747,0,0,1,829.976,676.553Z"
                          transform="translate(-824.071 -648.622)"
                          fill="#d8d9da"
                        />
                        <path
                          id="Path_74"
                          data-name="Path 74"
                          d="M1074.487,360.1a8.325,8.325,0,0,0-.079,1.813c-.012.255,0,.511,0,.766l-.438-.36v-2.053a.843.843,0,0,1,.084-.453A1.348,1.348,0,0,1,1074.487,360.1Z"
                          transform="translate(-1050.262 -357.369)"
                          fill="#838588"
                        />
                        <path
                          id="Path_75"
                          data-name="Path 75"
                          d="M886.689,336.28v1.807c0,.127-.047.269.073.373a1.788,1.788,0,0,1-.584.228c-.022-.043-.013.02-.023-.027a4.742,4.742,0,0,1,.016-2.189Z"
                          transform="translate(-876.041 -335.556)"
                          fill="#c1c3c5"
                        />
                        <path
                          id="Path_76"
                          data-name="Path 76"
                          d="M1030,710.542v-2.183l.511-.219a.371.371,0,0,1,.1.3c0,.63.038,1.26-.023,1.888A2.068,2.068,0,0,1,1030,710.542Z"
                          transform="translate(-1009.501 -680.28)"
                          fill="#909294"
                        />
                        <path
                          id="Path_77"
                          data-name="Path 77"
                          d="M881.595,338.94q0,1.107.007,2.214a.482.482,0,0,1-.292.133c-.219-.018-.223-.175-.219-.34v-1.836A1.39,1.39,0,0,1,881.595,338.94Z"
                          transform="translate(-871.458 -338.022)"
                          fill="#c3c5c7"
                        />
                        <path
                          id="Path_78"
                          data-name="Path 78"
                          d="M1010.731,333.174c-.219.032-.159.205-.167.341a9.468,9.468,0,0,1-.073,1.772l-.511-.151a10.572,10.572,0,0,0,.073-1.8c0-.126-.037-.279.159-.308A1.109,1.109,0,0,1,1010.731,333.174Z"
                          transform="translate(-990.942 -332.543)"
                          fill="#96989a"
                        />
                        <path
                          id="Path_79"
                          data-name="Path 79"
                          d="M1072.512,682.28a6.4,6.4,0,0,1,.073,1.428,3.548,3.548,0,0,0,.056,1.028c-.091.182-.292.195-.438.292a10.8,10.8,0,0,1-.05-1.758,2.267,2.267,0,0,0-.073-.64Z"
                          transform="translate(-1048.51 -656.307)"
                          fill="#848688"
                        />
                        <path
                          id="Path_80"
                          data-name="Path 80"
                          d="M902.209,717.041c-.211-.016-.225.117-.223.278,0,.588,0,1.177,0,1.766a1.5,1.5,0,0,1-.519-.125.89.89,0,0,1-.106-.558c0-.386-.018-.772.01-1.157.014-.188.033-.405.325-.349A1.236,1.236,0,0,1,902.209,717.041Z"
                          transform="translate(-890.244 -688.388)"
                          fill="#bbbdbf"
                        />
                        <path
                          id="Path_81"
                          data-name="Path 81"
                          d="M1093.932,664.082c-.121-.219-.044-.449-.056-.673a10.993,10.993,0,0,0-.086-1.982,2.458,2.458,0,0,1,.445-.487v2.3a.616.616,0,0,0,.129.471C1094.3,663.93,1094.036,663.909,1093.932,664.082Z"
                          transform="translate(-1068.636 -636.524)"
                          fill="#7e8083"
                        />
                        <path
                          id="Path_82"
                          data-name="Path 82"
                          d="M855.05,696.283a11.772,11.772,0,0,0,.073-1.957c.006-.128-.047-.271.078-.376.146.1.336.129.442.292.06.676.022,1.352.022,2.029a.373.373,0,0,1-.105.3Z"
                          transform="translate(-847.318 -667.125)"
                          fill="#cdcfd1"
                        />
                        <path
                          id="Path_83"
                          data-name="Path 83"
                          d="M976,725.27v-2.037l.652-.073c-.051.493-.031.988-.039,1.483a1.058,1.058,0,0,0,.131.556A1.969,1.969,0,0,1,976,725.27Z"
                          transform="translate(-959.442 -694.204)"
                          fill="#a1a3a5"
                        />
                        <path
                          id="Path_84"
                          data-name="Path 84"
                          d="M983.215,724.318c-.131-.006-.236-.03-.235-.2q.007-.8,0-1.6c0-.118.082-.166.146-.237l.438-.069a9.846,9.846,0,0,1,.034,1.445,1.135,1.135,0,0,0,.134.592A1.049,1.049,0,0,1,983.215,724.318Z"
                          transform="translate(-965.912 -693.323)"
                          fill="#9fa1a3"
                        />
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M994.918,719.964v1.691c0,.126-.045.269.087.365a.592.592,0,0,1-.365.073c-.2.073-.283-.073-.3-.213a6.954,6.954,0,0,1-.012-1.633.245.245,0,0,1,.151-.193A1.008,1.008,0,0,1,994.918,719.964Z"
                          transform="translate(-976.39 -691.238)"
                          fill="#9a9c9f"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M861.942,700.237v-1.956c0-.127-.047-.27.082-.371.1.1.284.063.358.212,0,.568-.007,1.137,0,1.705a1.942,1.942,0,0,1-.073.57A.884.884,0,0,1,861.942,700.237Z"
                          transform="translate(-853.699 -670.796)"
                          fill="#cbcdcf"
                        />
                        <path
                          id="Path_87"
                          data-name="Path 87"
                          d="M950.308,726.943c-.338-.035-.387-.244-.365-.542.026-.406.013-.816,0-1.224,0-.176.044-.28.236-.271l.27.007v2.033Z"
                          transform="translate(-935.282 -695.82)"
                          fill="#aaacae"
                        />
                        <path
                          id="Path_88"
                          data-name="Path 88"
                          d="M1036.967,707.59c-.129-.1-.079-.245-.081-.371,0-.6,0-1.21,0-1.816l.438-.213v1.845c0,.134-.053.307.166.339A1.659,1.659,0,0,1,1036.967,707.59Z"
                          transform="translate(-1015.877 -677.545)"
                          fill="#8e9092"
                        />
                        <path
                          id="Path_89"
                          data-name="Path 89"
                          d="M891.05,715.085a9.516,9.516,0,0,0,.073-1.759c.009-.129-.073-.307.151-.347l.372.136a7.368,7.368,0,0,1-.088,2.122Z"
                          transform="translate(-880.691 -684.767)"
                          fill="#bfc1c3"
                        />
                        <path
                          id="Path_90"
                          data-name="Path 90"
                          d="M919.044,331.324c-.117-.091-.077-.219-.078-.338,0-.591,0-1.182,0-1.773a1,1,0,0,1,.438-.073v2.116C919.3,331.345,919.167,331.312,919.044,331.324Z"
                          transform="translate(-906.564 -328.93)"
                          fill="#b5b7ba"
                        />
                        <path
                          id="Path_91"
                          data-name="Path 91"
                          d="M866.754,344.22v1.845a.76.76,0,0,0,.08.42l-.137.069a.316.316,0,0,1-.383-.253,3.384,3.384,0,0,1,.005-1.871Z"
                          transform="translate(-857.639 -342.916)"
                          fill="#c8cacc"
                        />
                        <path
                          id="Path_92"
                          data-name="Path 92"
                          d="M990.379,721.15a7.28,7.28,0,0,0-.048,1.829.219.219,0,0,0,.213.209.754.754,0,0,1-.438.073c-.106-.015-.24-.007-.233-.163a9.506,9.506,0,0,1,.065-1.873Z"
                          transform="translate(-972.288 -692.34)"
                          fill="#9c9ea1"
                        />
                        <path
                          id="Path_93"
                          data-name="Path 93"
                          d="M933.279,329.276c-.233.006-.316-.111-.312-.339.01-.57,0-1.141,0-1.711a.979.979,0,0,1,.438-.061v2.1Z"
                          transform="translate(-919.549 -327.098)"
                          fill="#b0b2b4"
                        />
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M1059.438,692.16v1.877a.489.489,0,0,0,.159.454.863.863,0,0,1-.378.212c-.2-.033-.146-.193-.146-.315,0-.506,0-1.012,0-1.519a.706.706,0,0,0-.073-.42Z"
                          transform="translate(-1036.385 -665.466)"
                          fill="#87898c"
                        />
                        <path
                          id="Path_95"
                          data-name="Path 95"
                          d="M818.519,662.393c-.171.077-.15.23-.15.375v2.324a1.164,1.164,0,0,1-.369-.357.807.807,0,0,0,.077-.458c0-.642,0-1.284,0-1.926,0-.12-.063-.282.139-.321Z"
                          transform="translate(-812.971 -637.534)"
                          fill="#dddedf"
                        />
                        <path
                          id="Path_96"
                          data-name="Path 96"
                          d="M860.567,347.11v1.484a.624.624,0,0,0,.378.639.633.633,0,0,1-.376.215,1.2,1.2,0,0,1-.369-.755c-.091-.325-.1-.667-.2-.991a.313.313,0,0,1,.125-.381.971.971,0,0,1,.441-.211Z"
                          transform="translate(-851.886 -345.595)"
                          fill="#cbccce"
                        />
                        <path
                          id="Path_97"
                          data-name="Path 97"
                          d="M835.05,680.424a8.47,8.47,0,0,0,.073-1.73c.012-.277,0-.556.005-.834a1.1,1.1,0,0,1,.438.369.514.514,0,0,0-.154.458v2.019Z"
                          transform="translate(-828.777 -652.209)"
                          fill="#d6d7d9"
                        />
                        <path
                          id="Path_98"
                          data-name="Path 98"
                          d="M897.99,716.981v-1.935a.208.208,0,0,1,.086-.187,1.327,1.327,0,0,1,.5.156c-.219.019-.219.177-.219.34,0,.575-.005,1.149-.008,1.724Z"
                          transform="translate(-887.124 -686.509)"
                          fill="#bdbfc1"
                        />
                        <path
                          id="Path_99"
                          data-name="Path 99"
                          d="M838.129,363.987l-.292.219a.146.146,0,0,1-.194-.115c-.17-.56-.532-1.029-.737-1.572a.272.272,0,0,1-.018-.211l.292-.219a3.238,3.238,0,0,1,.471.885C837.76,363.336,838.058,363.609,838.129,363.987Z"
                          transform="translate(-830.469 -359.482)"
                          fill="#ebeced"
                        />
                        <path
                          id="Path_100"
                          data-name="Path 100"
                          d="M842.009,362.152a1.773,1.773,0,0,1-.474-.787,5.378,5.378,0,0,1-.474-1.109l.219-.146c.3.205.365.563.519.852a4.947,4.947,0,0,1,.425,1.037C842.177,362.09,842.084,362.108,842.009,362.152Z"
                          transform="translate(-834.349 -357.647)"
                          fill="#e5e6e7"
                        />
                        <path
                          id="Path_101"
                          data-name="Path 101"
                          d="M855.511,350c-.155.392.109.738.126,1.115a3.055,3.055,0,0,0,.316,1.013l-.139.073c-.13.034-.178-.068-.212-.15a10,10,0,0,1-.6-1.759Z"
                          transform="translate(-847.271 -348.275)"
                          fill="#cecfd1"
                        />
                        <path
                          id="Path_102"
                          data-name="Path 102"
                          d="M830.751,370.914c-.193.215-.287.2-.392-.1a6.457,6.457,0,0,0-.716-1.261c-.128-.2-.155-.35.086-.466A4.962,4.962,0,0,1,830.751,370.914Z"
                          transform="translate(-823.675 -365.971)"
                          fill="#f9fafa"
                        />
                        <path
                          id="Path_103"
                          data-name="Path 103"
                          d="M845.041,360.182a.689.689,0,0,1-.269-.445c-.171-.511-.477-.949-.673-1.445l.219-.142a5.178,5.178,0,0,1,.868,1.725.238.238,0,0,1-.069.234Z"
                          transform="translate(-837.167 -355.83)"
                          fill="#dedfe0"
                        />
                        <path
                          id="Path_104"
                          data-name="Path 104"
                          d="M834.131,365.08a11.813,11.813,0,0,1,.842,1.805c.01.037.073.061.107.092l-.219.146c-.207-.1-.169-.331-.262-.493-.19-.333-.348-.684-.564-1a.478.478,0,0,1-.122-.4Z"
                          transform="translate(-827.712 -362.254)"
                          fill="#f1f1f2"
                        />
                        <path
                          id="Path_105"
                          data-name="Path 105"
                          d="M850.315,356.866a.446.446,0,0,1-.284.152c-.1.02-.116-.049-.146-.117a6.963,6.963,0,0,0-.62-1.362.352.352,0,0,1-.049-.433.273.273,0,0,1,.219-.146c.2.15.219.389.3.6A8.356,8.356,0,0,0,850.315,356.866Z"
                          transform="translate(-841.856 -352.873)"
                          fill="#d4d6d7"
                        />
                        <path
                          id="Path_106"
                          data-name="Path 106"
                          d="M853.866,355.985c-.15,0-.214-.107-.252-.224-.184-.569-.478-1.095-.624-1.678l.146-.073c.267.258.228.638.379.941a3.6,3.6,0,0,0,.438.971Z"
                          transform="translate(-845.408 -351.992)"
                          fill="#d1d2d4"
                        />
                        <path
                          id="Path_107"
                          data-name="Path 107"
                          d="M832.206,367.09a8.84,8.84,0,0,1,.949,1.9l-.073.073-1.022-1.824A.252.252,0,0,1,832.206,367.09Z"
                          transform="translate(-826.005 -364.117)"
                          fill="#f5f6f6"
                        />
                        <path
                          id="Path_108"
                          data-name="Path 108"
                          d="M847.33,357a.482.482,0,0,0,.084.309,8.225,8.225,0,0,1,.73,1.605.235.235,0,0,1-.225.137,3.484,3.484,0,0,0-.566-1.444c-.1-.169-.146-.348-.233-.515Z"
                          transform="translate(-839.966 -354.764)"
                          fill="#d9dadb"
                        />
                      </g>
                    </svg>
                  )}
                  {!message && !loading && "Enroll now"}
                  {message && message}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modal && <SizingChart handleModal={handleModal} />}
    </section>
  );
};

export default CourseProduct;
