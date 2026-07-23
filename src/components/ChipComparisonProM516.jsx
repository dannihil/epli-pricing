import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonProM516() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M5 Pro chip"
        layout="m4-max-layout"
        variants={[
          {
            id: "m5-pro-18-20",
            cpu: "18-core CPU",
            gpu: "20-core GPU",
            storageOptions: [
              {
                storage: "1TB",
                ram: "24GB",
                price: "559.990 kr",
              },
              {
                storage: "1TB",
                ram: "48GB",
                price: "669.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
      <ChipOption
        title="M5 Max chip"
        layout="m4-max-layout"
        variants={[
          {
            id: "m5-max-18-32",
            cpu: "18-core CPU",
            gpu: "32-core GPU",
            storageOptions: [
              {
                storage: "2TB",
                ram: "36GB",
                price: "829.990 kr",
              },
            ],
          },
          {
            id: "m5-max-18-40",
            cpu: "18-core CPU",
            gpu: "40-core GPU",
            storageOptions: [
              {
                storage: "2TB",
                ram: "48GB",
                price: "969.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
    </div>
  );
}

export default ChipComparisonProM516;
