import { Search } from "@material-ui/icons";
import Card from "../../../Common/Card";
import catKey from "./CategoryKeyword";
function CatBox({ query, setQuery, setShow }) {
  const search = (text) => {
    setQuery(text);
    setShow(true);
  };
  return (
    <Card className="box-all">
      <ul>
        {catKey.map((cat) => (
          <li key={cat.text} onClick={() => search(cat.text)}>
            {cat.text}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default CatBox;
