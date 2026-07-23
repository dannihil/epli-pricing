import { useNavigate } from "react-router-dom";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";

function HomeAir() {
  useInactivityRedirect();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #bbe2f0 100%)",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "80dvh",
          minHeight: "unset",
        }}
      >
        <div className="air-hero-text" style={{ marginTop: "40px" }}>
          <h1 className="air-hero-title">MacBook Air</h1>
          <p className="air-hero-tagline">Létt. Hröð. Ómissandi.</p>
          <button
            className="air-hero-button"
            onClick={() => navigate("/macbook-air-m5")}
          >
            Verðlisti M5
          </button>
        </div>

        <img
          className="header-img-air fade-in"
          src="/assets/air.png"
          alt="MacBook Air"
          style={{
            width: "100%",
            maxHeight: "60vh",
            objectFit: "contain",
            marginTop: "-25px",
            marginBottom: "-30px",
          }}
        />
      </div>

      <div className="air-spec-strip">
        <div className="air-spec-item">
          <span className="air-spec-value">13" eða 15"</span>
          <span className="air-spec-label">Skjástærð</span>
        </div>
        <div className="air-spec-divider" />
        <div className="air-spec-item">
          <span className="air-spec-value">Allt að 18 klst</span>
          <span className="air-spec-label">Rafhlaða</span>
        </div>
        <div className="air-spec-divider" />
        <div className="air-spec-item">
          <span className="air-spec-value">M5</span>
          <span className="air-spec-label">Flaga</span>
        </div>
      </div>
    </>
  );
}

export default HomeAir;
