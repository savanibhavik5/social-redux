import React, { useEffect, useState } from "react";

import Post from "../Pages/Post";
// import { useDispatch, useSelector } from "react-redux";

const PostComponent = () => {
  let [posts, setPosts] = useState([]);
  // let dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:1234/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts.map((post) => {
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
