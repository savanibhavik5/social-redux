export const PostReducer = (state = [], action) => {
  if (action.type === "ALL_POST") {
    return {
      state: action.payload,
    };
  }
  return state;
};

export const CommentReducer = (state = [], action) => {
  if (action.type === "ALL_COMMENTS") {
    return {
      state: action.payload,
    };
  }
  return state;
};
