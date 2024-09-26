/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="hover:bg-pink-400 transition-all hover:text-white w-full md:w-[40%] px-6 md:px-10 lg:px-8 py-3 bg-white font-semibold  rounded-md">
      {children}
    </button>
  );
}

export default Button;
