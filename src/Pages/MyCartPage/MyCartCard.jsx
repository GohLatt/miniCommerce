import Card from "../../Common/Card";
import MyCartBox from "./MyCartBox";

function MyCartCard() {
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
      <MyCartBox />
      <MyCartBox />
    </Card>
  );
}

export default MyCartCard;
