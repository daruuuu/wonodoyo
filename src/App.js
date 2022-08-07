import "./App.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistic from "./Pages/Statisctic/Statistic";
import Gallery from "./Pages/Gallery/Gallery";
import Kegiatan from "./Pages/Kegiatan/Kegiatan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
