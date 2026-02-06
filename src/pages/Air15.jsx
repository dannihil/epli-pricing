import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ColorSelector from "../components/ColorSelector";
import ChipComparison15 from "../components/ChipComparison15";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

import mbp16 from "/assets/group1.png";

function Air15() {
  useInactivityRedirect(); // 👈 one line

  return (
    <div className="home">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Air 15"</h1>
      </div>

      <ProductLayout
        image={mbp16}
        leftBottom={<Specs model="macbook-air-15" />}
        right={<ChipComparison15 />}
      />

            {/* Full-width bottom element */}
      <BottomBanner />
    </div>
  );
}

export default Air15;
