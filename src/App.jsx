import { Routes, Route } from "react-router-dom";
import HomeLaptop from "./pages/HomeLaptop";
import HomeDesktop from "./pages/HomeDesktop";
import Home from "./pages/Home";
import Neo from "./pages/Neo";
import NeoPriceTest from "./pages/NeoPriceTest";
import Air13 from "./pages/Air13";
import Air15 from "./pages/Air15";
import Pro14 from "./pages/Pro14";
import Pro16 from "./pages/Pro16";
import Imac from "./pages/Imac";
import ImacAukahlutir from "./pages/ImacAukahlutir";
import MacMini from "./pages/MacMini";
import MacStudio from "./pages/MacStudio";
import HomeImac from "./pages/HomeImac";
import StudioDisplay from "./pages/StudioDisplay";
import StudioDisplayXdr from "./pages/StudioDisplayXdr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home-laptop" element={<HomeLaptop />} />
      <Route path="/home-desktop" element={<HomeDesktop />} />
      <Route path="/home-imac" element={<HomeImac />} />

      {/*<Route path="/macbook-air" element={<Product product="air" />} />*/}
      {/*<Route path="/macbook-pro" element={<Product product="pro" />} />*/}

      <Route path="/macbook-neo" element={<Neo />} />
      <Route path="/macbook-neo-price" element={<NeoPriceTest />} />
      <Route path="/macbook-air" element={<Air13 />} />
      <Route path="/macbook-pro" element={<Pro14 />} />
      <Route path="/imac" element={<Imac />} />
      <Route path="/imac-aukahlutir" element={<ImacAukahlutir />} />
      <Route path="/mac-mini" element={<MacMini />} />
      <Route path="/studio-display" element={<StudioDisplay />} />
      <Route path="/mac-studio" element={<MacStudio />} />
      <Route path="/studio-display-xdr" element={<StudioDisplayXdr />} />

      <Route path="/macbook-air/13" element={<Air13 />} />
      <Route path="/macbook-air/15" element={<Air15 />} />

      <Route path="/macbook-pro/14" element={<Pro14 />} />
      <Route path="/macbook-pro/16" element={<Pro16 />} />
    </Routes>
  );
}

export default App;
