import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];

//  Middleware to use when in development mode (redux dev tool)
const devCompose = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Middleware to apply use when in production mode (redux dev tool causing issues)
const prodCompose = compose(applyMiddleware(...middleware));

// Check the node environment status and apply compose accordingly
const useCompose =
  process.env.NODE_ENV === "production" ? prodCompose : devCompose;

// Store instance
const store = createStore(rootReducer, useCompose);

export default store;
