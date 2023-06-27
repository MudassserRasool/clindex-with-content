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
              <span className="aiPoweredHeadingLatter">Custom </span>Fields
            </h1>
            <p className="aiPoweredPara">
            Collect additional information from customers by adding customizable fields to the booking widget.            </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid aiItemsGrid">
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiScheduler} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Multiple Booking Views</h1>
                  <p className="aiParaText">
                  View bookings per day, week, or month, gaining a comprehensive overview of appointment schedules and availability.                  </p>
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
                  <h1 className="aiItemNameText">Video & Audio Notes</h1>
                  <p className="aiParaText">
                  Record and attach video and audio notes, including before and after videos, to enhance documentation and communication with the Calendex’s most comprehensive notes platform.                  </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiBookingIcon} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">File Attachments</h1>
                  <p className="aiParaText">
                  Attach relevant files, documents, or images to video and audio notes for comprehensive documentation and reference.                  </p>
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
