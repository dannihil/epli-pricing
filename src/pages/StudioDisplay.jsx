import useInactivityRedirect from "../hooks/useInactivityRedirect";
import BackButton from "../components/BackButton";
import ProductCard from "../components/ProductCard";
import "../index.css";
import ProductLayout from "../components/ProductLayout";
import Specs from "../components/Specs";
import ChipComparisonSD from "../components/ChipComparisonSD";

function StudioDisplay() {
  useInactivityRedirect();

  return (
    <div className="home studiodisplay-page">
      <BackButton />

      <div className="page-header hero-header">
        <h1>Studio Display</h1>
      </div>

      <ProductLayout
        leftBottom={<Specs model="studio-display" />}
        right={<ChipComparisonSD />}
      />
    </div>
  );
}

export default StudioDisplay;
