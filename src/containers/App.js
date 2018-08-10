import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from "../component/Todo";
import Header from "../component/Header";
import User from "../component/User";

import { getUsers, fetchUsersStart } from "../actions/usersActions";
import TodoElement from "../component/TodoElement";
import UserInfo from "../component/UserInfo";
import { getTodos, fetchTodos } from "../actions/todoActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsersStart();
    this.props.fetchTodos();
    this.props.getUsers();
    this.props.getTodos();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/todos" component={Todo} />
          <Route exact path="/todos/:todoId" component={TodoElement} />
          <Route exact path="/users" component={User} />
          <Route exact path="/users/:userId" component={UserInfo} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      fetchUsersStart: () => dispatch(fetchUsersStart),
      fetchTodos: () => dispatch(fetchTodos),
      getUsers: () => dispatch(getUsers),
      getTodos: () => dispatch(getTodos)
    };
  }
)(App);
