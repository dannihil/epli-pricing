import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparison() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M4 Pro chip"
        variants={[
          {
            id: "pro-14-20",
            cpu: "14-core CPU",
            gpu: "20-core GPU",
            storageOptions: [
              { storage: "512GB", ram: "24GB", price: "469.990 kr" },
              { storage: "512GB", ram: "48GB", price: "559.990 kr" },
              { storage: "1TB", ram: "24GB", price: "519.990 kr" },
              { storage: "1TB", ram: "48GB", price: "599.990 kr" },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />

      <ChipOption
        title="M4 Max chip"
        variants={[
          {
            id: "max-14-32",
            cpu: "14-core CPU",
            gpu: "32-core GPU",
            storageOptions: [
              { storage: "1TB", ram: "36GB", price: "679.990 kr" },
            ],
          },
          {
            id: "max-16-40",
            cpu: "16-core CPU",
            gpu: "40-core GPU",
            storageOptions: [
              { storage: "1TB", ram: "48GB", price: "769.990 kr" },
            ],
          },
        ]}
        battery="Allt að 21 tíma rafhlaða"
      />
    </div>
  );
}

export default ChipComparison;
