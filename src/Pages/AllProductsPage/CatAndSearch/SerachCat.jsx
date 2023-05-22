import Card from "../../../Common/Card";

function SerachCat() {
  return (
    <Card className="search-box">
      <form>
        <input type="text" placeholder="Search product ...." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
    </Card>
  );
}

export default SerachCat;
