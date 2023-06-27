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
              <span className="aiPoweredHeadingLatter">Automated </span>Rota
            </h1>
            <p className="aiPoweredPara">
            Generate automated Rotas based on staff clock-in and clock-out data, reducing manual effort and errors.
            </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid aiItemsGrid">
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiScheduler} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Geo-fencing</h1>
                  <p className="aiParaText">
                  Set virtual boundaries to restrict clock-in and clock-out within designated areas, preventing time fraud and ensuring compliance 
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
                  <h1 className="aiItemNameText">Location Recognition</h1>
                  <p className="aiParaText">
                  Capture staff location during clock-in and clock-out, providing additional verification and accountability.
                  </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiBookingIcon} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Attendance Tracking</h1>
                  <p className="aiParaText">
                  Monitor staff attendance in real-time, enabling proactive management and addressing any anomalies promptly.
                  </p>
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
