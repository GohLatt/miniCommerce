import Card from "../../../Common/Card";
import Cat from "./Cat";
import SerachCat from "./SerachCat";

function CatAndSearch({ query, setQuery }) {
  return (
    <Card className="cat-search-container">
      <Cat query={query} setQuery={setQuery} />
      <SerachCat query={query} setQuery={setQuery} />
    </Card>
  );
}

export default CatAndSearch;
