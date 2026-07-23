import React from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import "../index.css";

const GLASS_OPTIONS = [
  {
    name: "Standard Glass",
    stands: [
      { label: "Tilt stand", price: "299.990 kr" },
      { label: "Tilt & height stand", price: "369.990 kr" },
      { label: "VESA", price: "299.990 kr" },
    ],
  },
  {
    name: "Nano-texture Glass",
    stands: [
      { label: "Tilt stand", price: "349.990 kr" },
      { label: "Tilt & height stand", price: "419.990 kr" },
      { label: "VESA", price: "349.990 kr" },
    ],
  },
];

function StudioDisplay() {
  useInactivityRedirect();

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
            src="/assets/studio-display.png"
            alt="Studio Display"
            style={{ maxWidth: "180px" }}
          />
          <div>
            <h1>Studio Display</h1>
            <p className="neo-chip">27" 5K Retina skjár</p>
          </div>
        </div>
      </div>

      <div className="neo-price-container">
        {GLASS_OPTIONS.map((glass, gi) => (
          <React.Fragment key={glass.name}>
            {gi > 0 && (
              <div className="neo-divider-air" style={{ height: "550px" }} />
            )}
            <div className="neo-price-card">
              <p
                className="neo-chip"
                style={{
                  marginTop: "16px",
                  marginBottom: "4px",
                  color: "#222",
                }}
              >
                {glass.name}
              </p>
              <div
                className="neo-inner-price-container"
                style={{ flexDirection: "column", gap: "12px" }}
              >
                {glass.stands.map((stand, si) => (
                  <React.Fragment key={stand.label}>
                    {si > 0 && (
                      <div
                        className="neo-inner-divider"
                        style={{
                          width: "80%",
                          height: "1px",
                          margin: "0 auto",
                        }}
                      />
                    )}
                    <div className="neo-price-option">
                      <h2 style={{ fontSize: "1.1rem" }}>{stand.label}</h2>
                      <p className="neo-price">{stand.price}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="neo-specs">
        <div className="neo-spec-box">
          <h4>Skjár</h4>
          <p>27" 5K Retina</p>
          <p>5120×2880</p>
          <p>600 nits</p>
          <p>60Hz</p>
        </div>

        <div className="neo-spec-box">
          <h4>Hljóð &amp; Myndavél</h4>
          <p>12MP landscape myndavél</p>
          <p>6 hátalarar með Spatial Audio</p>
        </div>

        <div className="neo-spec-box">
          <h4>Tengimöguleikar</h4>
          <p>2x Thunderbolt 5</p>
          <p>2x USB-C</p>
        </div>
      </div>
    </div>
  );
}

export default StudioDisplay;
