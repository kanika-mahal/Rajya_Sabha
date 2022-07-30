import React from "react";


const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="list">
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Newspaper</a>
          </li>
          <li>
            <a href="#">Website Policies</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <p className="copyright">
          &copy;{new Date().getFullYear()} Rajya Sabha | All rights resrved by
          the Team |Site Designed, Developed and Hosted by Team.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
