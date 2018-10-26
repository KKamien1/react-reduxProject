import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Photo extends Component {
  render() {
    const post = this.props.post;
    console.log(post);

    return (
      <figure className="figure">
        <figcaption>
          <img
            src={post.imageLink}
            alt="{post.description}"
            className="photo"
          />
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            onClick={() => this.props.onRemovePhoto(post)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};
