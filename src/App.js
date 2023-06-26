import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import ContactUs from "./components/ContactUs/ContactUs";
import AiPoweredSystem from "./components/AiPoweredSystem/AiPoweredSystem";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Footer from "./components/Footer/Footer";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MainBookingContent from "./components/LearnMoreBookingContent/MainBookingContent/MainBookingContent";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MainBookingContent />} path="/booking-content" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
