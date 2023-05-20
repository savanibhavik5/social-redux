import axios from "axios";
export const postData = (data) => {
  return (dispatch) => {
    {
      axios.get("http://localhost:1234/posts").then((res) => {
        dispatch({
          type: "ALL_POST",
          payload: res?.data,
        });
      });
    }
  };
};

export const commentData = () => {
  return (dispatch) => {
    axios.get(`http://localhost:1234/comments`).then((res) => {

      dispatch({
        type: "ALL_COMMENTS",
        payload: res.data,
      });
    });
  };
};

export const setPostWithComment = (post_id, comments) => {
 
  return {
    type: "SET_POST_WITH_COMMENT",
    payload: {
      comments,
      post_id,
    },
  };
};
