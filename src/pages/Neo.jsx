import { useState } from "react";
import { useNavigate } from "react-router-dom";
import introVideo from "/assets/neo.mp4";
import introText from "/assets/neo.png";
import FeatureSection from "../components/FeatureSection";
import "../index.css";

function Neo() {
  const [videoEnded, setVideoEnded] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <video
          className="intro-video fade-in"
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          onLoadedData={() => setLoaded(true)}
          onEnded={() => setVideoEnded(true)}
        >
          <source src={introVideo} type="video/mp4" />
        </video>

        {videoEnded && (
          <div className="overlay-content">
            <img src={introText} alt="text" className="video-overlay" />
            <button
              className="video-button"
              onClick={() => navigate("/macbook-neo-price")}
            >
              Verðlisti
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: "30px 100px",
          backgroundColor: "#e8e8ea",
        }}
      >
        <h1 style={{ fontWeight: 700 }}>
          Drifkraftur fyrir allt sem þú gerir.
        </h1>
        <h3 style={{ color: "gray" }}>
          Með A18 Pro flögunni geturðu keyrt uppáhaldsöppin þín, sinnt daglegum
          verkefnum á augabragði, verið skapandi og spilað hasarleiki. Svo sama
          hvað dagurinn ber í skauti sér, þá geturðu haldið í við allt sem
          veitir þér innblástur.
        </h3>
      </div>
      <div>
        <FeatureSection
          title="Skilvirkni í dagsins önn."
          text="Svaraðu tölvupóstum, taktu myndsímtöl, vafraðu á netinu, uppfærðu stefnumót og viðburði, deildu myndum — þú hefur fulla stjórn á verkefnalistanum þínum með MacBook Neo."
          image={"/assets/mac1.png"}
          bgColor="#D9D5A7"
          titleColor="#2F7D32"
        />

        <FeatureSection
          title="Létt námstæki."
          text="MacBook Neo er fullkomin fyrir nám – hvort sem þú ert að lesa fyrir próf, nota Apple Intelligence til að draga saman glósurnar þínar eða útbúa kynningar."
          image={"/assets/mac2.png"}
          reverse={true}
          bgColor="#E5DBDB"
          titleColor="#E54AA4"
        />

        <FeatureSection
          title="Gerir vinnuna að leik."
          text="Frá því að búa til töflureikni til að sjá um launagreiðslur, MacBook Neo getur hjálpað þér að klára verkið."
          image={"/assets/mac3.png"}
          bgColor="#b2b8c4"
          titleColor="#1e2ebf"
        />

        <FeatureSection
          title="Kristaltær fyrir allt sem er skemmtilegt."
          text="Með glæsilegri grafík og litríkum Liquid Retina-skjá birtast kvikmyndir, þættir, myndbönd og leikir með ótrúlegum smáatriðum."
          image={"/assets/mac4.png"}
          reverse={true}
          bgColor="#f2f2f3"
          titleColor="#882ff3"
        />
      </div>
    </>
  );
}

export default Neo;
