import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparisonNeo from "../components/ChipComparisonNeo";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import ProductCard from "../components/ProductCard";
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

      <h1 style={{ marginTop: "-90px" }}>Vinsælir aukahlutir</h1>
      <div className="product-grid-prod-page" style={{ marginTop: "-80px" }}>
        <ProductCard
          variants={[
            {
              model: "MD3J4ZM/A",
              name: "Apple 20W USB-C hleðslutæki",
              color: "#e8e8e8",
              price: "4.990",
              image: "/assets/md3j4.jpg",
            },
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MW2K3ZM/A",
              name: "Apple 35W tvöfalt USB-C hleðslutæki",
              color: "#f5f5f7",
              price: "13.990",
              image: "/assets/mw2k3.jpg",
            },
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MW5M3ZM/A",
              name: "Apple USB-C í digital AV fjöltengi",
              color: "#f5f5f7",
              price: "16.990",
              image: "/assets/mw5m3.jpg",
            }, // white
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MXK53ZM/A",
              name: "Magic Mouse (USB-C)",
              color: "#f5f5f7",
              price: "18.990",
              image: "/assets/mxk53.jpg",
            }, // white
            {
              model: "MXK63ZM/A",
              name: "Magic Mouse (USB-C)",
              color: "#1d1d1f",
              price: "23.990",
              image: "/assets/mxk63.jpg",
            }, // black
          ]}
        />
      </div>
    </div>
  );
}

export default NeoPrice;
