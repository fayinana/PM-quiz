/* eslint-disable react/prop-types */
function Section({ children }) {
  return (
    <div className="px-4 w-full min-h-screen py-12 bg-[url('/Rectangle.png')] flex items-center justify-center">
      {children}
    </div>
  );
}

export default Section;
