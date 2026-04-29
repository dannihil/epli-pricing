import React, { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

function AirM5() {
  useInactivityRedirect();

  const [size, setSize] = useState("13");
  const is13 = size === "13";
  return (
    <div className="neo-screen">
      <BackButton />
      <div className="neo-header-air" style={{ marginBottom: "-30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            className="neo-product-image"
            src="/assets/air.png"
            alt="MacBook"
          />

          <div>
            <h1>MacBook Air</h1>
            <p className="neo-chip">M5 chip</p>
          </div>
        </div>

        {/*<div className="neo-order-tag">
          <h2>Fermingartilboð</h2>
          <p>Gildir til 9 apríl</p>
        </div>*/}
      </div>

      <div
        className="segment-container"
        style={{ marginBottom: "20px", marginTop: "-50px" }}
      >
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

      <div className="neo-price-container">
        {size === "13" ? (
          <>
            {/* ===== 13 INCH PRICES (your current code) ===== */}
            <div className="neo-price-card">
              <p className="neo-cpu">10-core CPU / 8-core GPU</p>
              <div className="neo-inner-price-container">
                <div className="neo-price-option">
                  <h2>512GB SSD</h2>
                  <p className="neo-ram">16GB RAM</p>
                  <p className="neo-price">219.990 kr</p>
                  {/*<p className="neo-offer-price">229.990 kr</p>*/}
                </div>
              </div>
            </div>

            <div className="neo-divider-air" />

            <div className="neo-price-card">
              <p className="neo-cpu">10-core CPU / 10-core GPU</p>
              <div className="neo-inner-price-container">
                <div className="neo-price-option">
                  <h2>1TB SSD</h2>
                  <p className="neo-ram">16GB RAM</p>
                  <p className="neo-price">259.990 kr</p>
                  {/*<p className="neo-offer-price">229.990 kr</p>*/}
                </div>
                <div className="neo-inner-divider" />
                <div className="neo-price-option">
                  <h2>1TB SSD</h2>
                  <p className="neo-ram">24GB RAM</p>
                  <p className="neo-price">299.990 kr</p>
                  {/*<p className="neo-offer-price">229.990 kr</p>*/}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ===== 15 INCH PRICES (CHANGE THESE VALUES) ===== */}

            <div className="neo-price-card">
              <p className="neo-cpu">10-core CPU / 10-core GPU</p>
              <div className="neo-inner-price-container">
                <div className="neo-price-option">
                  <h2>512GB SSD</h2>
                  <p className="neo-ram">16GB RAM</p>
                  <p className="neo-price">259.990 kr</p>
                  {/*<p className="neo-offer-price">199.990 kr</p>*/}
                </div>
                <div className="neo-inner-divider" />
                <div className="neo-price-option">
                  <h2>1TB SSD</h2>
                  <p className="neo-ram">16GB RAM</p>
                  <p className="neo-price">299.990 kr</p>
                  {/*<p className="neo-offer-price">229.990 kr</p>*/}
                </div>
                <div className="neo-inner-divider" />
                <div className="neo-price-option">
                  <h2>1TB SSD</h2>
                  <p className="neo-ram">24GB RAM</p>
                  <p className="neo-price">339.990 kr</p>
                  {/*<p className="neo-offer-price">259.990 kr</p>*/}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="neo-trade-banner">
        ♻️ Uppítaka - Við tökum gömlu tækin þín upp í ný!
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
              model: "ST-P6SS",
              name: "Satechi 6-in-1 millistykki",
              color: "#e8e8e8",
              price: "9.990",
              image: "/assets/ST-P6SS.jpg",
            },
            {
              model: "ST-P6SM",
              name: "Satechi 6-in-1 millistykki",
              color: "#959595",
              price: "9.990",
              image: "/assets/ST-P6SM.jpg",
            },
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MW5L3ZM/A",
              name: "Apple USB-C í USB-A breytistykki",
              color: "#f5f5f7",
              price: "4.990",
              image: "/assets/mw5l3.png",
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
        <ProductCard
          variants={[
            {
              model: "MXP93ZM/A",
              name: "Airpods 4 með hljóðeinangrun",
              color: "#f5f5f7",
              price: "34.990",
              image: "/assets/mxp63.png",
            }, // white
          ]}
        />
      </div>
    </div>
  );
}

export default AirM5;
