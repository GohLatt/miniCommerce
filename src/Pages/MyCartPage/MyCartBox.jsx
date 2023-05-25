import Card from "../../Common/Card";

function MyCartBox({ product, increaseFun, decreaseFun, removeFun }) {
  return (
    <Card className="cart-box">
      <div className="cart-img">
        <img src={product.cover} alt="item photo" />
        <p>{product.name}</p>
      </div>
      <div className="mycart-detail">
        <p>${product.calPrice}</p>
        <p className="plus-and-minus">
          <i
            className="fa-solid fa-circle-minus"
            onClick={() => decreaseFun(product.id)}
          ></i>
          <span>{product.count}</span>
          <i
            className="fa-solid fa-circle-plus"
            onClick={() => increaseFun(product.id)}
          ></i>
        </p>
        <p>${product.price}</p>
        <p className="last-child">
          <i
            className="fa-solid fa-xmark"
            onClick={() => removeFun(product.id)}
          ></i>
        </p>
      </div>
    </Card>
  );
}

export default MyCartBox;
