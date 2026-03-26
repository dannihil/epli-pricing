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
        <img
          className="header-img fade-in"
          src="/assets/air.png"
          alt="MacBook Air"
        />

        <div className="overlay-content">
          <h1
            className="video-overlay"
            style={{ fontSize: "70px", fontWeight: "700" }}
          >
            MacBook Air
          </h1>
          <button
            className="video-button"
            onClick={() => navigate("/macbook-air")}
          >
            Verðlisti
          </button>
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
          MacBook Air M4 er framleidd úr yfir 50 prósent endurunnu efni og hefur
          endingargott ytra byrði.
        </h3>
      </div>
      <div>
        <FeatureSection
          title="Fáanleg í 13” og 15” skjástærðum"
          text="Apple M4 flögurnar gera MacBook Air allt að 23x hraðari en síðasta kynslóð MacBook Air með Intel-örgjörva, og allt að 2x hraðari en fyrsta kynslóð M1. Nýir orkumagrir örgjörvar sérhæfðir í að tryggja ein bestu afköstin í gervigreind sem fyrirfinnst í fartölvum. MacBook Air eru glæsilega þunnar og ótrúlega léttar fartölvur sem endast í allt að 18 klukkutíma á einni hleðslu, bjóða upp á bjarta litastillta skjái, tvöfalt hraðara þráðlaust net með WiFi 6e og geta nú tengst við tvo skjái. Ytra byrði er smíðað úr tveimur heilum álstykkjum sem gera tölvurnar harðgerðar og höggþolnar."
          image={"/assets/air2.png"}
          bgColor="#ffffff"
          titleColor="#2a2a2a"
        />

        <FeatureSection
          title="M4. Ofur hröð. Ofur kröftug."
          text="Apple hefur pakkað örgjörvanum, skjákortinu, vinnsluminni og fleiru saman í eina flögu, svo öll forritin þín — allt frá Microsoft 365 Copilot upp í Adobe Creative Cloud — Meiri hraði en nota minna afl."
          image={"/assets/m4.png"}
          reverse={true}
          bgColor="linear-gradient(180deg, #ffffff, #bbe2f0)"
          titleColor="linear-gradient(90deg, #022640, #5786AB)"
        />
      </div>
    </>
  );
}

export default AirPage;
