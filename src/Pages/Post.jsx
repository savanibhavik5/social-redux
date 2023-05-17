import React from "react";
import { useEffect, useState } from "react";
import Comment from "../Pages/Comment";
const Post = ({
  createdBy,
  detail,
  created_at,
  image,
  userdp,
  id,
  user_id,
  likes,
}) => {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/comments")
      .then((res) => res.json())
      .then((serRes) => {
        setComments(serRes);
      });
  }, []);

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
      {comments
        .filter((comment) => comment.post_id === id)
        .map((comment) => {
          return (
            <Comment
              key={comment?.id}
              id={comment?.id}
              post_id={comment?.id}
              comment_text={comment?.comment_text}
              comment_by={comment?.comment_by}
              comment_dp={comment?.comment_dp}
              comment_length={comment?.comment_length}
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
