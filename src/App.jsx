import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Allproducts from "./Pages/AllProductsPage/Allproducts";
import SpecialProduct from "./Pages/SpecialProductPage/SpecialProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialproduct" element={<SpecialProduct />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
