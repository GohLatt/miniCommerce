import Card from "../../Common/Card";
import Carousel from "react-material-ui-carousel";
const mainAllProducts = [
  {
    id: 18,
    cover: "./AllproductsImag/herosection/main-banner.jpg",
    price: 999,
    calPrice: 999,
    name: "banner",
  },
  {
    id: 19,
    cover: "./AllproductsImag/herosection/main-banner-1.jpg",
    price: 999,
    calPrice: 999,
    name: "banner",
  },
];

function LeftMain() {
  return (
    <Carousel autoPlay animation="slide">
      {mainAllProducts.map((p) => (
        <Card className="left-main" key={p.id}>
          <img src={p.cover} alt="back-img" />
          <div className="main-text-box">
            <p className="des-title">Supercharged from pros</p>
            <h2 className="main-title">Special Sale</h2>
            <p className="price-title">
              From $999.00 or 416.89/mo for 24 mo footnote
            </p>
            <button className="btn btn-buy">Buy</button>
          </div>
        </Card>
      ))}
    </Carousel>
  );
}

export default LeftMain;
