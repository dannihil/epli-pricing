import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonMacMini from "../components/ChipComparisonMacMini";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function MacMini() {
  useInactivityRedirect();

  return (
    <div className="home macmini-page">
      <BackButton />
      <div className="page-header hero-header">
        <h1>Mac mini</h1>
      </div>

      <ProductLayout
        leftBottom={<Specs model="mac-mini" />}
        right={<ChipComparisonMacMini />}
      />

      <BottomBanner productType="mac-mini" />
    </div>
  );
}

export default MacMini;
