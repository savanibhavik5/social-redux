const CommentReducer = (state = [], action) => {
  if (action.type === "ALL_COMMENTS") {
    return {
      state: action.payload,
    };
  }
  return state;
};

export default CommentReducer;
