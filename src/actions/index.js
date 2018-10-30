import { database } from "../config";

export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => console.log(error));
  };
}

export function startLoadingPost() {
  return dispatch => {
    return database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        console.log("snapshot :", snapshot);
        snapshot.forEach(child => {
          posts.push(child.val());
        });
        console.log("posts :", posts);
        dispatch(loadPosts(posts));
      })
      .catch(error => console.log("error ", error));
  };
}

export function startRemovePost(index, id) {
  console.log(index, id);
  return dispatch => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(id));
      })
      .catch(error => console.log("error ", error));
  };
}

export function startAddingComment(comment, postId) {
  return dispatch => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => console.log("error ", error));
  };
}
export function startLoadingComment(comment, postId) {
  return dispatch => {
    return database
      .ref(`comments`)
      .once("value")
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(child => {
          comments[child.key] = Object.values(child.val());
        });
        dispatch(loadComments(comments));
      })
      .catch(error => console.log("error ", error));
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts
  };
}
export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments
  };
}

export function startRemovingPost(index, id) {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  };
  /* this specifies the paths that we want to update to null
  (basically delete)
  we're navigating to the post with id we clicked remove on,
  as well as the comments belonging to that post, with
  that same id. */

  return dispatch => {
    return database
      .ref()
      .update(updates)
      .then(() => {
        dispatch(removePost(index));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
