import React, { Component } from "react";

import Title from "./Title";
import List from "./List";
import Photowall from "./Photowall";
import posts from "../data";

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <Photowall posts={posts} />
      </div>
    );
  }
}

export default Main;
