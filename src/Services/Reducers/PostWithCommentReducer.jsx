const initialState = {
  postReducer: [],
};

const PostWithCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST_WITH_COMMENT":
      const { post_id, comments } = action.payload;
      const postIndex = state.postReducer.findIndex(
        (post) => post.id === post_id
      );

      if (postIndex !== -1) {
        const newPosts = [...state.postReducer];
        newPosts[postIndex] = {
          ...newPosts[postIndex],
          comments,
        };
        console.log(newPosts);

        return {
          ...state,
          postReducer: newPosts,
        };
      }
      return state;

    default:
      return state;
  }
};

export default PostWithCommentReducer;
