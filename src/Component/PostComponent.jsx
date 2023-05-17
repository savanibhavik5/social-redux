import React, { useEffect } from "react";
import Post from "../Pages/Post";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { postData } from "../Services/Actions/Action";

const PostComponent = () => {
  let dispatch = useDispatch();
  const posts = useSelector((state) => state?.PostReducer?.state);

  useEffect(() => {
    axios.get("http://localhost:1234/posts").then((res) => {
      dispatch(postData(res?.data));
    });
  }, []);

  return posts?.map((post) => {
  
    return (
      <Post
        key={post?.id}
        createdBy={post?.createdBy}
        detail={post?.detail}
        created_at={post?.created_at}
        image={post?.image}
        userdp={post?.userdp}
        id={post?.id}
        user_id={post?.user_id}
        likes={post?.likes}
      />
    );
  });
};

export default PostComponent;
