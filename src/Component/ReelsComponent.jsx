import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const ReelsComponent = () => {
  let [reels, setReels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1234/reels")
      .then((res) => res.json())
      .then((serRes) => {
        setReels(serRes);
        console.log(serRes);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-12 reels border shadow bg-white rounded p-2">
        <div className="reels_main_div">
          {reels.map((reelinfo, index) => {
            return (
              <div className="reel" key={index}>
                <ReactPlayer
                  url={reelinfo.url}
                  className="reel"
                  controls={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReelsComponent;
