import ChipOption from "./ChipOption";
import "../index.css";

function ChipComparison14() {
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
                storage: "512GB",
                ram: "16GB",
                price: "309.990 kr",
                offerPrice: "299.990 kr",
              },
              {
                storage: "1TB",
                ram: "16GB",
                price: "349.990 kr",
                offerPrice: "339.990 kr",
              },
              {
                storage: "1TB",
                ram: "24GB",
                price: "389.990 kr",
                offerPrice: "379.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />

      <ChipOption
        title="M4 Pro chip"
        layout="m4-pro-layout"
        variants={[
          {
            id: "m4-pro-12-16",
            cpu: "12-core CPU",
            gpu: "16-core GPU",
            storageOptions: [
              {
                storage: "512GB",
                ram: "24GB",
                price: "389.990 kr",
                offerPrice: "369.990 kr",
              },
            ],
          },
          {
            id: "m4-pro-14-20",
            cpu: "14-core CPU",
            gpu: "20-core GPU",
            storageOptions: [
              {
                storage: "1TB",
                ram: "24GB",
                price: "469.990 kr",
                offerPrice: "399.990 kr",
              },
              {
                storage: "1TB",
                ram: "48GB",
                price: "549.990 kr",
                offerPrice: "499.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
      <ChipOption
        title="M4 Max chip"
        layout="m4-max-layout"
        variants={[
          {
            id: "m4-max-14-32",
            cpu: "14-core CPU",
            gpu: "32-core GPU",
            storageOptions: [
              {
                storage: "1TB",
                ram: "36GB",
                price: "619.990 kr",
                offerPrice: "599.990 kr",
              },
            ],
          },
        ]}
        battery="Allt að 24 tíma rafhlaða"
      />
    </div>
  );
}

export default ChipComparison14;
