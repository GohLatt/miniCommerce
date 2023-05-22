import Card from "../../../Common/Card";
import catKey from "./CategoryKeyword";
function CatBox() {
  return (
    <Card className="box-all">
      <ul>
        {catKey.map((cat) => (
          <li key={cat.text}>{cat.text}</li>
        ))}
      </ul>
    </Card>
  );
}

export default CatBox;
