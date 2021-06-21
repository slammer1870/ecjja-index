const SizingChart = ({ handleModal }) => {
  return (
    <div className="flex p-4 top-0 left-0 w-full h-full fixed bg-black bg-opacity-90 z-10 ">
      <button
        className="w-screen h-screen absolute"
        onClick={handleModal}
      ></button>
      <div className="w-full max-w-screen-md bg-white md:p-0 mx-auto my-auto z-20 relative">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100">
                Size
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Height
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-blue-500">A0</td>
              <td className="px-4 py-3 text-sm font-medium">
                5'2"-5'5"
              </td>
              <td className="px-4 py-3 text-sm font-medium">
                50-60kg
              </td>
            </tr><tr>
              <td className="px-4 py-3 text-blue-500">A1</td>
              <td className="px-4 py-3 text-sm font-medium">
                5'5"-5'8"
              </td>
              <td className="px-4 py-3 text-sm font-medium">
                60-72kg
              </td>
            </tr><tr>
              <td className="px-4 py-3 text-blue-500">A2</td>
              <td className="px-4 py-3 text-sm font-medium">
                5'8"-5"11
              </td>
              <td className="px-4 py-3 text-sm font-medium">
                72-82kg
              </td>
            </tr><tr>
              <td className="px-4 py-3 text-blue-500">A3</td>
              <td className="px-4 py-3 text-sm font-medium">
                5'11"-6'2"
              </td>
              <td className="px-4 py-3 text-sm font-medium">
                82-96kg
              </td>
            </tr><tr>
              <td className="px-4 py-3 text-blue-500">A4</td>
              <td className="px-4 py-3 text-sm font-medium">
                6'2"+
              </td>
              <td className="px-4 py-3 text-sm font-medium">
                96kg+
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizingChart;
