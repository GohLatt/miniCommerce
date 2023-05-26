import blogsDatas from "../../BlogsPageData/BlogsData";
import ComputerData from "./ComputerData";
import PhoneData from "./PhoneData";
import {
  SelectContexts,
  AllfunContext,
} from "../../DataContext/ProductContext";
import { useContext } from "react";
function SpproductDetailCard({ id }) {
  const [selectProduct, setSelectProduct, watchList] =
    useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <>
      {blogsDatas
        .filter((p) => p.id === id)
        .map((product) => {
          if (product.category === "computer") {
            return (
              <ComputerData
                product={product}
                key={product.id}
                selectProduct={selectProduct}
                setSelectProduct={setSelectProduct}
                allCalobj={allCalobj}
                watchList={watchList}
              />
            );
          } else {
            return (
              <PhoneData
                product={product}
                key={product.id}
                selectProduct={selectProduct}
                setSelectProduct={setSelectProduct}
                allCalobj={allCalobj}
                watchList={watchList}
              />
            );
          }
        })}
    </>
  );
}

export default SpproductDetailCard;
