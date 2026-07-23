import { useNavigate } from "react-router-dom";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import introVideo from "/assets/neo.mp4";
import "../index.css";

function Neo() {
  useInactivityRedirect();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container"
        style={{ height: "83dvh", minHeight: "unset" }}
      >
        <video
          className="intro-video fade-in"
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
        >
          <source src={introVideo} type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            bottom: "-45px",
            left: 0,
            right: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        />
        <div className="overlay-content">
          <h1 className="neo-title-overlay">Halló, Neo.</h1>
          <button
            className="video-button"
            onClick={() => navigate("/macbook-neo-price")}
          >
            Verðlisti
          </button>
        </div>
      </div>

      <div className="neo-spec-strip">
        <div className="air-spec-item">
          <span className="air-spec-value">1,23 kg</span>
          <span className="air-spec-label">Þyngd</span>
        </div>
        <div className="air-spec-divider" />
        <div className="air-spec-item">
          <span className="air-spec-value">Allt að 16 klst</span>
          <span className="air-spec-label">Rafhlaða</span>
        </div>
        <div className="air-spec-divider" />
        <div className="air-spec-item">
          <span className="air-spec-value">13"</span>
          <span className="air-spec-label">Liquid Retina skjár</span>
        </div>
      </div>
    </>
  );
}

export default Neo;
