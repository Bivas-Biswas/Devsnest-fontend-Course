import { combineReducers } from "redux";
import userReducer from "./userReducers";

const rootReducers = combineReducers({
    user: userReducer,
})

export default rootReducers