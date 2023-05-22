import Card from "../../Common/Card";

const mainCateData = [
  {
    id: "cat-1",
    img: "./AllproductsImag/herosection/catbanner-01.jpg",
    cat: "best sale",
    title: "Laptops Max",
    text: "From $1699.00 or $64.62/mo",
    price: 1699,
  },
  {
    id: "cat-2",
    img: "./AllproductsImag/herosection/catbanner-02.jpg",
    cat: "15% off",
    title: "Smartwatch 7",
    text: "Shop the latest band styles and colors",
    price: 500,
  },
  {
    id: "cat-3",
    img: "./AllproductsImag/herosection/catbanner-03.jpg",
    cat: "new Arrival",
    title: "Buy IPad Air",
    text: "From $599 or $49.9/mo for 12 mo",
    price: 599,
  },
  {
    id: "cat-4",
    img: "./AllproductsImag/herosection/catbanner-04.jpg",
    cat: "Free Engraving",
    title: "AirPods Max",
    text: "High-fidelity playback & ultra-low distortion",
    price: 200,
  },
];
function RightMain() {
  return (
    <Card className="right-main">
      {mainCateData.map((data) => (
        <Card className="cat-item" key={data.id}>
          <img src={data.img} alt="back-img" />
          <div className="main-text-box">
            <p className="des-title">{data.cat}</p>
            <h3 className="main-title">{data.title}</h3>
            <p className="price-title">{data.text}</p>
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default RightMain;
