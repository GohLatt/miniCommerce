import Footer from "../../Component/Footer/Footer";
import AllproductMain from "./AllproductMain";
import ShowProductS from "./Showallproduct/ShowProductS";
import {
  SelectContexts,
  AllfunContext,
} from "../../DataContext/ProductContext";
import { useContext } from "react";
import "./Allproducts.css";
function Allproducts() {
  const [selectProduct, setSelectProduct] = useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <>
      <div className="container">
        <AllproductMain
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
          allCalobj={allCalobj}
        />
        <ShowProductS />
      </div>
      <Footer />
    </>
  );
}

export default Allproducts;
