import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import SinglePhoto from "./SinglePhoto";

import * as actions from "../actions";

import style from "../style.css";

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={params => <SinglePhoto {...this.props} {...params} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
