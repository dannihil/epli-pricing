import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparison15() {
  return (
    <div className="chip-grid">
      <ChipOption
  title="Apple M4 örgjörvi"
  variants={[
    {
      id: "m4-10-10",
      cpu: "10-core CPU",
      gpu: "10-core GPU",
      storageOptions: [
        { storage: "256GB", ram: "16GB", price: "229.990 kr" },
        { storage: "512GB", ram: "16GB", price: "269.990 kr" },
        { storage: "512GB", ram: "24GB", price: "309.990 kr" },
      ],
    },
  ]}
  battery="Allt að 24 tíma rafhlaða"
/>
    </div>
  );
}

export default ChipComparison15;
