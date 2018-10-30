import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    console.log("Photo", this.props);
    const post = this.props.post;

    return (
      <figure className="figure">
        <figcaption>
          <Link to={`/single/${post.id}`}>
            <img
              src={post.imageLink}
              alt="{post.description}"
              className="photo"
            />
            <p>{post.description}</p>
          </Link>
        </figcaption>
        <div className="button-container">
          <button
            onClick={() => {
              this.props.startRemovingPost(this.props.index, post.id);
              this.props.history.push("/");
            }}
            className="remove-button"
          >
            Remove
          </button>
          <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"> </div>
              {this.props.comments[post.id]
                ? this.props.comments[post.id].length
                : 0}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Photo);
