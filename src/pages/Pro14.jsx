import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ColorSelector from "../components/ColorSelector";
import ChipComparison14 from "../components/ChipComparison14";
import Specs from "../components/Specs";
import "../index.css";

import mbp16 from "/assets/group1.png";

function Pro14() {
  return (
    <div className="home">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Pro 14"</h1>
      </div>

      <ProductLayout
        image={mbp16}
        leftBottom={<Specs model="macbook-pro-14" />}
        right={<ChipComparison14 />}
      />
    </div>
  );
}

export default Pro14;
