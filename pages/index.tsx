import News from "@/components/News/News";
import PopularCat from "@/components/PopularCat/PopularCat";
import Slider from "@/components/Slider/Slider";

export default function Index(): JSX.Element {
  return (
    <>
      <Slider />
      <PopularCat />
      <News />
    </>
  );
}
