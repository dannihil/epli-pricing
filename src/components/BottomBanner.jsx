import { useState } from "react";

function BottomBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bottom-banner"
        onClick={() => setShowModal(true)}
        style={{ cursor: "pointer" }}
      >
        <p style={{ color: "white" }}>
          Vissir þú að við tökum gamlar vörur upp í nýjar?
        </p>
        <p style={{ color: "white" }}>Smelltu hér fyrir verðdæmi</p>
        <img
          src="../assets/uppitaka.png"
          alt="Uppítaka"
          style={{ height: "18vh" }}
        />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Sjáðu hvað þú gætir fengið fyrir Mac</h2>
            <ul className="tradein-list">
              <li>
                <span>MacBook Pro 16" M1 Pro 512 GB</span>
                <span>50.111 kr</span>
              </li>
              <li>
                <span>MacBook Air 13" M2 256GB</span>
                <span>32.681 kr</span>
              </li>
              <li>
                <span>MacBook Air 13" M1 256GB</span>
                <span>20.698 kr</span>
              </li>
            </ul>
            <button onClick={() => setShowModal(false)}>Loka</button>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomBanner;
