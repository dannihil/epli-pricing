import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonMacStudio from "../components/ChipComparisonMacStudio";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function MacStudio() {
  useInactivityRedirect();

  return (
    <div className="home imac-page">
      <BackButton />
      <div className="page-header hero-header">
        <h1>Mac Studio</h1>
      </div>

      <ProductLayout
        leftBottom={<Specs model="mac-studio" />}
        right={<ChipComparisonMacStudio />}
      />

      <BottomBanner productType="imac" />
    </div>
  );
}

export default MacStudio;
