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
