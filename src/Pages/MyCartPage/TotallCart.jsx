import Card from "../../Common/Card";
import Button from "../../Common/Button";

function TotallCart({ selectProduct, setSelectProduct }) {
  const totalFun = () => {
    setSelectProduct([]);
    alert("Thank you");
  };
  return (
    <Card className="total-card">
      <h3>Summary</h3>
      <div className="total">
        <p>Total:</p>
        <p style={{ fontWeight: "600" }}>
          $
          {selectProduct.map((p) => p.price).reduce((acc, cur) => acc + cur, 0)}
        </p>
      </div>
      <Button className="btn btn-buy-all" onClick={totalFun}>
        Buy all
      </Button>
    </Card>
  );
}

export default TotallCart;
