/* eslint-disable react/prop-types */
function BigImage({ img, name }) {
  return (
    <div className="w-full h-2/3 md:w-1/2 z-0 md:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
      <img
        src={img}
        className="h-full w-full object-fill"
        alt={`image-of-${name}`}
      />
    </div>
  );
}

export default BigImage;
