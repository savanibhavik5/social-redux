import React, { useEffect } from "react";
import Post from "../Pages/Post";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  postData,
  commentData,
  setPostWithComment,
} from "../Services/Actions/Action";

const PostComponent = () => {
  let dispatch = useDispatch();
  const posts = useSelector((state) => state?.PostReducer?.state);

  const comments = useSelector((state) => state?.CommentReducer?.state);

 

  useEffect(() => {
    axios.get("http://localhost:1234/posts").then((res) => {
      dispatch(postData(res?.data));
    });
    axios.get("http://localhost:1234/comments").then((res) => {
      dispatch(commentData(res?.data));
    });
  }, []);
  // console.log(
  //   comments?.map((comment) => 
  //      // comment?.id,
  //       comment?.post_id
  //        )
  // );
  return posts?.map((post) => {
    return (
      <Post
        key={post?.id}
        post={posts}
        // createdBy={post?.createdBy}
        // detail={post?.detail}
        // created_at={post?.created_at}
        // image={post?.image}
        // userdp={post?.userdp}
        // id={post?.id}
        // user_id={post?.user_id}
        // likes={post?.likes}
        comments={comments}
      />
    );
  });
};

export default PostComponent;
