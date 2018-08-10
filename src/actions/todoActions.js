import Axios from "axios";

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const deleteTodo = index => {
  return {
    type: "DELETE_TODO",
    payload: index
  };
};

export const fetchTodos = dispatch => {
  return dispatch({ type: "FETCH_TODOS" });
};
export const getTodos = dispatchEvent => {
  Axios.get("https://api.punkapi.com/v2/beers")
    .then(response =>
      dispatchEvent({
        type: "RECEIVED_TODOS",
        payload: response.data
      })
    )
    .catch(error =>
      dispatchEvent({
        type: "ERROR",
        payload: error
      })
    );
};

export const checkTodo = checked => {
  return {
    type: "CHECK_TODO",
    payload: checked
  };
};
