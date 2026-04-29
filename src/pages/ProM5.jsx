import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonProM514 from "../components/ChipComparisonProM514";
import ChipComparisonProM516 from "../components/ChipComparisonProM516";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import ProductCard from "../components/ProductCard";
import "../index.css";

function ProM5() {
  useInactivityRedirect();

  const [size, setSize] = useState("14");
  const is14 = size === "14";

  return (
    <div className="home pro-page">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Pro</h1>
        {/*<h2 style={{ color: "red", marginTop: "-10px" }}>
          Fermingartilboð gildir til 9 apríl 2026
        </h2>*/}

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
        right={is14 ? <ChipComparisonProM514 /> : <ChipComparisonProM516 />}
      />

      <BottomBanner productType="pro" />
    </div>
  );
}

export default ProM5;
