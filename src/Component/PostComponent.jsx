import React, { useEffect } from "react";
import Post from "../Pages/Post";
import { useDispatch, useSelector } from "react-redux";

const PostComponent = () => {
  const posts = useSelector((state) => state?.PostReducer?.state);

  const comments = useSelector((state) => state?.CommentReducer?.state);

  return posts?.map((post) => {
    return <Post key={post?.id} posts={post} comments={comments} />;
  });
};

export default PostComponent;
