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

import MainBookingContentSubPage from './components/LearnMoreBookingContent/SubPages/LearnMoreBookingContentSubPage/MainBookingContent/MainBookingContentSubPage'
import MainReadMoreFinanceFeaturesSubPage from './components/LearnMoreBookingContent/SubPages/ReadMoreFinanceFeaturesSubPage/MainReadMoreFinanceFeatures/MainReadMoreFinanceFeaturesSubPage'
import MainReadMoreEventFeaturesSubPage from './components/LearnMoreBookingContent/SubPages/ReadMoreEventFeaturesSubPage/MainReadMoreEventFeatures/MainReadMoreEventFeaturesSubPage';
import MainLearnMoreExpertMarketplaceContentSubPage from './components/LearnMoreBookingContent/SubPages/LearnMoreExpertMarketplaceContentSubPage/MainLearnMoreExpertMarketplaceContent/MainLearnMoreExpertMarketplaceContentSubPage';
import MainLearnMoreDigitalRecordsSubPage from './components/LearnMoreBookingContent/SubPages/LearnMoreDigitalRecordsSubPage/MainLearnMoreDigitalRecords/MainLearnMoreDigitalRecordsSubPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />

          {/* start content of main pages' button--------------------------------------------------------- */}
          <Route element={<MainBookingContent />} path="/booking-content" />
          <Route element={<MainReadMoreFinanceFeatures />} path="/read-more-finance-features" />
          <Route element={<MainReadMoreEventFeatures />} path="/read-more-event-features" />
          <Route element={<MainLearnMoreExpertMarketplaceContent />} path="/learn-more-expert-marketplace" />
          <Route element={<MainLearnMoreDigitalRecords />} path="/learn-more-digital-records" />
          {/* end content of main pages' button--------------------------------------------------------- */}

          {/* start content of Sub pages' button--------------------------------------------------------- */}
          <Route element={<MainBookingContentSubPage />} path="/booking-content-sub-page" />
          <Route element={<MainReadMoreFinanceFeaturesSubPage />} path="/read-more-finance-features-sub-page" />
          <Route element={<MainReadMoreEventFeaturesSubPage />} path="/read-more-event-features-sub-page" />
          <Route element={<MainLearnMoreExpertMarketplaceContentSubPage />} path="/learn-more-expert-marketplace-sub-page" />
          <Route element={<MainLearnMoreDigitalRecordsSubPage />} path="/learn-more-digital-records-sub-page" />
          {/* end content of Sub pages' button--------------------------------------------------------- */}

        </Routes>
      </BrowserRouter>
      <NewsLatter/>
      <Footer />
    </div>
  );
};

export default App;
