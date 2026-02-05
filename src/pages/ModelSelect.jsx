import { useParams } from "react-router-dom";

function ModelSelect() {
  const { product } = useParams();

  const options = {
    "macbook-air": [
      'MacBook Air 13"',
      'MacBook Air 15"',
    ],
    "macbook-pro": [
      'MacBook Pro 14"',
      'MacBook Pro 16"',
    ],
  };

  return (
    <div>
      <h1>
        {product === "macbook-air" ? "MacBook Air" : "MacBook Pro"}
      </h1>

      {options[product].map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}

export default ModelSelect;
