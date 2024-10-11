/* eslint-disable react/prop-types */
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-md shadow-md">
      <div
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white flex items-center justify-center rounded-md transition-all duration-300 my-6 "
        style={{ width: `${progress}%`, height: "20px" }}
      >
        {!progress ? "" : `${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
