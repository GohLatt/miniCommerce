import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Allproducts from "./Pages/AllProductsPage/Allproducts";
import SpecialProduct from "./Pages/SpecialProductPage/SpecialProduct";
import SpproductDetail from "./Pages/SpproductDetailPage/SpproductDetail";
import Login from "./Pages/LoginPage/Login";
import Contact from "./Pages/ContactPage/Contact";
import WatchList from "./Pages/WatchlistPage/WatchList";
import MyCart from "./Pages/MyCartPage/MyCart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialproduct" element={<SpecialProduct />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/spproductdetail/:id" element={<SpproductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
