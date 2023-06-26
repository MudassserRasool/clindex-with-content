import React from "react";
import "./ContactUs.css";
import { MarkitingAnimatedPcImage } from "..//..//../assets/index";

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
              Social Media Integration
              </h1>
              <p className="contactUsPara">
              Integrate your event with popular social media platforms, amplifying its reach and enabling attendees to share their experience and engage with your event online.
              </p>

              <div className="d-flex justify-content-md-start justify-content-around buttonsRowContactUs">
                <div className="contactUsButtonBox">
                  <p className="contactUsButtonText">Contact Us</p>
                </div>
                <div className="learnButtonButtonBox ms-2">
                  <p className="text-center pt-3 learnButtonCoustomText">
                    Learn More
                  </p>
                </div>
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
