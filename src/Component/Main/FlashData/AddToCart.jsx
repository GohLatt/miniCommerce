function AddToCart({ product, selectProduct, setSelectProduct, allCalobj }) {
  return (
    <>
      <div className="add-to-cart">
        <i className="fa-regular fa-heart" style={{ cursor: "pointer" }}></i>
      </div>
      <i
        className="fa-solid fa-plus"
        style={{ cursor: "pointer" }}
        onClick={() =>
          allCalobj.addItem(product, selectProduct, setSelectProduct)
        }
      ></i>
    </>
  );
}

export default AddToCart;
