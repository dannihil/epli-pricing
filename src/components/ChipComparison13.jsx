import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparison13() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M4 chip"
        variants={[
          {
            id: "m4-10-8",
            cpu: "10-core CPU",
            gpu: "8-core GPU",
            storageOptions: [
              { storage: "256GB", ram: "16GB", price: "189.990 kr" },
              { storage: "512GB", ram: "16GB", price: "229.990 kr" },
            ],
          },
          {
            id: "m4-10-10",
            cpu: "10-core CPU",
            gpu: "10-core GPU",
            storageOptions: [
              { storage: "512GB", ram: "24GB", price: "269.990 kr" },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
    </div>
  );
}

export default ChipComparison13;
