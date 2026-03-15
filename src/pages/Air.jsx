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
    <div className="home" style={{ background: "white" }}>
      <video autoPlay loop muted playsInline>
        <source src="/assets/video.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default Air15;
