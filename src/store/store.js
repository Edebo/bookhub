import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(auth, composeEnhancers(applyMiddleware(thunk)));

export default store;
