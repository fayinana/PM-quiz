/* eslint-disable react/prop-types */
function Container({ children }) {
  return (
    <div className="relative text-center max-w-[600px] w-full bg-white shadow-lg rounded-xl p-8 min-h-[50%]">
      {children}
    </div>
  );
}

export default Container;
