import React from "react";
import "./AiPoweredSystem.css";
import {
  AiBookingIcon,
  AiPowerAutomationIcon,
  AiScheduler,
  AnimatedStatisticsMobileImage,
} from "../../../../../assets/index";

const AiPoweredSystem = () => {
  return (
    <div className="aiPoweredSectionMarginTop px-2 px-md-0">
      <div className="aiPoweredSystemContainer container">
        <div className="d-md-flex justify-content-between align-items-center">
          {/* start left text section---------------------------- */}
          <div className="col-md-5">
            <h1 className="aiPoweredStystemHeading">
              <span className="aiPoweredHeadingLatter">High-Quality </span>Video
            </h1>
            <p className="aiPoweredPara">
            Experience crystal-clear video and audio communication for a smooth and professional interaction with customers.            </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid aiItemsGrid">
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiScheduler} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Screen Sharing</h1>
                  <p className="aiParaText">
                  Share your screen during video calls to provide demonstrations, presentations, or collaborate on documents.
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
                  <h1 className="aiItemNameText">Group Video Calls</h1>
                  <p className="aiParaText">
                  Conduct group video calls with multiple participants, enabling team meetings or virtual consultations.                   </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiBookingIcon} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Chat Functionality</h1>
                  <p className="aiParaText">
                  Instantly chat with customers within the booking system, ensuring efficient and convenient communication.                  </p>
                </div>
              </div>
              {/* end ai powered item-------------------- */}
              <div className="d-flex justify-content-center  justify-content-md-start">
                <div className="learnButtonButtonBoxForAiPoweredItemsSection ">
                <p className="text-center pt-3 learnButtonCoustomText">
                  Learn More
                </p>
              </div>
              </div>
              
            </div>
            {/* end ai powered items-------------------- */}
          </div>
          {/* end left text section---------------------------- */}

          {/* start right text section---------------------------- */}
          <div className="col-md-5 mt-4 mt-md-0">
            <img
              src={AnimatedStatisticsMobileImage}
              alt=""
              width={531}
              height={480}
              className="img-fluid"
            />
          </div>
          {/* end right text section---------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AiPoweredSystem;
