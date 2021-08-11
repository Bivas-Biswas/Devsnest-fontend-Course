import {DECREMENT, INCREMENT} from "../actionsTypes";

const Increment = (num: number) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

const Decrement = (num: number) => {
    return {
        type: DECREMENT,
        payload: num
    }
}

export {Increment, Decrement}