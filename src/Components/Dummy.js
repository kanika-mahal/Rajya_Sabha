import React from "react";
import "./Dummy.css";

export const Dummy = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <p>Website is Under Maintainance</p>
          <h1>We're Launching Soon</h1>
          <div className="launchtime">
            <div>
              <p>00</p>
              <span>Days</span>
            </div>
            <div>
              <p>00</p>
              <span>Hours</span>
            </div>
            <div>
              <p>00</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>00</p>
              <span>Seconds</span>
            </div>
          </div>
          <button type="button">Learn More</button>
        </div>
        <img src={"rocket.png"} className="rocket" />
      </div>
    </div>
  );
};
export default Dummy;
