import React from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import { usePricing, formatPrice } from "../hooks/usePricing";
import BackButton from "../components/BackButton";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function MacMini() {
  useInactivityRedirect();

  const { chips, loading } = usePricing("mac-mini-m4");

  return (
    <div className="neo-screen">
      <BackButton />

      <div
        className="neo-header-air"
        style={{ marginTop: "50px", marginBottom: "20px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            className="neo-product-image"
            src="/assets/mac-mini.png"
            alt="Mac mini"
          />
          <div>
            <h1>Mac mini</h1>
            <p className="neo-chip">M4 / M4 Pro chip</p>
          </div>
        </div>
      </div>

      {loading ? (
        <p style={{ padding: "20px", color: "#888" }}>Hleður...</p>
      ) : (
        <div className="neo-price-container">
          {chips.map((chip, ci) => (
            <React.Fragment key={chip.name}>
              {ci > 0 && <div className="neo-divider-air" />}
              <div className="neo-price-card">
                <p className="neo-chip" style={{ marginTop: "16px", marginBottom: "4px", color: "#222" }}>{chip.name}</p>
                {chip.variants.map((variant, i) => (
                  <React.Fragment key={`${variant.cpu}/${variant.gpu}`}>
                    {i > 0 && <div className="neo-divider-air" />}
                    <p className="neo-cpu">{variant.cpu} / {variant.gpu}</p>
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
                              <p className="neo-price">
                                {formatPrice(opt.price)}
                              </p>
                            )}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      <div style={{ marginTop: "100px", marginBottom: "-30px" }}>
        <BottomBanner productType="mac-mini" />
      </div>

      <div className="neo-specs">
        <div className="neo-spec-box">
          <h4>Tengimöguleikar</h4>
          <p>3× Thunderbolt 4</p>
          <p>2× USB-A</p>
          <p>HDMI 2.1</p>
          <p>3.5mm jack</p>
        </div>

        <div className="neo-spec-box">
          <h4>Nettenging</h4>
          <p>Wi-Fi 6E</p>
          <p>Bluetooth 5.3</p>
          <p>Gigabit Ethernet</p>
          <h4 style={{ marginTop: "12px" }}>Þyngd</h4>
          <p>0.67 kg</p>
        </div>
      </div>
    </div>
  );
}

export default MacMini;
