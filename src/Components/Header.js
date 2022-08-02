import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
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
    </div>
  );
};
export default Header;
