import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photowall extends Component {
  render() {
    console.log("Photowall", this.props);

    return (
      <div>
        <Link to="/addphoto" className="addIcon" />
        <div className="photoGrid">
          {this.props.posts.sort((x, y) => y.id - x.id).map((post, index) => (
            <Photo key={index} {...this.props} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Photowall;
