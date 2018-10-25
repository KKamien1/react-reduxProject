import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
}

export default List;
