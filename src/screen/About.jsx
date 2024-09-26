import AboutInfo from "../components/AboutInfo";
import SectionWithImage from "../components/SectionWithImage";
import BigImage from "../ui/BigImage";

function About() {
  return (
    <SectionWithImage>
      <AboutInfo />
      <BigImage img="/woman-2.png" name="woman" position={75} />
    </SectionWithImage>
  );
}

export default About;
