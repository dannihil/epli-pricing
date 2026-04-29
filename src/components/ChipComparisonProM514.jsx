import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparisonProM514() {
  return (
    <div className="chip-grid">
      <ChipOption
        title="M5 chip"
        variants={[
          {
            id: "m5-10-10",
            cpu: "10-core CPU",
            gpu: "10-core GPU",
            storageOptions: [
              {
                storage: "1TB",
                ram: "16GB",
                price: "329.990 kr",
              },
              {
                storage: "1TB",
                ram: "24GB",
                price: "369.990 kr",
              },
              {
                storage: "1TB",
                ram: "32GB",
                price: "409.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
      <ChipOption
        title="M5 Pro chip"
        layout="m4-max-layout"
        variants={[
          {
            id: "m5-pro-15-16",
            cpu: "15-core CPU",
            gpu: "16-core GPU",
            storageOptions: [
              {
                storage: "1TB",
                ram: "24GB",
                price: "429.990 kr",
              },
            ],
          },
          {
            id: "m5-pro-18-20",
            cpu: "18-core CPU",
            gpu: "20-core GPU",
            storageOptions: [
              {
                storage: "2TB",
                ram: "24GB",
                price: "539.990 kr",
              },
              {
                storage: "2TB",
                ram: "48GB",
                price: "619.990 kr",
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
                price: "679.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
    </div>
  );
}

export default ChipComparisonProM514;
