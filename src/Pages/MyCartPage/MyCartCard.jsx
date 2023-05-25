import Card from "../../Common/Card";
import MyCartBox from "./MyCartBox";

function MyCartCard({ selectProduct, setSelectProduct, allCalobj }) {
  //increase
  const increaseFun = (product) => {
    allCalobj.increase(product, selectProduct, setSelectProduct);
  };

  //decrease
  const decreaseFun = (product) => {
    allCalobj.decrease(product, selectProduct, setSelectProduct);
  };

  // remove
  const removeFun = (product) => {
    allCalobj.remove(product, selectProduct, setSelectProduct);
  };

  return (
    <Card className="my-cart-container">
      <h2>Your Cart</h2>
      <div className="cart-title">
        <p>Item</p>
        <div>
          <p>Item Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <p>Remove</p>
        </div>
      </div>

      {selectProduct &&
        selectProduct.map((product) => (
          <MyCartBox
            product={product}
            increaseFun={increaseFun}
            decreaseFun={decreaseFun}
            removeFun={removeFun}
            key={product.id}
          />
        ))}
    </Card>
  );
}

export default MyCartCard;
