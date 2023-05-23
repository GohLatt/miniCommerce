import { NavLink } from "react-router-dom";
function Nav() {
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
      <div>
        <NavLink to="/watchlist">
          <i className="fa-solid fa-heart nav-icon right-mg"></i>
        </NavLink>
        <NavLink to="/cart">
          <i className="fa-solid fa-bag-shopping nav-icon"></i>
        </NavLink>
        <p className="circle">3</p>
        <p className="circle-one">3</p>
      </div>
    </nav>
  );
}

export default Nav;
