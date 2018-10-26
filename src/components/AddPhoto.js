import React, { Component } from "react";
import Title from "./Title";

export default class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements);
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    if (description && imageLink) {
      this.props.addPhoto({ imageLink, description });
    }
  }

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}
