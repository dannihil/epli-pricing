import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ColorSelector from "../components/ColorSelector";
import ChipComparison from "../components/ChipComparison";
import Specs from "../components/Specs";
import "../index.css";

import mbp16 from "/assets/group1.png";

function Pro16() {
  return (
    <div>
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Pro 16"</h1>
      </div>

      <ProductLayout
        image={mbp16}
        leftBottom={<Specs />}
        right={<ChipComparison />}
      />
    </div>
  );
}

export default Pro16;
