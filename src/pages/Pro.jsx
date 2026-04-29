import { useState } from "react";
import { useNavigate } from "react-router-dom";
import introText from "/assets/neo.png";
import FeatureSection from "../components/FeatureSection";
import "../index.css";

function ProPage() {
  const navigate = useNavigate();

  return (
    <div className="pro-main-page">
      <div
        className="container"
        style={{
          background: "#000",
        }}
      >
        <div className="overlay-content-pro">
          <h1
            className="video-overlay"
            style={{ fontSize: "70px", fontWeight: "700", color: "#fff" }}
          >
            MacBook Pro
          </h1>
          <div style={{ display: "flex", gap: "20px", marginTop: "170px" }}>
            <button
              className="video-button-pro"
              onClick={() => navigate("/macbook-pro-m4")}
            >
              Verðlisti M4
            </button>
            <button
              className="video-button-pro"
              onClick={() => navigate("/macbook-pro-m5")}
            >
              Verðlisti M5
            </button>
          </div>
          <img
            className="header-img-pro fade-in"
            src="/assets/pro.png"
            alt="MacBook Pro"
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: "30px 100px",
          background: "linear-gradient(180deg, #000000  0%, #000000 100%)",
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            background:
              "linear-gradient(90deg, #e4f6f0, #9dcfca 31%, #6b95ac 68%, #45657d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hraðinn liggur í nafninu.
        </h1>
      </div>
      <div className="pro-m5-family-section">
        <img
          src="assets/m5_family.png"
          alt="m5_ chip family"
          style={{
            height: "400px",
            borderRadius: "25px",
            margin: "30px 0px",
          }}
        />
      </div>

      <div className="pro-text-section">
        <h1>
          M5. M5 Pro. M5 Max. <br />
          Veldu hraða.
        </h1>

        <p>
          M5, M5 Pro og M5 Max eru þróuðustu flögur sem Apple hefur hannað fyrir
          atvinnufartölvur. Hver flaga skilar stórkostlegum afköstum í ein- og
          margþráða örgjörvaverkefnum og hraðvirkara sameiginlegu minni{" "}
          <span>
            – sem gefur þér hraða sem þú hélst ekki að væri mögulegur.
          </span>{" "}
          SSD-geymslan er allt að tvöfalt hraðvirkari en áður. Og með öflugum
          Neural Accelerator geturðu þotið í gegnum gervigreindarverkefni á
          ótrúlegum hraða.
        </p>
        <p id="sub-section">Allt að 8x meiri gervigreindarafköst en M1-línan</p>
        <p>
          Öflugur Neural Accelerator er innbyggður í hvern skjákjarna í
          M5-flögunum, sem{" "}
          <span>gerir gervigreindarverkefni mun hraðvirkari</span> – eins og að
          búa til myndir í dreifilíkönum og táknmyndun í stórum tungumálalíkönum
          (LLM). 16 kjarna Neural Engine knýr Apple Intelligence-eiginleikana og
          gerir gervigreind í tækinu bæði öfluga og orkunýtna.
        </p>
        <img
          src="assets/mbp-content.png"
          alt="macbook pro"
          style={{ height: "400px", padding: "40px" }}
        />
        <p>
          Keyrðu grafíkfrek verkflæði með viðbragðsflýti sem heldur í við
          ímyndunaraflið. Hver flaga í M5-línunni er með skjákort með
          endurbættum skyggikjörnum og þriðju kynslóðar Ray Tracing, þannig að
          þrívíddarlíkön verða skarpari og skýrari en nokkru sinni fyrr. Dynamic
          Caching fínstillir minnið á flögunni, sem eykur nýtingu skjákortsins
          til muna – og skilar mikilli aukningu í afköstum fyrir kröfuhörðustu
          forritin og leikina.
        </p>
      </div>
    </div>
  );
}

export default ProPage;
