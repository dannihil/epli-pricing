import { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import ProductCard from "../components/ProductCard";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import "../index.css";

function ImacAukahlutir() {
  useInactivityRedirect();

  return (
    <div className="home imac-page">
      <BackButton />

      <div className="page-header hero-header">
        <h1>iMac aukahlutir</h1>
      </div>

      <div className="products-wrapper">
        <div className="product-grid">
          {/* ... same ProductCard components ... */}
        </div>
      </div>
    </div>
  );
}

export default ImacAukahlutir;
