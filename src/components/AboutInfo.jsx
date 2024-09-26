import PresentImg from "./../ui/PresentImg";
function AboutInfo() {
  return (
    <div className="w-full md:w-1/2 gap-4 flex flex-col items-center justify-start">
      <h3 className="text-black font-bold text-[2rem] ">
        Achieve Your Dream Figure with Quick and Effective Workouts.
      </h3>
      <p className="text-black text-[1.25rem] text-start font-semibold self-start">
        the best routine for maximum fat loss...
      </p>
      <PresentImg />
    </div>
  );
}

export default AboutInfo;
