/* eslint-disable react/prop-types */
function SelectButton({ children, isCorrect }) {
  return (
    <button
      className={`hover:bg-pink-500 hover:text-white w-[80%] rounded-md block m-auto px-4 py-3 ${
        isCorrect
          ? "bg-pink-500 text-white"
          : "bg-white text-black border-gray-400"
      } border-[1px]  my-4 capitalize font-semibold`}
    >
      {children}
    </button>
  );
}

export default SelectButton;
