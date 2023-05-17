
const PostReducer = (state = [], action) => {
  if (action.type === "ALL_POST") {
    // console.log(action.payload)
    return {
      state: action.payload
    }
  }
    return state
  
};

export default PostReducer;
