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
              { stand: "Tilt & height", price: "599.990 kr" },
              { stand: "Sérpöntun: VESA", price: "599.990 kr" },
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
              { stand: "Tilt & height", price: "649.990 kr" },
              { stand: "Sérpöntun: VESA", price: "649.990 kr" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ChipComparisonMacMini;
