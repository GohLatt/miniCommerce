import Card from "../../../Common/Card";
import NDat from "./NDat";

function CategoryCard() {
  return (
    <Card className="category-card-container">
      {NDat.map((p) => (
        <Card className="new-arrival-card" key={p.name}>
          <img src={p.cover} alt="photo" />
          <div className="new-arr-text">
            <p>{p.name}</p>
            <p className="new-price">${p.price}</p>
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default CategoryCard;
