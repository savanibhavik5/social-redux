import React from "react";
import { Link, Routes, Route } from "react-router-dom";
// import TopNavBar from "../Pages/TopNavBar";
import NewPost from "../Component/NewPostComponent";
import LeftNavComponent from "../Component/LeftNavComponent";
import ReelsComponent from "../Component/ReelsComponent";
import PostComponent from "../Component/PostComponent";
import Video from "../Pages/Video";
import RightNav from "../Pages/RightNav";
import VideoComponent from "../Component/VideoComponent";

const TopNavBar = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
    window.location.href = "/login";
  };
  return (
    <div className="container-fluid">
      <div className="row text-white nav-position bg-primary">
        <div className="col-md-3 d-flex align-items-center">
          <h1> LOGO </h1>
        </div>
        <div className="col-md-6 ">
          <ul className="d-flex h-100 justify-content-around align-items-center ">
            <li>
              <Link to="/">
                <i className="fa fa-home text-white"></i>
              </Link>
            </li>

            <li>
              <Link to="/video">
                <i className="fa-solid fa-film text-white"></i>
              </Link>
            </li>

            {/* <li>
              <Link to="/user">
                <i className="fa fa-user text-white"></i>
              </Link>
            </li> */}
            <li>
              <Link to="/setting">
                <i className="fa-solid fa-gears text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="h-100 d-flex align-items-center justify-content-end">
            <h5 onClick={logOut}>{localStorage.getItem("firstname")}-logout</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
