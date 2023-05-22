import Section from "../../../Common/Section";
import CatAndSearch from "../CatAndSearch/CatAndSearch";
import ShowproductCard from "./ShowproductCard";

function ShowProductS() {
  return (
    <Section className="show-product-section">
      <CatAndSearch />
      <ShowproductCard />
    </Section>
  );
}

export default ShowProductS;
