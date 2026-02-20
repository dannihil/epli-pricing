import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonImac from "../components/ChipComparisonImac";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function Imac() {
  useInactivityRedirect();

  return (
    <div className="home imac-page">
      <BackButton />
      <div className="page-header hero-header">
        <h1>iMac 24"</h1>
      </div>

      <ProductLayout
        leftBottom={<Specs model="imac" />}
        right={<ChipComparisonImac />}
      />

      <BottomBanner productType="imac" />
    </div>
  );
}

export default Imac;
