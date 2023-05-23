import SpproductDetailCard from "./SpproductDetailCard";
import { useParams } from "react-router-dom";
function SpproductDetail() {
  const { id } = useParams();

  return (
    <div className="sp-product-detail-page">
      <SpproductDetailCard id={Number(id)} />
    </div>
  );
}

export default SpproductDetail;
