/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:text-white transition-all w-full md:w-[40%] px-6 md:px-10 lg:px-8 py-3 bg-white font-semibold  rounded-md">
      {children}
    </button>
  );
}

export default Button;
