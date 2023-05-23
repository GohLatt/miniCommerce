import Card from "../../../Common/Card";
import Button from "../../../Common/Button";
import blogsDatas from "../../../BlogsPageData/BlogsData";

function SpproductDetailCard({ id }) {
  return (
    <>
      {blogsDatas
        .filter((p) => p.id === id)
        .map((product) => (
          <Card className="sp-prodcut-detail-card container" key={product.id}>
            <img src={product.cover} />
            <div className="product-info">
              <p className="sp-product-name">{product.name}</p>
              <p className="sp-procut-price">${product.price}</p>
              <p className="sp-procut-warranty">1 Year Warranty</p>
              <div className="choose">
                <p className="choose-info">Choose Specification</p>
                <p className="item-details">
                  Processor: <span>{product.processor}</span>
                </p>
                <p className="item-details">
                  Memory: <span>{product.memory}</span>
                </p>
                <p className="item-details">
                  Storage: <span>{product.storage}</span>
                </p>
                <p className="item-details">
                  Color: <span>{product.color}</span>
                </p>
              </div>
              <Button className="btn btn-cart">Add to cart</Button>
            </div>
          </Card>
        ))}
    </>
  );
}

export default SpproductDetailCard;
