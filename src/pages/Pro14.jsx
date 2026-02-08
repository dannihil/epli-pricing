import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparison14 from "../components/ChipComparison14";
import ChipComparison16 from "../components/ChipComparison";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function Pro() {
  useInactivityRedirect();

  const [size, setSize] = useState("14");
  const is14 = size === "14";

  return (
    <div className="home">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Pro</h1>

        {/* Segmented control */}
        <div className="segment-container">
          <h3 style={{ marginTop: "33px" }}>Skjástærð: </h3>
          <div className="segmented-control">
            <button
              className={is14 ? "active" : ""}
              onClick={() => setSize("14")}
            >
              14"
            </button>
            <button
              className={!is14 ? "active" : ""}
              onClick={() => setSize("16")}
            >
              16"
            </button>
          </div>
        </div>
      </div>

      <ProductLayout
        leftBottom={
          <Specs model={is14 ? "macbook-pro-14" : "macbook-pro-16"} />
        }
        right={is14 ? <ChipComparison14 /> : <ChipComparison16 />}
      />

      <BottomBanner />
    </div>
  );
}

export default Pro;
