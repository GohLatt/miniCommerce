import Section from "../../../Common/Section";
import DiscountCard from "./DiscountCard";
import "./Discount.css";
function DescountSection() {
  return (
    <Section className="discount-section">
      <h3 className="big-discount section-title">Big Discount 50%</h3>
      <DiscountCard />
    </Section>
  );
}

export default DescountSection;
