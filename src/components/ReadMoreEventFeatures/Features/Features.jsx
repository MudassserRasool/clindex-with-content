import React from "react";
import "./Features.css";
import {
  CalendexWorkingImage,
  FeaturesOrderTextArrowIcon,
  MannagementGroupWorkingImgae,
} from "..//..//../assets/index";
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
            <h1 className="calendexFeatureHeading">Event Registration & Ticketing</h1>
            <p className="calendexFeatureParagraph">
            Effortlessly manage event registrations and ticket sales, providing a seamless experience for attendees and optimizing your event's success.
            </p>

            {/* stat read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <Link
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
              Digital Venue
              </h1>
              <p className="groupWorkingPara">
              Create virtual event spaces with our digital venue feature, enabling participants to engage and interact remotely from anywhere in the world.
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">Campaign Management</h1>
              <p className="groupWorkingPara">
              Drive event awareness and attendance with robust campaign management tools, allowing you to effectively promote and market your event.
              </p>
            </div>

            <div>
              <h1 className="groupWorkingHeading">
              Event Itinerary/Schedule
              </h1>
              <p className="groupWorkingPara">
              Plan and organize event schedules and itineraries, ensuring all participants have access to up-to-date information and a well-coordinated experience.
              </p>
            </div>
            {/* stat read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <Link
                to={"/read-more-event-features"}
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
        {/* end Lower row------------------------- */}
      </div>
    </div>
  );
};

export default Features;
