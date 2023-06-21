import React from 'react';
import './ContactUs.css'
import {MarkitingAnimatedPcImage} from '..//../assets/index'

const ContactUs = () => {
  return (
    <div>
        <div className="coustomContactUsBg">
            <div className="container">
                <div className="d-flex align-items-center">

                    {/* start left side-------------------------------- */}
                    <div className="col-5">
                        <img src={MarkitingAnimatedPcImage} alt="file not loaded" className='markitingImageAligenment'/>
                    </div>
                    {/* end left side-------------------------------- */}
                    {/* start right side-------------------------------- */}
                    <div className="col-5 ms-auto">
                        <h1 className='contactUsHeading'>Get Seen on Expert with Free Advertising</h1>
                        <p className="contactUsPara">Expand your business instantly with free advertising on Expert. Gain visibility on a huge platform where customers can find and book your services directly. Increase your reach, attract more customers, and boost your bookings.</p>
                        <div className="contactUsButtonBox">
                            <p className="contactUsButtonText">Contact Us</p>
                        </div>
                    </div>
                    {/* end right side-------------------------------- */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs