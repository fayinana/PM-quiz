import SectionWithImage from "./../components/SectionWithImage";
import HeroInfo from "./../components/HeroInfo";
import BigImage from "../ui/BigImage";
import PartnerContainer from "./../components/PartnerContainer";
function Banner() {
  return (
    <SectionWithImage>
      <HeroInfo />
      <BigImage img="/woman-1.png" name="woman" position={50} />
      <PartnerContainer />
    </SectionWithImage>
  );
}

export default Banner;
