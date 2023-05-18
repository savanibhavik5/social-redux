import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { commentData } from "../Services/Actions/Action";
import { useDispatch } from "react-redux";

const Comment = ({ comment_text, comment_dp, comment_by, post_id }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(commentData(post_id));
  // }, []);
  console.log(post_id);
  return (
    <div className="">
      <div className="d-flex m-2">
        <img
          src={comment_dp}
          alt="image not found"
          width="20px"
          height="20px"
          className="rounded-circle m-1"
        />
        <div className="px-2">{comment_by}:-</div>

        <div className="d-inline-flex justify-content-between w-100 ">
          <div className="text-break">{comment_text}</div>
          <div className="d-flex ">
            <Link className="text-decoration-none text-primary mx-1 p-1 d-flex  text-end">
              Edit
            </Link>
            <Link className="text-decoration-none text-danger p-1 mx-1 d-flex outline-non text-end">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
