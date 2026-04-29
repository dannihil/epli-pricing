import { useState } from "react";
import { useNavigate } from "react-router-dom";
import introText from "/assets/neo.png";
import FeatureSection from "../components/FeatureSection";
import "../index.css";

function AirPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #bbe2f0  100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{ fontSize: "70px", fontWeight: "700", marginTop: "40px" }}
          >
            MacBook Air
          </h1>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button
              style={{}}
              className="video-button-air"
              onClick={() => navigate("/macbook-air-m4")}
            >
              Verðlisti M4
            </button>

            <button
              className="video-button-air"
              onClick={() => navigate("/macbook-air-m5")}
            >
              Verðlisti M5
            </button>
          </div>
          <img
            className="header-img-air fade-in"
            src="/assets/air.png"
            alt="MacBook Air"
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: "30px 100px",
          background: "linear-gradient(180deg, #bbe2f0  0%, #ffffff 100%)",
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            background: "linear-gradient(90deg, #022640, #5786AB",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Létt og hröð.
        </h1>
        <h1
          style={{
            background: "linear-gradient(90deg, #0095ff 0%, #ff00ee 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "30px",
            fontWeight: 700,
            marginTop: "0px",
          }}
        >
          Knúin af Apple Silicone.
        </h1>
        <h3 style={{ color: "#666565" }}>
          Ótrúlega létt og aðeins 11,3 millimetra þykk og því fullkomin fyrir
          fólk á ferðinni — og svo hún passar auðveldlega í töskuna þína!
          MacBook Air M5 er framleidd úr yfir 50 prósent endurunnu efni og hefur
          endingargott ytra byrði.
        </h3>
      </div>
      <div>
        <FeatureSection
          title="Sköpuð fyrir líf á ferðinni."
          text="MacBook Air er ótrúlega létt, vegur aðeins 1,23 kg og er rúmlega sentimetri á þykkt. Hún er hönnuð til að passa í töskuna þína svo þú getir alltaf tekið hana með þér. Auk þess er hún framleidd úr yfir 50% endurunnu efni og er með harðgerða álumgjörð sem þolir daglega notkun."
          image={"/assets/air2.png"}
          bgColor="#ffffff"
          titleColor="#2a2a2a"
        />

        <FeatureSection
          title="M5. Ofur hröð. Megaskilvirk."
          text="M5-flagan er ekki bara uppfærsla. Hún breytir öllu og skilar ótrúlegum afköstum fyrir stór verkefni. Búðu þig undir flugtak."
          image={"/assets/m5_chip.png"}
          reverse={true}
          bgColor="linear-gradient(180deg, #ffffff, #bbe2f0)"
          titleColor="linear-gradient(90deg, #022640, #5786AB)"
        />
      </div>
    </>
  );
}

export default AirPage;
