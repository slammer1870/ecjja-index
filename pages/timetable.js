import React from "react";

export default function Timetable() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-5xl px-4 md:px-0 font-light tracking-wider uppercase text-center text-gray-900">
              Timetable
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Check out our class times.
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Time
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Monday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Tuesday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Wednesday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Thursday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Friday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Saturday
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">6:15am</td>
                  <td className="px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 60 mins
                  </td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 60 mins
                  </td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 60 mins
                  </td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    10:00am
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900">
                    <span className="font-medium text-pink-700">
                      Kid's 5-7 years - 45 mins
                    </span>
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    11:00am
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900">
                    Kid's 8-11 years - 60 mins
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    12:00am
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-purple-900">
                    Advanced Class - 90 mins (NoGi)
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-purple-900">
                    Advanced Class - 90 mins (NoGi)
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500">
                    Beginner's Class - 60 mins
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500">
                    Beginner's Class - 60 mins
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    13:00pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm">
                    Open Mat
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm">
                    Open Mat
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    16:00pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-700"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900">
                    Kid's 8-11 years - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-700"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900">
                    Kid's 8-11 years - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    16:15pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-700">
                    Kid's 5-7 years - 45 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-700">
                    Kid's 5-7 years - 45 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-pink-900"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    17:00pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-green-400">
                    Teen's Class 12-15 years - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-green-400"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-green-400">
                    Teen's Class 12-15 years - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-green-400"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-green-400">
                    Teen's Class 12-15 years - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    18:00pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500">
                    Beginner's Class - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-blue-500">
                    Beginner's Class - 60 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm">
                    Sparring Class
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    19:00pm
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    Mixed Class - 90 mins (NoGi)
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    19:30pm
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    <span className="font-medium text-blue-500">
                      Beginner's Class - 60 mins
                    </span>
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-medium text-indigo-700">
                    <span className="font-medium text-blue-500">
                      Beginner's Class - 60 mins
                    </span>
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-sm"></td>
                  <td className="border-t-2  border-gray-200 px-4 py-3 text-sm"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
