import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import ContactReducer from "./Services/Reducer/ContactReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    ContactReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;




