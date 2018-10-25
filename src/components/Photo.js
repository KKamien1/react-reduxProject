import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    const post = this.props.post;
    console.log(post);

    return <li key={post.id}>{post.description} </li>;
  }
}
