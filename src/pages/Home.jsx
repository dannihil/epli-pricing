import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <BackButton />

      <h1>Veldu MacBook</h1>

      <div className="home-buttons">
        <button onClick={() => navigate("/macbook-air")}>
          MacBook Air
        </button>

        <button onClick={() => navigate("/macbook-pro")}>
          MacBook Pro
        </button>
      </div>
    </div>
  );
}

export default Home;
