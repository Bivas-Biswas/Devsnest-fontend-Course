import { UPDATE_PLACE } from "../actiontypes";

const placeReducers = (state = "", aciton) => {
    switch (aciton.type) {
        case UPDATE_PLACE:
            return aciton.payload
        default:
            return state
    }
}

export default placeReducers