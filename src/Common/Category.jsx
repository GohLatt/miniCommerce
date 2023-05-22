import Card from "./Card";
import data from "./CatData";
function Category() {
  return (
    <Card className="categroy-container">
      {data.map((prd) => (
        <div className="category" key={prd.cateName}>
          <img src={prd.cateImg} />
          <p>{prd.cateName}</p>
        </div>
      ))}
    </Card>
  );
}

export default Category;
