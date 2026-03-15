import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonMacMini() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M4 chip"
        variants={[
          {
            id: "m4-10-10",
            cpu: "10-core CPU",
            gpu: "10-core GPU",
            storageOptions: [
              { storage: "256GB", ram: "16GB", price: "119.990 kr" },
              { storage: "512GB", ram: "16GB", price: "159.990 kr" },
              { storage: "512GB", ram: "24GB", price: "189.990 kr" },
            ],
          },
        ]}
      />
      <ChipOption
        title="M4 Pro chip"
        variants={[
          {
            id: "m4-pro-10-16",
            cpu: "10-core CPU",
            gpu: "16-core GPU",
            storageOptions: [
              { storage: "512GB", ram: "24GB", price: "269.990 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonMacMini;
