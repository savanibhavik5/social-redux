export const postData = (data) => {
  return {
    type: "ALL_POST",
    payload: data,
  };
};

export const commentData = (data) => {
  return {
    type: "ALL_COMMENTS",
    payload: data,
  };
};

export const setPostWithComment = (post_id, comments) => {
  // console.log("123", comments);
  return {
    type: "SET_POST_WITH_COMMENT",
    payload: {
      comments,
      post_id,
    },
  };
};
