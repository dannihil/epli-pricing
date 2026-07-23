import React, { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import { usePricing, formatPrice } from "../hooks/usePricing";
import "../index.css";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

function AirM5() {
  useInactivityRedirect();

  const [size, setSize] = useState(13);
  const { variants, loading } = usePricing("macbook-air-m5", size);

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
      </div>

      <div
        className="segment-container"
        style={{ marginBottom: "20px", marginTop: "-50px" }}
      >
        <h3 style={{ marginTop: "33px" }}>Skjástærð: </h3>
        <div className="segmented-control">
          <button
            className={size === 13 ? "active" : ""}
            onClick={() => setSize(13)}
          >
            13"
          </button>
          <button
            className={size === 15 ? "active" : ""}
            onClick={() => setSize(15)}
          >
            15"
          </button>
        </div>
      </div>

      <div className="neo-price-container">
        {loading ? (
          <p style={{ padding: "20px", color: "#888" }}>
            Hleð gögnum, augnanblik..
          </p>
        ) : (
          variants.map((variant, i) => (
            <React.Fragment key={`${variant.cpu}/${variant.gpu}`}>
              {i > 0 && <div className="neo-divider-air" />}
              <div className="neo-price-card">
                <p className="neo-cpu">
                  {variant.cpu} / {variant.gpu}
                </p>
                <div className="neo-inner-price-container">
                  {variant.options.map((opt, j) => (
                    <React.Fragment key={opt.id}>
                      {j > 0 && <div className="neo-inner-divider" />}
                      <div className="neo-price-option">
                        <h2>{opt.storage} SSD</h2>
                        <p className="neo-ram">{opt.ram} RAM</p>
                        {opt.offer_price ? (
                          <>
                            <p
                              className="neo-price"
                              style={{
                                textDecoration: "line-through",
                                color: "#999",
                                fontSize: "1.5rem",
                              }}
                            >
                              {formatPrice(opt.price)}
                            </p>
                            <p className="neo-offer-price">
                              {formatPrice(opt.offer_price)}
                            </p>
                          </>
                        ) : (
                          <p className="neo-price">{formatPrice(opt.price)}</p>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))
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

      <h2 className="neo-accessories-heading">Vinsælir aukahlutir</h2>
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
            },
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
            },
            {
              model: "MXK63ZM/A",
              name: "Magic Mouse (USB-C)",
              color: "#1d1d1f",
              price: "23.990",
              image: "/assets/mxk63.jpg",
            },
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
            },
          ]}
        />
      </div>
    </div>
  );
}

export default AirM5;
