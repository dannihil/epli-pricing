import React from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";
import ProductCard from "../components/ProductCard";

function AirTest() {
  useInactivityRedirect();
  return (
    <div className="neo-screen">
      <div className="neo-header">
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <img
            className="neo-product-image"
            src="/assets/air.png"
            alt="MacBook"
          />

          <div>
            <h1>MacBook Air</h1>
            <p className="neo-chip">M4 chip</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "red",
            padding: "0px 15px",
            borderRadius: "25px",
          }}
        >
          <h2>Fermingartilboð</h2>
          <p>Gildir til 9 apríl</p>
        </div>
      </div>

      <div className="neo-price-container">
        <div className="neo-price-card">
          <p className="neo-cpu">10-core CPU / 8-core GPU</p>
          <div className="neo-inner-price-container">
            <div className="neo-price-option">
              <h2>256GB SSD</h2>
              <p className="neo-ram">16GB RAM</p>
              <p className="neo-price">189.990 kr</p>
              <p className="neo-offer-price">179.990 kr</p>
            </div>
          </div>
        </div>

        <div className="neo-divider" />

        <div>
          <div className="neo-price-card">
            <p className="neo-cpu">10-core CPU / 10-core GPU</p>
            <div className="neo-inner-price-container">
              <div className="neo-price-option">
                <h2>512GB SSD</h2>
                <p className="neo-ram">16GB RAM</p>
                <p className="neo-price">229.990 kr</p>
                <p className="neo-offer-price">219.990 kr</p>
              </div>
              <div className="neo-inner-divider" />
              <div className="neo-price-option">
                <h2>512GB SSD</h2>
                <p className="neo-ram">24GB RAM</p>
                <p className="neo-price">269.990 kr</p>
                <p className="neo-offer-price">259.990 kr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="neo-trade-banner">
        ♻️ Uppítökutilboð — Við gefum þér <strong>15.000 kr</strong> aukalega
        fyrir gömlu tölvuna þína.
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
          <p>4× Thunderbolt 5</p>
          <p>2× USB-C</p>
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

export default AirTest;
