function Searchbar() {
  return (
    <nav className="first-nav">
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="What products are you looking for ..."
        />
        <p className="category">All Category</p>
      </div>
      <div></div>
    </nav>
  );
}

export default Searchbar;
