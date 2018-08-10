import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";

import todosReducer from "./reducers/todosReducer";
import usersReducer from "./reducers/usersReducer";

const middleware = applyMiddleware(promise(), thunk, createLogger());

export const store = createStore(
  combineReducers({ todos: todosReducer, users: usersReducer }),
  middleware
);
