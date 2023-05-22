import shwoproducts from "./Showproduct";
import Card from "../../../Common/Card";
import AddToCart from "../../../Component/Main/FlashData/AddToCart";

function ShowproductCard() {
  return (
    <Card className="show-product-box">
      {shwoproducts.map((p) => (
        <Card className="card" key={p.id}>
          <img src={p.cover} alt="flash img" />
          <div className="card-text">
            <p>{p.name}</p>

            <p className="p-price">${p.price}</p>
            <AddToCart />
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default ShowproductCard;
