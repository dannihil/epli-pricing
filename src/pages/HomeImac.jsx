import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import "../index.css";

function HomeImac() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <BackButton />

      <h1 style={{ fontSize: "6vw", fontWeight: 800 }}>Verðlisti</h1>

      <div className="home-buttons">
        <button onClick={() => navigate("/imac")}>iMac</button>
        <button onClick={() => navigate("/imac-aukahlutir")}>
          iMac aukahlutir
        </button>
      </div>
      <div className="footer-ele">
        <img src="../assets/epli_logo.png" alt="Epli logo" className="logo" />
        <p>Laugavegur 182 | Smáralind | epli.is</p>
      </div>
    </div>
  );
}

export default HomeImac;
