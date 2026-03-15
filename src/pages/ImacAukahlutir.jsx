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

      <div
        className="hero-video"
        style={{
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "#e0f7ff",
          position: "relative",
        }}
      >
        {!isSafari ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/assets/large_2x.webm" type="video/webm" />
            <img
              src="/assets/hero_static.png"
              alt="Hero fallback"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </video>
        ) : (
          <img
            src={`${framePrefix}${String(frameIndex).padStart(4, "0")}.png`}
            alt="Hero frame"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

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
