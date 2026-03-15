import { useState } from "react";

function ProductCard({ variants }) {
  const [selected, setSelected] = useState(0);

  const activeVariant = variants[selected];

  return (
    <div className="product-card">
      <div className="product-content">
        <div className="product-image">
          <img src={activeVariant.image} alt={activeVariant.name} />
        </div>

        <div>
          <p className="product-model">{activeVariant.model}</p>
          <h2 className="product-name">{activeVariant.name}</h2>
        </div>

        {variants && variants.length > 1 && (
          <div className="color-options">
            {variants.map((variant, index) => (
              <button
                key={index}
                className={`color-button ${selected === index ? "active" : ""}`}
                onClick={() => setSelected(index)}
              >
                <span
                  className="color-dot"
                  style={{ backgroundColor: variant.color }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="product-price-section">
        <p className="product-price">Verð: {activeVariant.price} kr</p>
      </div>
    </div>
  );
}

export default ProductCard;
