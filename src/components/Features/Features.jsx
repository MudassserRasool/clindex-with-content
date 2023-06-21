import React from "react";
import "./Features.css";
import {
  CalendexWorkingImage,
  FeaturesOrderTextArrowIcon,
} from "..//../assets/index";

const Features = () => {
  return (
    <div>
      <div className="container-fluid container-md mt-4">
        {/* start upper row------------------------- */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-7">
            <img src={CalendexWorkingImage} alt="" className="" />
          </div>
          <div className="col-4">
            <h1 className="calendexFeatureHeading">Calendex Plus Features</h1>
            <p className="calendexFeatureParagraph">
              Experience hassle-free scheduling, online booking, and efficient
              payment processing with our all-in-one solution. Automate SMS &
              email notifications for perfect communication & enrich customer
              satisfaction.
            </p>
            <div className="d-flex align-items-center gap-4">
              <div className="btnReadMoreBoxCoustom">
                <p className="btnReadMoreTextCoustom">Read more</p>
              </div>
              <div className="d-grid">
                <div className="d-flex align-items-center gap-2 ">
                  <p className="pt-3 orderSimilarText">Order similar</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end upper row------------------------- */}

        {/* start Lower row------------------------- */}
        <div className="d-flex flex-row-reverse align-items-center justify-content-between mt-4">
          <div className="col-7">
            <img src={CalendexWorkingImage} alt="" className="" />
          </div>
          <div className="col-4">
            <div>
              <h1 className="groupWorkingHeading">
                Smart Workforce Management
              </h1>
              <p className="groupWorkingPara">
                Dexterously manage your online store, track data, streamline
                staff operations, & optimize HR processes.
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">
                Smart Workforce Management
              </h1>
              <p className="groupWorkingPara">
                Dexterously manage your online store, track data, streamline
                staff operations, & optimize HR processes.
              </p>
            </div>
            
            <div>
              <h1 className="groupWorkingHeading">
                Smart Workforce Management
              </h1>
              <p className="groupWorkingPara">
                Dexterously manage your online store, track data, streamline
                staff operations, & optimize HR processes.
              </p>
            </div>

            <div className="d-flex align-items-center gap-4">
              <div className="btnReadMoreBoxCoustom">
                <p className="btnReadMoreTextCoustom">Read more</p>
              </div>
              <div className="d-grid">
                <div className="d-flex align-items-center gap-2 ">
                  <p className="pt-3 orderSimilarText">Order similar</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Lower row------------------------- */}
      </div>
    </div>
  );
};

export default Features;
