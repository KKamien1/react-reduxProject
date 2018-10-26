import React, { Component } from "react";

import Title from "./Title";
import Photowall from "./Photowall";
import posts from "../data";
import style from "../style.css";

class Main extends Component {
  constructor() {
    super();
    this.state = { posts };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log(postRemoved);
    this.setState(state => ({
      posts: state.posts.filter(post => post.id !== postRemoved.id)
    }));
  }

  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

export default Main;
