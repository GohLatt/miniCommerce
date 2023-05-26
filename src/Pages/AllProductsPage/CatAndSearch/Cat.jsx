import { useState } from "react";
import Card from "../../../Common/Card";
import CatBox from "./CatBox";

function Cat({ query, setQuery }) {
  const [up, setUp] = useState(true);
  const [show, setShow] = useState(true);
  const showUpFun = () => {
    setUp(!up);
    setShow(!show);
  };
  return (
    <Card className="category-all-box">
      <div className="category-icon-all">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/129/872/original/category-black-filled-icon-style-free-vector.jpg"
          alt=""
        />
        <p>Categories</p>
        {!up && (
          <i className="fa-solid fa-chevron-down" onClick={showUpFun}></i>
        )}
        {up && (
          <i
            style={{ cursor: "pointer" }}
            className="fa-solid fa-chevron-up"
            onClick={showUpFun}
          ></i>
        )}
      </div>
      {!show && <CatBox query={query} setQuery={setQuery} setShow={setShow} />}
    </Card>
  );
}

export default Cat;
