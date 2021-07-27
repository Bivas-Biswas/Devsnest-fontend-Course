import { createStore } from 'redux'
import { userFromReducer } from "./userFrom/userFromReducer";

const store = createStore(userFromReducer)

export default store