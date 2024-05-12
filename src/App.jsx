import { useState } from "react";
import Navbar from "./components/navabar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Conatct";
import Product from "./pages/product/Product";
import Brand from "./pages/brands/Brand";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/brands" element={<Brand />} />
      </Routes>
    </>
  );
}

export default App;
