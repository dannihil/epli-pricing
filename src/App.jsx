import { Routes, Route } from "react-router-dom";
import useVersionCheck from "./hooks/useVersionCheck";
import HomeLaptop from "./pages/smaralind/HomeLaptop";
import HomeDesktop from "./pages/HomeDesktop";
import Home from "./pages/Home";
import Neo from "./pages/Neo";
import NeoPrice from "./pages/NeoPrice";
import AirM4 from "./pages/AirM4";
import AirM5 from "./pages/AirM5";
import ProM5 from "./pages/ProM5";
import MacMini from "./pages/MacMini";
import MacStudio from "./pages/MacStudio";
import StudioDisplay from "./pages/StudioDisplay";
import StudioDisplayXdr from "./pages/StudioDisplayXdr";
import HomeAir from "./pages/HomeAir";
import HomePro from "./pages/HomePro";

function App() {
  useVersionCheck();

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home-laptop-smaralind" element={<HomeLaptop />} />

      <Route path="/macbook-neo" element={<Neo />} />
      <Route path="/macbook-neo-price" element={<NeoPrice />} />

      <Route path="/home-air" element={<HomeAir />} />
      <Route path="/macbook-air-m5" element={<AirM5 />} />

      <Route path="/home-pro" element={<HomePro />} />
      <Route path="/macbook-pro-m5" element={<ProM5 />} />

      <Route path="/home-desktop" element={<HomeDesktop />} />
      <Route path="/mac-mini" element={<MacMini />} />
      <Route path="/studio-display" element={<StudioDisplay />} />
      <Route path="/mac-studio" element={<MacStudio />} />
      <Route path="/studio-display-xdr" element={<StudioDisplayXdr />} />
    </Routes>
  );
}

export default App;
