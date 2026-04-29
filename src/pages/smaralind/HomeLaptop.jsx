import { useNavigate } from "react-router-dom";
import "../../index.css";

function HomeLaptop() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      {/* LEFT — MacBook Pro */}
      <div
        style={{
          width: "50%",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        {/* TOP CONTENT */}
        <div>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            MacBook Pro
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "1.2rem",
              }}
              onClick={() => navigate("/macbook-pro-m4")}
            >
              Verðlisti M4
            </button>

            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "1.2rem",
              }}
              onClick={() => navigate("/macbook-pro-m5")}
            >
              Verðlisti M5
            </button>
          </div>
        </div>

        {/* IMAGE (BOTTOM) */}
        <img
          src="/assets/pro.png"
          alt="MacBook Pro"
          style={{
            width: "70%",
            maxWidth: "500px",
          }}
        />
      </div>

      {/* RIGHT — MacBook Air */}
      <div
        style={{
          width: "50%",
          background: "linear-gradient(180deg, #ffffff 0%, #bbe2f0 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        {/* TOP CONTENT */}
        <div>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "700",
            }}
          >
            MacBook Air
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "1.2rem",
              }}
              onClick={() => navigate("/macbook-air-m4")}
            >
              Verðlisti M4
            </button>

            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "1.2rem",
              }}
              onClick={() => navigate("/macbook-air-m5")}
            >
              Verðlisti M5
            </button>
          </div>
        </div>

        {/* IMAGE (BOTTOM) */}
        <img
          src="/assets/air.png"
          alt="MacBook Air"
          style={{
            width: "90%",
            maxWidth: "500px",
          }}
        />
      </div>
    </div>
  );
}

export default HomeLaptop;
