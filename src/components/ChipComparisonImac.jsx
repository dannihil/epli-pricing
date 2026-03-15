import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonImac() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M4 chip"
        variants={[
          {
            id: "m4-8-8",
            cpu: "8-core CPU",
            gpu: "8-core GPU",
            storageOptions: [
              { storage: "256GB", ram: "16GB", price: "249.990 kr" },
            ],
          },
          {
            id: "m4-10-10",
            cpu: "10-core CPU",
            gpu: "10-core GPU",
            storageOptions: [
              { storage: "256GB", ram: "16GB", price: "279.990 kr" },
              { storage: "512GB", ram: "16GB", price: "319.990 kr" },
              { storage: "512GB", ram: "24GB", price: "359.990 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonImac;
