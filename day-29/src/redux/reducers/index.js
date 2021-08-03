import {combineReducers} from "redux";
import placeReducers from "./placeReducers";
import placeDataReducers from "./placeDataReducers";

const rootReducer = combineReducers({
    place: placeReducers,
    placeData: placeDataReducers
})

export default rootReducer