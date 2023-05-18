import React, { useEffect } from "react";
import axios from "axios";
import { commentData } from "../Services/Actions/Action";
import Comment from "../Pages/Comment";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ post, comments }) => {
  const { createdBy, detail, created_at, image, userdp, id, user_id, likes } =
    post;
  //

  return (
    <div className="rounded row rounded-3 shadow mt-3 p-2 ">
      <div className="d-flex justify-content-between p-2">
        <div className="d-flex ">
          <div className="">
            <img
              src={userdp}
              alt="image Not Found"
              width="30px"
              height="30px"
              className="rounded-circle"
            />
            <span className="ps-3">{createdBy}</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className=" ">
            <button className="btn btn-light px-2 py-1 border">×</button>
          </div>
        </div>
      </div>
      <div className="m-2">{detail}</div>
      <div className="text-center p-3 ">
        <img
          src={image}
          className="post_img rounded"
          style={{ width: "85%" }}
          alt="error in image loading"
        />
      </div>
      <div className="d-flex justify-content-around btn-container mt-3">
        <button className=" form-control post-button d-flex justify-content-center align-items-center m-2">
          <i className="fa-solid fa-thumbs-up"></i>
          <h6 className="pt-2 ps-2 ">{likes?.length}-Likes</h6>
        </button>
        <button className="form-control post-button post-button d-flex justify-content-center align-items-center m-2">
          <i className="fa-solid fa-comments"></i>
          <h6 className="pt-2 ps-2 ">Comment</h6>
        </button>
      </div>
      {/* .filter((comment) => comment.post_id === id) */}
      console.log(comments)
      {comments?.map((val) => {
        const { post_id, comment_by, comment_dp, comment_text } = val;
        console.log(val);
        return (
          <Comment
            key={val?.id}
            id={val?.id}
            post_id={val?.post_id}
            comment_text={val?.comment_text}
            comment_by={val?.comment_by}
            comment_dp={val?.comment_dp}
            comment_length={val?.comment_length}
            // del_comment={delcomment.bind(this, comment?.id)}
            // edit_comment={() => handleEdit(comment)}
          />
        );
      })}
      <div className="d-flex w-100 p-3">
        <img
          src={localStorage.getItem("userdp")}
          alt={`image of${localStorage.getItem("firstname")}`}
          width="20px"
          height="20px"
          className="rounded-circle"
        />
        <textarea cols="30" className="form-control mx-1"></textarea>
        <div className="d-flex align-items-end"></div>
      </div>
    </div>
  );
};

export default Post;
