import React, { Component } from "react";

class TodoElement extends Component {
  render() {
    const {
      match: { params }
    } = this.props;
    const { todo } = this.props.location.state;
    return (
      <div className="todo" style={{ backgroundImage: todo.image_url }}>
        <h1>
          {params.todoId}-{todo.name}
        </h1>
        <div>
          <h2>{todo.tagline}</h2>
          <h2>{todo.firstbrewed}</h2>
          <span>{todo.description}</span>
          <span>{todo.brewers_tips}</span>
          <img src={todo.image_url} alt={todo.name} />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ABV</th>
              <th>IBU</th>
              <th>fg</th>
              <th>og</th>
              <th>EBC</th>
              <th>SRM</th>
              <th>PH</th>
              <th>attenuation_level</th>
              <th>Food pairing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todo.abv}</td>
              <td>{todo.ibu}</td>
              <td>{todo.target_fg}</td>
              <td>{todo.target_og}</td>
              <td>{todo.ebc}</td>
              <td>{todo.srm}</td>
              <td>{todo.ph}</td>
              <td>{todo.attenuation_level}</td>
              <td>{todo.food_pairing}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoElement;
