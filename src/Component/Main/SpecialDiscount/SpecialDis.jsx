import Section from "../../../Common/Section";
import Card from "../../../Common/Card";
import special from "./special";
import Button from "../../../Common/Button";
import {
  SelectContexts,
  AllfunContext,
} from "../../../DataContext/ProductContext";
import "./special.css";
import { useContext } from "react";

function SpecialDis() {
  const [selectProduct, setSelectProduct] = useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <Section className="special-section">
      <h3 className="big-discount section-title">Special offer</h3>
      {special.map((s) => (
        <Card className="special" key={s.id}>
          <img src={s.cover} alt="" />
          <div className="special-text">
            <p>{s.name}</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates dolorem ducimus corporis accusamus! Saepe accusantium
              alias deserunt illo dolor
            </p>
            <p className="special-price">${s.price}</p>
            <Button
              className="btn btn-special"
              onClick={() =>
                allCalobj.addItem(s, selectProduct, setSelectProduct)
              }
            >
              Buy now
            </Button>
          </div>
        </Card>
      ))}
    </Section>
  );
}

export default SpecialDis;
