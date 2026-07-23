import React, { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import { usePricing, formatPrice } from "../hooks/usePricing";
import BackButton from "../components/BackButton";
import BottomBanner from "../components/BottomBanner";
import "../index.css";

function ProM5() {
  useInactivityRedirect();

  const [size, setSize] = useState(14);
  const { chips, loading } = usePricing("macbook-pro-m5", size);

  return (
    <div className="neo-screen">
      <BackButton />

      <div className="neo-header-air" style={{ marginBottom: "-30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            className="neo-product-image"
            src="/assets/mbpro.png"
            alt="MacBook Pro"
          />
          <div>
            <h1>MacBook Pro</h1>
            <p className="neo-chip">M5 / M5 Pro / M5 Max chip</p>
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
            className={size === 14 ? "active" : ""}
            onClick={() => setSize(14)}
          >
            14"
          </button>
          <button
            className={size === 16 ? "active" : ""}
            onClick={() => setSize(16)}
          >
            16"
          </button>
        </div>
      </div>

      {loading ? (
        <p style={{ padding: "20px", color: "#888" }}>Hleður...</p>
      ) : (
        chips.map((chip, ci) => (
          <div key={chip.name}>
            <h2
              style={{ marginTop: ci === 0 ? 0 : "32px", marginBottom: "12px" }}
            >
              {chip.name}
            </h2>
            <div className="neo-price-container">
              {chip.variants.map((variant, i) => (
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
                              <p className="neo-price">
                                {formatPrice(opt.price)}
                              </p>
                            )}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: "100px", marginBottom: "-30px" }}>
        <BottomBanner productType="pro" />
      </div>

      <div className="neo-specs">
        <div className="neo-spec-box">
          <h4>Skjár</h4>
          <p>Liquid Retina XDR</p>
          <p>{size === 14 ? "3024×1964" : "3456×2234"}</p>
          <p>1000 nits (1600 nits HDR)</p>
          <p>120Hz ProMotion</p>
        </div>

        <div className="neo-spec-box">
          <h4>Tengimöguleikar</h4>
          <p>Thunderbolt 5 / USB 4</p>
          <p>SD kortalesari</p>
          <p>HDMI (4K 240Hz)</p>
        </div>
      </div>
    </div>
  );
}

export default ProM5;
