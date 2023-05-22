import "./Allproducts.css";
import Footer from "../../Component/Footer/Footer";
import AllproductMain from "./AllproductMain";
import ShowProductS from "./Showallproduct/ShowProductS";
function Allproducts() {
  return (
    <>
      <div className="container">
        <AllproductMain />
        <ShowProductS />
      </div>
      <Footer />
    </>
  );
}

export default Allproducts;
