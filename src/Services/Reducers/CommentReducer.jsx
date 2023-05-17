const commentReducer = (state = [], action) => {
  if (action.type === "ALL_COMMENTS") {
    console.log(action.payload);
    return {
      state: action.payload,
    };
  }
  return state;
};
