import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 style={{ fontSize: "6vw", fontWeight: 800 }}>Verðlisti</h1>

      <div className="home-buttons">
        <button onClick={() => navigate("/home-laptop")}>Fartölvur</button>
        <button onClick={() => navigate("/home-desktop")}>
          Mac mini/Mac Studio
        </button>
        <button onClick={() => navigate("/home-imac")}>iMac</button>
        <button onClick={() => navigate("/macbook-neo")}>MacBook Neo</button>
      </div>
      <div className="footer-ele">
        <img src="../assets/epli_logo.png" alt="Epli logo" className="logo" />
        <p>Laugavegur 182 | Smáralind | epli.is</p>
      </div>
    </div>
  );
}

export default Home;
