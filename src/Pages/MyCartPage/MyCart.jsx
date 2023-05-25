import "./MyCart.css";
import MyCartCard from "./MyCartCard";
import TotallCart from "./TotallCart";
import {
  SelectContexts,
  AllfunContext,
} from "../../DataContext/ProductContext";
import { useContext } from "react";
function MyCart() {
  const [selectProduct, setSelectProduct] = useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <div className="container mycart-page">
      <MyCartCard
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
        allCalobj={allCalobj}
      />
      <TotallCart
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
      />
    </div>
  );
}

export default MyCart;
