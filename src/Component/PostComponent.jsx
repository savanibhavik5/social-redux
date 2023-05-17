import React, { useEffect, useState } from "react";
import { Connect } from "react-redux";
import { postData } from "../Services/Actions/Action";
import Post from "../Pages/Post";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import postDatas from "../Services/Reducers/PostReducer";

const PostComponent = () => {
  let [posts, setPosts] = useState([]);
  let dispatch = useDispatch();
  // var postData = { type: "ALL_POST", posts: posts };
  const data = useSelector(state => console.log(state?.post))

  useEffect(() => {
    const fetchpost = () => {
      const response = axios.get("http://localhost:1234/posts");
      dispatch(postData(response.data));
    };
    fetchpost();
  }, []);


  // return posts?.map((post) => {
  //   return (
  //     <Post
  //       key={post?.id}
  //       createdBy={post?.createdBy}
  //       detail={post?.detail}
  //       created_at={post?.created_at}
  //       image={post?.image}
  //       userdp={post?.userdp}
  //       id={post?.id}
  //       user_id={post?.user_id}
  //       likes={post?.likes}
  //     />
  //   );
  // });
};

export default PostComponent;
