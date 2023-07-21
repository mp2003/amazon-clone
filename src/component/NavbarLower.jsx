import React from "react";
import "./NavbarLower.css";
import { GiHamburgerMenu } from "react-icons/gi";
import image from "../asset/banner1.jpg";
const NavbarLower = () => {
  return (
    <div className="container">
      <div className="nav-left">
        <ul className="all">
          <li>
            <GiHamburgerMenu
              size={25}
              style={{ color: "white", position: "relative", top: "4" }}
            />
          </li>
          <li id="all">All</li>
        </ul>
        <ul className="content">
          <li>Amazon miniTV</li>
          <li>Sell</li>
          <li> Best Seller</li>
          <li>Today's Deals</li>
          <li>New Releases</li>
          <li>Customer Services</li>
          <li>
            <select>
              <option>Prime</option>
            </select>
          </li>
          <li>Electronics</li>
          <li></li>
        </ul>
      </div>
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
  );
};

export default NavbarLower;
