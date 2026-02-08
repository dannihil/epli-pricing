import "../index.css";

function ProductLayout({ image, leftBottom, right }) {
  return (
    <div className="product-layout">
      <div className="product-left">
        <div className="product-bottom">{leftBottom}</div>
      </div>

      <div className="product-right centered-panel">{right}</div>
    </div>
  );
}

export default ProductLayout;
