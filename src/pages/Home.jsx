import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      <h1>Select a MacBook</h1>

      <button onClick={() => navigate("/macbook-air")}>
        MacBook Air
      </button>

      <button onClick={() => navigate("/macbook-pro")}>
        MacBook Pro
      </button>
    </div>
  );
}

export default Home;
