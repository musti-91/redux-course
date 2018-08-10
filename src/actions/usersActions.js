import Axios from "axios";

export const fetchUsersStart = dispatchEvent => {
  return dispatchEvent({ type: "FETCH_USERS_START" });
};
export const getUsers = dispatchEvent => {
  Axios.get("https://api.randomuser.me/?nat=us,gb&results=10")
    .then(response =>
      dispatchEvent({
        type: "RECEIVE_USERS",
        payload: response.data.results
      })
    )
    .catch(error => dispatchEvent({ type: "ERROR", payload: error }));
};

export const deleteUser = index => {
  return {
    type: "DELETE_USER",
    payload: index
  };
};
export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};
