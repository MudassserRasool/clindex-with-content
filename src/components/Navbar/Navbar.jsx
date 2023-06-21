import React from "react";
// import Style from "./Navbar.module.css";
// import './Navbar.module.css'
import "./Navbar.css";
import { PlexarLogo, UserAccountIcon } from "../../assets";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="">
            <img src={PlexarLogo} alt="Plexar Logo" className="plexarLogo" />
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navLinksArea navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <p className="SignUpText my-auto">Sign Up</p>
              <img src={UserAccountIcon} alt="" className="userAccountIcon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
