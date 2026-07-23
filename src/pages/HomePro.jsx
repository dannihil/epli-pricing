import { useNavigate } from "react-router-dom";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";

function HomePro() {
  useInactivityRedirect();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container"
        style={{
          background: "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "80dvh",
          minHeight: "unset",
        }}
      >
        <div className="air-hero-text" style={{ marginTop: "40px" }}>
          <h1 className="air-hero-title" style={{ color: "#ffffff" }}>
            MacBook Pro
          </h1>
          <p className="air-hero-tagline" style={{ color: "#aaaaaa" }}>
            Fyrir fagfólkið.
          </p>
          <button
            className="air-hero-button"
            style={{ background: "#ffffff", color: "#000000" }}
            onClick={() => navigate("/macbook-pro-m5")}
          >
            Verðlisti M5
          </button>
        </div>

        <img
          className="header-img-pro fade-in"
          src="/assets/pro.png"
          alt="MacBook Pro"
          style={{
            maxWidth: "45%",
            maxHeight: "38vh",
            objectFit: "contain",
            marginTop: "30px",
            marginBottom: "-30px",
          }}
        />
      </div>

      <div
        className="air-spec-strip"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <div className="air-spec-item">
          <span className="air-spec-value" style={{ color: "#ffffff" }}>
            14" eða 16"
          </span>
          <span className="air-spec-label" style={{ color: "#888888" }}>
            Skjástærð
          </span>
        </div>
        <div className="air-spec-divider" style={{ background: "#444" }} />
        <div className="air-spec-item">
          <span className="air-spec-value" style={{ color: "#ffffff" }}>
            Allt að 24 klst
          </span>
          <span className="air-spec-label" style={{ color: "#888888" }}>
            Rafhlaða
          </span>
        </div>
        <div className="air-spec-divider" style={{ background: "#444" }} />
        <div className="air-spec-item">
          <span className="air-spec-value" style={{ color: "#ffffff" }}>
            M5 · M5 Pro · M5 Max
          </span>
          <span className="air-spec-label" style={{ color: "#888888" }}>
            Flaga
          </span>
        </div>
      </div>
    </>
  );
}

export default HomePro;
