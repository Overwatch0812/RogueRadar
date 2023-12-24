import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:query" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
