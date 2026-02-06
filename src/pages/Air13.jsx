import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ColorSelector from "../components/ColorSelector";
import ChipComparison13 from "../components/ChipComparison13";
import Specs from "../components/Specs";
import "../index.css";

import mbp16 from "/assets/group1.png";

function Air13() {
  useInactivityRedirect(); // 👈 one line

  return (
    <div className="home">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Air 13"</h1>
      </div>

      <ProductLayout
        image={mbp16}
        leftBottom={<Specs model="macbook-air-13" />}
        right={<ChipComparison13 />}
      />
    </div>
  );
}

export default Air13;
