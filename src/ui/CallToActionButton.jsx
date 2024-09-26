/* eslint-disable react/prop-types */
function CallToActionButton({ children }) {
  return (
    <button className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-white transition-all hover:text-white w-full  px-6 md:px-10 lg:px-8 py-3 bg-white font-semibold  rounded-md">
      {children}
    </button>
  );
}

export default CallToActionButton;
