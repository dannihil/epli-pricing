import { Routes, Route } from "react-router-dom";
import HomeLaptop from "./pages/smaralind/HomeLaptop";
import HomeDesktop from "./pages/HomeDesktop";
import Home from "./pages/Home";
import Neo from "./pages/Neo";
import NeoPriceTest from "./pages/NeoPriceTest";
import Air13 from "./pages/Air13";
import AirM4 from "./pages/AirM4";
import AirM5 from "./pages/AirM5";
import Air15 from "./pages/Air15";
import ProM4 from "./pages/Pro14";
import ProM5 from "./pages/ProM5";
import Pro16 from "./pages/Pro16";
import Imac from "./pages/Imac";
import ImacAukahlutir from "./pages/ImacAukahlutir";
import MacMini from "./pages/MacMini";
import MacStudio from "./pages/MacStudio";
import HomeImac from "./pages/HomeImac";
import StudioDisplay from "./pages/StudioDisplay";
import StudioDisplayXdr from "./pages/StudioDisplayXdr";
import AirPage from "./pages/Air";
import ProPage from "./pages/Pro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home-air" element={<AirPage />} />
      <Route path="/home-pro" element={<ProPage />} />
      <Route path="/home-desktop" element={<HomeDesktop />} />
      <Route path="/home-imac" element={<HomeImac />} />
      <Route path="/home-laptop-smaralind" element={<HomeLaptop />} />

      {/*<Route path="/macbook-air" element={<Product product="air" />} />*/}
      {/*<Route path="/macbook-pro" element={<Product product="pro" />} />*/}

      <Route path="/macbook-neo" element={<Neo />} />
      <Route path="/macbook-neo-price" element={<NeoPriceTest />} />
      <Route path="/macbook-air-m4" element={<AirM4 />} />
      <Route path="/macbook-air-m5" element={<AirM5 />} />
      <Route path="/macbook-pro-m4" element={<ProM4 />} />
      <Route path="/macbook-pro-m5" element={<ProM5 />} />
      <Route path="/imac" element={<Imac />} />
      <Route path="/imac-aukahlutir" element={<ImacAukahlutir />} />
      <Route path="/mac-mini" element={<MacMini />} />
      <Route path="/studio-display" element={<StudioDisplay />} />
      <Route path="/mac-studio" element={<MacStudio />} />
      <Route path="/studio-display-xdr" element={<StudioDisplayXdr />} />

      <Route path="/macbook-air/13" element={<Air13 />} />
      <Route path="/macbook-air/15" element={<Air15 />} />
    </Routes>
  );
}

export default App;
