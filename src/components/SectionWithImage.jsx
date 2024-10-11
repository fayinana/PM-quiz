/* eslint-disable react/prop-types */
function SectionWithImage({ children }) {
  return (
    <section className="flex justify-between md:items-center w-full h-screen px-4 py-20 md:p-20 bg-[url('/Rectangle.png')] relative">
      {children}
    </section>
  );
}

export default SectionWithImage;
