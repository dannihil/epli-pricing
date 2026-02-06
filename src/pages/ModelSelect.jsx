import "../index.css";

function ModelSelect() {
  const { product } = useParams();

  const options = {
    "macbook-air": ['MacBook Air 13"', 'MacBook Air 15"'],
    "macbook-pro": ['MacBook Pro 14"', 'MacBook Pro 16"'],
  };

  return (
    <div className="model-select">

      <img src="../assets/epli_logo.png" alt="Epli logo" className="logo" />

      <h1>
        {product === "macbook-air" ? "MacBook Air" : "MacBook Pro"}
      </h1>

      <div className="model-options">
        {options[product].map((item) => (
          <button key={item} className="model-button">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModelSelect;
