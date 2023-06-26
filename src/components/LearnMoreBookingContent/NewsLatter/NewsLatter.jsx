import React from "react";
import "./NewsLatter.css";
import { NewslatterSendButtonIcon, WomanImageForHeroSection } from "../../../assets/index";

const NewsLatter = () => {
  return (
    <div className="testimonialContainer">
    

      <div className="container px-2 px-md-0">
           <h1 className="growBusinessHeading   text-md-center mx-4 mx-md-0">
           Powerful Customer Management
      </h1>
      <p className="growBusinessPara  px-2 px-md-0">
      Enhance customer loyalty using comprehensive customer management software integrated with Calendex POS system.
      </p>

      {/* start newslatter box-------------------------------------- d-flex align-items-center */}
      <div className="d-grid align-items-center newsLatterBox container rounded rounded-md">
        <div className="d-md-flex align-items-center justify-content-center pt-4 ">
            <h1 className="col-md-6 getInTouchText">Get in Touch to Ignite <br />Your Business Success!</h1>
            <input type="text" placeholder="Drop your email here…" className="col-md-5 newsLatterCoustomInput ps-4" />
            <div className="sendNewsLatterButtonBox ">
                <div className="d-flex align-items-center gap-3">
                <img src={NewslatterSendButtonIcon} alt="icon not loading" width={11.76} height={11.72} className="sendButtonIcon"/>
                    <p className="sendNewsLatterButtonText">Send</p>
                </div>
            </div>
        </div>
      </div>
      {/* end newslatter box-------------------------------------- */}
      </div>
   
    </div>
  );
};

export default NewsLatter;
