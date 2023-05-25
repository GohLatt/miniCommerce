import Section from "../../Common/Section";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

function AllproductMain({ selectProduct, setSelectProduct, allCalobj }) {
  return (
    <Section className="all-main">
      <LeftMain
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
        allCalobj={allCalobj}
      />
      <RightMain />
    </Section>
  );
}

export default AllproductMain;
