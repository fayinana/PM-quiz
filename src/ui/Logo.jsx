/* eslint-disable react/prop-types */
function Logo({ img, name }) {
  return (
    <div className="w-[100px] h-[50px] md:w-[200px] md:h-[70px]">
      <img src={img} className="w-full h-full" alt={`logo-of-${name}`} />
    </div>
  );
}

export default Logo;
