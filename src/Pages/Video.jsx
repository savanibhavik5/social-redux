import React from "react";

const Video = ({
  username,
  user_dp,
  video_title,
  description,
  video_url,
  video_likes,
  video_views,
}) => {
  return (
    <div className="row mt-3">
      <div className="col-md-12 p-2 shadow rounded ">
        <div className="d-flex">
          <img
            src={user_dp}
            className="rounded-circle mx-2"
            height={30}
            width={30}
            alt=" userDp"
          />
          <div>{username}</div>
        </div>
        <div className="ps-3">{description}</div>
        <div className="video-feed text-center p-3 ">
          <iframe
            className="rounded"
            width="100%"
            height="500"
            src={video_url}
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="d-flex justify-content-between btn-container video-text mt-2 mb-2">
          <div className="d-flex">
            <div className="p-2 ">
              <i className="fa-solid fa-thumbs-up ps-1 pe-1"></i>like
            </div>
            {/* <div className="p-2 ">
              <i className="fa-solid fa-comments ps-1 pe-1"></i>Comment
            </div> */}
            <div className=" p-2">
              <i className="fa-solid fa-share ps-1 pe-1"></i>Share
            </div>
          </div>
          <div className="d-flex ">
            <div className="p-2">{video_likes}-likes </div>
            {/* <div className="p-2">-comments </div> */}
            <div className="p-2">{video_views}-views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

//
//         {video.map((vinfo, index) => {
//           return (
//             <div
//               className="col-md-12  mt-3 mb-3 rounded rounded-3 shadow-lg"
//               key={index}
//             >
//               <div className="d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center">
//                   <img
//                     src={vinfo.dp}
//                     width="40px"
//                     height="40px"
//                     className=" rounded-circle ms-3"
//                     alt="Image"
//                   />
//                   <h5 className=" ps-3 pt-2">{vinfo.username}</h5>
//                   <Link className="ps-3 pt-1">Follow</Link>
//                 </div>
//                 <div className="m-3">
//                   <button
//                     className="btn btn-light"
//                     //   onClick={removePost.bind(this, postinfo.id)}
//                   >
//                     ×
//                   </button>
//                 </div>
//               </div>
//               <p className="h5 ms-3 me-3">{vinfo.title}</p>
//               <p className="ms-3 me-3">{vinfo.description}</p>
//               <div className="video-feed text-center ">
//                 <iframe
//                   width="100%"
//                   height="500"
//                   src={vinfo.url}
//                   frameBorder="0"
//                   // frameBorder="10"

//                   allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="d-flex justify-content-between btn-container video-text mt-2 mb-2">
//                 <div className="d-flex">
//                   <div className="p-2 ">
//                     <i className="fa-solid fa-thumbs-up ps-1 pe-1"></i>like
//                   </div>
//                   <div className="p-2 ">
//                     <i className="fa-solid fa-comments ps-1 pe-1"></i>Comment
//                   </div>
//                   <div className=" p-2">
//                     <i className="fa-solid fa-share ps-1 pe-1"></i>Share
//                   </div>
//                 </div>
//                 <div className="d-flex ">
//                   <div className="p-2">{vinfo.likes}-likes </div>
//                   <div className="p-2">{vinfo.comments}-comments </div>
//                   <div className="p-2">{vinfo.views}-views</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
