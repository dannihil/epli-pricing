import { useState } from "react";
import "../index.css";

function ChipOption({ title, variants = [], battery }) {
  if (!variants.length) return null;

  return (
    <div className="chip-card">
      <h2>{title}</h2>

      {/* ONE dark container */}
      <div className="variant-container">
        {/* CPU / GPU headers */}
        <div className="variant-headers">
          {variants.map((variant) => (
            <div key={variant.id} className="variant-header">
              {variant.cpu} / {variant.gpu}
            </div>
          ))}
        </div>

        {/* Prices */}
        <div className="pricing-grid">
          {variants.map((variant) =>
            variant.storageOptions.map((opt, i) => (
              <div key={`${variant.id}-${i}`} className="storage-option">
                <div className="storage-top">
                  <div>{opt.storage} SSD</div>
                  <div>{opt.ram} memory</div>
                </div>
                <div className="storage-price">
                  {opt.price}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}

export default ChipOption;
