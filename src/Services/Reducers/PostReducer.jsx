// import { POST_DATA } from "../Constants";

// const initialState = [];
// // postData: fetch("http://localhost:1234/comments")
// //   .then((res) => res.json())
// //   .then((serRes) => {
// //     // setComments(serRes);
// //   }),

// export default function PostReducer(state = initialState, action) {
//   switch (action.type) {
//     case POST_DATA:
//       return {
//         ...state,
//         postData: action.data,
//       };
//       break;
//     default:
//       return state;
//   }
// }
import React from "react";

const PostReducer = (state = [], action) => {
  if (action.type === "ALL_POST") {
    console.log(action.payload);
    state = action.payload;
  }
  return state;
};

export default PostReducer;
