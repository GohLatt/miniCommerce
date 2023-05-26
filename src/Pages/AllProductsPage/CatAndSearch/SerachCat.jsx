import Card from "../../../Common/Card";

function SerachCat({ query, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          placeholder="Search product ...."
          onChange={(e) => setQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
    </Card>
  );
}

export default SerachCat;
