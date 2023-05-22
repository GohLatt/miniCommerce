import "./Header.css";
import Nav from "./Nav";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header>
      <div className="container">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
