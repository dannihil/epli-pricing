import { useNavigate } from "react-router-dom";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import "../index.css";

function HomeDesktop() {
  useInactivityRedirect();
  const navigate = useNavigate();

  return (
    <div className="neo-screen">
      <BackButton />

      <h1
        style={{ textAlign: "center", marginBottom: "32px", marginTop: "60px" }}
      >
        Verðlistar
      </h1>

      <div className="desktop-nav-grid">
        <div className="desktop-nav-tile" onClick={() => navigate("/mac-mini")}>
          <img
            src="/assets/mac-mini.png"
            alt="Mac mini"
            style={{ width: "40%" }}
          />
          <h2>Mac mini</h2>
          <p className="neo-chip">M4 / M4 Pro chip</p>
        </div>

        <div
          className="desktop-nav-tile"
          onClick={() => navigate("/mac-studio")}
        >
          <img src="/assets/mac-studio.png" alt="Mac Studio" />
          <h2>Mac Studio</h2>
          <p className="neo-chip">M4 Max / M3 Ultra chip</p>
        </div>

        <div
          className="desktop-nav-tile"
          onClick={() => navigate("/studio-display")}
        >
          <img
            src="/assets/studio-display.png"
            alt="Studio Display"
            style={{ width: "45%" }}
          />
          <h2>Studio Display</h2>
          <p className="neo-chip">27" 5K Retina</p>
        </div>

        <div
          className="desktop-nav-tile"
          onClick={() => navigate("/studio-display-xdr")}
        >
          <img src="/assets/studio-display-xdr.png" alt="Studio Display XDR" />
          <h2>Studio Display XDR</h2>
          <p className="neo-chip">27" 5K Retina XDR</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDesktop;
