import "../index.css";

function ChipOption({ title, variants = [], battery, layout }) {
  if (!variants.length) return null;

  return (
    <div className={`chip-card ${layout || ""}`}>
      <h2>{title}</h2>

      <div className="variant-container">
        {/* CPU / GPU headers */}
        <div className="variant-headers">
          {variants.map((variant) => (
            <div key={variant.id} className="variant-header"></div>
          ))}
        </div>

        {/* Prices */}
        <div className="pricing-grid">
          {variants.map((variant) =>
            variant.standOptions.map((opt, i) => (
              <div key={`${variant.id}-${i}`} className="storage-option">
                <div className="storage-top-SD">
                  <div>{opt.stand}</div>
                </div>

                {/* PRICE LOGIC */}
                {opt.offerPrice ? (
                  <div className="storage-price">
                    <div className="normal-price">{opt.price}</div>
                    <div className="offer-price">{opt.offerPrice}</div>
                  </div>
                ) : (
                  <div className="storage-price">{opt.price}</div>
                )}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default ChipOption;
