function SectionWithImage() {
  return (
    <section className="flex justify-between md:items-center w-full h-screen px-4 py-20 md:p-20 bg-[url('/public/Rectangle.png')] relative">
      <div className="w-full md:w-1/2 gap-4 flex flex-col ">
        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-black font-semibold font-serif">
          Achieve Your Dream Figure with Quick and Effective Workouts.
        </h1>
        <p>Take this 30-second quiz to find out how</p>
        <div className="z-50 flex gap-4 items-center absolute flex-wrap bottom-[40%] left-4 md:static">
          <button className="hover:bg-transparent px-6 md:px-10 w-full md:w-[40%]  py-3 bg-white rounded-md">
            Woman Start Here
          </button>
          <button className="hover:bg-transparent w-full md:w-[40%] px-6 md:px-10 lg:px-8 py-3 bg-white  rounded-md">
            Man Start Here
          </button>
        </div>
        <div className="absolute left-0 px-6 md:px-20 bottom-16 md:bottom-0 bg-transparent flex w-full h-[80px] justify-between items-center gap-2 flex-wrap">
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[80px]">
            <img src="/public/WH.png" className="w-full h-full" alt="" />
          </div>
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[80px]">
            <img src="/public/MAYO.png" className="w-full h-full" alt="" />
          </div>
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[80px]">
            <img src="/public/FORBES.png" className="w-full h-full" alt="" />
          </div>
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[80px]">
            <img src="/public/WSJ.png" className="w-full h-full" alt="" />
          </div>
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[80px]">
            <img src="/public/VOGUE.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-2/3 md:w-1/2 z-0 md:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
        <img
          src="/public/woman-1.png"
          className="h-full w-full object-fill"
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionWithImage;
