import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Gallery from "./pages/Gallery";
import Nav from "./core/Nav";
import Home from "./pages/Home";
import GalleryDetail from "./pages/GalleryDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </>
  );
}

export default App;
