import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./home";
import Impressum from "./impressum";
import Datenschutz from "./datenschutz";
import Tagesablauf from "./tagesablauf";
import About from "./about";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tagesablauf" element={<Tagesablauf />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </Router>
  );
}
