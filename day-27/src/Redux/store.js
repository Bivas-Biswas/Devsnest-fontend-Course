import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(rootReducer ,applyMiddleware(thunk,logger))

export default store