const PostReducer = (state = [], action) => {
  if (action.type === "ALL_POST") {
   
    return {
      state: action.payload,
    };
  }
  return state;
};

export default PostReducer;
