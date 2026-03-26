import React from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

function NeoPriceTest() {
  useInactivityRedirect();
  return (
    <div className="neo-screen">
      <BackButton />
      <div className="neo-header">
        <img
          className="neo-product-image"
          src="/assets/neo_family.png"
          alt="MacBook"
        />

        <div>
          <h1>MacBook Neo</h1>
          <p className="neo-chip">A18 Pro chip</p>
          <p className="neo-cpu">6-core CPU / 5-core GPU</p>
        </div>
      </div>

      <div className="neo-price-container">
        <div className="neo-price-option">
          <h2>256GB SSD</h2>
          <p className="neo-ram">8GB Memory</p>
          <p className="neo-price">119.990 kr</p>
        </div>

        <div className="neo-divider" />

        <div className="neo-price-option">
          <h2>512GB SSD</h2>
          <p className="neo-ram">8GB Memory</p>
          <p className="neo-price">139.990 kr</p>
        </div>
      </div>

      <div className="neo-trade-banner">
        ♻️ Uppítökutilboð — Við gefum þér <strong>15.000 kr</strong> aukalega
        fyrir gömlu tölvuna þína.
        <p style={{ color: "#157c35" }}>
          <strong>Smelltu fyrir frekari upplýsingar</strong>
        </p>
      </div>

      <div className="neo-specs">
        <div className="neo-spec-box">
          <h4>Skjár</h4>
          <p>Liquid Retina</p>
          <p>2408×1506</p>
          <p>500 nits</p>
        </div>

        <div className="neo-spec-box">
          <h4>Tengimöguleikar</h4>
          <p> 2x USB-C (1x USB 3, 1x USB 2)</p>
          <p>3.5mm jack</p>
        </div>
      </div>

      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginTop: "-40px",
        }}
      >
        Vinsælir aukahlutir
      </h2>
      <div className="neo-product-grid-prod-page">
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

export default NeoPriceTest;
