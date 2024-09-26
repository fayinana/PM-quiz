import HeroText from "../ui/HeroText";
import HeroTitle from "../ui/HeroTitle";
import HeroButtons from "./HeroButtons";

function HeroInfo() {
  return (
    <>
      <div className="w-full md:w-1/2 gap-4 flex flex-col ">
        <HeroTitle />
        <HeroText />
        <HeroButtons />
      </div>
    </>
  );
}

export default HeroInfo;
