import { useState } from "react";

function BottomBanner({ productType }) {
  const [showModal, setShowModal] = useState(false);

  const tradeInExamples = {
    air: [
      { label: 'MacBook Air 13" M2 256GB', price: "30.013 kr" },
      { label: 'MacBook Air 13" M3 256GB', price: "42.576 kr" },
      { label: 'MacBook Air 15" M2 256GB', price: "39.299 kr" },
      { label: 'MacBook Air 15" M3 256GB', price: "51.316 kr" },
    ],
    pro: [
      { label: 'MacBook Pro 14" M2 Pro 512GB', price: "64.425 kr" },
      { label: 'MacBook Pro 14" M3 Pro 512GB', price: "79.719 kr" },
      { label: 'MacBook Pro 16" M2 Pro 512GB', price: "73.165 kr" },
      { label: 'MacBook Pro 16" M3 Pro 512GB', price: "95.014 kr" },
    ],
  };

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
              {tradeInExamples[productType]?.map((item, i) => (
                <li key={i}>
                  <span>{item.label}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "10px" }}>
              Uppítökuvirði er mismunandi eftir ástandi, árgerð, framleiðanda,
              gengi dagsins og fleiru. Endanlegt verðmat fer fram hjá sölumanni
              í verslun eftir ítarlega skoðun á tækinu.
            </p>
            <button onClick={() => setShowModal(false)}>Loka</button>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomBanner;
