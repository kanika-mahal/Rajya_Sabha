import React from "react";
import "./Secondpage.css";

import { Link } from "react-router-dom";

function Secondpage() {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src={"./logo.jpg"} />
        </a>
        <a href="#" className="logo2">
          <img src={"./logo2.png"} />
        </a>

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </header>
      <div className="navbar">
        <ul>
          <li className="tags">HOME</li>
          <li className="tags">RAJYA SABHA</li>
          <li>
            <Link to="/dummy" className="tags">
              MEMBERS
            </Link>
          </li>
          <li>
            <Link to="/dummy" className="tags">
              COMMITTEES
            </Link>
          </li>

          <li>
            <Link to="/dummy" className="tags">
              PROCEDURE
            </Link>
          </li>
          <li>
            <Link to="/dummy" className="tags">
              SECRETARIAT
            </Link>
          </li>
          <li>
            <Link to="/dummy" className="tags">
              PUBLICATIONS
            </Link>
          </li>
        </ul>
      </div>
      <div className="cont">
        <div className="profile">
          <img src={"./chairman.jpg"} />
          <div className="name">M. Venkaiah Naidu</div>
          <div className="title">Chairman, Rajya Sabha</div>
        </div>
        <div className="sliderbox">
          <div id="slider">
            <img src={"./slider.jpg"} />
            <img src={"./back2.jpg"} />
          </div>
          <div className="indicators">
            <span id="btn1" className="active"></span>
            <span id="btn2"></span>
          </div>
        </div>

        <div className="profile">
          <img src={"./dc.jpg"} />
          <div className="name">Harivansh N Singh</div>
          <div className="title">Deputy Chairman, Rajya Sabha</div>
        </div>
      </div>
      {/* <div className="mainfooter">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Help</h4>
            </div>
            <div className="col">
              <h4>Feedabck</h4>
            </div>
            <div className="col">
              <h4>News Papers</h4>
            </div>
            <div className="col">
              <h4>Website Policies</h4>
            </div>
            <div className="col">
              <h4>Terms and Conditions</h4>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
            </div>
          </div>

          <div className="row">
            <h4 className="col-sm">
              &copy;{new Date().getFullYear()} Rajya Sabha | All rights resrved
              by the Team |Site Designed, Developed and Hosted by Team.
            </h4>
          </div>
        </div>
  </div>*/}
    </div>
  );
}

export default Secondpage;
