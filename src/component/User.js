import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SpringGrid } from "react-stonecutter";
import { addUser, deleteUser } from "../actions/usersActions";
import LodaerHOC from "../hoc/LoaderHOC";

// animation
const userAniamtionColoumns = {
  appear: "animated",
  appearActive: "fadeInDown",
  enter: "animated",
  enterActive: "bounceInDown",
  exit: "animated",
  exitActive: "slideOutRight"
};
class User extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      id: {
        value: Date.now()
      },
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      email: "email@me.com",
      phone: "2345678"
    };
    this.props.addUser(user);
  };
  mappedUsers = () =>
    this.props.users.users.map((user, index) => (
      <li key={index} className="col">
        <Link
          to={{
            pathname: `/users/${user.id.value}`,
            state: {
              user
            }
          }}
        >
          {user.name.first + " " + user.name.last}
        </Link>
        <button onClick={() => this.props.deleteUser(index)}>Delete</button>
      </li>
    ));
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <hr />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
            placeholder="first name"
          />
          <input
            type="text"
            onChange={e => this.setState({ lastName: e.target.value })}
            value={this.state.lastName}
            placeholder="last name"
          />
          <button onClick={this.onSubmit}>Add User</button>
        </form>
        <SpringGrid
          component="ul"
          columns={1}
          columnWidth={100}
          gutterWidth={10}
          gutterHeight={10}
          itemHeight={50}
          springConfig={{ stiffness: 100, damping: 50 }}
        >
          {this.mappedUsers()}
        </SpringGrid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    addUser(user) {
      dispatchEvent(addUser(user));
    },
    deleteUser(index) {
      dispatchEvent(deleteUser(index));
    }
  };
};
export default connect(
  state => {
    return { users: state.users };
  },
  mapDispatchToProps
)(LodaerHOC(User));
