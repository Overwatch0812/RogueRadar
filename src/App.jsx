import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ImageSearch from "./components/ImageSearch";
import ImageResult from "./components/ImageResult";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:query" element={<Home />} />
        <Route path="/images" element={<ImageSearch />} />
        <Route path="/images/:query" element={<ImageResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
