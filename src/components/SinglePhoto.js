import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class SinglePhoto extends Component {
  render() {
    const { match, posts } = this.props;
    const id = match.params.id;
    const post = posts.find(post => post.id == id);
    const comments = this.props.comments[match.params.id] || [];
    console.log("params from SinglePhoto :", this.props);
    console.log("post", post, "id", id);
    return (
      <div className="single-photo">
        <Photo post={post} {...this.props} />
        <Comments
          addComment={this.props.startAddingComment}
          comments={comments}
          id={id}
        />
      </div>
    );
  }
}

export default SinglePhoto;
