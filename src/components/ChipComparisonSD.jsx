import ChipOptionSD from "./ChipOptionSD";
import "../index.css";

function ChipComparisonMacMini() {
  return (
    <div className="chip-grid">
      <ChipOptionSD
        title="Standard Glass"
        variants={[
          {
            id: "m4-10-10",
            cpu: "",
            gpu: "",
            standOptions: [
              { stand: "Tilt", price: "299.990 kr" },
              { stand: "Tilt & height", price: "369.990 kr" },
              { stand: "Sérpöntun: VESA", price: "299.990 kr" },
            ],
          },
        ]}
      />
      <ChipOptionSD
        title="Nano Glass"
        variants={[
          {
            id: "m4-pro-10-16",
            cpu: "",
            gpu: "",
            standOptions: [
              { stand: "Tilt", price: "349.990 kr" },
              { stand: "Tilt & height", price: "419.990 kr" },
              { stand: "Sérpöntun: VESA", price: "349.990 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonMacMini;
