import blogsDatas from "../../BlogsPageData/BlogsData";
import ComputerData from "./ComputerData";
import PhoneData from "./PhoneData";

function SpproductDetailCard({ id }) {
  return (
    <>
      {blogsDatas
        .filter((p) => p.id === id)
        .map((product) => {
          if (product.category === "computer") {
            return <ComputerData product={product} key={product.id} />;
          } else {
            return <PhoneData product={product} key={product.id} />;
          }
        })}
    </>
  );
}

export default SpproductDetailCard;
