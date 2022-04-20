import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import burgerReducer from "./redux/reducer/burgerReducer";
import orderReducer from "./redux/reducer/orderReducer";
import authReducer from "./redux/reducer/authReducer";

const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      // console.log('Logger middleware: dispatchin', action)
      // console.log('Logger middleware: state BEFORE', store.getState())
      const result = next(action);
      // console.log('Logger middleware: state AFTER', store.getState())
      return result;
    };
  };
};

const middlewares = [loggerMiddleware, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  authReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
