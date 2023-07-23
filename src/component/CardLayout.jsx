import React from "react";
import "./CardLayout.css";
import { NavLink } from "react-router-dom";
import imagePaths from "./ImageLoader.js";
const CardLayout = () => {
  return (
    <div className="card-container">
      <div className="Layout">
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
      
            </div>
          <NavLink to="#" className="hyperlink">
                See more
              </NavLink></div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 60% off | Styles for men</span>
            </h2>
            <img src={imagePaths.cloths} alt="" />
            <NavLink to="#" className="hyperlink">
              See all offers
            </NavLink>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="inner-box">
            <h2>
              <span className="headline">Up to 70% off | Clearance store</span>
            </h2>
            <div className="inner-box image">
              <img src={imagePaths.box1} alt="box-image" />
              <NavLink to="#" className="hyperlink">
                See more
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
