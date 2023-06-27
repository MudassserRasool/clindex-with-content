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
              <span className="aiPoweredHeadingLatter">Staff </span>Management
            </h1>
            <p className="aiPoweredPara">
            View and manage staff, rooms, equipment, and resources across multiple locations, switching effortlessly. 
                        </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid aiItemsGrid">
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiScheduler} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Employee Data Management</h1>
                  <p className="aiParaText">
                  Efficiently manage employee data, including personal information, roles, and permissions, in a centralized system.                  </p>
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
                  <h1 className="aiItemNameText">Onboarding Workflows</h1>
                  <p className="aiParaText">
                  Create customizable workflows to streamline and automate the onboarding process for new hires.
                                    </p>
                </div>
              </div>
              {/* start ai powered item-------------------- */}
              {/* start ai powered item-------------------- */}
              <div className="d-flex gap-4 ">
                <img src={AiBookingIcon} alt="" className="AiItemIcon" />
                <div className="aiItemNameAndPara">
                  <h1 className="aiItemNameText">Integration with HR Systems</h1>
                  <p className="aiParaText">
                  Seamlessly integrate HR Onboarding with existing HR systems for a cohesive employee management experience. 
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
