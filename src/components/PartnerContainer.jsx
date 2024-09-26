import Logo from "../ui/Logo";

function PartnerContainer() {
  return (
    <div className="absolute left-0 px-6 md:px-20 bottom-16 md:bottom-0 bg-transparent flex w-full h-[80px] justify-between items-center gap-2 flex-wrap">
      <Logo img="/WH.png" name="womans-health" />
      <Logo img="/MAYO.png" name="mayo" />
      <Logo img="/FORBES.png" name="forbes" />
      <Logo img="/WSJ.png" name="the-well-strate-journal" />
      <Logo img="/VOGUE.png" name="vogue" />
    </div>
  );
}

export default PartnerContainer;
