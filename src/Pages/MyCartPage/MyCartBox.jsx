import Card from "../../Common/Card";

function MyCartBox() {
  return (
    <Card className="cart-box">
      <div className="cart-img">
        <img src="./Blogs/MSI.jpg" alt="item photo" />
        <p>productNmae</p>
      </div>
      <div className="mycart-detail">
        <p>$500</p>
        <p className="plus-and-minus">
          <i class="fa-solid fa-circle-minus"></i>
          <span>10</span>
          <i class="fa-solid fa-circle-plus"></i>
        </p>
        <p>$50000</p>
        <p>
          <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
    </Card>
  );
}

export default MyCartBox;
