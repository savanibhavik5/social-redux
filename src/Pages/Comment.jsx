import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comment = ({
  comment_text,
  comment_dp,
  comment_by,
  post_id,
  del_comment,
  edit_comment,
  commentid,
  currentId,
}) => {
  // let [show,setShow]=useState(false)

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
              {edit_comment ? (
                <button
                  // disabled={comment == ""}
                  className="btn p-0"
                  // onClick={handleSubmit}
                >
                  Update Comment
                </button>
              ) : (
                <button
                  // disabled={comment == ""}
                  className="btn p-0"
                  // onClick={handleSubmit}
                >
                  Edit
                </button>
              )}
            </Link>
            <Link className="text-decoration-none text-danger p-1 mx-1 d-flex outline-non text-end">
              <button className="btn p-0" onClick={del_comment}>
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
