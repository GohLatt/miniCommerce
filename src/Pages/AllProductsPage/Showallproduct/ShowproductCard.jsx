import shwoproducts from "./Showproduct";
import Card from "../../../Common/Card";
import AddToCart from "../../../Component/Main/FlashData/AddToCart";

function ShowproductCard({ selectProduct, setSelectProduct, allCalobj }) {
  return (
    <Card className="show-product-box">
      {shwoproducts.map((p) => (
        <Card className="card" key={p.id}>
          <div>
            <img src={p.cover} alt="flash img" />
          </div>
          <div className="card-text">
            <p>{p.name}</p>

            <p className="p-price">${p.price}</p>
            <AddToCart
              product={p}
              selectProduct={selectProduct}
              setSelectProduct={setSelectProduct}
              allCalobj={allCalobj}
            />
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default ShowproductCard;
