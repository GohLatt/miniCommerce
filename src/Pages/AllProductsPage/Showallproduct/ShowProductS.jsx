import Section from "../../../Common/Section";
import CatAndSearch from "../CatAndSearch/CatAndSearch";
import ShowproductCard from "./ShowproductCard";
import shwoproducts from "./Showproduct";
import {
  SelectContexts,
  AllfunContext,
} from "../../../DataContext/ProductContext";
import { useContext, useState } from "react";
function ShowProductS() {
  const [query, setQuery] = useState("");
  const [selectProduct, setSelectProduct, watchList, setWatchList] =
    useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);

  ///make filter products
  const filterItem = shwoproducts.filter((sp) =>
    sp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Section className="show-product-section">
      <CatAndSearch query={query} setQuery={setQuery} />
      <ShowproductCard
        shwoproducts={filterItem}
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
