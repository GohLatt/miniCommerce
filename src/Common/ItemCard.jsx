import React, { useContext } from "react";
import Card from "./Card";
import AddToCart from "../Component/Main/FlashData/AddToCart";
import { SelectContexts, AllfunContext } from "../DataContext/ProductContext";
function ItemCard({ data }) {
  const [selectProduct, setSelectProduct, watchList, setWatchList] =
    useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);

  return (
    <Card className="card">
      <img src={data.cover} alt="flash img" />
      <div className="card-text">
        <p>{data.name}</p>
        <p className="discount">50% off</p>
        <p className="p-price">
          ${data.price}
          <span className="lines-throught">${data.price * 2}</span>
        </p>
        <AddToCart
          product={data}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
          allCalobj={allCalobj}
          watchList={watchList}
          setWatchList={setWatchList}
        />
      </div>
    </Card>
  );
}

export default ItemCard;
