import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonNeo from "../components/ChipComparisonNeo";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function NeoPrice() {
  useInactivityRedirect();

  return (
    <div className="home imac-page">
      <BackButton />
      <div className="page-header hero-header">
        <h1>MacBook Neo</h1>
      </div>

      <ProductLayout
        leftBottom={<Specs model="macbook-neo" />}
        right={<ChipComparisonNeo />}
      />

      <BottomBanner productType="air" />
    </div>
  );
}

export default NeoPrice;
