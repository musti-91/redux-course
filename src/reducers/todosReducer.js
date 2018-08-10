const todos = [];

const todosReducer = (state = todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = [...state];
      state.unshift(action.payload);
      break;
    case "CHECK_TODO":
      state = [...state];
      break;
    case "DELETE_TODO":
      state = [...state];
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
      break;
    case "FETCH_TODOS":
      state = [...state];
      break;
    case "RECEIVED_TODOS":
      state = [...action.payload];
      break;
    case "ERROR":
      state = [...state];
      break;
    default:
      return state;
  }
  return state;
};

export default todosReducer;
