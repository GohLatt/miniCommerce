import Section from "../../../Common/Section";
import CategoryCard from "./CategoryCard";

function CategorySection() {
  return (
    <Section className="category-section">
      <div className="newArrival">
        <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
        <h3>New Arrivals</h3>
      </div>
      <CategoryCard />
    </Section>
  );
}

export default CategorySection;
