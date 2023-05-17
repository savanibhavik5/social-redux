import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row text-white nav-position bg-primary">
        <div className="col-md-3 d-flex align-items-center">
          <h1> LOGO </h1>
        </div>
        <div className="col-md-6 ">
          <ul className="d-flex h-100 justify-content-around align-items-center ">
            <li>
              <i className="fa fa-home text-white"></i>
            </li>
            <li>
              <i className="fa-solid fa-film"></i>
            </li>
            <li>
              <i className="fa-solid fa-video"></i>
            </li>
            <li>
              <i className="fa fa-user "></i>
            </li>
            <li>
              <i className="fa-solid fa-gears"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="h-100 d-flex align-items-center justify-content-end">
            <h5> name-logout </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
