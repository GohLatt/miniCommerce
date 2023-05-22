import React from "react";
import Card from "../../../Common/Card";
import ItemCard from "../../../Common/ItemCard";
import Ddata from "./Discount";
function DiscountCard() {
  return (
    <Card className="discount-box">
      {Ddata.map((data) => (
        <ItemCard data={data} key={data.id} />
      ))}
    </Card>
  );
}

export default DiscountCard;
