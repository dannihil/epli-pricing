import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

import Air13 from "./pages/Air13";
import Air15 from "./pages/Air15";
import Pro14 from "./pages/Pro14";
import Pro16 from "./pages/Pro16";
import Imac from "./pages/Imac";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/*<Route path="/macbook-air" element={<Product product="air" />} />*/}
      {/*<Route path="/macbook-pro" element={<Product product="pro" />} />*/}

      <Route path="/macbook-air" element={<Air13 />} />
      <Route path="/macbook-pro" element={<Pro14 />} />
      <Route path="/imac" element={<Imac />} />

      <Route path="/macbook-air/13" element={<Air13 />} />
      <Route path="/macbook-air/15" element={<Air15 />} />

      <Route path="/macbook-pro/14" element={<Pro14 />} />
      <Route path="/macbook-pro/16" element={<Pro16 />} />
    </Routes>
  );
}

export default App;
