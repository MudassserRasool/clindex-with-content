import React from "react";
import "./ContactUs.css";
import { MarkitingAnimatedPcImage } from "..//../../assets/index";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="coustomContactUsBg px-2 px-md-0">
      <div className="">
        <div className="container">
          <div className="d-md-flex align-items-center">
            {/* start left side-------------------------------- */}
            <div className="col-md-5">
              <img
                src={MarkitingAnimatedPcImage}
                alt="file not loaded"
                className="markitingImageAligenment img-fluid"
                width={585} height={515}
              />
            </div>
            {/* end left side-------------------------------- */}
            {/* start right side-------------------------------- */}
            <div className="col-md-6 ms-auto">
              <h1 className="contactUsHeading">
              Resource Optimization
              </h1>
              <p className="contactUsPara">
              Maximize resource utilization by efficiently managing and allocating your assets, minimizing waste and improving profitability.
              </p>

              <div className="d-flex justify-content-md-start justify-content-around buttonsRowContactUs">
                <div className="contactUsButtonBox">
                  <p className="contactUsButtonText">Contact Us</p>
                </div>
                <Link className="text-decoration-none" to={"/learn-more-expert-marketplace-sub-page"} onClick={() => window.scrollTo(0, 0)}>
                  <div className="learnButtonButtonBox ms-2">
                    <p className="text-center pt-3 learnButtonCoustomText">
                      Learn More
                    </p>
                  </div>
                </Link>
              </div>
              
            </div>
            {/* end right side-------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
