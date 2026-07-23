import { useNavigate } from "react-router-dom";
import useInactivityRedirect from "../../hooks/useInactivityRedirect";
import "../../index.css";

function SpecStrip({ items, light }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "28px 20px",
        marginBottom: "60px",
        background: light
          ? "transparent"
          : "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
        gap: "0",
      }}
    >
      {items.map((item, i) => (
        <>
          {i > 0 && (
            <div
              key={`div-${i}`}
              style={{
                width: "1px",
                height: "36px",
                background: light ? "#b0d4e0" : "#444",
                margin: "0 24px",
                flexShrink: 0,
              }}
            />
          )}
          <div
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span
              style={{
                fontSize: "1.1rem",
                padding: "16px 32px",
                fontWeight: "600",
                color: light ? "#1d1d1f" : "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              {item.value}
            </span>
            <span
              style={{
                fontSize: "0.95rem",
                color: light ? "#6e6e73" : "#888888",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}

function HomeLaptop() {
  useInactivityRedirect();
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", width: "100%", height: "calc(100vh + 60px)" }}
    >
      {/* LEFT — MacBook Pro */}
      <div
        style={{
          width: "50%",
          background: "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "48px 32px 20px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: "700",
              color: "#ffffff",
              margin: 0,
            }}
          >
            MacBook Pro
          </h1>
          <p
            style={{
              color: "#aaaaaa",
              marginTop: "8px",
              marginBottom: "20px",
              fontSize: "1.1rem",
              padding: "16px 32px",
            }}
          >
            Fyrir fagfólkið.
          </p>
          <button
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              fontSize: "1.1rem",
              padding: "16px 32px",
            }}
            onClick={() => navigate("/macbook-pro-m5")}
          >
            Verðlisti M5
          </button>
        </div>

        <img
          src="/assets/mbpro.png"
          alt="MacBook Pro"
          style={{
            width: "68%",
            maxWidth: "360px",
            objectFit: "contain",
            flex: 1,
            minHeight: 0,
          }}
        />

        <SpecStrip
          items={[
            { value: '14" / 16"', label: "Skjástærð" },
            { value: "24 klst", label: "Rafhlaða" },
            { value: "M5 · Pro · Max", label: "Flaga" },
          ]}
        />
      </div>

      {/* RIGHT — MacBook Air */}
      <div
        style={{
          width: "50%",
          background: "linear-gradient(180deg, #ffffff 0%, #bbe2f0 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "48px 32px 20px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: "700",
              color: "#1d1d1f",
              margin: 0,
            }}
          >
            MacBook Air
          </h1>
          <p
            style={{
              color: "#6e6e73",
              marginTop: "8px",
              marginBottom: "20px",
              fontSize: "1.1rem",
              padding: "16px 32px",
            }}
          >
            Létt. Hröð. Ómissandi.
          </p>
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: "1.1rem",
              padding: "16px 32px",
            }}
            onClick={() => navigate("/macbook-air-m5")}
          >
            Verðlisti M5
          </button>
        </div>

        <img
          src="/assets/air.png"
          alt="MacBook Air"
          style={{
            width: "68%",
            maxWidth: "360px",
            objectFit: "contain",
            flex: 1,
            minHeight: 0,
          }}
        />

        <SpecStrip
          light
          items={[
            { value: '13" / 15"', label: "Skjástærð" },
            { value: "18 klst", label: "Rafhlaða" },
            { value: "M5", label: "Flaga" },
          ]}
        />
      </div>
    </div>
  );
}

export default HomeLaptop;
