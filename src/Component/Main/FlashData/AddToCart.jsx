function AddToCart({
  product,
  selectProduct,
  setSelectProduct,
  allCalobj,
  watchList,
  setWatchList,
}) {
  return (
    <>
      <div className="add-to-cart">
        <i
          className="fa-regular fa-heart add-heart"
          style={{ cursor: "pointer" }}
          onClick={() =>
            allCalobj.addWatchList(
              product,
              watchList,
              setWatchList,
              selectProduct
            )
          }
        ></i>
      </div>
      <i
        className="fa-solid fa-plus"
        style={{ cursor: "pointer" }}
        onClick={() =>
          allCalobj.addItem(product, selectProduct, setSelectProduct, watchList)
        }
      ></i>
    </>
  );
}

export default AddToCart;
