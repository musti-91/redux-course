import React from "react";
import { Helmet } from "react-helmet";
import logo from "../logo.svg";
import { Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Helmet>
        <title>Simple Todo App </title>
        <meta
          name="Description"
          content="Simple Todo app for studying proposes."
        />
        <meta name="Keywords" content="Todo, React, Simple read, write, crud" />
      </Helmet>
      <Menu>
        <Menu.Item name="Home" active={true} to="/" as={NavLink}>
          Home
        </Menu.Item>

        <Menu.Item name="Todos" to="/todos" as={NavLink}>
          Todos
        </Menu.Item>
        <Menu.Item name="Users" to="/users" as={NavLink}>
          Users
        </Menu.Item>
      </Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default Header;
