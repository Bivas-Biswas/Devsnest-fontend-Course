import { UPDATE_PLACE_DATA } from "../actiontypes";

const placeDataReducers = (state='', action) => {
    switch (action.type) {
        case UPDATE_PLACE_DATA:
            return action.payload
        default:
            return state
    }
}

export default placeDataReducers