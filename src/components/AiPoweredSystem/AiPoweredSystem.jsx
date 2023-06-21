import React from "react";
import "./AiPoweredSystem.css";
import {
  AiBookingIcon,
  AiPowerAutomationIcon,
  AiScheduler,
  AnimatedStatisticsMobileImage,
} from "../../assets";

const AiPoweredSystem = () => {
  return (
    <div className="aiPoweredSectionMarginTop">
      <div className="aiPoweredSystemContainer container">
        <div className="d-flex justify-content-between align-items-center">
          {/* start left text section---------------------------- */}
          <div className="col-5">
            <h1 className="aiPoweredStystemHeading">
              <span className="aiPoweredHeadingLatter">AI Powered</span> System
            </h1>
            <p className="aiPoweredPara">
              Our AI sends email & messages to your customers about the
              available time slots for bookings following the matching criteria.
            </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid aiItemsGrid">
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiScheduler} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">AI Scheduler</h1>
                  <p className="aiParaText">
                    AI bot scans your calendar, offers notifications, & books
                    discounted appointments to fill empty slots.
                  </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img
                  src={AiPowerAutomationIcon}
                  alt=""
                  className="AiItemIcon"
                />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Power Automation</h1>
                  <p className="aiParaText">
                    Maximize booking efficiency, improve customer engagement, &
                    optimize revenue generation smoothly.
                  </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiBookingIcon} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">AI-Driven Bookings</h1>
                  <p className="aiParaText">
                    Improve scheduling process, increase bookings & minimize
                    revenue loss due to empty slots.
                  </p>
                </div>
              </div>
              {/* end ai powered item-------------------- */}
              <div className="learnButtonButtonBoxForAiPoweredItemsSection ">
                <p className="text-center pt-3 learnButtonCoustomText">
                  Learn More
                </p>
              </div>
            </div>
            {/* end ai powered items-------------------- */}
          </div>
          {/* end left text section---------------------------- */}

          {/* start right text section---------------------------- */}
          <div className="col-5">
            <img
              src={AnimatedStatisticsMobileImage}
              alt=""
              width={531}
              height={480}
            />
          </div>
          {/* end right text section---------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AiPoweredSystem;
