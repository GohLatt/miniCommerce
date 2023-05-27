import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SelectContexts } from "../../DataContext/ProductContext";
function Nav() {
  const [selectProduct, setSelectProduct, watchList] =
    useContext(SelectContexts);
  return (
    <nav className="second-nav">
      <h1 className="logo-text">GohShop</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/specialproduct">Special products</NavLink>
        </li>
        <li>
          <NavLink to="/allproducts">All Products</NavLink>
        </li>
        <li>
          <NavLink to="/login">User Account</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="addandwatch">
        <div className="addandwatch-box">
          <NavLink to="/watchlist">
            <i className="fa-solid fa-heart nav-icon right-mg"></i>
          </NavLink>
          <p className="circle-one">{watchList.length}</p>
        </div>
        <div className="addandwatch-box">
          <NavLink to="/cart">
            <i className="fa-solid fa-bag-shopping nav-icon"></i>
          </NavLink>
          <p className="circle">{selectProduct.length}</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
