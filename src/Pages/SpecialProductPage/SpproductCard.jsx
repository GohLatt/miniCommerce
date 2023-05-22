import Card from "../../Common/Card";
import Button from "../../Common/Button";
import allBlogsdata from "../../BlogsPageData/BlogsAll";
function SpproductCard() {
  return (
    <>
      {allBlogsdata.map((p) => (
        <Card className="sp-product-card" key={p.id}>
          <div>
            <img src={p.cover} />
          </div>
          <div className="sp-product-text">
            <div className="sp-product-box">
              <p>{p.name}</p>
              <p className="blogs-price">${p.calPrice}</p>
            </div>
            <Button className="btn btn-read-more">Show more</Button>
          </div>
        </Card>
      ))}
    </>
  );
}

export default SpproductCard;
