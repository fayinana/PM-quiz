import Button from "../ui/Button";

function HeroButtons() {
  return (
    <div className="z-50 flex gap-4 items-center absolute flex-wrap bottom-[40%] left-4 md:static">
      <Button>Woman Start Here</Button>
      <Button>Man Start Here</Button>
    </div>
  );
}

export default HeroButtons;
