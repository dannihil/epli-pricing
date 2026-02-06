import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function Product({ product }) {
  const navigate = useNavigate();

  const title =
    product === "air" ? "MacBook Air" : "MacBook Pro";

  const routes =
    product === "air"
      ? [
          { label: '13"', path: "/macbook-air/13" },
          { label: '15"', path: "/macbook-air/15" },
        ]
      : [
          { label: '14"', path: "/macbook-pro/14" },
          { label: '16"', path: "/macbook-pro/16" },
        ];

  return (
    <div>
      <BackButton />
      <div className="home">


        <h1>{title}</h1>
        <div className="home-buttons">
          {routes.map((r) => (
            <button key={r.path} onClick={() => navigate(r.path)}>
              {title} {r.label}
            </button>
          ))}
        </div>
        <div className="footer-ele">
          <img src="../assets/epli_logo.png" alt="Epli logo" className="logo" />
          <p>Laugavegur 182 | Smáralind | epli.is</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
