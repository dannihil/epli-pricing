import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparison13 from "../components/ChipComparison13";
import ChipComparison15 from "../components/ChipComparison15";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function Air() {
  useInactivityRedirect();

  const [size, setSize] = useState("13");

  const is13 = size === "13";

  return (
    <div className="home air-page">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Air</h1>

        {/* Segmented control */}
        <div className="segment-container">
          <h3 style={{ marginTop: "33px" }}>Skjástærð: </h3>
          <div className="segmented-control">
            <button
              className={is13 ? "active" : ""}
              onClick={() => setSize("13")}
            >
              13"
            </button>
            <button
              className={!is13 ? "active" : ""}
              onClick={() => setSize("15")}
            >
              15"
            </button>
          </div>
        </div>
      </div>

      <ProductLayout
        leftBottom={
          <Specs model={is13 ? "macbook-air-13" : "macbook-air-15"} />
        }
        right={is13 ? <ChipComparison13 /> : <ChipComparison15 />}
      />

      <BottomBanner productType="air" />
    </div>
  );
}

export default Air;
