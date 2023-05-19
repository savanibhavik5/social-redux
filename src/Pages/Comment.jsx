import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Comment = ({
  comment_text,
  comment_dp,
  comment_by,
  post_id,
  del_comment,
  // edit_comment,
  commentid,
  currentId,
}) => {
  let [comment, setComment] = useState("");
  const [mute, setMute] = useState(false);

  const edit_comment = () => {
    setComment(comment_text);
    setMute(!mute);
  };

  const save_comment = () => {
    setMute(!mute);
    axios.patch(`http://localhost:1234/comments/${commentid}`, {
      comment_text: comment,
    });
  };

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
          {mute === true ? (
            <textarea
              type="text"
              className="form-control w-50"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          ) : (
            <div>{comment_text}</div>
          )}

          <div className="d-flex  align-items-center">
            <Link className="text-decoration-none  ">
              {mute === true ? (
                <button className="btn p-0" onClick={edit_comment}>
                  Save Comment
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={save_comment.bind(this, commentid)}
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
