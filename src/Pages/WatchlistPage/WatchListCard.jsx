import Card from "../../Common/Card";
function WatchListCard({
  selectProduct,
  setSelectProduct,
  watchList,
  setWatchList,
  allCalobj,
}) {
  return (
    <Card className="watch-list-container container">
      {watchList.map((wp) => (
        <Card className="watch-list-card" key={wp.id}>
          <img src={wp.cover} alt="item card" />
          <div className="watch-list-text">
            <p>{wp.name}</p>
            <p>{wp.price}</p>
          </div>
          <div className="add-and-delete">
            <i
              className="fa-solid fa-delete-left"
              onClick={() => allCalobj.remove(wp.id, watchList, setWatchList)}
            ></i>
            <i
              className="fa-solid fa-cart-plus"
              onClick={() =>
                allCalobj.addWatchListToMycart(
                  wp,
                  watchList,
                  setSelectProduct,
                  setWatchList
                )
              }
            ></i>
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default WatchListCard;
