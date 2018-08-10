import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SpringGrid } from "react-stonecutter";

import { addTodo, deleteTodo, checkTodo } from "../actions/todoActions";
import LoaderHOC from "../hoc/LoaderHOC";

import { tempTodo } from "./tempData";
class Todo extends Component {
  state = {
    value: "",
    checked: false
  };

  onSubmit = e => {
    e.preventDefault();
    tempTodo["name"] = this.state.value;
    tempTodo["id"] = Math.floor(Math.random() * 100) - 75;
    this.props.addTodo(tempTodo);
    this.setState({ value: "" });
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  onCheckChange = () => {
    const currentState = this.state.checked;
    this.setState({ checked: !currentState });
    this.props.checkTodo(this.state.checked);
  };
  mappedTodos = () =>
    this.props.todos.map((todo, index) => (
      <li
        key={index}
        className="col"
        style={
          this.state.checked ? { textAlign: "center" } : { textAlign: "left" }
        }
      >
        <Link to={{ pathname: `/todos/${todo.id}`, state: { todo } }}>
          {todo.name}
        </Link>
        <button onClick={() => this.props.deleteTodo(index)}>delete</button>
        <button onClick={this.onCheckChange}>Check</button>
      </li>
    ));

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.value}
          />
          <button onClick={this.onSubmit}>ADD Todo</button>
        </form>
        <hr />
        <SpringGrid
          component="ul"
          columns={1}
          columnWidth={100}
          gutterWidth={10}
          gutterHeight={50}
          itemHeight={50}
          springConfig={{ stiffness: 100, damping: 50 }}
        >
          {this.mappedTodos()}
        </SpringGrid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    addTodo: todo => dispatchEvent(addTodo(todo)),
    deleteTodo: index => dispatchEvent(deleteTodo(index)),
    checkTodo: checked => dispatchEvent(checkTodo(checked))
  };
};

export default connect(
  state => {
    return { todos: state.todos };
  },
  mapDispatchToProps
)(LoaderHOC(Todo));
