import React from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import { usePricing, formatPrice } from "../hooks/usePricing";
import "../index.css";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

function NeoPrice() {
  useInactivityRedirect();

  const { variants, loading } = usePricing("macbook-neo");

  // Single chip/variant — flatten all options into one list
  const options = variants[0]?.options ?? [];

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
        {loading ? (
          <p style={{ padding: "20px", color: "#888" }}>
            Hleð gögnum, augnablik..
          </p>
        ) : (
          options.map((opt, i) => (
            <React.Fragment key={opt.id}>
              {i > 0 && <div className="neo-divider" />}
              <div className="neo-price-option">
                <h2>{opt.storage} SSD</h2>
                <p className="neo-ram">{opt.ram} Memory</p>
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
          <p>2x USB-C (1x USB 3, 1x USB 2)</p>
          <p>3.5mm jack</p>
        </div>

        <div className="neo-spec-box">
          <h4>Rafhlaða</h4>
          <p>Allt að 18 klst</p>
          <h4>Þyngd</h4>
          <p>1.23 kg</p>
        </div>
      </div>

      <h2 className="neo-accessories-heading">Vinsælir aukahlutir</h2>
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
      </div>
    </div>
  );
}

export default NeoPrice;
