import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonNeo() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="A18 Pro chip"
        variants={[
          {
            id: "a18-6-5",
            cpu: "6-core CPU",
            gpu: "5-core GPU",
            storageOptions: [
              { storage: "256GB", ram: "8GB", price: "119.900 kr" },
              { storage: "512GB", ram: "8GB", price: "139.900 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonNeo;
