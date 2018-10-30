//import data from "../data";

export const postsReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter(post => post.id !== action.index);
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POSTS":
      return [...action.posts];
    default:
      return state;
  }
};

export const commentsReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
};

export default postsReducer;
