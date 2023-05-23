import Card from "../../Common/Card";
function WatchListCard() {
  return (
    <Card className="watch-list-container container">
      <Card className="watch-list-card">
        <img src="./Blogs/iphone.jpg" alt="item card" />
        <div className="watch-list-text">
          <p>Ipnone</p>
          <p>price</p>
        </div>
        <div className="add-and-delete">
          <i className="fa-solid fa-delete-left"></i>
          <i className="fa-solid fa-cart-plus"></i>
        </div>
      </Card>
    </Card>
  );
}

export default WatchListCard;
