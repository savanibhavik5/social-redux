import React, { Fragment } from "react";
import Post from "../Pages/Post";
import { useDispatch, useSelector } from "react-redux";
import ReelsComponent from "./ReelsComponent";
import NewPostComponent from "./NewPostComponent";

const PostComponent = () => {
  const posts = useSelector((state) => state?.PostReducer?.state);

  const comments = useSelector((state) => state?.CommentReducer?.state);

  return (
    <Fragment>
      {/* <ReelsComponent /> */}
      <NewPostComponent />
      {posts?.map((post) => {
        return <Post key={post?.id} posts={post} comments={comments} />;
      })}
    </Fragment>
  );
};

export default PostComponent;
