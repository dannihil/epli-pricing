import React from "react";
import "../index.css";

function FeatureSection({ title, text, image, reverse, bgColor, titleColor }) {
  return (
    <section
      className={`feature-section ${reverse ? "reverse" : ""}`}
      style={{ background: bgColor }}
    >
      <div className="feature-container">
        <div className="feature-image">
          <img src={image} alt="feature" />
        </div>

        <div className="feature-text">
          <h3
            style={{
              background: titleColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
