import Card from "../../../Common/Card";
import Cat from "./Cat";
import SerachCat from "./SerachCat";

function CatAndSearch() {
  return (
    <Card className="cat-search-container">
      <Cat />
      <SerachCat />
    </Card>
  );
}

export default CatAndSearch;
