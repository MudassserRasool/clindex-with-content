import React from "react";
import "./Hero.css";
import { WomanImageForHeroSection } from "../../assets";

const Hero = () => {
  return (
    <div className="coustomBg">
      <div className="container-fluid container-md pt-4">
        <div className="row   justify-content-between">
          {/* start hero left text--------------------- */}
          <div className="my-auto pb-4 col-md-6 z-index-1">
            <p className="bg-light bookingBackgroundCoustom">
              Booking Management System
            </p>
            <div className="mt-2">
              <h1 className="clindexHeroHeading">Calendex</h1>
              <h3 className="clindexHeroTitel">
                AI-Powered Booking System for All Businesses
              </h3>
            </div>
            <p className="heroParagraph">
              Empower your business with a feature-rich booking system that
              automates scheduling, manages clients <br  className="d-block d-md-none"/> efficiently, intelligently
              tracks <br  className="d-block d-md-none"/> clients, handles staff management <br className="d-block d-md-none" /> & enables effective
              marketing strategies.
            </p>
            <div className=" d-flex justify-content-between justify-content-md-start buttonsRow  gap-2">
              <div className="letsTalkButtonBox ">
                <p className="text-center  letsTalkCoustomText">
                  Let's Talk
                </p>
              </div>
              <div className="learnButtonButtonBox  ">
                <p className="text-center pt-3 learnButtonCoustomText">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          
          {/* end hero left text--------------------- */}
          {/* start hero right image--------------------- */}
          <div className=" col-md-4">
            <img
              src={WomanImageForHeroSection}
              alt="hero woman model"
              className="heroWomanImage "
            />
          </div>

          {/* end hero right image--------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
