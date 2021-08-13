import { IUser } from "../actions/userActions";
import { UPDATE_USER } from "../actionsTypes/actionsTypes";

const initialUser = {
    username:"",
    profilePicture:""
}

export interface IActionType {
    type: typeof UPDATE_USER,
    payload: IUser
}


const userReducer = (state: IUser = initialUser, action:any) => {
  switch (action.type) {
      case UPDATE_USER:
          return action.payload
      default:
          return state
  }
}

export default userReducer