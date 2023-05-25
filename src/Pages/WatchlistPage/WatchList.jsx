import "./WatchList.css";
import WatchListCard from "./WatchListCard";
import {
  SelectContexts,
  AllfunContext,
} from "../../DataContext/ProductContext";
import { useContext } from "react";

function WatchList() {
  const [selectProduct, setSelectProduct, watchList, setWatchList] =
    useContext(SelectContexts);
  const allCalobj = useContext(AllfunContext);
  return (
    <div className="watch-list-page">
      {watchList && (
        <WatchListCard
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
          watchList={watchList}
          setWatchList={setWatchList}
          allCalobj={allCalobj}
        />
      )}
    </div>
  );
}

export default WatchList;
