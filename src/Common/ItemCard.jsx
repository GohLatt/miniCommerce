import React from "react";
import Card from "./Card";
import AddToCart from "../Component/Main/FlashData/AddToCart";

function ItemCard({ data }) {
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
        <AddToCart />
      </div>
    </Card>
  );
}

export default ItemCard;
