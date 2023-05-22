import Section from "../../Common/Section";
import Slider from "./MainSlider/Slider";
import FlashSection from "./FlashData/FlashSection";
import LeftSlider from "./MainSlider/LeftSlider";
import CategorySection from "./Category/CategorySection";
import DescountSection from "./Discount/DescountSection";
import SpecialDis from "./SpecialDiscount/SpecialDis";
import Service from "./Services/Service";
import "./Main.css";

function Main() {
  return (
    <main className="container main">
      <Section className="section-hero">
        <LeftSlider />
        <Slider />
      </Section>
      <FlashSection />
      <CategorySection />
      <DescountSection />
      <SpecialDis />
      <Service />
    </main>
  );
}

export default Main;
