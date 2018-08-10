const initialState = {
  fecthed: false,
  fetching: false,
  added: false,
  error: null,
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      state = { ...state, fetching: true };
      break;
    case "RECEIVE_USERS":
      state = {
        ...state,
        fetched: true,
        fetching: false,
        users: action.payload
      };
      break;
    case "DELETE_USER":
      state = { ...state };
      state.users.splice(action.payload, 1);
      break;
    case "ADD_USER":
      state = { ...state, added: true };
      state.users.unshift(action.payload);
      break;
    case "EDIT_USER":
      state = { ...state };
      const indexElement = state.users.indexOf(action.payload.id);
      state.users.unshift(indexElement(action.payload.user));
      break;
    case "ERROR":
      state = { ...state, error: action.payload, fetching: false };
      break;
    default:
      return state;
  }
  return state;
};
export default usersReducer;
