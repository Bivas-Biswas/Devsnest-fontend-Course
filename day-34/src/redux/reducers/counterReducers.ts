interface IActionType {
    type: string,
    payload: number
}

const counterReducers = (state: number = 0, action: IActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload
        default:
            return state
    }
}

export default counterReducers