import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonMacStudio() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M4 Max chip"
        variants={[
          {
            id: "m4-max-14-32",
            cpu: "14-core CPU",
            gpu: "32-core GPU",
            storageOptions: [
              { storage: "512GB", ram: "36GB", price: "399.990 kr" },
            ],
          },
        ]}
      />
      <ChipOption
        title="M3 Ultra chip"
        variants={[
          {
            id: "m3-ultra-28-60",
            cpu: "28-core CPU",
            gpu: "60-core GPU",
            storageOptions: [
              { storage: "1TB", ram: "96GB", price: "759.990 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonMacStudio;
