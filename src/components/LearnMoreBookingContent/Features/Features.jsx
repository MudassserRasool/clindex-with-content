import React from "react";
import "./Features.css";
import {
  CalendexWorkingImage,
  FeaturesOrderTextArrowIcon,
  MannagementGroupWorkingImgae,
} from "..//../../assets/index";

const Features = () => {
  return (
    <div className="featuresMargin px-2 p-md-0">
      <div className="container">
        {/* start upper row------------------------- */}
        <div className="d-md-flex align-items-center justify-content-between">
          <div className="col-md-7">
            <img src={CalendexWorkingImage} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <h1 className="calendexFeatureHeading">AI-powered Booking Intelligence</h1>
            <p className="calendexFeatureParagraph">
            Leverage the power of artificial intelligence to optimize your booking process, ensuring optimal scheduling and resource allocation.
            </p>

            {/* stat read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <div className="btnReadMoreBoxCoustom">
                <p className="btnReadMoreTextCoustom">Read more</p>
              </div>
              <div className="d-grid">
                <div className="d-flex align-items-center gap-2">
                  <p className="pt-3 orderSimilarText">Contact Us</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </div>
                 {/* end read more and contact us button---------------------- */}
          </div>
        </div>
        {/* end upper row------------------------- */}

        {/* start Lower row------------------------- */}
        <div className="d-md-flex flex-row-reverse align-items-center justify-content-between mt-4 gap-3 gap-md-0 pt-4 pt-md-0">
          <div className="col-md-7">
            <img src={MannagementGroupWorkingImgae} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div>
              <h1 className="groupWorkingHeading">
              Time-Saving Administration
              </h1>
              <p className="groupWorkingPara">
              Spend less time on administrative tasks and focus more on core business activities, increasing productivity and efficiency.
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">Seamless & Digitized Workflow</h1>
              <p className="groupWorkingPara">
              Streamline your business operations with a fully digitized booking system, eliminating paperwork and manual processes. 
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">
              Enhanced Customer Satisfaction
              </h1>
              <p className="groupWorkingPara">
              Provide a seamless and convenient booking experience for your customers, boosting satisfaction and loyalty.
              </p>
            </div>
{/* stat read more and contact us button---------------------- */}
<div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <div className="btnReadMoreBoxCoustom">
                <p className="btnReadMoreTextCoustom">Read more</p>
              </div>
              <div className="d-grid">
                <div className="d-flex align-items-center gap-2">
                  <p className="pt-3 orderSimilarText">Contact Us</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </div>
                 {/* end read more and contact us button---------------------- */}
          </div>
        </div>
        {/* end Lower row------------------------- */}
      </div>
    </div>
  );
};

export default Features;
