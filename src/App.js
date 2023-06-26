import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MainBookingContent from "./components/LearnMoreBookingContent/MainBookingContent/MainBookingContent";
import MainReadMoreFinanceFeatures from "./components/ReadMoreFinanceFeatures/MainReadMoreFinanceFeatures/MainReadMoreFinanceFeatures";
import MainReadMoreEventFeatures from "./components/ReadMoreEventFeatures/MainReadMoreEventFeatures/MainReadMoreEventFeatures";
import MainLearnMoreExpertMarketplaceContent from "./components/LearnMoreExpertMarketplaceContent/MainLearnMoreExpertMarketplaceContent/MainLearnMoreExpertMarketplaceContent";
import MainLearnMoreDigitalRecords from "./components/LearnMoreDigitalRecords/MainLearnMoreDigitalRecords/MainLearnMoreDigitalRecords";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MainBookingContent />} path="/booking-content" />
          <Route element={<MainReadMoreFinanceFeatures />} path="/read-more-finance-features" />
          <Route element={<MainReadMoreEventFeatures />} path="/read-more-event-features" />
          <Route element={<MainLearnMoreExpertMarketplaceContent />} path="/learn-more-expert-marketplace" />
          <Route element={<MainLearnMoreDigitalRecords />} path="/learn-more-digital-records" />
        </Routes>
      </BrowserRouter>
      <NewsLatter/>
      <Footer />
    </div>
  );
};

export default App;
