import React from "react";
import "./Features.css";
import {
  CalendexWorkingImage,
  FeaturesOrderTextArrowIcon,
  MannagementGroupWorkingImgae,
} from "..//../assets/index";
import { Link } from "react-router-dom";

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
            <h1 className="calendexFeatureHeading">Calendex Plus Features</h1>
            <p className="calendexFeatureParagraph">
              Experience hassle-free scheduling, online booking, and efficient
              payment processing with our all-in-one solution. Automate SMS &
              email notifications for perfect communication & enrich customer
              satisfaction.
            </p>

            {/* stat read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={"/read-more-finance-features"}
                className="text-decoration-none"
              >
                <div className="btnReadMoreBoxCoustom">
                  <p className="btnReadMoreTextCoustom">Read more</p>
                </div>
              </Link>
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
            <img
              src={MannagementGroupWorkingImgae}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
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
              <h1 className="groupWorkingHeading">Business Insights Hub</h1>
              <p className="groupWorkingPara">
                Gain a competitive edge with marketing, accounting, analytics,
                reports, and loyalty gift card features.
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">
                Inventory & Booking Widgets
              </h1>
              <p className="groupWorkingPara">
                Improve processes with digital forms, manage stock & inventory,
                & enhance bookings with a convenient widget.
              </p>
            </div>
            {/* stat read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <a
                // to={"/read-more-event-features"}
                href="/read-more-event-features"
                className="text-decoration-none"
              >
                <div className="btnReadMoreBoxCoustom">
                  <p className="btnReadMoreTextCoustom">Read more</p>
                </div>
              </a>

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
