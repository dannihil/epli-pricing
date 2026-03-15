import { useState } from "react";
import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductLayout from "../components/ProductLayout";
import ChipComparison13 from "../components/ChipComparison13";
import ChipComparison15 from "../components/ChipComparison15";
import Specs from "../components/Specs";
import BottomBanner from "../components/BottomBanner";
import "../index.css";
import ProductCard from "../components/ProductCard";

function Air() {
  useInactivityRedirect();

  const [size, setSize] = useState("13");

  const is13 = size === "13";

  return (
    <div className="home air-page">
      <BackButton />

      <div className="page-header hero-header">
        <h1>MacBook Air</h1>
        <h2 style={{ color: "red", marginTop: "-10px" }}>
          Fermingartilboð gildir til 9 apríl 2026
        </h2>

        {/* Segmented control */}
        <div className="segment-container">
          <h3 style={{ marginTop: "33px" }}>Skjástærð: </h3>
          <div className="segmented-control">
            <button
              className={is13 ? "active" : ""}
              onClick={() => setSize("13")}
            >
              13"
            </button>
            <button
              className={!is13 ? "active" : ""}
              onClick={() => setSize("15")}
            >
              15"
            </button>
          </div>
        </div>
      </div>

      <ProductLayout
        leftBottom={
          <Specs model={is13 ? "macbook-air-13" : "macbook-air-15"} />
        }
        right={is13 ? <ChipComparison13 /> : <ChipComparison15 />}
      />

      <BottomBanner productType="air" />

      <h1 style={{ marginTop: "-90px" }}>Vinsælir aukahlutir</h1>
      <div className="product-grid-prod-page">
        <ProductCard
          variants={[
            {
              model: "ST-P6SS",
              name: "Satechi 6-in-1 millistykki",
              color: "#e8e8e8",
              price: "9.990",
              image: "/assets/ST-P6SS.jpg",
            },
            {
              model: "ST-P6SM",
              name: "Satechi 6-in-1 millistykki",
              color: "#959595",
              price: "9.990",
              image: "/assets/ST-P6SM.jpg",
            },
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MW5L3ZM/A",
              name: "Apple USB-C í USB-A breytistykki",
              color: "#f5f5f7",
              price: "4.990",
              image: "/assets/mw5l3.png",
            }, // white
            {
              model: "MW5L3ZM/A",
              name: "Apple USB-C í USB-A breytistykki",
              color: "#f5f5f7",
              price: "4.990",
              image: "/assets/mw5l3.png",
            }, // white
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MXK53ZM/A",
              name: "Magic Mouse (USB-C)",
              color: "#f5f5f7",
              price: "18.990",
              image: "/assets/mxk53.jpg",
            }, // white
            {
              model: "MXK63ZM/A",
              name: "Magic Mouse (USB-C)",
              color: "#1d1d1f",
              price: "23.990",
              image: "/assets/mxk63.jpg",
            }, // black
          ]}
        />
        <ProductCard
          variants={[
            {
              model: "MXP93ZM/A",
              name: "Airpods 4 með hljóðeinangrun",
              color: "#f5f5f7",
              price: "34.990",
              image: "/assets/mxp63.png",
            }, // white
          ]}
        />
      </div>
    </div>
  );
}

export default Air;
