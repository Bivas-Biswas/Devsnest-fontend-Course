import { ADD_ITEM, DELETE_ITEM, LOAD_TODOS } from "./todoActionTypes";

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case DELETE_ITEM:
            return state.filter((item, index) => index !== action.payload)
        case LOAD_TODOS:
            return action.payload.slice(0,5)

        default:
            return state
    }
}

export default todoReducer