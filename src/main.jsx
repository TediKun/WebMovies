import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Contact from "./layout/Contact";
import Genre from "./pages/Genre";
import Footer from "./layout/Footer";
import About from "./pages/About";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/genre" element={<Genre />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
