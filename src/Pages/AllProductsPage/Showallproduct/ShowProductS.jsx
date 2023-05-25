import Section from "../../../Common/Section";
import CatAndSearch from "../CatAndSearch/CatAndSearch";
import ShowproductCard from "./ShowproductCard";
import {
  SelectContexts,
  AllfunContext,
} from "../../../DataContext/ProductContext";
import { useContext } from "react";
function ShowProductS() {
  const [selectProduct, setSelectProduct, watchList, setWatchList] =
    useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <Section className="show-product-section">
      <CatAndSearch />
      <ShowproductCard
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
        allCalobj={allCalobj}
        watchList={watchList}
        setWatchList={setWatchList}
      />
    </Section>
  );
}

export default ShowProductS;
