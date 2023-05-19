import React, { useEffect, useState } from "react";
import Comment from "../Pages/Comment";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { postData, commentData } from "../Services/Actions/Action";

const Post = ({ posts, comments }) => {
  const {
    createdBy,
    detail,
    created_at,
    image,
    userdp,
    id: postid,
    user_id,
    likes,
  } = posts;

  let [show, setShow] = useState(false);
  let dispatch = useDispatch();
  // console.log("112233", postid);

  let [comment, setComment] = useState("");
  let [liked, setLiked] = useState(false);
  let [currentId, setCurrentId] = useState(null);

  let currentUserId = localStorage.getItem("id");

  const likeHandle = (postid, likes) => {
    if (!postid) return;
    const likeIndex = likes?.findIndex((like) => like === currentUserId);
    const totallikes =
      likeIndex === -1
        ? [...likes, currentUserId]
        : likes?.filter((like) => like !== currentUserId) || setLiked(false);
    // setLiked(likeIndex === -1);
    fetch(`http://localhost:1234/posts/${postid}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify({ likes: totallikes }),
    })
      .then((res) => res.json())
      .then((serRes) => {
        dispatch(postData());
      });
  };

  const showhandle = () => {
    setShow(!show);
  };

  const addNewComment = (e) => {
    e.preventDefault();
    const request = currentId === null;
    axios
      .post("http://localhost:1234/comments", {
        id: uuidv4(),
        post_id: postid,
        comment_text: comment,
        user_id: localStorage.getItem("id"),
        comment_dp: localStorage.getItem("userdp"),
        comment_by: localStorage.getItem("firstname"),
      })
      .then((res) => {
        setComment("");
        setCurrentId(null);
        dispatch(commentData(res));
      });
  };

  const delcomment = (id) => {
    var url = `http://localhost:1234/comments/${id}`;
    var delmethod = {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    };
    axios.delete(url, delmethod).then((res) => {
      dispatch(commentData());
    });
  };

  const handleEdit = (id) => {};
  const filterComment = comments.filter((com) => com?.post_id === postid);

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
        <button
          className=" form-control post-button d-flex justify-content-center align-items-center m-2"
          onClick={likeHandle.bind(this, postid, likes)}
        >
          {!liked ? (
            <i className="fa-solid fa-thumbs-up "></i>
          ) : (
            <i className="fa-solid fa-thumbs-up text-primary "></i>
          )}

          <h6 className="pt-2 ps-2">{likes?.length}</h6>
        </button>

        <button
          className="form-control post-button post-button d-flex justify-content-center align-items-center m-2"
          onClick={showhandle}
        >
          <i className="fa-solid fa-comments"></i>
          <h6 className="pt-2 ps-2 ">{filterComment.length} Comments</h6>
        </button>
      </div>

      {show &&
        filterComment?.map((data, index) => {
          return (
            <Comment
              key={index}
              commentid={data?.id}
              post_id={data?.post_id}
              comment_text={data?.comment_text}
              comment_by={data?.comment_by}
              comment_dp={data?.comment_dp}
              del_comment={delcomment.bind(this, data?.id)}
              // edit_comment={""}
              // () => handleEdit(data)
            />
          );
        })}

      <div className="d-flex w-100 p-3">
        <img
          src={localStorage.getItem("userdp")}
          alt={`image of ${localStorage.getItem("firstname")}`}
          width="20px"
          height="20px"
          className="rounded-circle"
        />
        <textarea
          cols="30"
          className="form-control mx-1"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="d-flex align-items-end">
          <div className="d-flex align-items-end">
            <button
              disabled={comment == ""}
              className="btn btn-primary"
              onClick={addNewComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
