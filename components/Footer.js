import React from "react";

const Footer = () => (
  <footer className="px-4 py-8 bg-gray-500 flex justify-between md:px-20 lg:px-40">
    <form className="flex flex-col w-1/2">
      <h5 className="text-white text-sm w-max mb-3">
        Subscribe to our newsletter
      </h5>
      <div className="flex">
        <input
          className="w-full  p-1 border-t mr-0 border-b border-l text-grey-400 border-white bg-gray-500 focus:bg-white lg:w-1/3"
          placeholder="Email Address"
        />
        <button className="px-4  bg-gray-100 text-black p-2 uppercase border-white border-t border-b border-r">
          OK
        </button>
      </div>
      <p className="text-sm text-white mt-3">© 2021 ECJJA</p>
    </form>
    <ul className="flex flex-col justify-around">
      <a href="mailto:info@ecjja.com" target="_blank">
        <li className="text-white flex text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.213"
            height="11.41"
            viewBox="0 0 15.213 11.41"
          >
            <path
              id="envelope-regular_1_"
              data-name="envelope-regular (1)"
              d="M1.426,64h12.36a1.426,1.426,0,0,1,1.426,1.426v8.557a1.426,1.426,0,0,1-1.426,1.426H1.426A1.426,1.426,0,0,1,0,73.983V65.426A1.426,1.426,0,0,1,1.426,64Zm0,1.426v1.212c.666.543,1.728,1.386,4,3.164.5.394,1.492,1.339,2.181,1.328.69.011,1.681-.935,2.181-1.328,2.27-1.778,3.333-2.621,4-3.164V65.426Zm12.36,8.557V68.469c-.681.542-1.646,1.3-3.118,2.456-.649.511-1.787,1.64-3.062,1.633s-2.392-1.105-3.062-1.633c-1.472-1.152-2.437-1.914-3.118-2.456v5.515Z"
              transform="translate(0 -64)"
              fill="#fff"
            />
          </svg>

          <span className="ml-3">Email Us</span>
        </li>
      </a>
      <a href="https://goo.gl/maps/74fVByAUM7cYUFzx6" target="_blank">
        <li className="text-white flex text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.791"
            height="19.388"
            viewBox="0 0 10.791 14.388"
          >
            <path
              id="map-marker-alt-solid"
              d="M4.841,14.1C.758,8.179,0,7.571,0,5.4a5.4,5.4,0,1,1,10.791,0c0,2.175-.758,2.783-4.841,8.7A.675.675,0,0,1,4.841,14.1ZM5.4,7.644A2.248,2.248,0,1,0,3.147,5.4,2.248,2.248,0,0,0,5.4,7.644Z"
              fill="#fff"
            />
          </svg>

          <span className="ml-3">Location</span>
        </li>
      </a>
      <a href="https://www.facebook.com/ECJJA/" target="_blank">
        <li className="text-white flex text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 7.311 14"
          >
            <path
              id="Path_38"
              data-name="Path 38"
              d="M84.744,14V7.622h2.178l.311-2.489H84.744V3.578c0-.7.233-1.244,1.244-1.244h1.322V.078C87,.078,86.222,0,85.367,0a3,3,0,0,0-3.189,3.267V5.133H80V7.622h2.178V14Z"
              transform="translate(-80)"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>

          <span className="ml-3">Facebook</span>
        </li>
      </a>
      <a href="https://www.instagram.com/ecjja/" target="_blank">
        <li className="text-white flex text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              id="Path_40"
              data-name="Path 40"
              d="M7,1.244a21.463,21.463,0,0,1,2.8.078,3.607,3.607,0,0,1,1.322.233,2.732,2.732,0,0,1,1.322,1.322A3.607,3.607,0,0,1,12.678,4.2c0,.7.078.933.078,2.8a21.463,21.463,0,0,1-.078,2.8,3.607,3.607,0,0,1-.233,1.322,2.732,2.732,0,0,1-1.322,1.322,3.607,3.607,0,0,1-1.322.233c-.7,0-.933.078-2.8.078a21.463,21.463,0,0,1-2.8-.078,3.607,3.607,0,0,1-1.322-.233,2.732,2.732,0,0,1-1.322-1.322A3.607,3.607,0,0,1,1.322,9.8c0-.7-.078-.933-.078-2.8a21.463,21.463,0,0,1,.078-2.8,3.607,3.607,0,0,1,.233-1.322A2.793,2.793,0,0,1,2.1,2.1a1.315,1.315,0,0,1,.778-.544A3.607,3.607,0,0,1,4.2,1.322,21.463,21.463,0,0,1,7,1.244M7,0A22.981,22.981,0,0,0,4.122.078,4.8,4.8,0,0,0,2.411.389a3.045,3.045,0,0,0-1.244.778A3.045,3.045,0,0,0,.389,2.411,3.544,3.544,0,0,0,.078,4.122,22.981,22.981,0,0,0,0,7,22.981,22.981,0,0,0,.078,9.878a4.8,4.8,0,0,0,.311,1.711,3.045,3.045,0,0,0,.778,1.244,3.045,3.045,0,0,0,1.244.778,4.8,4.8,0,0,0,1.711.311A22.981,22.981,0,0,0,7,14a22.981,22.981,0,0,0,2.878-.078,4.8,4.8,0,0,0,1.711-.311,3.263,3.263,0,0,0,2.022-2.022,4.8,4.8,0,0,0,.311-1.711C13.922,9.1,14,8.867,14,7a22.981,22.981,0,0,0-.078-2.878,4.8,4.8,0,0,0-.311-1.711,3.045,3.045,0,0,0-.778-1.244A3.045,3.045,0,0,0,11.589.389,4.8,4.8,0,0,0,9.878.078,22.981,22.981,0,0,0,7,0M7,3.422A3.52,3.52,0,0,0,3.422,7,3.578,3.578,0,1,0,7,3.422M7,9.333A2.292,2.292,0,0,1,4.667,7,2.292,2.292,0,0,1,7,4.667,2.292,2.292,0,0,1,9.333,7,2.292,2.292,0,0,1,7,9.333m3.733-6.922a.856.856,0,1,0,.856.856.863.863,0,0,0-.856-.856"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
          <span className="ml-3">Instagram</span>
        </li>
      </a>
    </ul>
  </footer>
);

export default Footer;
