import React, { useState, useEffect } from "react";
import Video from "../Pages/Video";

const VideoComponent = () => {
  let [videoes, setVideoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/video")
      .then((res) => res.json())
      .then((data) => {
        setVideoes(data);
          });
  }, []);
  
  return videoes.map((video) => {
    return (
      <Video
        key={video?.id}
        username={video?.username}
        user_dp={video?.dp}
        video_title={video?.title}
        description={video?.description}
        video_url={video?.url}
        video_likes={video?.likes}
        video_views={video?.views}
      />
    );
  });
};

export default VideoComponent;
// username,user_dp,video_title,description,video_url,video_likes,video_views
